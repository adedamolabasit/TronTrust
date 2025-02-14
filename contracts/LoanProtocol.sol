// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract LendVault {
    struct VaultInfo {
        uint256 managedAssets;
        uint256 vaultSubId;
        address asset;
    }

    struct BorrowerInfo {
        uint256 collateralAmount;
        uint256 collateralPriceAtLiquidation;
        uint256 subId;
        address asset;
        uint256 loanAmount;
        uint256 interestRate;
        uint256 maturityDate;
    }

    struct LoanInfo {
        bool hasLoan;
        uint256 collateralAmount;
        uint256 loanAmount;
        uint256 interestRate;
        uint256 collateralPriceAtLiquidation;
        uint256 maturityDate;
    }

    struct InterestInfo {
        uint256 interestAmount;
        uint256 paidDate;
    }

    uint256 public totalAssets;
    uint256 public totalDebts;
    uint256 public collateralBalance;
    uint256 public poolInterest;
    uint256 public totalBorrowers;
    uint256 public totalShareholders;

    mapping(address => VaultInfo) public vaultInfo;
    mapping(address => uint256) public totalSupply;
    mapping(address => string) public name;
    mapping(address => string) public symbol;
    mapping(address => uint8) public decimals;
    mapping(address => BorrowerInfo) public borrowerInfoMap;
    mapping(address => InterestInfo) public interestInfoMap;

    event BorrowLog(
        address indexed recipient,
        uint256 collateralAmount,
        uint256 collateralPriceAtLiquidation,
        uint256 loanAmount,
        uint256 interestRate,
        uint256 maturityDate,
        uint256 subId
    );

    event LoanReturned(
        address indexed recipient,
        uint256 returnedAmount,
        uint256 interestPaid,
        uint256 timestamp
    );

    event Deposit(
        address indexed caller,
        address indexed receiver,
        address underlyingAsset,
        uint256 vaultSubId,
        uint256 depositedAmount,
        uint256 mintedShares
    );

    event Withdraw(
        address indexed caller,
        address indexed receiver,
        address underlyingAsset,
        uint256 vaultSubId,
        uint256 withdrawnAmount,
        uint256 burnedShares
    );

    function lockAndBorrow(
        address recipient,
        uint256 interestRate,
        uint256 loanAmount,
        uint256 maturityDate,
        uint256 collateralPriceAtLiquidation
    ) external payable {
        require(msg.value > 0, "Amount must be greater than zero");

        BorrowerInfo storage existingLoan = borrowerInfoMap[recipient];
        require(existingLoan.collateralAmount == 0, "Active loan exists");

        collateralBalance += msg.value;

        BorrowerInfo memory borrowerInfo = BorrowerInfo({
            collateralAmount: msg.value,
            collateralPriceAtLiquidation: collateralPriceAtLiquidation,
            subId: 0, 
            asset: address(0),
            loanAmount: loanAmount,
            interestRate: interestRate,
            maturityDate: maturityDate
        });

        borrowerInfoMap[recipient] = borrowerInfo;
        totalDebts += loanAmount;
        totalBorrowers += 1;

        emit BorrowLog(
            recipient,
            borrowerInfo.collateralAmount,
            borrowerInfo.collateralPriceAtLiquidation,
            borrowerInfo.loanAmount,
            borrowerInfo.interestRate,
            borrowerInfo.maturityDate,
            borrowerInfo.subId
        );
    }

    function returnLoan(address recipient, uint256 subId, uint256 interestRate) external payable {
        require(subId == 0, "Incorrect Sub Id");

        BorrowerInfo storage borrowerInfo = borrowerInfoMap[recipient];
        require(borrowerInfo.collateralAmount > 0, "No active loan");
        require(msg.value == borrowerInfo.loanAmount, "Incorrect amount returned");

        uint256 interest = (borrowerInfo.collateralAmount * interestRate) / 100;
        poolInterest += interest;
        collateralBalance -= borrowerInfo.collateralAmount;
        totalBorrowers -= 1;

        uint256 amountToTransfer = borrowerInfo.collateralAmount - interest;
        delete borrowerInfoMap[recipient];
        totalDebts -= msg.value;

        payable(recipient).transfer(amountToTransfer);

        emit LoanReturned(recipient, msg.value, interest, block.timestamp);
    }

    function getLoanInfo(address borrower) external view returns (LoanInfo memory) {
        BorrowerInfo storage borrowerInfo = borrowerInfoMap[borrower];
        return LoanInfo({
            hasLoan: borrowerInfo.collateralAmount > 0,
            collateralAmount: borrowerInfo.collateralAmount,
            loanAmount: borrowerInfo.loanAmount,
            interestRate: borrowerInfo.interestRate,
            collateralPriceAtLiquidation: borrowerInfo.collateralPriceAtLiquidation,
            maturityDate: borrowerInfo.maturityDate
        });
    }

    function isLoanRepaid(address borrower) external view returns (bool) {
        return borrowerInfoMap[borrower].collateralAmount == 0;
    }

    function getTotalAssets() external view returns (uint256) {
        return totalAssets;
    }

    function getTotalCollateral() external view returns (uint256) {
        return collateralBalance;
    }

    function getPoolInterest() external view returns (uint256) {
        return poolInterest;
    }

    function getTotalDebts() external view returns (uint256) {
        return totalDebts;
    }

    function getTotalShareholders() external view returns (uint256) {
        return totalShareholders;
    }

    function getTotalBorrowers() external view returns (uint256) {
        return totalBorrowers;
    }

    function deposit(address receiver, uint256 vaultSubId) external payable returns (uint256) {
        require(msg.value > 0, "ZERO_ASSETS");

        uint256 shares = previewDeposit(address(0), vaultSubId, msg.value);
        _mint(receiver, address(0), vaultSubId, shares);

        VaultInfo storage vault = vaultInfo[address(0)];
        vault.managedAssets += msg.value;
        totalAssets += msg.value;
        totalShareholders += 1;

        emit Deposit(msg.sender, receiver, address(0), vaultSubId, msg.value, shares);

        return shares;
    }

    function withdraw(address receiver, address underlyingAsset, uint256 vaultSubId) external payable returns (uint256) {
        require(msg.value > 0, "ZERO_SHARES");

        uint256 assets = previewWithdraw(address(0), msg.value);
        VaultInfo storage vault = vaultInfo[address(0)];
        vault.managedAssets -= msg.value;
        totalShareholders -= 1;

        _burn(address(0), vaultSubId, msg.value);
        payable(receiver).transfer(assets);

        emit Withdraw(msg.sender, receiver, underlyingAsset, vaultSubId, assets, msg.value);

        return assets;
    }

    function previewDeposit(address underlyingAsset, uint256 vaultSubId, uint256 assets) internal view returns (uint256) {
        uint256 sharesSupply = totalSupply[underlyingAsset];
        if (sharesSupply == 0) {
            return assets;
        } else {
            return (assets * sharesSupply) / vaultInfo[underlyingAsset].managedAssets;
        }
    }

    function previewWithdraw(address shareAssetId, uint256 shares) internal view returns (uint256) {
        uint256 supply = totalSupply[shareAssetId];
        if (supply == shares) {
            return vaultInfo[shareAssetId].managedAssets;
        } else {
            return (shares * vaultInfo[shareAssetId].managedAssets) / supply;
        }
    }

    function _mint(address recipient, address assetId, uint256 vaultSubId, uint256 amount) internal {
        uint256 supply = totalSupply[assetId];
        if (supply == 0) {
            totalAssets += 1;
        }
        totalSupply[assetId] = supply + amount;
        // Assuming minting logic here
    }

    function _burn(address assetId, uint256 vaultSubId, uint256 amount) internal {
        require(address(this).balance >= amount, "NotEnoughCoins");
        uint256 supply = totalSupply[assetId];
        totalSupply[assetId] = supply - amount;
        // Assuming burning logic here
    }
}