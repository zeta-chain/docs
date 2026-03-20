

## GatewayEVM
[源码链接](https://github.com/zeta-chain/protocol-contracts/blob/main/contracts/evm/GatewayEVM.sol)

`GatewayEVM` 合约是外部链调用智能合约的入口。

*合约本身不持有资金，也不应被授予任何额度。*


### 状态变量
#### custody
托管合约地址。

```solidity
address public custody;
```

#### tssAddress
TSS（阈值签名方案）地址。

```solidity
address public tssAddress;
```

#### zetaConnector
`ZetaConnector` 合约地址。

```solidity
address public zetaConnector;
```

#### zetaToken
Zeta 代币合约地址。

```solidity
address public zetaToken;
```

#### additionalActionFeeWei
同一笔交易中跨链动作的额外手续费。

*同一交易中的第一个动作免费，之后的动作需支付该费用。*

*管理员可调节该费用以适配网络状况。*

```solidity
uint256 public additionalActionFeeWei;
```

#### TSS_ROLE
TSS 角色标识。

```solidity
bytes32 public constant TSS_ROLE = keccak256("TSS_ROLE");
```

#### ASSET_HANDLER_ROLE
资产处理角色标识。

```solidity
bytes32 public constant ASSET_HANDLER_ROLE = keccak256("ASSET_HANDLER_ROLE");
```

#### PAUSER_ROLE
暂停角色标识。

```solidity
bytes32 public constant PAUSER_ROLE = keccak256("PAUSER_ROLE");
```

#### MAX_PAYLOAD_SIZE
payload 与 `revertOptions` 中 revert message 的最大尺寸。

```solidity
uint256 public constant MAX_PAYLOAD_SIZE = 2880;
```

#### _TRANSACTION_ACTION_COUNT_KEY
记录交易动作数量的存储槽键位。

*使用 transient storage（tload/tstore）以节省 gas。*

```solidity
uint256 private constant _TRANSACTION_ACTION_COUNT_KEY = 0x01;
```

### 函数
#### constructor

```solidity
constructor();
```

#### initialize
初始化 TSS 地址、Zeta 代币地址，并将管理员账户设为 `DEFAULT_ADMIN_ROLE`。管理员负责升级与暂停，TSS 承担 TSS 角色。

```solidity
function initialize(address tssAddress_, address zetaToken_, address admin_) public initializer;
```

#### _authorizeUpgrade
授权合约升级，调用者必须具备管理员权限。

```solidity
function _authorizeUpgrade(address newImplementation) internal override onlyRole(DEFAULT_ADMIN_ROLE);
```

|参数|类型|说明|
|----|----|----|
|`newImplementation`|`address`|新实现合约地址|

#### updateTSSAddress
更新 TSS 地址。

```solidity
function updateTSSAddress(address newTSSAddress) external onlyRole(DEFAULT_ADMIN_ROLE);
```

|参数|类型|说明|
|----|----|----|
|`newTSSAddress`|`address`|新的 TSS 地址|

#### pause
暂停合约。

```solidity
function pause() external onlyRole(PAUSER_ROLE);
```

#### unpause
恢复合约。

```solidity
function unpause() external onlyRole(PAUSER_ROLE);
```

#### updateAdditionalActionFee
调整额外动作费用。

*仅管理员可调用，可根据网络情况调节。*

*设置为 0 时，额外动作费用功能被禁用。*

```solidity
function updateAdditionalActionFee(uint256 newFeeWei) external onlyRole(DEFAULT_ADMIN_ROLE);
```

|参数|类型|说明|
|----|----|----|
|`newFeeWei`|`uint256`|新的额外动作费用（wei）|

#### executeRevert
向目标合约转移 `msg.value` 并执行其 `onRevert`，仅 TSS 可调用，可支付。

```solidity
function executeRevert(
    address destination,
    bytes calldata data,
    RevertContext calldata revertContext
)
    public
    payable
    nonReentrant
    onlyRole(TSS_ROLE)
    whenNotPaused;
```

|参数|类型|说明|
|----|----|----|
|`destination`|`address`|目标合约地址|
|`data`|`bytes`|Calldata|
|`revertContext`|`RevertContext`|回退上下文|

#### execute
向目标地址发起普通调用，不包含 ERC20 转账。仅 TSS 可调用，可支付。

```solidity
function execute(
    MessageContext calldata messageContext,
    address destination,
    bytes calldata data
)
    external
    payable
    nonReentrant
    onlyRole(TSS_ROLE)
    whenNotPaused
    returns (bytes memory);
```

|参数|类型|说明|
|----|----|----|
|`messageContext`|`MessageContext`|跨链消息上下文|
|`destination`|`address`|目标地址|
|`data`|`bytes`|Calldata|

|返回值|类型|说明|
|----|----|----|
|`<none>`|`bytes`|调用返回值|

#### executeWithERC20
使用 ERC20 代币执行调用。仅资产处理角色可调用，使用 ERC20 allowance，结束时会重置授权。

```solidity
function executeWithERC20(
    MessageContext calldata messageContext,
    address token,
    address to,
    uint256 amount,
    bytes calldata data
)
    public
    nonReentrant
    onlyRole(ASSET_HANDLER_ROLE)
    whenNotPaused;
```

|参数|类型|说明|
|----|----|----|
|`messageContext`|`MessageContext`|消息上下文|
|`token`|`address`|ERC20 代币地址|
|`to`|`address`|目标合约地址|
|`amount`|`uint256`|转账数量|
|`data`|`bytes`|Calldata|

#### revertWithERC20
直接转移 ERC20 并调用 `onRevert`。仅资产处理角色可调用。

```solidity
function revertWithERC20(
    address token,
    address to,
    uint256 amount,
    bytes calldata data,
    RevertContext calldata revertContext
)
    external
    nonReentrant
    onlyRole(ASSET_HANDLER_ROLE)
    whenNotPaused;
```

|参数|类型|说明|
|----|----|----|
|`token`|`address`|ERC20 地址|
|`to`|`address`|目标地址|
|`amount`|`uint256`|数量|
|`data`|`bytes`|Calldata|
|`revertContext`|`RevertContext`|回退上下文|

#### deposit (ETH，第一个动作)
向 TSS 地址存入 ETH 并调用全链合约，仅适用于交易中的第一个动作。

```solidity
function deposit(address receiver, RevertOptions calldata revertOptions) external payable whenNotPaused;
```

|参数|类型|说明|
|----|----|----|
|`receiver`|`address`|接收地址|
|`revertOptions`|`RevertOptions`|回退选项|

#### deposit (ETH，指定金额)
向 TSS 地址存入指定 ETH，`msg.value` = `amount + fee`。

```solidity
function deposit(
    address receiver,
    uint256 amount,
    RevertOptions calldata revertOptions
)
    external
    payable
    whenNotPaused;
```

|参数|类型|说明|
|----|----|----|
|`receiver`|`address`|接收地址|
|`amount`|`uint256`|存入金额（不含费用）|
|`revertOptions`|`RevertOptions`|回退选项|

#### deposit (ERC20)
向托管或连接器合约存入 ERC20。

```solidity
function deposit(
    address receiver,
    uint256 amount,
    address asset,
    RevertOptions calldata revertOptions
)
    external
    payable
    whenNotPaused;
```

|参数|类型|说明|
|----|----|----|
|`receiver`|`address`|接收地址|
|`amount`|`uint256`|存入数量|
|`asset`|`address`|ERC20 地址|
|`revertOptions`|`RevertOptions`|回退选项|

#### depositAndCall (ETH，第一个动作)
向 TSS 存入 ETH 并调用全链合约，仅限第一个动作。

```solidity
function depositAndCall(
    address receiver,
    bytes calldata payload,
    RevertOptions calldata revertOptions
)
    external
    payable
    whenNotPaused;
```

#### depositAndCall (ETH，指定金额)
向 TSS 存入指定 ETH 并调用合约，`msg.value` = `amount + fee`。

```solidity
function depositAndCall(
    address receiver,
    uint256 amount,
    bytes calldata payload,
    RevertOptions calldata revertOptions
)
    external
    payable
    whenNotPaused;
```

#### depositAndCall (ERC20)
向托管/连接器存入 ERC20 并调用全链合约。

```solidity
function depositAndCall(
    address receiver,
    uint256 amount,
    address asset,
    bytes calldata payload,
    RevertOptions calldata revertOptions
)
    external
    payable
    whenNotPaused;
```

#### call
不转移资产的跨链调用。

```solidity
function call(
    address receiver,
    bytes calldata payload,
    RevertOptions calldata revertOptions
)
    external
    payable
    whenNotPaused;
```

#### setCustody
设置托管合约地址。

```solidity
function setCustody(address custody_) external onlyRole(DEFAULT_ADMIN_ROLE);
```

#### setConnector
设置连接器合约地址。

```solidity
function setConnector(address zetaConnector_) external onlyRole(DEFAULT_ADMIN_ROLE);
```

#### _resetApproval
重置指定地址的代币授权，确保先清零再设置新值。

```solidity
function _resetApproval(address token, address to) private returns (bool);
```

#### _transferFromToAssetHandler / _transferToAssetHandler
内部函数，用于将代币转移给资产处理者（连接器或托管合约），代码略。

#### _executeArbitraryCall / _executeAuthenticatedCall
内部函数，执行任意或认证调用。

#### _revertIfOnCallOrOnRevert
确保内部调用不会在 `onCall` / `onRevert` 执行中再次触发。

#### _processFee
处理跨链动作手续费：首个动作免费，之后动作收取 `ADDITIONAL_ACTION_FEE_WEI`。若费用为 0 会 revert。

#### _validateChargedFeeForERC20 / _validateChargedFeeForETHWithAmount
校验 ERC20 或 ETH 操作的费用是否正确。

#### _getNextActionIndex
使用 transient storage 获取并自增交易动作计数。


## GatewayZEVM
[源码链接](https://github.com/zeta-chain/protocol-contracts/blob/main/contracts/zevm/GatewayZEVM.sol)

`GatewayZEVM` 合约是调用全链合约的入口。

*合约本身不持有资金，也不应被授予额度。*

### 状态变量
- `PROTOCOL_ADDRESS`：协议常量地址。
- `PAUSER_ROLE`：暂停角色。
- `zetaToken`：Zeta 代币地址。
- `registry`：ZetaChain 上的注册表地址。

### 核心函数
- `initialize`：初始化 Zeta 代币地址与管理员。
- `pause` / `unpause`：暂停与恢复。
- `setRegistryAddress`：配置注册表地址。
- `_safeTransferFrom` / `_safeBurn` / `_safeDeposit`：内部安全操作。
- `_burnProtocolFees`、`_burnZRC20ProtocolFees`、`_withdrawZRC20WithGasLimit`：费用结算与提现辅助。
- `withdraw` / `withdrawAndCall` / `call`：向外部链提现或调用合约。
- `execute` / `depositAndCall`：协议在 ZEVM 上执行/存入并调用用户合约。
- `executeRevert` / `depositAndRevert` / `executeAbort`：回退与中止流程。
- `getMaxMessageSize` / `getMinGasLimit` / `getMaxRevertGasLimit`：查询限制参数。


## INotSupportedMethods
[源码链接](https://github.com/zeta-chain/protocol-contracts/blob/main/contracts/Errors.sol)

定义不支持的方法错误。

### 错误
- `CallOnRevertNotSupported()`：调用不支持 `callOnRevert`。


## ERC20Custody
[源码链接](https://github.com/zeta-chain/protocol-contracts/blob/main/contracts/evm/ERC20Custody.sol)

托管存入 ZetaChain 的 ERC20，并通过 Gateway 调用合约。

*该合约不会直接调用外部合约，所有调用均经由 Gateway。*

### 状态变量
- `gateway`：Gateway 接口。
- `whitelisted`：白名单映射。
- `tssAddress`：TSS 地址。
- `supportsLegacy`：是否支持 Legacy 接口。
- 角色：`PAUSER_ROLE`、`WITHDRAWER_ROLE`、`WHITELISTER_ROLE`。

### 核心函数
- `initialize`：初始化 Gateway、TSS 与管理员角色。
- `pause` / `unpause`：暂停控制。
- `updateTSSAddress`：更新 TSS。
- `setSupportsLegacy`：配置 Legacy 支持。
- `whitelist` / `unwhitelist`：管理白名单。
- `withdraw` / `withdrawAndCall` / `withdrawAndRevert`：提现与调用。
- `deposit`：Legacy 存入（已弃用）。


## IERC20Custody
[源码链接](https://github.com/zeta-chain/protocol-contracts/blob/main/contracts/evm/interfaces/IERC20Custody.sol)

### 函数
- `whitelisted(address token)`：查询是否在白名单。
- `withdraw(address token, address to, uint256 amount)`：直接提现。
- `withdrawAndCall`：提现并通过 Gateway 调用。
- `withdrawAndRevert`：提现并带回退逻辑。


## IERC20CustodyErrors
[源码链接](https://github.com/zeta-chain/protocol-contracts/blob/main/contracts/evm/interfaces/IERC20Custody.sol)

接口错误定义：
- `ZeroAddress()`：地址为零。
- `NotWhitelisted()`：代币未在白名单。
- `LegacyMethodsNotSupported()`：调用不支持的旧方法。


## IERC20CustodyEvents
[源码链接](https://github.com/zeta-chain/protocol-contracts/blob/main/contracts/evm/interfaces/IERC20Custody.sol)

事件定义：
- `Withdrawn`：提现事件。
- `WithdrawnAndCalled`：提现并调用。
- `WithdrawnAndReverted`：提现并回退调用。
- `Whitelisted` / `Unwhitelisted`：白名单变更。
- `Deposited`：Legacy 存入事件。
- `UpdatedCustodyTSSAddress`：TSS 更新事件。

