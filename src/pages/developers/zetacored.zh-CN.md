## zetacored

Zetacore 守护进程（服务器）

### 选项

```
  -h, --help                查看 zetacored 的帮助
      --home string         配置和数据文件夹
      --log_format string   日志格式 (json|plain) 
      --log_level string    日志级别 (trace|debug|info|warn|error|fatal|panic|disabled 或 '*:[level],[key]:[level]') 
      --log_no_color        禁用彩色日志
      --trace               在出错时打印完整堆栈跟踪
```

### 另请参阅

* [zetacored add-genesis-account](#zetacored-add-genesis-account)	- 将创世账户添加到 genesis.json
* [zetacored add-observer-list](#zetacored-add-observer-list)	- 将观察者列表添加到 observer mapper，默认路径为 ~/.zetacored/os_info/observer_info.json
* [zetacored addr-conversion](#zetacored-addr-conversion)	- 在 zeta1xxx 与 zetavaloper1xxx 地址之间互转
* [zetacored collect-gentxs](#zetacored-collect-gentxs)	- 收集 genesis 交易并输出 genesis.json
* [zetacored collect-observer-info](#zetacored-collect-observer-info)	- 从文件夹收集观察者信息写入创世文件，默认路径为 ~/.zetacored/os_info/

* [zetacored comet](#zetacored-comet)	- CometBFT 子命令

## zetacored comet version

打印 CometBFT 库版本

### 概要

打印编译当前应用时所使用的协议与库版本号。

```
zetacored comet version [flags]
```

### 选项

```
  -h, --help   查看 version 的帮助
```

### 继承自父命令的选项

```
      --home string         配置和数据文件夹
      --log_format string   日志格式 (json|plain) 
      --log_level string    日志级别 (trace|debug|info|warn|error|fatal|panic|disabled 或 '*:[level],[key]:[level]') 
      --log_no_color        禁用彩色日志
      --trace               在出错时打印完整堆栈跟踪
```

### 另请参阅

* [zetacored comet](#zetacored-comet)	- CometBFT 子命令

## zetacored config

管理应用配置的工具

### 选项

```
  -h, --help   查看 config 的帮助
```

### 继承自父命令的选项

```
      --home string         配置和数据文件夹
      --log_format string   日志格式 (json|plain) 
      --log_level string    日志级别 (trace|debug|info|warn|error|fatal|panic|disabled 或 '*:[level],[key]:[level]') 
      --log_no_color        禁用彩色日志
      --trace               在出错时打印完整堆栈跟踪
```

### 另请参阅

* [zetacored](#zetacored)	- Zetacore 守护进程（服务器）
* [zetacored config diff](#zetacored-config-diff)	- 输出与 app.toml 默认值不同的所有配置项
* [zetacored config get](#zetacored-config-get)	- 获取应用配置项
* [zetacored config home](#zetacored-config-home)	- 输出二进制程序使用的主目录；独立使用 `confix` 工具时不会设置主目录
* [zetacored config migrate](#zetacored-config-migrate)	- 将 Cosmos SDK 应用配置文件迁移到指定版本
* [zetacored config set](#zetacored-config-set)	- 设置应用配置项
* [zetacored config view](#zetacored-config-view)	- 查看配置文件

## zetacored config diff

输出与 app.toml 默认值不同的所有配置项

```
zetacored config diff [target-version] [app-toml-path] [flags]
```

### 选项

```
  -h, --help   查看 diff 的帮助
```

### 继承自父命令的选项

```
      --home string         配置和数据文件夹
      --log_format string   日志格式 (json|plain) 
      --log_level string    日志级别 (trace|debug|info|warn|error|fatal|panic|disabled 或 '*:[level],[key]:[level]') 
      --log_no_color        禁用彩色日志
      --trace               在出错时打印完整堆栈跟踪
```

### 另请参阅

* [zetacored config](#zetacored-config)	- 管理应用配置的工具

## zetacored debug

用于协助调试应用的工具

```
zetacored debug [flags]
```

### 选项

```
  -h, --help   查看 debug 的帮助
```

### 继承自父命令的选项

```
      --home string         配置和数据文件夹
      --log_format string   日志格式 (json|plain) 
      --log_level string    日志级别 (trace|debug|info|warn|error|fatal|panic|disabled 或 '*:[level],[key]:[level]') 
      --log_no_color        禁用彩色日志
      --trace               在出错时打印完整堆栈跟踪
```

### 另请参阅

* [zetacored](#zetacored)	- Zetacore 守护进程（服务器）
* [zetacored debug addr](#zetacored-debug-addr)	- 在十六进制与 Bech32 间转换地址
* [zetacored debug codec](#zetacored-debug-codec)	- 调试应用编解码器的工具
* [zetacored debug prefixes](#zetacored-debug-prefixes)	- 列出 Bech32 的 HRP 前缀
* [zetacored debug pubkey](#zetacored-debug-pubkey)	- 从 proto JSON 解码公钥
* [zetacored debug pubkey-raw](#zetacored-debug-pubkey-raw)	- 从十六进制、Base64 或 Bech32 解码 ED25519 / secp256k1 公钥
* [zetacored debug raw-bytes](#zetacored-debug-raw-bytes)	- 将原始字节输出转换为十六进制

## zetacored debug addr

在十六进制与 Bech32 之间转换地址

### 概要

在十六进制编码与 Bech32 之间转换地址。

示例：
$ zetacored debug addr cosmos1e0jnq2sun3dzjh8p2xq95kk0expwmd7shwjpfg

```
zetacored debug addr [address] [flags]
```

### 选项

```
  -h, --help   查看 addr 的帮助
```

### 继承自父命令的选项

```
      --home string         配置和数据文件夹
      --log_format string   日志格式 (json|plain) 
      --log_level string    日志级别 (trace|debug|info|warn|error|fatal|panic|disabled 或 '*:[level],[key]:[level]') 
      --log_no_color        禁用彩色日志
      --trace               在出错时打印完整堆栈跟踪
```

### 另请参阅

* [zetacored debug](#zetacored-debug)	- 用于协助调试应用的工具

## zetacored docs

为 zetacored 生成 Markdown 文档

```
zetacored docs [path] [flags]
```

### 选项

```
  -h, --help          查看 docs 的帮助
      --path string   生成文档的输出路径 
```

### 继承自父命令的选项

```
      --home string         配置和数据文件夹
      --log_format string   日志格式 (json|plain) 
      --log_level string    日志级别 (trace|debug|info|warn|error|fatal|panic|disabled 或 '*:[level],[key]:[level]') 
      --log_no_color        禁用彩色日志
      --trace               在出错时打印完整堆栈跟踪
```

### 另请参阅

* [zetacored](#zetacored)	- Zetacore 守护进程（服务器）

## zetacored export

将状态导出为 JSON

```
zetacored export [flags]
```

### 选项

```
      --for-zero-height              将状态导出为从高度 0 开始（执行预处理）
      --height int                   从指定高度导出状态（-1 表示最新高度） (default -1)
  -h, --help                         查看 export 的帮助
      --home string                  应用数据目录 
      --jail-allowed-addrs strings   逗号分隔的被监禁验证人运营者地址，用于解除监禁
      --modules-to-export strings    逗号分隔的需导出的模块列表；留空则导出全部模块
      --output-document string       将导出状态写入指定文件，而非 STDOUT
```

### 继承自父命令的选项

```
      --log_format string   日志格式 (json|plain) 
      --log_level string    日志级别 (trace|debug|info|warn|error|fatal|panic|disabled 或 '*:[level],[key]:[level]') 
      --log_no_color        禁用彩色日志
      --trace               在出错时打印完整堆栈跟踪
```

### 另请参阅

* [zetacored](#zetacored)	- Zetacore 守护进程（服务器）

## zetacored gentx

生成包含自委托的创世交易

### 概要

生成为验证人创建自委托的创世交易，由 keyring 中指定名称的密钥签名。可选提供节点 ID 和共识公钥；若未提供，将从 priv_validator.json 文件读取。默认参数如下：
    
    委托数量:               100000000stake
    佣金费率:               0.1
    佣金最高费率:           0.2
    佣金最大变更率:         0.01
    最小自委托:             1

示例：
$ zetacored gentx my-key-name 1000000stake --home=/path/to/home/dir --keyring-backend=os --chain-id=test-chain-1 \
    --moniker="myvalidator" \
    --commission-max-change-rate=0.01 \
    --commission-max-rate=1.0 \
    --commission-rate=0.07 \
    --details="..." \
    --security-contact="..." \
    --website="..."

```
zetacored gentx [key_name] [amount] [flags]
```

### 选项

```
  -a, --account-number uint                 签名账户的账户号（仅离线模式）
      --amount string                       要绑定的代币数量
      --aux                                 生成辅助签名数据而不是发送交易
  -b, --broadcast-mode string               交易广播模式 (sync|async) 
      --chain-id string                     网络链 ID
      --commission-max-change-rate string   佣金日最大变更率
      --commission-max-rate string          佣金最高费率
      --commission-rate string              初始佣金费率
      --details string                      验证人的可选描述
      --dry-run                             忽略 --gas 标志，模拟交易但不广播（启用时无法访问本地 Keybase）
      --fee-granter string                  为交易支付手续费的授权方
      --fee-payer string                    由该账户代付手续费，而非从签名者扣除
      --fees string                         随交易支付的手续费，例如 10uatom
      --from string                         用于签名的私钥名称或地址
      --gas string                          每笔交易的 gas 上限；设为 "auto" 自动估算。注意："auto" 并非总是准确，可设置有效币值调整结果。可替代 "fees" 使用。 (default 200000)
      --gas-adjustment float                与仿真结果相乘的调整系数；若手动设置 gas 限额则忽略  (default 1)
      --gas-prices string                   十进制格式的 gas 单价，用于计算手续费（例如 0.1uatom）
      --generate-only                       构建未签名交易并输出到 STDOUT（启用时仅在提供密钥名称时访问本地 Keybase）
  -h, --help                                查看 gentx 的帮助
      --home string                         应用数据目录 
      --identity string                     （可选）身份签名（如 UPort 或 Keybase）
      --ip string                           节点的公共 P2P IP 
      --keyring-backend string              选择 keyring 后端 (os|file|kwallet|pass|test|memory) 
      --keyring-dir string                  客户端 keyring 目录；未指定则使用默认 home 目录
      --ledger                              使用已连接的 Ledger 设备
      --min-self-delegation string          验证人要求的最小自委托
      --moniker string                      验证人（可选）的别名
      --node string                         此链的 CometBFT RPC 接口地址 [host]:[port] 
      --node-id string                      节点的 NodeID
      --note string                         为交易添加备注（原 --memo）
      --offline                             离线模式（不启用任何在线功能）
      --output-document string              将创世交易 JSON 写入指定文件，而非默认位置
      --p2p-port uint                       节点的公共 P2P 端口 (default 26656)
      --pubkey string                       验证人的 Protobuf JSON 编码公钥
      --security-contact string             验证人（可选）的安全联系人邮箱
  -s, --sequence uint                       签名账户的序列号（仅离线模式）
      --sign-mode string                    选择签名模式 (direct|amino-json|direct-aux|textual)，高级功能
      --timeout-duration duration           TimeoutDuration 表示交易在内存池中的有效时长。交易的无序 nonce 将设置为创建时间加上该时长；若交易仍在内存池中且区块时间超过提交时间加 TimeoutTimestamp，交易将被拒绝。
      --timeout-height uint                 已弃用：请改用 --timeout-duration。设置区块超时高度，防止交易在超过该高度后被提交
      --tip string                          Tip 为在目标链上转给手续费支付者的金额，仅与 --aux 一起使用有效；若目标链未启用 TipDecorator 将被忽略
      --unordered                           启用无序交易投递；必须与 --timeout-duration 同时使用
      --website string                      验证人（可选）的官网
  -y, --yes                                 跳过交易广播确认提示
```

### 继承自父命令的选项

```
      --log_format string   日志格式 (json|plain) 
      --log_level string    日志级别 (trace|debug|info|warn|error|fatal|panic|disabled 或 '*:[level],[key]:[level]') 
      --log_no_color        禁用彩色日志
      --trace               在出错时打印完整堆栈跟踪
```

### 另请参阅

* [zetacored](#zetacored)	- Zetacore 守护进程（服务器）

## zetacored get-pubkey

获取节点账户公钥

```
zetacored get-pubkey [tssKeyName] [password] [flags]
```

### 选项

```
  -h, --help   查看 get-pubkey 的帮助
```

### 继承自父命令的选项

```
      --home string         配置和数据文件夹
      --log_format string   日志格式 (json|plain) 
      --log_level string    日志级别 (trace|debug|info|warn|error|fatal|panic|disabled 或 '*:[level],[key]:[level]') 
      --log_no_color        禁用彩色日志
      --trace               在出错时打印完整堆栈跟踪
```

### 另请参阅

* [zetacored](#zetacored)	- Zetacore 守护进程（服务器）

## zetacored index-eth-tx

索引历史以太坊交易

### 概要

索引历史以太坊交易，仅支持两种遍历方向，以避免索引数据库出现缺口：
- backward：从首个已索引区块向前处理至链上最早区块；若索引库为空，则从最新区块开始。
- forward：从最新已索引区块继续处理至链上最新区块。

节点启动时，索引器会从最新已索引区块开始，以避免产生空档。通常推荐使用 backward 模式，以保持索引结果最新。

```
zetacored index-eth-tx [backward|forward] [flags]
```

### 选项

```
  -h, --help   查看 index-eth-tx 的帮助
```

### 继承自父命令的选项

```
      --home string         配置和数据文件夹
      --log_format string   日志格式 (json|plain) 
      --log_level string    日志级别 (trace|debug|info|warn|error|fatal|panic|disabled 或 '*:[level],[key]:[level]') 
      --log_no_color        禁用彩色日志
      --trace               在出错时打印完整堆栈跟踪
```

### 另请参阅

* [zetacored](#zetacored)	- Zetacore 守护进程（服务器）

## zetacored init

初始化私有验证人、P2P、创世及应用配置文件

### 概要

初始化验证人与节点的配置文件。

```
zetacored init [moniker] [flags]
```

### 选项

```
      --chain-id string             创世文件的链 ID，留空则随机生成
      --consensus-key-algo string   共识密钥所用算法 
      --default-denom string        创世文件的默认计价单位，留空则为 'stake'
  -h, --help                        查看 init 的帮助
      --home string                 节点主目录 
      --initial-height int          指定创世时的初始区块高度 (default 1)
  -o, --overwrite                   覆盖 genesis.json 文件
      --recover                     提供助记词以恢复已存在的密钥
```

### 继承自父命令的选项

```
      --log_format string   日志格式 (json|plain) 
      --log_level string    日志级别 (trace|debug|info|warn|error|fatal|panic|disabled 或 '*:[level],[key]:[level]') 
      --log_no_color        禁用彩色日志
      --trace               在出错时打印完整堆栈跟踪
```

### 另请参阅

* [zetacored](#zetacored)	- Zetacore 守护进程（服务器）

## zetacored keys

管理应用密钥

### 概要

Keyring 管理命令。密钥可采用 CometBFT 加密库支持的任意格式，可被轻节点、全节点或其他需要私钥签名的应用使用。

Keyring 支持以下后端：

    os          使用操作系统默认的凭据存储。
    file        在应用配置目录中使用加密文件仓库存储。
                访问时会请求密码，单个命令可能多次提示。
    kwallet     使用 KDE Wallet Manager 作为凭据管理工具。
    pass        使用 pass 命令行工具存储并读取密钥。
    test        以不安全方式写入磁盘，不会提示密码，仅用于测试。

kwallet 与 pass 后端依赖外部工具。详见：
    KWallet     https://github.com/KDE/kwallet
    pass        https://www.passwordstore.org/

pass 后端需要 GnuPG：https://gnupg.org/

### 选项

```
  -h, --help                     查看 keys 的帮助
      --home string              应用数据目录 
      --keyring-backend string   选择 keyring 后端 (os|file|test) 
      --keyring-dir string       客户端 keyring 目录；未指定则使用默认 home 目录
      --output string            输出格式 (text|json) 
```

### 继承自父命令的选项

```
      --log_format string   日志格式 (json|plain) 
      --log_level string    日志级别 (trace|debug|info|warn|error|fatal|panic|disabled 或 '*:[level],[key]:[level]') 
      --log_no_color        禁用彩色日志
      --trace               在出错时打印完整堆栈跟踪
```

### 另请参阅

* [zetacored](#zetacored)	- Zetacore 守护进程（服务器）
* [zetacored keys ](#zetacored-keys-)	- 
* [zetacored keys add](#zetacored-keys-add)	- 添加新生成或恢复的加密私钥，并保存到指定名称的文件
* [zetacored keys delete](#zetacored-keys-delete)	- 删除指定密钥
* [zetacored keys export](#zetacored-keys-export)	- 导出私钥
* [zetacored keys import](#zetacored-keys-import)	- 将私钥导入本地 keybase
* [zetacored keys list](#zetacored-keys-list)	- 列出所有密钥
* [zetacored keys list-key-types](#zetacored-keys-list-key-types)	- 列出支持的密钥类型
* [zetacored keys migrate](#zetacored-keys-migrate)	- 将密钥从 amino 迁移为 proto 序列化格式
* [zetacored keys mnemonic](#zetacored-keys-mnemonic)	- 基于输入熵计算 BIP39 助记词
* [zetacored keys parse](#zetacored-keys-parse)	- 在十六进制与 Bech32 形式间解析地址
* [zetacored keys rename](#zetacored-keys-rename)	- 重命名现有密钥
* [zetacored keys show](#zetacored-keys-show)	- 按名称或地址检索密钥信息
* [zetacored keys unsafe-export-eth-key](#zetacored-keys-unsafe-export-eth-key)	- **不安全** 导出以太坊私钥
* [zetacored keys unsafe-import-eth-key](#zetacored-keys-unsafe-import-eth-key)	- **不安全** 将以太坊私钥导入本地 keybase

## zetacored keys 

```
zetacored keys  [flags]
```

### 选项

```
  -h, --help   查看此命令的帮助
```

### 继承自父命令的选项

```
      --home string              应用数据目录 
      --keyring-backend string   选择 keyring 后端 (os|file|test) 
      --keyring-dir string       客户端 keyring 目录；未指定则使用默认 home 目录
      --log_format string        日志格式 (json|plain) 
      --log_level string         日志级别 (trace|debug|info|warn|error|fatal|panic|disabled 或 '*:[level],[key]:[level]') 
      --log_no_color             禁用彩色日志
      --output string            输出格式 (text|json) 
      --trace                    在出错时打印完整堆栈跟踪
```

### 另请参阅

* [zetacored keys](#zetacored-keys)	- 管理应用密钥

## zetacored keys migrate

将密钥从 Amino 迁移为 Proto 序列化格式

### 概要

将密钥从 Amino 记录迁移到 Protocol Buffers。对 keyring 中的每个条目，命令会先尝试用 Proto 反序列化；若成功则说明已迁移，继续处理下一条。否则尝试使用 Amino 反序列化为 LegacyInfo，成功后再序列化为 Protobuf 格式并覆盖原记录。若出现错误，将在 CLI 中输出，并持续迁移直至 keyring 数据库处理完毕。详情参见 https://github.com/cosmos/cosmos-sdk/pull/9695。

```
zetacored keys migrate [flags]
```

### 选项

```
  -h, --help   查看 migrate 的帮助
```

### 继承自父命令的选项

```
      --home string              应用数据目录 
      --keyring-backend string   选择 keyring 后端 (os|file|test) 
      --keyring-dir string       客户端 keyring 目录；未指定则使用默认 home 目录
      --log_format string        日志格式 (json|plain) 
      --log_level string         日志级别 (trace|debug|info|warn|error|fatal|panic|disabled 或 '*:[level],[key]:[level]') 
      --log_no_color             禁用彩色日志
      --output string            输出格式 (text|json) 
      --trace                    在出错时打印完整堆栈跟踪
```

### 另请参阅

* [zetacored keys](#zetacored-keys)	- 管理应用密钥

## zetacored keys mnemonic

基于输入熵计算 BIP39 助记词

### 概要

从系统熵生成 BIP39 助记词（种子短语）。若要提供自定义熵，可使用 `--unsafe-entropy`。

```
zetacored keys mnemonic [flags]
```

### 选项

```
  -h, --help             查看 mnemonic 的帮助
      --unsafe-entropy   提示用户自行提供熵，而非使用系统熵
  -y, --yes              在校验输入熵长度时跳过确认
```

### 继承自父命令的选项

```
      --home string              应用数据目录 
      --keyring-backend string   选择 keyring 后端 (os|file|test) 
      --keyring-dir string       客户端 keyring 目录；未指定则使用默认 home 目录
      --log_format string        日志格式 (json|plain) 
      --log_level string         日志级别 (trace|debug|info|warn|error|fatal|panic|disabled 或 '*:[level],[key]:[level]') 
      --log_no_color             禁用彩色日志
      --output string            输出格式 (text|json) 
      --trace                    在出错时打印完整堆栈跟踪
```

### 另请参阅

* [zetacored keys](#zetacored-keys)	- 管理应用密钥

## zetacored keys parse

在十六进制与 Bech32 之间解析地址

### 概要

在标准输出上转换并打印密钥地址与指纹，可在十六进制与带 cosmos 前缀的 Bech32 之间互转。

```
zetacored keys parse [hex-or-bech32-address] [flags]
```

### 选项

```
  -h, --help   查看 parse 的帮助
```

### 继承自父命令的选项

```
      --home string              应用数据目录 
      --keyring-backend string   选择 keyring 后端 (os|file|test) 
      --keyring-dir string       客户端 keyring 目录；未指定则使用默认 home 目录
      --log_format string        日志格式 (json|plain) 
      --log_level string         日志级别 (trace|debug|info|warn|error|fatal|panic|disabled 或 '*:[level],[key]:[level]') 
      --log_no_color             禁用彩色日志
      --output string            输出格式 (text|json) 
      --trace                    在出错时打印完整堆栈跟踪
```

### 另请参阅

* [zetacored keys](#zetacored-keys)	- 管理应用密钥

## zetacored keys rename

重命名现有密钥

### 概要

在 Keybase 后端重命名密钥。重命名离线或 Ledger 密钥时，仅会更新本地存储的公钥引用（Ledger 设备中的私钥不会被 CLI 重命名）。

```
zetacored keys rename [old_name] [new_name] [flags]
```

### 选项

```
  -h, --help   查看 rename 的帮助
  -y, --yes    重命名离线或 Ledger 密钥引用时跳过确认
```

### 继承自父命令的选项

```
      --home string              应用数据目录 
      --keyring-backend string   选择 keyring 后端 (os|file|test) 
      --keyring-dir string       客户端 keyring 目录；未指定则使用默认 home 目录
      --log_format string        日志格式 (json|plain) 
      --log_level string         日志级别 (trace|debug|info|warn|error|fatal|panic|disabled 或 '*:[level],[key]:[level]') 
      --log_no_color             禁用彩色日志
      --output string            输出格式 (text|json) 
      --trace                    在出错时打印完整堆栈跟踪
```

### 另请参阅

* [zetacored keys](#zetacored-keys)	- 管理应用密钥

## zetacored keys show

按名称或地址检索密钥信息

### 概要

显示密钥详情。若提供多个名称或地址，将临时创建名为 `multi` 的多签密钥，包含所有指定密钥与多签阈值。

```
zetacored keys show [name_or_address [name_or_address...]] [flags]
```

### 选项

```
  -a, --address                  仅输出地址（不可与 --output 同用）
      --bech string              指定键的 Bech32 前缀 (acc|val|cons) 
  -d, --device                   在 Ledger 设备上输出地址（不可与 --pubkey 一起使用）
  -h, --help                     查看 show 的帮助
      --multisig-threshold int   多签所需签名数 (default 1)
  -p, --pubkey                   仅输出公钥（不可与 --output 同用）
      --qrcode                   显示地址二维码（若 -a / --address 为 false，则忽略）
```

### 继承自父命令的选项

```
      --home string              应用数据目录 
      --keyring-backend string   选择 keyring 后端 (os|file|test) 
      --keyring-dir string       客户端 keyring 目录；未指定则使用默认 home 目录
      --log_format string        日志格式 (json|plain) 
      --log_level string         日志级别 (trace|debug|info|warn|error|fatal|panic|disabled 或 '*:[level],[key]:[level]') 
      --log_no_color             禁用彩色日志
      --output string            输出格式 (text|json) 
      --trace                    在出错时打印完整堆栈跟踪
```

## zetacored keys export

导出私钥

### 概要

以 ASCII 装甲加密格式从本地 keyring 导出私钥。

当同时指定 `--unarmored-hex` 与 `--unsafe` 时，会以**不安全**方式导出加密材料，方便用户导入热钱包。此特性仅适用于了解如何安全处理私钥并**清楚风险**的高级用户。如有不确定，请先了解相关风险，并使用 ASCII 装甲加密格式导出。

```
zetacored keys export [name] [flags]
```

### 选项

```
  -h, --help            查看 export 的帮助
      --unarmored-hex   以未装甲的十六进制形式导出私钥。需与 --unsafe 同时使用。
      --unsafe          启用不安全操作；必须与相应的操作选项同时开启。
  -y, --yes             导出未装甲十六进制私钥时跳过确认
```

### 继承自父命令的选项

```
      --home string              应用数据目录 
      --keyring-backend string   选择 keyring 后端 (os|file|test) 
      --keyring-dir string       客户端 keyring 目录；未指定则使用默认 home 目录
      --log_format string        日志格式 (json|plain) 
      --log_level string         日志级别 (trace|debug|info|warn|error|fatal|panic|disabled 或 '*:[level],[key]:[level]') 
      --log_no_color             禁用彩色日志
      --output string            输出格式 (text|json) 
      --trace                    在出错时打印完整堆栈跟踪
```

### 另请参阅

* [zetacored keys](#zetacored-keys)	- 管理应用密钥

## zetacored keys unsafe-export-eth-key

**不安全** 导出以太坊私钥

### 概要

**不安全** 将以太坊私钥以未加密形式导出，供开发工具使用。

```
zetacored keys unsafe-export-eth-key [name] [flags]
```

### 选项

```
  -h, --help   查看 unsafe-export-eth-key 的帮助
```

### 继承自父命令的选项

```
      --home string              应用数据目录 
      --keyring-backend string   选择 keyring 后端 (os|file|test) 
      --keyring-dir string       客户端 keyring 目录；未指定则使用默认 home 目录
      --log_format string        日志格式 (json|plain) 
      --log_level string         日志级别 (trace|debug|info|warn|error|fatal|panic|disabled 或 '*:[level],[key]:[level]') 
      --log_no_color             禁用彩色日志
      --output string            输出格式 (text|json) 
      --trace                    在出错时打印完整堆栈跟踪
```

### 另请参阅

* [zetacored keys](#zetacored-keys)	- 管理应用密钥

## zetacored keys unsafe-import-eth-key

**不安全** 将以太坊私钥导入本地 keybase

### 概要

**不安全** 将十六进制编码的以太坊私钥导入本地 keybase。

```
zetacored keys unsafe-import-eth-key [name] [pk] [flags]
```

### 选项

```
  -h, --help   查看 unsafe-import-eth-key 的帮助
```
### 继承自父命令的选项

```
      --home string              应用数据目录 
      --keyring-backend string   选择 keyring 后端 (os|file|test) 
      --keyring-dir string       客户端 keyring 目录；未指定则使用默认 home 目录
      --log_format string        日志格式 (json|plain) 
      --log_level string         日志级别 (trace|debug|info|warn|error|fatal|panic|disabled 或 '*:[level],[key]:[level]') 
      --log_no_color             禁用彩色日志
      --output string            输出格式 (text|json) 
      --trace                    在出错时打印完整堆栈跟踪
```

### 另请参阅

* [zetacored keys](#zetacored-keys)	- 管理应用密钥

## zetacored parse-genesis-file

解析指定的 genesis 文件，并将所需数据导入可选 genesis 文件

```
zetacored parse-genesis-file [import-genesis-file] [optional-genesis-file] [flags]
```

### 选项

```
  -h, --help     查看 parse-genesis-file 的帮助
      --modify   在导入前修改 genesis 文件
```

### 继承自父命令的选项

```
      --home string         配置和数据文件夹
      --log_format string   日志格式 (json|plain) 
      --log_level string    日志级别 (trace|debug|info|warn|error|fatal|panic|disabled 或 '*:[level],[key]:[level]') 
      --log_no_color        禁用彩色日志
      --trace               在出错时打印完整堆栈跟踪
```

### 另请参阅

* [zetacored](#zetacored)	- Zetacore 守护进程（服务器）

## zetacored query

查询子命令集合

```
zetacored query [flags]
```

### 选项

```
      --chain-id string   网络链 ID
  -h, --help              查看 query 的帮助
```

### 继承自父命令的选项

```
      --home string         配置和数据文件夹
      --log_format string   日志格式 (json|plain) 
      --log_level string    日志级别 (trace|debug|info|warn|error|fatal|panic|disabled 或 '*:[level],[key]:[level]') 
      --log_no_color        禁用彩色日志
      --trace               在出错时打印完整堆栈跟踪
```

### 另请参阅

* [zetacored](#zetacored)	- Zetacore 守护进程（服务器）
* [zetacored query auth](#zetacored-query-auth)	- auth 模块查询命令
* [zetacored query authority](#zetacored-query-authority)	- authority 模块查询命令
* [zetacored query authz](#zetacored-query-authz)	- authz 模块查询命令
* [zetacored query bank](#zetacored-query-bank)	- bank 模块查询命令
* [zetacored query block](#zetacored-query-block)	- 按高度、哈希或事件查询已提交区块
* [zetacored query block-results](#zetacored-query-block-results)	- 按高度查询已提交区块的执行结果
* [zetacored query blocks](#zetacored-query-blocks)	- 按事件筛选并分页查询区块
* [zetacored query comet-validator-set](#zetacored-query-comet-validator-set)	- 获取指定高度的 CometBFT 验证人集合
* [zetacored query consensus](#zetacored-query-consensus)	- consensus 模块查询命令
* [zetacored query crosschain](#zetacored-query-crosschain)	- crosschain 模块查询命令
* [zetacored query distribution](#zetacored-query-distribution)	- distribution 模块查询命令
* [zetacored query emissions](#zetacored-query-emissions)	- emissions 模块查询命令
* [zetacored query evidence](#zetacored-query-evidence)	- evidence 模块查询命令
* [zetacored query evm](#zetacored-query-evm)	- evm 模块查询命令
* [zetacored query feemarket](#zetacored-query-feemarket)	- fee market 模块查询命令
* [zetacored query fungible](#zetacored-query-fungible)	- fungible 模块查询命令
* [zetacored query gov](#zetacored-query-gov)	- gov 模块查询命令
* [zetacored query group](#zetacored-query-group)	- group 模块查询命令
* [zetacored query lightclient](#zetacored-query-lightclient)	- lightclient 模块查询命令
* [zetacored query observer](#zetacored-query-observer)	- observer 模块查询命令
* [zetacored query params](#zetacored-query-params)	- params 模块查询命令
* [zetacored query slashing](#zetacored-query-slashing)	- slashing 模块查询命令
* [zetacored query staking](#zetacored-query-staking)	- staking 模块查询命令
* [zetacored query tx](#zetacored-query-tx)	- 按哈希、`[addr]/[seq]` 或签名查询已提交交易
* [zetacored query txs](#zetacored-query-txs)	- 按事件筛选并分页查询交易
* [zetacored query upgrade](#zetacored-query-upgrade)	- upgrade 模块查询命令

## zetacored query auth

auth 模块查询命令

```
zetacored query auth [flags]
```

### 选项

```
  -h, --help   查看 auth 的帮助
```

### 继承自父命令的选项

```
      --chain-id string     网络链 ID
      --home string         配置和数据文件夹
      --log_format string   日志格式 (json|plain) 
      --log_level string    日志级别 (trace|debug|info|warn|error|fatal|panic|disabled 或 '*:[level],[key]:[level]') 
      --log_no_color        禁用彩色日志
      --trace               在出错时打印完整堆栈跟踪
```

### 另请参阅

* [zetacored query](#zetacored-query)	- 查询子命令集合
* [zetacored query auth account](#zetacored-query-auth-account)	- 按地址查询账户
* [zetacored query auth account-info](#zetacored-query-auth-account-info)	- 查询适用于所有账户类型的通用信息
* [zetacored query auth accounts](#zetacored-query-auth-accounts)	- 查询所有账户
* [zetacored query auth address-by-acc-num](#zetacored-query-auth-address-by-acc-num)	- 按账户号查询地址
* [zetacored query auth address-bytes-to-string](#zetacored-query-auth-address-bytes-to-string)	- 将地址字节转换为字符串
* [zetacored query auth address-string-to-bytes](#zetacored-query-auth-address-string-to-bytes)	- 将地址字符串转换为字节
* [zetacored query auth bech32-prefix](#zetacored-query-auth-bech32-prefix)	- 查询链的 Bech32 前缀（若适用）
* [zetacored query auth module-account](#zetacored-query-auth-module-account)	- 按模块名查询模块账户信息
* [zetacored query auth module-accounts](#zetacored-query-auth-module-accounts)	- 查询所有模块账户
* [zetacored query auth params](#zetacored-query-auth-params)	- 查询当前 auth 参数

## zetacored query auth account

按地址查询账户

```
zetacored query auth account [address] [flags]
```

### 选项

```
      --grpc-addr string         使用的 gRPC 端点
      --grpc-insecure            允许在不安全通道上使用 gRPC，若未开启需使用 TLS
      --height int               在指定高度查询状态（节点裁剪状态时可能失败）
  -h, --help                     查看 account 的帮助
      --keyring-backend string   选择 keyring 后端 (os|file|kwallet|pass|test|memory) 
      --keyring-dir string       客户端 keyring 目录；未指定则使用默认 home 目录
      --no-indent                输出 JSON 时不缩进
      --node string              此链的 CometBFT RPC 地址 [host]:[port] 
  -o, --output string            输出格式 (text|json) 
```

### 继承自父命令的选项

```
      --chain-id string     网络链 ID
      --home string         配置和数据文件夹
      --log_format string   日志格式 (json|plain) 
      --log_level string    日志级别 (trace|debug|info|warn|error|fatal|panic|disabled 或 '*:[level],[key]:[level]') 
      --log_no_color        禁用彩色日志
      --trace               在出错时打印完整堆栈跟踪
```

### 另请参阅

* [zetacored query auth](#zetacored-query-auth)	- auth 模块查询命令

## zetacored query authz

authz 模块查询命令

```
zetacored query authz [flags]
```

### 选项

```
  -h, --help   查看 authz 的帮助
```

### 继承自父命令的选项

```
      --chain-id string     网络链 ID
      --home string         配置和数据文件夹
      --log_format string   日志格式 (json|plain) 
      --log_level string    日志级别 (trace|debug|info|warn|error|fatal|panic|disabled 或 '*:[level],[key]:[level]') 
      --log_no_color        禁用彩色日志
      --trace               在出错时打印完整堆栈跟踪
```

### 另请参阅

* [zetacored query](#zetacored-query)	- 查询子命令集合
* [zetacored query authz grants](#zetacored-query-authz-grants)	- 查询指定授权人/被授权人组合（及可选消息类型）的授权
* [zetacored query authz grants-by-grantee](#zetacored-query-authz-grants-by-grantee)	- 查询授予某被授权人的全部授权
* [zetacored query authz grants-by-granter](#zetacored-query-authz-grants-by-granter)	- 查询由某授权人发出的全部授权

## zetacored query authz grants

查询指定授权人/被授权人组合的授权，可选按消息类型筛选

### 概要

查询授权人与被授权人组合下的授权。若传入 msg-type-url，则仅返回该消息类型的授权。

```
zetacored query authz grants [granter-addr] [grantee-addr] [msg-type-url] [flags]
```

### 示例

```
zetacored query authz grants cosmos1skj.. cosmos1skjwj.. /cosmos.bank.v1beta1.MsgSend
```

### 选项

```
      --grpc-addr string         使用的 gRPC 端点
      --grpc-insecure            允许在不安全通道上使用 gRPC，若未开启需使用 TLS
      --height int               在指定高度查询状态（节点裁剪状态时可能失败）
  -h, --help                     查看 grants 的帮助
      --keyring-backend string   选择 keyring 后端 (os|file|kwallet|pass|test|memory) 
      --keyring-dir string       客户端 keyring 目录；未指定则使用默认 home 目录
      --no-indent                输出 JSON 时不缩进
      --node string              此链的 CometBFT RPC 地址 [host]:[port] 
  -o, --output string            输出格式 (text|json) 
      --page-count-total         
      --page-key binary          
      --page-limit uint          
      --page-offset uint         
      --page-reverse             
```

### 继承自父命令的选项

```
      --chain-id string     网络链 ID
      --home string         配置和数据文件夹
      --log_format string   日志格式 (json|plain) 
      --log_level string    日志级别 (trace|debug|info|warn|error|fatal|panic|disabled 或 '*:[level],[key]:[level]') 
      --log_no_color        禁用彩色日志
      --trace               在出错时打印完整堆栈跟踪
```

### 另请参阅

* [zetacored query authz](#zetacored-query-authz)	- authz 模块查询命令

## zetacored query authz grants-by-grantee

查询授予指定被授权人的全部授权

### 概要

查询授予某被授权人的所有授权记录。

```
zetacored query authz grants-by-grantee [grantee-addr] [flags]
```

### 选项

```
      --grpc-addr string         使用的 gRPC 端点
      --grpc-insecure            允许在不安全通道上使用 gRPC，若未开启需使用 TLS
      --height int               在指定高度查询状态（节点裁剪状态时可能失败）
  -h, --help                     查看 grants-by-grantee 的帮助
      --keyring-backend string   选择 keyring 后端 (os|file|kwallet|pass|test|memory) 
      --keyring-dir string       客户端 keyring 目录；未指定则使用默认 home 目录
      --no-indent                输出 JSON 时不缩进
      --node string              此链的 CometBFT RPC 地址 [host]:[port] 
  -o, --output string            输出格式 (text|json) 
      --page-count-total         
      --page-key binary          
      --page-limit uint          
      --page-offset uint         
      --page-reverse             
```

### 继承自父命令的选项

```
      --chain-id string     网络链 ID
      --home string         配置和数据文件夹
      --log_format string   日志格式 (json|plain) 
      --log_level string    日志级别 (trace|debug|info|warn|error|fatal|panic|disabled 或 '*:[level],[key]:[level]') 
      --log_no_color        禁用彩色日志
      --trace               在出错时打印完整堆栈跟踪
```

### 另请参阅

* [zetacored query authz](#zetacored-query-authz)	- authz 模块查询命令

## zetacored query authz grants-by-granter

查询由指定授权人发出的全部授权

### 概要

查询某授权人发出的所有授权记录。

```
zetacored query authz grants-by-granter [granter-addr] [flags]
```

### 选项

```
      --grpc-addr string         使用的 gRPC 端点
      --grpc-insecure            允许在不安全通道上使用 gRPC，若未开启需使用 TLS
      --height int               在指定高度查询状态（节点裁剪状态时可能失败）
  -h, --help                     查看 grants-by-granter 的帮助
      --keyring-backend string   选择 keyring 后端 (os|file|kwallet|pass|test|memory) 
      --keyring-dir string       客户端 keyring 目录；未指定则使用默认 home 目录
      --no-indent                输出 JSON 时不缩进
      --node string              此链的 CometBFT RPC 地址 [host]:[port] 
  -o, --output string            输出格式 (text|json) 
      --page-count-total         
      --page-key binary          
      --page-limit uint          
      --page-offset uint         
      --page-reverse             
```

### 继承自父命令的选项

```
      --chain-id string     网络链 ID
      --home string         配置和数据文件夹
      --log_format string   日志格式 (json|plain) 
      --log_level string    日志级别 (trace|debug|info|warn|error|fatal|panic|disabled 或 '*:[level],[key]:[level]') 
      --log_no_color        禁用彩色日志
      --trace               在出错时打印完整堆栈跟踪
```

### 另请参阅

* [zetacored query authz](#zetacored-query-authz)	- authz 模块查询命令

## zetacored query bank

bank 模块查询命令

```
zetacored query bank [flags]
```

### 选项

```
  -h, --help   查看 bank 的帮助
```

### 继承自父命令的选项

```
      --chain-id string     网络链 ID
      --home string         配置和数据文件夹
      --log_format string   日志格式 (json|plain) 
      --log_level string    日志级别 (trace|debug|info|warn|error|fatal|panic|disabled 或 '*:[level],[key]:[level]') 
      --log_no_color        禁用彩色日志
      --trace               在出错时打印完整堆栈跟踪
```

### 另请参阅

* [zetacored query](#zetacored-query)	- 查询子命令集合
* [zetacored query bank balance](#zetacored-query-bank-balance)	- 按地址与 denom 查询余额
* [zetacored query bank balances](#zetacored-query-bank-balances)	- 查询账户全部余额
* [zetacored query bank denom-metadata](#zetacored-query-bank-denom-metadata)	- 查询指定代币的元数据
* [zetacored query bank denom-metadata-by-query-string](#zetacored-query-bank-denom-metadata-by-query-string)	- 调用 DenomMetadataByQueryString RPC
* [zetacored query bank denom-owners](#zetacored-query-bank-denom-owners)	- 查询持有某种代币的全部地址
* [zetacored query bank denom-owners-by-query](#zetacored-query-bank-denom-owners-by-query)	- 调用 DenomOwnersByQuery RPC
* [zetacored query bank denoms-metadata](#zetacored-query-bank-denoms-metadata)	- 查询所有注册代币的元数据
* [zetacored query bank params](#zetacored-query-bank-params)	- 查询当前 bank 模块参数
* [zetacored query bank send-enabled](#zetacored-query-bank-send-enabled)	- 查询 send enabled 配置
* [zetacored query bank spendable-balance](#zetacored-query-bank-spendable-balance)	- 查询账户单一 denom 的可支配余额
* [zetacored query bank spendable-balances](#zetacored-query-bank-spendable-balances)	- 查询账户全部可支配余额
* [zetacored query bank total-supply](#zetacored-query-bank-total-supply)	- 查询链上总代币供应量
* [zetacored query bank total-supply-of](#zetacored-query-bank-total-supply-of)	- 查询单个 denom 的供应量

## zetacored query bank balance

按地址与 denom 查询余额

```
zetacored query bank balance [address] [denom] [flags]
```

### 选项

```
      --grpc-addr string         使用的 gRPC 端点
      --grpc-insecure            允许在不安全通道上使用 gRPC，若未开启需使用 TLS
      --height int               在指定高度查询状态（节点裁剪状态时可能失败）
  -h, --help                     查看 balance 的帮助
      --keyring-backend string   选择 keyring 后端 (os|file|kwallet|pass|test|memory) 
      --keyring-dir string       客户端 keyring 目录；未指定则使用默认 home 目录
      --no-indent                输出 JSON 时不缩进
      --node string              此链的 CometBFT RPC 地址 [host]:[port] 
  -o, --output string            输出格式 (text|json) 
```

### 继承自父命令的选项

```
      --chain-id string     网络链 ID
      --home string         配置和数据文件夹
      --log_format string   日志格式 (json|plain) 
      --log_level string    日志级别 (trace|debug|info|warn|error|fatal|panic|disabled 或 '*:[level],[key]:[level]') 
      --log_no_color        禁用彩色日志
      --trace               在出错时打印完整堆栈跟踪
```

### 另请参阅

* [zetacored query bank](#zetacored-query-bank)	- bank 模块查询命令

## zetacored query bank balances

按地址查询账户余额

### 概要

查询账户的全部余额或指定 denom 的余额。

```
zetacored query bank balances [address] [flags]
```

### 选项

```
      --grpc-addr string         使用的 gRPC 端点
      --grpc-insecure            允许在不安全通道上使用 gRPC，若未开启需使用 TLS
      --height int               在指定高度查询状态（节点裁剪状态时可能失败）
  -h, --help                     查看 balances 的帮助
      --keyring-backend string   选择 keyring 后端 (os|file|kwallet|pass|test|memory) 
      --keyring-dir string       客户端 keyring 目录；未指定则使用默认 home 目录
      --no-indent                输出 JSON 时不缩进
      --node string              此链的 CometBFT RPC 地址 [host]:[port] 
  -o, --output string            输出格式 (text|json) 
      --page-count-total         
      --page-key binary          
      --page-limit uint          
      --page-offset uint         
      --page-reverse             
      --resolve-denom            
```

### 继承自父命令的选项

```
      --chain-id string     网络链 ID
      --home string         配置和数据文件夹
      --log_format string   日志格式 (json|plain) 
      --log_level string    日志级别 (trace|debug|info|warn|error|fatal|panic|disabled 或 '*:[level],[key]:[level]') 
      --log_no_color        禁用彩色日志
      --trace               在出错时打印完整堆栈跟踪
```

### 另请参阅

* [zetacored query bank](#zetacored-query-bank)	- bank 模块查询命令

## zetacored query bank denom-metadata

查询指定代币的元数据

```
zetacored query bank denom-metadata [denom] [flags]
```

### 选项

```
      --grpc-addr string         使用的 gRPC 端点
      --grpc-insecure            允许在不安全通道上使用 gRPC，若未开启需使用 TLS
      --height int               在指定高度查询状态（节点裁剪状态时可能失败）
  -h, --help                     查看 denom-metadata 的帮助
      --keyring-backend string   选择 keyring 后端 (os|file|kwallet|pass|test|memory) 
      --keyring-dir string       客户端 keyring 目录；未指定则使用默认 home 目录
      --no-indent                输出 JSON 时不缩进
      --node string              此链的 CometBFT RPC 地址 [host]:[port] 
  -o, --output string            输出格式 (text|json) 
```

### 继承自父命令的选项

```
      --chain-id string     网络链 ID
      --home string         配置和数据文件夹
      --log_format string   日志格式 (json|plain) 
      --log_level string    日志级别 (trace|debug|info|warn|error|fatal|panic|disabled 或 '*:[level],[key]:[level]') 
      --log_no_color        禁用彩色日志
      --trace               在出错时打印完整堆栈跟踪
```

### 另请参阅

* [zetacored query bank](#zetacored-query-bank)	- bank 模块查询命令

## zetacored query bank denom-metadata-by-query-string

执行 DenomMetadataByQueryString RPC

```
zetacored query bank denom-metadata-by-query-string [flags]
```

### 选项

```
      --denom string             
      --grpc-addr string         使用的 gRPC 端点
      --grpc-insecure            允许在不安全通道上使用 gRPC，若未开启需使用 TLS
      --height int               在指定高度查询状态（节点裁剪状态时可能失败）
  -h, --help                     查看 denom-metadata-by-query-string 的帮助
      --keyring-backend string   选择 keyring 后端 (os|file|kwallet|pass|test|memory) 
      --keyring-dir string       客户端 keyring 目录；未指定则使用默认 home 目录
      --no-indent                输出 JSON 时不缩进
      --node string              此链的 CometBFT RPC 地址 [host]:[port] 
  -o, --output string            输出格式 (text|json) 
```

### 继承自父命令的选项

```
      --chain-id string     网络链 ID
      --home string         配置和数据文件夹
      --log_format string   日志格式 (json|plain) 
      --log_level string    日志级别 (trace|debug|info|warn|error|fatal|panic|disabled 或 '*:[level],[key]:[level]') 
      --log_no_color        禁用彩色日志
      --trace               在出错时打印完整堆栈跟踪
```

### 另请参阅

* [zetacored query bank](#zetacored-query-bank)	- bank 模块查询命令

## zetacored query bank denom-owners

查询持有指定代币 denom 的所有地址

```
zetacored query bank denom-owners [denom] [flags]
```

### 选项

```
      --grpc-addr string         使用的 gRPC 端点
      --grpc-insecure            允许在不安全通道上使用 gRPC，若未开启需使用 TLS
      --height int               在指定高度查询状态（节点裁剪状态时可能失败）
  -h, --help                     查看 denom-owners 的帮助
      --keyring-backend string   选择 keyring 后端 (os|file|kwallet|pass|test|memory) 
      --keyring-dir string       客户端 keyring 目录；未指定则使用默认 home 目录
      --no-indent                输出 JSON 时不缩进
      --node string              此链的 CometBFT RPC 地址 [host]:[port] 
  -o, --output string            输出格式 (text|json) 
      --page-count-total         
      --page-key binary          
      --page-limit uint          
      --page-offset uint         
      --page-reverse             
```

### 继承自父命令的选项

```
      --chain-id string     网络链 ID
      --home string         配置和数据文件夹
      --log_format string   日志格式 (json|plain) 
      --log_level string    日志级别 (trace|debug|info|warn|error|fatal|panic|disabled 或 '*:[level],[key]:[level]') 
      --log_no_color        禁用彩色日志
      --trace               在出错时打印完整堆栈跟踪
```

### 另请参阅

* [zetacored query bank](#zetacored-query-bank)	- bank 模块查询命令

## zetacored query bank denom-owners-by-query

执行 DenomOwnersByQuery RPC

```
zetacored query bank denom-owners-by-query [flags]
```

### 选项

```
      --denom string             
      --grpc-addr string         使用的 gRPC 端点
      --grpc-insecure            允许在不安全通道上使用 gRPC，若未开启需使用 TLS
      --height int               在指定高度查询状态（节点裁剪状态时可能失败）
  -h, --help                     查看 denom-owners-by-query 的帮助
      --keyring-backend string   选择 keyring 后端 (os|file|kwallet|pass|test|memory) 
      --keyring-dir string       客户端 keyring 目录；未指定则使用默认 home 目录
      --no-indent                输出 JSON 时不缩进
      --node string              此链的 CometBFT RPC 地址 [host]:[port] 
  -o, --output string            输出格式 (text|json) 
      --page-count-total         
      --page-key binary          
      --page-limit uint          
      --page-offset uint         
      --page-reverse             
```

### 继承自父命令的选项

```
      --chain-id string     网络链 ID
      --home string         配置和数据文件夹
      --log_format string   日志格式 (json|plain) 
      --log_level string    日志级别 (trace|debug|info|warn|error|fatal|panic|disabled 或 '*:[level],[key]:[level]') 
      --log_no_color        禁用彩色日志
      --trace               在出错时打印完整堆栈跟踪
```

### 另请参阅

* [zetacored query bank](#zetacored-query-bank)	- bank 模块查询命令

## zetacored query bank denoms-metadata

查询所有注册代币的元数据

```
zetacored query bank denoms-metadata [flags]
```

### 选项

```
      --grpc-addr string         使用的 gRPC 端点
      --grpc-insecure            允许在不安全通道上使用 gRPC，若未开启需使用 TLS
      --height int               在指定高度查询状态（节点裁剪状态时可能失败）
  -h, --help                     查看 denoms-metadata 的帮助
      --keyring-backend string   选择 keyring 后端 (os|file|kwallet|pass|test|memory) 
      --keyring-dir string       客户端 keyring 目录；未指定则使用默认 home 目录
      --no-indent                输出 JSON 时不缩进
      --node string              此链的 CometBFT RPC 地址 [host]:[port] 
  -o, --output string            输出格式 (text|json) 
      --page-count-total         
      --page-key binary          
      --page-limit uint          
      --page-offset uint         
      --page-reverse             
```

### 继承自父命令的选项

```
      --chain-id string     网络链 ID
      --home string         配置和数据文件夹
      --log_format string   日志格式 (json|plain) 
      --log_level string    日志级别 (trace|debug|info|warn|error|fatal|panic|disabled 或 '*:[level],[key]:[level]') 
      --log_no_color        禁用彩色日志
      --trace               在出错时打印完整堆栈跟踪
```

### 另请参阅

* [zetacored query bank](#zetacored-query-bank)	- bank 模块查询命令

## zetacored query bank params

查询当前 bank 模块参数

```
zetacored query bank params [flags]
```

### 选项

```
      --grpc-addr string         使用的 gRPC 端点
      --grpc-insecure            允许在不安全通道上使用 gRPC，若未开启需使用 TLS
      --height int               在指定高度查询状态（节点裁剪状态时可能失败）
  -h, --help                     查看 params 的帮助
      --keyring-backend string   选择 keyring 后端 (os|file|kwallet|pass|test|memory) 
      --keyring-dir string       客户端 keyring 目录；未指定则使用默认 home 目录
      --no-indent                输出 JSON 时不缩进
      --node string              此链的 CometBFT RPC 地址 [host]:[port] 
  -o, --output string            输出格式 (text|json) 
```

### 继承自父命令的选项

```
      --chain-id string     网络链 ID
      --home string         配置和数据文件夹
      --log_format string   日志格式 (json|plain) 
      --log_level string    日志级别 (trace|debug|info|warn|error|fatal|panic|disabled 或 '*:[level],[key]:[level]') 
      --log_no_color        禁用彩色日志
      --trace               在出错时打印完整堆栈跟踪
```

### 另请参阅

* [zetacored query bank](#zetacored-query-bank)	- bank 模块查询命令

## zetacored query bank send-enabled

查询 send enabled 条目

### 概要

查询已显式配置的 send enabled 条目。可在命令参数中指定一个或多个 denom；若不提供则查询全部。

```
zetacored query bank send-enabled [denom1 ...] [flags]
```

### 选项

```
      --grpc-addr string         使用的 gRPC 端点
      --grpc-insecure            允许在不安全通道上使用 gRPC，若未开启需使用 TLS
      --height int               在指定高度查询状态（节点裁剪状态时可能失败）
  -h, --help                     查看 send-enabled 的帮助
      --keyring-backend string   选择 keyring 后端 (os|file|kwallet|pass|test|memory) 
      --keyring-dir string       客户端 keyring 目录；未指定则使用默认 home 目录
      --no-indent                输出 JSON 时不缩进
      --node string              此链的 CometBFT RPC 地址 [host]:[port] 
  -o, --output string            输出格式 (text|json) 
      --page-count-total         
      --page-key binary          
      --page-limit uint          
      --page-offset uint         
      --page-reverse             
```

### 继承自父命令的选项

```
      --chain-id string     网络链 ID
      --home string         配置和数据文件夹
      --log_format string   日志格式 (json|plain) 
      --log_level string    日志级别 (trace|debug|info|warn|error|fatal|panic|disabled 或 '*:[level],[key]:[level]') 
      --log_no_color        禁用彩色日志
      --trace               在出错时打印完整堆栈跟踪
```

### 另请参阅

* [zetacored query bank](#zetacored-query-bank)	- bank 模块查询命令

## zetacored query bank spendable-balance

查询账户某个 denom 的可支配余额

```
zetacored query bank spendable-balance [address] [denom] [flags]
```

### 选项

```
      --grpc-addr string         使用的 gRPC 端点
      --grpc-insecure            允许在不安全通道上使用 gRPC，若未开启需使用 TLS
      --height int               在指定高度查询状态（节点裁剪状态时可能失败）
  -h, --help                     查看 spendable-balance 的帮助
      --keyring-backend string   选择 keyring 后端 (os|file|kwallet|pass|test|memory) 
      --keyring-dir string       客户端 keyring 目录；未指定则使用默认 home 目录
      --no-indent                输出 JSON 时不缩进
      --node string              此链的 CometBFT RPC 地址 [host]:[port] 
  -o, --output string            输出格式 (text|json) 
```

### 继承自父命令的选项

```
      --chain-id string     网络链 ID
      --home string         配置和数据文件夹
      --log_format string   日志格式 (json|plain) 
      --log_level string    日志级别 (trace|debug|info|warn|error|fatal|panic|disabled 或 '*:[level],[key]:[level]') 
      --log_no_color        禁用彩色日志
      --trace               在出错时打印完整堆栈跟踪
```
### 另请参阅

* [zetacored query bank](#zetacored-query-bank)	- bank 模块查询命令

## zetacored query bank spendable-balances

按地址查询账户的可支配余额

```
zetacored query bank spendable-balances [address] [flags]
```

### 选项

```
      --grpc-addr string         使用的 gRPC 端点
      --grpc-insecure            允许在不安全通道上使用 gRPC，若未开启需使用 TLS
      --height int               在指定高度查询状态（节点裁剪状态时可能失败）
  -h, --help                     查看 spendable-balances 的帮助
      --keyring-backend string   选择 keyring 后端 (os|file|kwallet|pass|test|memory) 
      --keyring-dir string       客户端 keyring 目录；未指定则使用默认 home 目录
      --no-indent                输出 JSON 时不缩进
      --node string              此链的 CometBFT RPC 地址 [host]:[port] 
  -o, --output string            输出格式 (text|json) 
      --page-count-total         
      --page-key binary          
      --page-limit uint          
      --page-offset uint         
      --page-reverse             
```

### 继承自父命令的选项

```
      --chain-id string     网络链 ID
      --home string         配置和数据文件夹
      --log_format string   日志格式 (json|plain) 
      --log_level string    日志级别 (trace|debug|info|warn|error|fatal|panic|disabled 或 '*:[level],[key]:[level]') 
      --log_no_color        禁用彩色日志
      --trace               在出错时打印完整堆栈跟踪
```

### 另请参阅

* [zetacored query bank](#zetacored-query-bank)	- bank 模块查询命令

## zetacored query bank total-supply

查询链上总代币供应量

### 概要

查询链上账户持有的总代币。若需指定 denom，请使用 `--denom` 标志。

```
zetacored query bank total-supply [flags]
```

### 选项

```
      --grpc-addr string         使用的 gRPC 端点
      --grpc-insecure            允许在不安全通道上使用 gRPC，若未开启需使用 TLS
      --height int               在指定高度查询状态（节点裁剪状态时可能失败）
  -h, --help                     查看 total-supply 的帮助
      --keyring-backend string   选择 keyring 后端 (os|file|kwallet|pass|test|memory) 
      --keyring-dir string       客户端 keyring 目录；未指定则使用默认 home 目录
      --no-indent                输出 JSON 时不缩进
      --node string              此链的 CometBFT RPC 地址 [host]:[port] 
  -o, --output string            输出格式 (text|json) 
      --page-count-total         
      --page-key binary          
      --page-limit uint          
      --page-offset uint         
      --page-reverse             
```

### 继承自父命令的选项

```
      --chain-id string     网络链 ID
      --home string         配置和数据文件夹
      --log_format string   日志格式 (json|plain) 
      --log_level string    日志级别 (trace|debug|info|warn|error|fatal|panic|disabled 或 '*:[level],[key]:[level]') 
      --log_no_color        禁用彩色日志
      --trace               在出错时打印完整堆栈跟踪
```

### 另请参阅

* [zetacored query bank](#zetacored-query-bank)	- bank 模块查询命令

## zetacored query bank total-supply-of

查询指定 denom 的供应量

```
zetacored query bank total-supply-of [denom] [flags]
```

### 选项

```
      --grpc-addr string         使用的 gRPC 端点
      --grpc-insecure            允许在不安全通道上使用 gRPC，若未开启需使用 TLS
      --height int               在指定高度查询状态（节点裁剪状态时可能失败）
  -h, --help                     查看 total-supply-of 的帮助
      --keyring-backend string   选择 keyring 后端 (os|file|kwallet|pass|test|memory) 
      --keyring-dir string       客户端 keyring 目录；未指定则使用默认 home 目录
      --no-indent                输出 JSON 时不缩进
      --node string              此链的 CometBFT RPC 地址 [host]:[port] 
  -o, --output string            输出格式 (text|json) 
```

### 继承自父命令的选项

```
      --chain-id string     网络链 ID
      --home string         配置和数据文件夹
      --log_format string   日志格式 (json|plain) 
      --log_level string    日志级别 (trace|debug|info|warn|error|fatal|panic|disabled 或 '*:[level],[key]:[level]') 
      --log_no_color        禁用彩色日志
      --trace               在出错时打印完整堆栈跟踪
```

### 另请参阅

* [zetacored query bank](#zetacored-query-bank)	- bank 模块查询命令

## zetacored query block

按高度、哈希或事件查询已提交区块

### 概要

通过 CometBFT RPC `block` 与 `block_by_hash` 方法查询指定已提交区块。

```
zetacored query block --type=[height|hash] [height|hash] [flags]
```

### 示例

```
$ zetacored query block --type=height [height]
$ zetacored query block --type=hash [hash]
```

### 选项

```
      --grpc-addr string   使用的 gRPC 端点
      --grpc-insecure      允许在不安全通道上使用 gRPC，若未开启需使用 TLS
      --height int         在指定高度查询状态（节点裁剪状态时可能失败）
  -h, --help               查看 block 的帮助
      --node string        此链的 CometBFT RPC 地址 [host]:[port] 
  -o, --output string      输出格式 (text|json) 
      --type string        查询类型，可为 "height" 或 "hash" 
```

### 继承自父命令的选项

```
      --chain-id string     网络链 ID
      --home string         配置和数据文件夹
      --log_format string   日志格式 (json|plain) 
      --log_level string    日志级别 (trace|debug|info|warn|error|fatal|panic|disabled 或 '*:[level],[key]:[level]') 
      --log_no_color        禁用彩色日志
      --trace               在出错时打印完整堆栈跟踪
```

### 另请参阅

* [zetacored query](#zetacored-query)	- 查询子命令集合

## zetacored query block-results

按高度查询已提交区块的执行结果

### 概要

通过 CometBFT RPC `block_results` 方法查询指定区块的执行结果。

```
zetacored query block-results [height] [flags]
```

### 选项

```
      --grpc-addr string   使用的 gRPC 端点
      --grpc-insecure      允许在不安全通道上使用 gRPC，若未开启需使用 TLS
      --height int         在指定高度查询状态（节点裁剪状态时可能失败）
  -h, --help               查看 block-results 的帮助
      --node string        此链的 CometBFT RPC 地址 [host]:[port] 
  -o, --output string      输出格式 (text|json) 
```

### 继承自父命令的选项

```
      --chain-id string     网络链 ID
      --home string         配置和数据文件夹
      --log_format string   日志格式 (json|plain) 
      --log_level string    日志级别 (trace|debug|info|warn|error|fatal|panic|disabled 或 '*:[level],[key]:[level]') 
      --log_no_color        禁用彩色日志
      --trace               在出错时打印完整堆栈跟踪
```

### 另请参阅

* [zetacored query](#zetacored-query)	- 查询子命令集合

## zetacored query blocks

按事件筛选并分页查询区块

### 概要

根据指定事件查询符合条件的区块，并分页返回结果。事件查询字符串会直接传给 CometBFT RPC `BlockSearch` 方法，必须遵循 CometBFT 查询语法。各模块在 `xx_events.md` 中列出了可用事件。

```
zetacored query blocks [flags]
```

### 示例

```
$ zetacored query blocks --query "message.sender='cosmos1...' AND block.height > 7" --page 1 --limit 30 --order_by asc
```

### 选项

```
      --grpc-addr string   使用的 gRPC 端点
      --grpc-insecure      允许在不安全通道上使用 gRPC，若未开启需使用 TLS
      --height int         在指定高度查询状态（节点裁剪状态时可能失败）
  -h, --help               查看 blocks 的帮助
      --limit int          每页返回的结果数量 (default 100)
      --node string        此链的 CometBFT RPC 地址 [host]:[port] 
      --order_by string    排序方式 (asc|dsc)
  -o, --output string      输出格式 (text|json) 
      --page int           查询的页码 (default 1)
      --query string       遵循 CometBFT 语法的事件查询
```

### 继承自父命令的选项

```
      --chain-id string     网络链 ID
      --home string         配置和数据文件夹
      --log_format string   日志格式 (json|plain) 
      --log_level string    日志级别 (trace|debug|info|warn|error|fatal|panic|disabled 或 '*:[level],[key]:[level]') 
      --log_no_color        禁用彩色日志
      --trace               在出错时打印完整堆栈跟踪
```

### 另请参阅

* [zetacored query](#zetacored-query)	- 查询子命令集合

## zetacored query comet-validator-set

查询指定高度的 CometBFT 验证人集合

```
zetacored query comet-validator-set [height] [flags]
```

### 选项

```
  -h, --help            查看 comet-validator-set 的帮助
      --limit int       每页返回的结果数量 (default 100)
      --node string     此链的 CometBFT RPC 地址 [host]:[port] 
  -o, --output string   输出格式 (text|json) 
      --page int        查询的页码 (default 1)
```

### 继承自父命令的选项

```
      --chain-id string     网络链 ID
      --home string         配置和数据文件夹
      --log_format string   日志格式 (json|plain) 
      --log_level string    日志级别 (trace|debug|info|warn|error|fatal|panic|disabled 或 '*:[level],[key]:[level]') 
      --log_no_color        禁用彩色日志
      --trace               在出错时打印完整堆栈跟踪
```

### 另请参阅

* [zetacored query](#zetacored-query)	- 查询子命令集合

## zetacored query consensus

consensus 模块查询命令

```
zetacored query consensus [flags]
```

### 选项

```
  -h, --help   查看 consensus 的帮助
```

### 继承自父命令的选项

```
      --chain-id string     网络链 ID
      --home string         配置和数据文件夹
      --log_format string   日志格式 (json|plain) 
      --log_level string    日志级别 (trace|debug|info|warn|error|fatal|panic|disabled 或 '*:[level],[key]:[level]') 
      --log_no_color        禁用彩色日志
      --trace               在出错时打印完整堆栈跟踪
```

### 另请参阅

* [zetacored query](#zetacored-query)	- 查询子命令集合
* [zetacored query consensus comet](#zetacored-query-consensus-comet)	- cosmos.base.tendermint.v1beta1 服务命令
* [zetacored query consensus params](#zetacored-query-consensus-params)	- 查询当前共识参数

## zetacored query consensus comet

cosmos.base.tendermint.v1beta1 服务命令

```
zetacored query consensus comet [flags]
```

### 选项

```
  -h, --help   查看 comet 的帮助
```

### 继承自父命令的选项

```
      --chain-id string     网络链 ID
      --home string         配置和数据文件夹
      --log_format string   日志格式 (json|plain) 
      --log_level string    日志级别 (trace|debug|info|warn|error|fatal|panic|disabled 或 '*:[level],[key]:[level]') 
      --log_no_color        禁用彩色日志
      --trace               在出错时打印完整堆栈跟踪
```

### 另请参阅

* [zetacored query consensus](#zetacored-query-consensus)	- consensus 模块查询命令
* [zetacored query consensus comet block-by-height](#zetacored-query-consensus-comet-block-by-height)	- 按高度查询区块
* [zetacored query consensus comet block-latest](#zetacored-query-consensus-comet-block-latest)	- 查询最新区块
* [zetacored query consensus comet node-info](#zetacored-query-consensus-comet-node-info)	- 查询当前节点信息
* [zetacored query consensus comet syncing](#zetacored-query-consensus-comet-syncing)	- 查询节点同步状态
* [zetacored query consensus comet validator-set](#zetacored-query-consensus-comet-validator-set)	- 查询最新验证人集合
* [zetacored query consensus comet validator-set-by-height](#zetacored-query-consensus-comet-validator-set-by-height)	- 按高度查询验证人集合

## zetacored query consensus comet block-by-height

按高度查询已提交区块

### 概要

通过 CometBFT RPC `block_by_height` 方法查询指定高度的已提交区块。

```
zetacored query consensus comet block-by-height [height] [flags]
```

### 选项

```
      --grpc-addr string         使用的 gRPC 端点
      --grpc-insecure            允许在不安全通道上使用 gRPC，若未开启需使用 TLS
      --height int               在指定高度查询状态（节点裁剪状态时可能失败）
  -h, --help                     查看 block-by-height 的帮助
      --keyring-backend string   选择 keyring 后端 (os|file|kwallet|pass|test|memory) 
      --keyring-dir string       客户端 keyring 目录；未指定则使用默认 home 目录
      --no-indent                输出 JSON 时不缩进
      --node string              此链的 CometBFT RPC 地址 [host]:[port] 
  -o, --output string            输出格式 (text|json) 
```

### 继承自父命令的选项

```
      --chain-id string     网络链 ID
      --home string         配置和数据文件夹
      --log_format string   日志格式 (json|plain) 
      --log_level string    日志级别 (trace|debug|info|warn|error|fatal|panic|disabled 或 '*:[level],[key]:[level]') 
      --log_no_color        禁用彩色日志
      --trace               在出错时打印完整堆栈跟踪
```

### 另请参阅

* [zetacored query consensus comet](#zetacored-query-consensus-comet)	- cosmos.base.tendermint.v1beta1 服务命令

## zetacored query consensus comet block-latest

查询最新已提交区块

```
zetacored query consensus comet block-latest [flags]
```

### 选项

```
      --grpc-addr string         使用的 gRPC 端点
      --grpc-insecure            允许在不安全通道上使用 gRPC，若未开启需使用 TLS
      --height int               在指定高度查询状态（节点裁剪状态时可能失败）
  -h, --help                     查看 block-latest 的帮助
      --keyring-backend string   选择 keyring 后端 (os|file|kwallet|pass|test|memory) 
      --keyring-dir string       客户端 keyring 目录；未指定则使用默认 home 目录
      --no-indent                输出 JSON 时不缩进
      --node string              此链的 CometBFT RPC 地址 [host]:[port] 
  -o, --output string            输出格式 (text|json) 
```

### 继承自父命令的选项

```
      --chain-id string     网络链 ID
      --home string         配置和数据文件夹
      --log_format string   日志格式 (json|plain) 
      --log_level string    日志级别 (trace|debug|info|warn|error|fatal|panic|disabled 或 '*:[level],[key]:[level]') 
      --log_no_color        禁用彩色日志
      --trace               在出错时打印完整堆栈跟踪
```

### 另请参阅

* [zetacored query consensus comet](#zetacored-query-consensus-comet)	- cosmos.base.tendermint.v1beta1 服务命令

## zetacored query consensus comet node-info

查询当前节点信息

```
zetacored query consensus comet node-info [flags]
```

### 选项

```
      --grpc-addr string         使用的 gRPC 端点
      --grpc-insecure            允许在不安全通道上使用 gRPC，若未开启需使用 TLS
      --height int               在指定高度查询状态（节点裁剪状态时可能失败）
  -h, --help                     查看 node-info 的帮助
      --keyring-backend string   选择 keyring 后端 (os|file|kwallet|pass|test|memory) 
      --keyring-dir string       客户端 keyring 目录；未指定则使用默认 home 目录
      --no-indent                输出 JSON 时不缩进
      --node string              此链的 CometBFT RPC 地址 [host]:[port] 
  -o, --output string            输出格式 (text|json) 
```

### 继承自父命令的选项

```
      --chain-id string     网络链 ID
      --home string         配置和数据文件夹
      --log_format string   日志格式 (json|plain) 
      --log_level string    日志级别 (trace|debug|info|warn|error|fatal|panic|disabled 或 '*:[level],[key]:[level]') 
      --log_no_color        禁用彩色日志
      --trace               在出错时打印完整堆栈跟踪
```

### 另请参阅

* [zetacored query consensus comet](#zetacored-query-consensus-comet)	- cosmos.base.tendermint.v1beta1 服务命令

## zetacored query consensus comet syncing

查询节点同步状态

```
zetacored query consensus comet syncing [flags]
```

### 选项

```
      --grpc-addr string         使用的 gRPC 端点
      --grpc-insecure            允许在不安全通道上使用 gRPC，若未开启需使用 TLS
      --height int               在指定高度查询状态（节点裁剪状态时可能失败）
  -h, --help                     查看 syncing 的帮助
      --keyring-backend string   选择 keyring 后端 (os|file|kwallet|pass|test|memory) 
      --keyring-dir string       客户端 keyring 目录；未指定则使用默认 home 目录
      --no-indent                输出 JSON 时不缩进
      --node string              此链的 CometBFT RPC 地址 [host]:[port] 
  -o, --output string            输出格式 (text|json) 
```

### 继承自父命令的选项

```
      --chain-id string     网络链 ID
      --home string         配置和数据文件夹
      --log_format string   日志格式 (json|plain) 
      --log_level string    日志级别 (trace|debug|info|warn|error|fatal|panic|disabled 或 '*:[level],[key]:[level]') 
      --log_no_color        禁用彩色日志
      --trace               在出错时打印完整堆栈跟踪
```

### 另请参阅

* [zetacored query consensus comet](#zetacored-query-consensus-comet)	- cosmos.base.tendermint.v1beta1 服务命令

## zetacored query consensus comet validator-set

查询最新验证人集合

```
zetacored query consensus comet validator-set [flags]
```

### 选项

```
      --grpc-addr string         使用的 gRPC 端点
      --grpc-insecure            允许在不安全通道上使用 gRPC，若未开启需使用 TLS
      --height int               在指定高度查询状态（节点裁剪状态时可能失败）
  -h, --help                     查看 validator-set 的帮助
      --keyring-backend string   选择 keyring 后端 (os|file|kwallet|pass|test|memory) 
      --keyring-dir string       客户端 keyring 目录；未指定则使用默认 home 目录
      --no-indent                输出 JSON 时不缩进
      --node string              此链的 CometBFT RPC 地址 [host]:[port] 
  -o, --output string            输出格式 (text|json) 
      --page-count-total         
      --page-key binary          
      --page-limit uint          
      --page-offset uint         
      --page-reverse             
```

### 继承自父命令的选项

```
      --chain-id string     网络链 ID
      --home string         配置和数据文件夹
      --log_format string   日志格式 (json|plain) 
      --log_level string    日志级别 (trace|debug|info|warn|error|fatal|panic|disabled 或 '*:[level],[key]:[level]') 
      --log_no_color        禁用彩色日志
      --trace               在出错时打印完整堆栈跟踪
```

### 另请参阅

* [zetacored query consensus comet](#zetacored-query-consensus-comet)	- cosmos.base.tendermint.v1beta1 服务命令

## zetacored query consensus comet validator-set-by-height

按高度查询验证人集合

```
zetacored query consensus comet validator-set-by-height [height] [flags]
```

### 选项

```
      --grpc-addr string         使用的 gRPC 端点
      --grpc-insecure            允许在不安全通道上使用 gRPC，若未开启需使用 TLS
      --height int               在指定高度查询状态（节点裁剪状态时可能失败）
  -h, --help                     查看 validator-set-by-height 的帮助
      --keyring-backend string   选择 keyring 后端 (os|file|kwallet|pass|test|memory) 
      --keyring-dir string       客户端 keyring 目录；未指定则使用默认 home 目录
      --no-indent                输出 JSON 时不缩进
      --node string              此链的 CometBFT RPC 地址 [host]:[port] 
  -o, --output string            输出格式 (text|json) 
      --page-count-total         
      --page-key binary          
      --page-limit uint          
      --page-offset uint         
      --page-reverse             
```

### 继承自父命令的选项

```
      --chain-id string     网络链 ID
      --home string         配置和数据文件夹
      --log_format string   日志格式 (json|plain) 
      --log_level string    日志级别 (trace|debug|info|warn|error|fatal|panic|disabled 或 '*:[level],[key]:[level]') 
      --log_no_color        禁用彩色日志
      --trace               在出错时打印完整堆栈跟踪
```

### 另请参阅

* [zetacored query consensus comet](#zetacored-query-consensus-comet)	- cosmos.base.tendermint.v1beta1 服务命令

## zetacored query consensus params

查询当前共识参数

```
zetacored query consensus params [flags]
```

### 选项

```
      --grpc-addr string         使用的 gRPC 端点
      --grpc-insecure            允许在不安全通道上使用 gRPC，若未开启需使用 TLS
      --height int               在指定高度查询状态（节点裁剪状态时可能失败）
  -h, --help                     查看 params 的帮助
      --keyring-backend string   选择 keyring 后端 (os|file|kwallet|pass|test|memory) 
      --keyring-dir string       客户端 keyring 目录；未指定则使用默认 home 目录
      --no-indent                输出 JSON 时不缩进
      --node string              此链的 CometBFT RPC 地址 [host]:[port] 
  -o, --output string            输出格式 (text|json) 
```

### 继承自父命令的选项

```
      --chain-id string     网络链 ID
      --home string         配置和数据文件夹
      --log_format string   日志格式 (json|plain) 
      --log_level string    日志级别 (trace|debug|info|warn|error|fatal|panic|disabled 或 '*:[level],[key]:[level]') 
      --log_no_color        禁用彩色日志
      --trace               在出错时打印完整堆栈跟踪
```

### 另请参阅

* [zetacored query consensus](#zetacored-query-consensus)	- consensus 模块查询命令

## zetacored query crosschain

crosschain 模块查询命令

```
zetacored query crosschain [flags]
```

### 选项

```
  -h, --help   查看 crosschain 的帮助
```

### 继承自父命令的选项

```
      --chain-id string     网络链 ID
      --home string         配置和数据文件夹
      --log_format string   日志格式 (json|plain) 
      --log_level string    日志级别 (trace|debug|info|warn|error|fatal|panic|disabled 或 '*:[level],[key]:[level]') 
      --log_no_color        禁用彩色日志
      --trace               在出错时打印完整堆栈跟踪
```

### 另请参阅

* [zetacored query](#zetacored-query)	- 查询子命令集合
* [zetacored query crosschain get-zeta-accounting](#zetacored-query-crosschain-get-zeta-accounting)	- 查询 ZETA 统计
* [zetacored query crosschain inbound-hash-to-cctx-data](#zetacored-query-crosschain-inbound-hash-to-cctx-data)	- 通过 inbound 哈希查询 CCTX 数据
* [zetacored query crosschain last-zeta-height](#zetacored-query-crosschain-last-zeta-height)	- 查询最新 Zeta 高度
* [zetacored query crosschain list-all-inbound-trackers](#zetacored-query-crosschain-list-all-inbound-trackers)	- 查看全部 inbound tracker
* [zetacored query crosschain list-cctx](#zetacored-query-crosschain-list-cctx)	- 列出全部 CCTX
* [zetacored query crosschain list-gas-price](#zetacored-query-crosschain-list-gas-price)	- 列出全部 gasPrice
* [zetacored query crosschain list-inbound-hash-to-cctx](#zetacored-query-crosschain-list-inbound-hash-to-cctx)	- 列出全部 inboundHashToCctx
* [zetacored query crosschain list-inbound-tracker](#zetacored-query-crosschain-list-inbound-tracker)	- 按链 ID 查看 inbound tracker 列表
* [zetacored query crosschain list-outbound-tracker](#zetacored-query-crosschain-list-outbound-tracker)	- 列出全部 outbound tracker
* [zetacored query crosschain list-pending-cctx](#zetacored-query-crosschain-list-pending-cctx)	- 查看待处理 CCTX
* [zetacored query crosschain list_pending_cctx_within_rate_limit](#zetacored-query-crosschain-list_pending_cctx_within-rate-limit)	- 查看限额内的待处理 CCTX
* [zetacored query crosschain show-cctx](#zetacored-query-crosschain-show-cctx)	- 查看单个 CCTX
* [zetacored query crosschain show-gas-price](#zetacored-query-crosschain-show-gas-price)	- 查看单个 gasPrice
* [zetacored query crosschain show-inbound-hash-to-cctx](#zetacored-query-crosschain-show-inbound-hash-to-cctx)	- 查看单个 inboundHashToCctx
* [zetacored query crosschain show-inbound-tracker](#zetacored-query-crosschain-show-inbound-tracker)	- 按链 ID 与 txHash 查看 inbound tracker
* [zetacored query crosschain show-outbound-tracker](#zetacored-query-crosschain-show-outbound-tracker)	- 查看单个 outbound tracker
* [zetacored query crosschain show-rate-limiter-flags](#zetacored-query-crosschain-show-rate-limiter-flags)	- 查看限流标志

## zetacored query crosschain get-zeta-accounting

查询 ZETA 统计

```
zetacored query crosschain get-zeta-accounting [flags]
```

### 选项

```
      --grpc-addr string   使用的 gRPC 端点
      --grpc-insecure      允许在不安全通道上使用 gRPC，若未开启需使用 TLS
      --height int         在指定高度查询状态（节点裁剪状态时可能失败）
  -h, --help               查看 get-zeta-accounting 的帮助
      --node string        此链的 CometBFT RPC 地址 [host]:[port] 
  -o, --output string      输出格式 (text|json) 
```

### 继承自父命令的选项

```
      --chain-id string     网络链 ID
      --home string         配置和数据文件夹
      --log_format string   日志格式 (json|plain) 
      --log_level string    日志级别 (trace|debug|info|warn|error|fatal|panic|disabled 或 '*:[level],[key]:[level]') 
      --log_no_color        禁用彩色日志
      --trace               在出错时打印完整堆栈跟踪
```

### 另请参阅

* [zetacored query crosschain](#zetacored-query-crosschain)	- crosschain 模块查询命令

## zetacored query crosschain inbound-hash-to-cctx-data

通过 inbound 哈希查询 CCTX 数据

```
zetacored query crosschain inbound-hash-to-cctx-data [inbound-hash] [flags]
```

### 选项

```
      --grpc-addr string   使用的 gRPC 端点
      --grpc-insecure      允许在不安全通道上使用 gRPC，若未开启需使用 TLS
      --height int         在指定高度查询状态（节点裁剪状态时可能失败）
  -h, --help               查看 inbound-hash-to-cctx-data 的帮助
      --node string        此链的 CometBFT RPC 地址 [host]:[port] 
  -o, --output string      输出格式 (text|json) 
```

### 继承自父命令的选项

```
      --chain-id string     网络链 ID
      --home string         配置和数据文件夹
      --log_format string   日志格式 (json|plain) 
      --log_level string    日志级别 (trace|debug|info|warn|error|fatal|panic|disabled 或 '*:[level],[key]:[level]') 
      --log_no_color        禁用彩色日志
      --trace               在出错时打印完整堆栈跟踪
```

### 另请参阅

* [zetacored query crosschain](#zetacored-query-crosschain)	- crosschain 模块查询命令

## zetacored query crosschain last-zeta-height

查询最新 Zeta 高度

```
zetacored query crosschain last-zeta-height [flags]
```

### 选项

```
      --grpc-addr string   使用的 gRPC 端点
      --grpc-insecure      允许在不安全通道上使用 gRPC，若未开启需使用 TLS
      --height int         在指定高度查询状态（节点裁剪状态时可能失败）
  -h, --help               查看 last-zeta-height 的帮助
      --node string        此链的 CometBFT RPC 地址 [host]:[port] 
  -o, --output string      输出格式 (text|json) 
```

### 继承自父命令的选项

```
      --chain-id string     网络链 ID
      --home string         配置和数据文件夹
      --log_format string   日志格式 (json|plain) 
      --log_level string    日志级别 (trace|debug|info|warn|error|fatal|panic|disabled 或 '*:[level],[key]:[level]') 
      --log_no_color        禁用彩色日志
      --trace               在出错时打印完整堆栈跟踪
```

### 另请参阅

* [zetacored query crosschain](#zetacored-query-crosschain)	- crosschain 模块查询命令

## zetacored query crosschain list-all-inbound-trackers

查看全部 inbound tracker

```
zetacored query crosschain list-all-inbound-trackers [flags]
```

### 选项

```
      --grpc-addr string   使用的 gRPC 端点
      --grpc-insecure      允许在不安全通道上使用 gRPC，若未开启需使用 TLS
      --height int         在指定高度查询状态（节点裁剪状态时可能失败）
  -h, --help               查看 list-all-inbound-trackers 的帮助
      --node string        此链的 CometBFT RPC 地址 [host]:[port] 
  -o, --output string      输出格式 (text|json) 
```
### 继承自父命令的选项

```
      --chain-id string     网络链 ID
      --home string         配置和数据文件夹
      --log_format string   日志格式 (json|plain) 
      --log_level string    日志级别 (trace|debug|info|warn|error|fatal|panic|disabled 或 '*:[level],[key]:[level]') 
      --log_no_color        禁用彩色日志
      --trace               在出错时打印完整堆栈跟踪
```

### 另请参阅

* [zetacored query crosschain](#zetacored-query-crosschain)	- crosschain 模块查询命令

## zetacored query crosschain list-cctx

列出全部 CCTX

```
zetacored query crosschain list-cctx [flags]
```

### 选项

```
      --count-total        统计 list-cctx 的记录总数
      --grpc-addr string   使用的 gRPC 端点
      --grpc-insecure      允许在不安全通道上使用 gRPC，若未开启需使用 TLS
      --height int         在指定高度查询状态（节点裁剪状态时可能失败）
  -h, --help               查看 list-cctx 的帮助
      --limit uint         list-cctx 的分页条数 (default 100)
      --node string        此链的 CometBFT RPC 地址 [host]:[port] 
      --offset uint        list-cctx 的分页偏移
  -o, --output string      输出格式 (text|json) 
      --page uint          list-cctx 的分页页码，设置后 offset 为 limit 的倍数 (default 1)
      --page-key string    list-cctx 的分页 page-key
      --reverse            按降序返回结果
```

### 继承自父命令的选项

```
      --chain-id string     网络链 ID
      --home string         配置和数据文件夹
      --log_format string   日志格式 (json|plain) 
      --log_level string    日志级别 (trace|debug|info|warn|error|fatal|panic|disabled 或 '*:[level],[key]:[level]') 
      --log_no_color        禁用彩色日志
      --trace               在出错时打印完整堆栈跟踪
```

### 另请参阅

* [zetacored query crosschain](#zetacored-query-crosschain)	- crosschain 模块查询命令

## zetacored query crosschain list-gas-price

列出全部 gasPrice

```
zetacored query crosschain list-gas-price [flags]
```

### 选项

```
      --count-total        统计 list-gas-price 的记录总数
      --grpc-addr string   使用的 gRPC 端点
      --grpc-insecure      允许在不安全通道上使用 gRPC，若未开启需使用 TLS
      --height int         在指定高度查询状态（节点裁剪状态时可能失败）
  -h, --help               查看 list-gas-price 的帮助
      --limit uint         list-gas-price 的分页条数 (default 100)
      --node string        此链的 CometBFT RPC 地址 [host]:[port] 
      --offset uint        list-gas-price 的分页偏移
  -o, --output string      输出格式 (text|json) 
      --page uint          list-gas-price 的分页页码 (default 1)
      --page-key string    list-gas-price 的分页 page-key
      --reverse            按降序返回结果
```

### 继承自父命令的选项

```
      --chain-id string     网络链 ID
      --home string         配置和数据文件夹
      --log_format string   日志格式 (json|plain) 
      --log_level string    日志级别 (trace|debug|info|warn|error|fatal|panic|disabled 或 '*:[level],[key]:[level]') 
      --log_no_color        禁用彩色日志
      --trace               在出错时打印完整堆栈跟踪
```

### 另请参阅

* [zetacored query crosschain](#zetacored-query-crosschain)	- crosschain 模块查询命令

## zetacored query crosschain list-inbound-hash-to-cctx

列出全部 inboundHashToCctx

```
zetacored query crosschain list-inbound-hash-to-cctx [flags]
```

### 选项

```
      --count-total        统计 list-inbound-hash-to-cctx 的记录总数
      --grpc-addr string   使用的 gRPC 端点
      --grpc-insecure      允许在不安全通道上使用 gRPC，若未开启需使用 TLS
      --height int         在指定高度查询状态（节点裁剪状态时可能失败）
  -h, --help               查看 list-inbound-hash-to-cctx 的帮助
      --limit uint         list-inbound-hash-to-cctx 的分页条数 (default 100)
      --node string        此链的 CometBFT RPC 地址 [host]:[port] 
      --offset uint        list-inbound-hash-to-cctx 的分页偏移
  -o, --output string      输出格式 (text|json) 
      --page uint          list-inbound-hash-to-cctx 的分页页码 (default 1)
      --page-key string    list-inbound-hash-to-cctx 的分页 page-key
      --reverse            按降序返回结果
```

### 继承自父命令的选项

```
      --chain-id string     网络链 ID
      --home string         配置和数据文件夹
      --log_format string   日志格式 (json|plain) 
      --log_level string    日志级别 (trace|debug|info|warn|error|fatal|panic|disabled 或 '*:[level],[key]:[level]') 
      --log_no_color        禁用彩色日志
      --trace               在出错时打印完整堆栈跟踪
```

### 另请参阅

* [zetacored query crosschain](#zetacored-query-crosschain)	- crosschain 模块查询命令

## zetacored query crosschain list-inbound-tracker

按链 ID 查看 inbound tracker 列表

```
zetacored query crosschain list-inbound-tracker [chain-id] [flags]
```

### 选项

```
      --count-total        统计 list-inbound-tracker 的记录总数
      --grpc-addr string   使用的 gRPC 端点
      --grpc-insecure      允许在不安全通道上使用 gRPC，若未开启需使用 TLS
      --height int         在指定高度查询状态（节点裁剪状态时可能失败）
  -h, --help               查看 list-inbound-tracker 的帮助
      --limit uint         list-inbound-tracker 的分页条数 (default 100)
      --node string        此链的 CometBFT RPC 地址 [host]:[port] 
      --offset uint        list-inbound-tracker 的分页偏移
  -o, --output string      输出格式 (text|json) 
      --page uint          list-inbound-tracker 的分页页码 (default 1)
      --page-key string    list-inbound-tracker 的分页 page-key
      --reverse            按降序返回结果
```

### 继承自父命令的选项

```
      --chain-id string     网络链 ID
      --home string         配置和数据文件夹
      --log_format string   日志格式 (json|plain) 
      --log_level string    日志级别 (trace|debug|info|warn|error|fatal|panic|disabled 或 '*:[level],[key]:[level]') 
      --log_no_color        禁用彩色日志
      --trace               在出错时打印完整堆栈跟踪
```

### 另请参阅

* [zetacored query crosschain](#zetacored-query-crosschain)	- crosschain 模块查询命令

## zetacored query crosschain list-outbound-tracker

列出全部 outbound tracker

```
zetacored query crosschain list-outbound-tracker [flags]
```

### 选项

```
      --count-total        统计 list-outbound-tracker 的记录总数
      --grpc-addr string   使用的 gRPC 端点
      --grpc-insecure      允许在不安全通道上使用 gRPC，若未开启需使用 TLS
      --height int         在指定高度查询状态（节点裁剪状态时可能失败）
  -h, --help               查看 list-outbound-tracker 的帮助
      --limit uint         list-outbound-tracker 的分页条数 (default 100)
      --node string        此链的 CometBFT RPC 地址 [host]:[port] 
      --offset uint        list-outbound-tracker 的分页偏移
  -o, --output string      输出格式 (text|json) 
      --page uint          list-outbound-tracker 的分页页码 (default 1)
      --page-key string    list-outbound-tracker 的分页 page-key
      --reverse            按降序返回结果
```

### 继承自父命令的选项

```
      --chain-id string     网络链 ID
      --home string         配置和数据文件夹
      --log_format string   日志格式 (json|plain) 
      --log_level string    日志级别 (trace|debug|info|warn|error|fatal|panic|disabled 或 '*:[level],[key]:[level]') 
      --log_no_color        禁用彩色日志
      --trace               在出错时打印完整堆栈跟踪
```

### 另请参阅

* [zetacored query crosschain](#zetacored-query-crosschain)	- crosschain 模块查询命令

## zetacored query crosschain list-pending-cctx

查看待处理 CCTX

```
zetacored query crosschain list-pending-cctx [chain-id] [limit] [flags]
```

### 选项

```
      --grpc-addr string   使用的 gRPC 端点
      --grpc-insecure      允许在不安全通道上使用 gRPC，若未开启需使用 TLS
      --height int         在指定高度查询状态（节点裁剪状态时可能失败）
  -h, --help               查看 list-pending-cctx 的帮助
      --node string        此链的 CometBFT RPC 地址 [host]:[port] 
  -o, --output string      输出格式 (text|json) 
```

### 继承自父命令的选项

```
      --chain-id string     网络链 ID
      --home string         配置和数据文件夹
      --log_format string   日志格式 (json|plain) 
      --log_level string    日志级别 (trace|debug|info|warn|error|fatal|panic|disabled 或 '*:[level],[key]:[level]') 
      --log_no_color        禁用彩色日志
      --trace               在出错时打印完整堆栈跟踪
```

### 另请参阅

* [zetacored query crosschain](#zetacored-query-crosschain)	- crosschain 模块查询命令

## zetacored query crosschain list_pending_cctx_within_rate_limit

查看限额内的待处理 CCTX

```
zetacored query crosschain list_pending_cctx_within_rate_limit [flags]
```

### 选项

```
      --count-total        统计 list_pending_cctx_within_rate_limit 的记录总数
      --grpc-addr string   使用的 gRPC 端点
      --grpc-insecure      允许在不安全通道上使用 gRPC，若未开启需使用 TLS
      --height int         在指定高度查询状态（节点裁剪状态时可能失败）
  -h, --help               查看 list_pending_cctx_within_rate_limit 的帮助
      --limit uint         list_pending_cctx_within_rate_limit 的分页条数 (default 100)
      --node string        此链的 CometBFT RPC 地址 [host]:[port] 
      --offset uint        list_pending_cctx_within_rate_limit 的分页偏移
  -o, --output string      输出格式 (text|json) 
      --page uint          list_pending_cctx_within_rate_limit 的分页页码 (default 1)
      --page-key string    list_pending_cctx_within_rate_limit 的分页 page-key
      --reverse            按降序返回结果
```

### 继承自父命令的选项

```
      --chain-id string     网络链 ID
      --home string         配置和数据文件夹
      --log_format string   日志格式 (json|plain) 
      --log_level string    日志级别 (trace|debug|info|warn|error|fatal|panic|disabled 或 '*:[level],[key]:[level]') 
      --log_no_color        禁用彩色日志
      --trace               在出错时打印完整堆栈跟踪
```

### 另请参阅

* [zetacored query crosschain](#zetacored-query-crosschain)	- crosschain 模块查询命令

## zetacored query crosschain show-cctx

查看单个 CCTX

```
zetacored query crosschain show-cctx [index] [flags]
```

### 选项

```
      --grpc-addr string   使用的 gRPC 端点
      --grpc-insecure      允许在不安全通道上使用 gRPC，若未开启需使用 TLS
      --height int         在指定高度查询状态（节点裁剪状态时可能失败）
  -h, --help               查看 show-cctx 的帮助
      --node string        此链的 CometBFT RPC 地址 [host]:[port] 
  -o, --output string      输出格式 (text|json) 
```

### 继承自父命令的选项

```
      --chain-id string     网络链 ID
      --home string         配置和数据文件夹
      --log_format string   日志格式 (json|plain) 
      --log_level string    日志级别 (trace|debug|info|warn|error|fatal|panic|disabled 或 '*:[level],[key]:[level]') 
      --log_no_color        禁用彩色日志
      --trace               在出错时打印完整堆栈跟踪
```

### 另请参阅

* [zetacored query crosschain](#zetacored-query-crosschain)	- crosschain 模块查询命令

## zetacored query crosschain show-gas-price

查看单个 gasPrice

```
zetacored query crosschain show-gas-price [index] [flags]
```

### 选项

```
      --grpc-addr string   使用的 gRPC 端点
      --grpc-insecure      允许在不安全通道上使用 gRPC，若未开启需使用 TLS
      --height int         在指定高度查询状态（节点裁剪状态时可能失败）
  -h, --help               查看 show-gas-price 的帮助
      --node string        此链的 CometBFT RPC 地址 [host]:[port] 
  -o, --output string      输出格式 (text|json) 
```

### 继承自父命令的选项

```
      --chain-id string     网络链 ID
      --home string         配置和数据文件夹
      --log_format string   日志格式 (json|plain) 
      --log_level string    日志级别 (trace|debug|info|warn|error|fatal|panic|disabled 或 '*:[level],[key]:[level]') 
      --log_no_color        禁用彩色日志
      --trace               在出错时打印完整堆栈跟踪
```

### 另请参阅

* [zetacored query crosschain](#zetacored-query-crosschain)	- crosschain 模块查询命令

## zetacored query crosschain show-inbound-hash-to-cctx

查看单个 inboundHashToCctx

```
zetacored query crosschain show-inbound-hash-to-cctx [index] [flags]
```

### 选项

```
      --grpc-addr string   使用的 gRPC 端点
      --grpc-insecure      允许在不安全通道上使用 gRPC，若未开启需使用 TLS
      --height int         在指定高度查询状态（节点裁剪状态时可能失败）
  -h, --help               查看 show-inbound-hash-to-cctx 的帮助
      --node string        此链的 CometBFT RPC 地址 [host]:[port] 
  -o, --output string      输出格式 (text|json) 
```

### 继承自父命令的选项

```
      --chain-id string     网络链 ID
      --home string         配置和数据文件夹
      --log_format string   日志格式 (json|plain) 
      --log_level string    日志级别 (trace|debug|info|warn|error|fatal|panic|disabled 或 '*:[level],[key]:[level]') 
      --log_no_color        禁用彩色日志
      --trace               在出错时打印完整堆栈跟踪
```

### 另请参阅

* [zetacored query crosschain](#zetacored-query-crosschain)	- crosschain 模块查询命令

## zetacored query crosschain show-inbound-tracker

按链 ID 与 txHash 查看 inbound tracker

```
zetacored query crosschain show-inbound-tracker [chain-id] [tx-hash] [flags]
```

### 选项

```
      --grpc-addr string   使用的 gRPC 端点
      --grpc-insecure      允许在不安全通道上使用 gRPC，若未开启需使用 TLS
      --height int         在指定高度查询状态（节点裁剪状态时可能失败）
  -h, --help               查看 show-inbound-tracker 的帮助
      --node string        此链的 CometBFT RPC 地址 [host]:[port] 
  -o, --output string      输出格式 (text|json) 
```

### 继承自父命令的选项

```
      --chain-id string     网络链 ID
      --home string         配置和数据文件夹
      --log_format string   日志格式 (json|plain) 
      --log_level string    日志级别 (trace|debug|info|warn|error|fatal|panic|disabled 或 '*:[level],[key]:[level]') 
      --log_no_color        禁用彩色日志
      --trace               在出错时打印完整堆栈跟踪
```

### 另请参阅

* [zetacored query crosschain](#zetacored-query-crosschain)	- crosschain 模块查询命令

## zetacored query crosschain show-outbound-tracker

查看单个 outbound tracker

```
zetacored query crosschain show-outbound-tracker [index] [flags]
```

### 选项

```
      --grpc-addr string   使用的 gRPC 端点
      --grpc-insecure      允许在不安全通道上使用 gRPC，若未开启需使用 TLS
      --height int         在指定高度查询状态（节点裁剪状态时可能失败）
  -h, --help               查看 show-outbound-tracker 的帮助
      --node string        此链的 CometBFT RPC 地址 [host]:[port] 
  -o, --output string      输出格式 (text|json) 
```

### 继承自父命令的选项

```
      --chain-id string     网络链 ID
      --home string         配置和数据文件夹
      --log_format string   日志格式 (json|plain) 
      --log_level string    日志级别 (trace|debug|info|warn|error|fatal|panic|disabled 或 '*:[level],[key]:[level]') 
      --log_no_color        禁用彩色日志
      --trace               在出错时打印完整堆栈跟踪
```

### 另请参阅

* [zetacored query crosschain](#zetacored-query-crosschain)	- crosschain 模块查询命令

## zetacored query crosschain show-rate-limiter-flags

查看限流标志

```
zetacored query crosschain show-rate-limiter-flags [flags]
```

### 选项

```
      --grpc-addr string   使用的 gRPC 端点
      --grpc-insecure      允许在不安全通道上使用 gRPC，若未开启需使用 TLS
      --height int         在指定高度查询状态（节点裁剪状态时可能失败）
  -h, --help               查看 show-rate-limiter-flags 的帮助
      --node string        此链的 CometBFT RPC 地址 [host]:[port] 
  -o, --output string      输出格式 (text|json) 
```

### 继承自父命令的选项

```
      --chain-id string     网络链 ID
      --home string         配置和数据文件夹
      --log_format string   日志格式 (json|plain) 
      --log_level string    日志级别 (trace|debug|info|warn|error|fatal|panic|disabled 或 '*:[level],[key]:[level]') 
      --log_no_color        禁用彩色日志
      --trace               在出错时打印完整堆栈跟踪
```

### 另请参阅

* [zetacored query crosschain](#zetacored-query-crosschain)	- crosschain 模块查询命令

## zetacored query distribution

distribution 模块查询命令

```
zetacored query distribution [flags]
```

### 选项

```
  -h, --help   查看 distribution 的帮助
```

### 继承自父命令的选项

```
      --chain-id string     网络链 ID
      --home string         配置和数据文件夹
      --log_format string   日志格式 (json|plain) 
      --log_level string    日志级别 (trace|debug|info|warn|error|fatal|panic|disabled 或 '*:[level],[key]:[level]') 
      --log_no_color        禁用彩色日志
      --trace               在出错时打印完整堆栈跟踪
```

### 另请参阅

* [zetacored query](#zetacored-query)	- 查询子命令集合
* [zetacored query distribution commission](#zetacored-query-distribution-commission)	- 查询验证人分配佣金
* [zetacored query distribution community-pool](#zetacored-query-distribution-community-pool)	- 查询社区资金池资产
* [zetacored query distribution delegator-validators](#zetacored-query-distribution-delegator-validators)	- 调用 DelegatorValidators RPC
* [zetacored query distribution delegator-withdraw-address](#zetacored-query-distribution-delegator-withdraw-address)	- 调用 DelegatorWithdrawAddress RPC
* [zetacored query distribution params](#zetacored-query-distribution-params)	- 查询 distribution 模块参数
* [zetacored query distribution rewards](#zetacored-query-distribution-rewards)	- 查询委托人全部奖励
* [zetacored query distribution rewards-by-validator](#zetacored-query-distribution-rewards-by-validator)	- 查询来自指定验证人的委托奖励
* [zetacored query distribution slashes](#zetacored-query-distribution-slashes)	- 查询验证人惩罚记录
* [zetacored query distribution validator-distribution-info](#zetacored-query-distribution-validator-distribution-info)	- 查询验证人分配信息
* [zetacored query distribution validator-outstanding-rewards](#zetacored-query-distribution-validator-outstanding-rewards)	- 查询验证人及其委托未提取奖励

## zetacored query distribution commission

查询验证人分配佣金

```
zetacored query distribution commission [validator] [flags]
```

### 示例

```
$ zetacored query distribution commission [validator-address]
```

### 选项

```
      --grpc-addr string         使用的 gRPC 端点
      --grpc-insecure            允许在不安全通道上使用 gRPC，若未开启需使用 TLS
      --height int               在指定高度查询状态（节点裁剪状态时可能失败）
  -h, --help                     查看 commission 的帮助
      --keyring-backend string   选择 keyring 后端 (os|file|kwallet|pass|test|memory) 
      --keyring-dir string       客户端 keyring 目录；未指定则使用默认 home 目录
      --no-indent                输出 JSON 时不缩进
      --node string              此链的 CometBFT RPC 地址 [host]:[port] 
  -o, --output string            输出格式 (text|json) 
```

### 继承自父命令的选项

```
      --chain-id string     网络链 ID
      --home string         配置和数据文件夹
      --log_format string   日志格式 (json|plain) 
      --log_level string    日志级别 (trace|debug|info|warn|error|fatal|panic|disabled 或 '*:[level],[key]:[level]') 
      --log_no_color        禁用彩色日志
      --trace               在出错时打印完整堆栈跟踪
```

### 另请参阅

* [zetacored query distribution](#zetacored-query-distribution)	- distribution 模块查询命令

## zetacored query distribution community-pool

查询社区资金池资产

```
zetacored query distribution community-pool [flags]
```

### 示例

```
$ zetacored query distribution community-pool
```

### 选项

```
      --grpc-addr string         使用的 gRPC 端点
      --grpc-insecure            允许在不安全通道上使用 gRPC，若未开启需使用 TLS
      --height int               在指定高度查询状态（节点裁剪状态时可能失败）
  -h, --help                     查看 community-pool 的帮助
      --keyring-backend string   选择 keyring 后端 (os|file|kwallet|pass|test|memory) 
      --keyring-dir string       客户端 keyring 目录；未指定则使用默认 home 目录
      --no-indent                输出 JSON 时不缩进
      --node string              此链的 CometBFT RPC 地址 [host]:[port] 
  -o, --output string            输出格式 (text|json) 
```

### 继承自父命令的选项

```
      --chain-id string     网络链 ID
      --home string         配置和数据文件夹
      --log_format string   日志格式 (json|plain) 
      --log_level string    日志级别 (trace|debug|info|warn|error|fatal|panic|disabled 或 '*:[level],[key]:[level]') 
      --log_no_color        禁用彩色日志
      --trace               在出错时打印完整堆栈跟踪
```

### 另请参阅

* [zetacored query distribution](#zetacored-query-distribution)	- distribution 模块查询命令

## zetacored query distribution delegator-validators

调用 DelegatorValidators RPC

```
zetacored query distribution delegator-validators [flags]
```

### 选项

```
      --delegator-address   账户地址或密钥名称
      --grpc-addr string    使用的 gRPC 端点
      --grpc-insecure       允许在不安全通道上使用 gRPC，若未开启需使用 TLS
      --height int          在指定高度查询状态（节点裁剪状态时可能失败）
  -h, --help                查看 delegator-validators 的帮助
      --keyring-backend string   选择 keyring 后端 (os|file|kwallet|pass|test|memory) 
      --keyring-dir string       客户端 keyring 目录；未指定则使用默认 home 目录
      --no-indent                输出 JSON 时不缩进
      --node string              此链的 CometBFT RPC 地址 [host]:[port] 
  -o, --output string            输出格式 (text|json) 
```

### 继承自父命令的选项

```
      --chain-id string     网络链 ID
      --home string         配置和数据文件夹
      --log_format string   日志格式 (json|plain) 
      --log_level string    日志级别 (trace|debug|info|warn|error|fatal|panic|disabled 或 '*:[level],[key]:[level]') 
      --log_no_color        禁用彩色日志
      --trace               在出错时打印完整堆栈跟踪
```

### 另请参阅

* [zetacored query distribution](#zetacored-query-distribution)	- distribution 模块查询命令

## zetacored query distribution delegator-withdraw-address

调用 DelegatorWithdrawAddress RPC

```
zetacored query distribution delegator-withdraw-address [flags]
```

### 选项

```
      --delegator-address   账户地址或密钥名称
      --grpc-addr string    使用的 gRPC 端点
      --grpc-insecure       允许在不安全通道上使用 gRPC，若未开启需使用 TLS
      --height int          在指定高度查询状态（节点裁剪状态时可能失败）
  -h, --help                查看 delegator-withdraw-address 的帮助
      --keyring-backend string   选择 keyring 后端 (os|file|kwallet|pass|test|memory) 
      --keyring-dir string       客户端 keyring 目录；未指定则使用默认 home 目录
      --no-indent                输出 JSON 时不缩进
      --node string              此链的 CometBFT RPC 地址 [host]:[port] 
  -o, --output string            输出格式 (text|json) 
```

### 继承自父命令的选项

```
      --chain-id string     网络链 ID
      --home string         配置和数据文件夹
      --log_format string   日志格式 (json|plain) 
      --log_level string    日志级别 (trace|debug|info|warn|error|fatal|panic|disabled 或 '*:[level],[key]:[level]') 
      --log_no_color        禁用彩色日志
      --trace               在出错时打印完整堆栈跟踪
```

### 另请参阅

* [zetacored query distribution](#zetacored-query-distribution)	- distribution 模块查询命令

## zetacored query distribution params

查询 distribution 模块参数

```
zetacored query distribution params [flags]
```

### 选项

```
      --grpc-addr string         使用的 gRPC 端点
      --grpc-insecure            允许在不安全通道上使用 gRPC，若未开启需使用 TLS
      --height int               在指定高度查询状态（节点裁剪状态时可能失败）
  -h, --help                     查看 params 的帮助
      --keyring-backend string   选择 keyring 后端 (os|file|kwallet|pass|test|memory) 
      --keyring-dir string       客户端 keyring 目录；未指定则使用默认 home 目录
      --no-indent                输出 JSON 时不缩进
      --node string              此链的 CometBFT RPC 地址 [host]:[port] 
  -o, --output string            输出格式 (text|json) 
```

### 继承自父命令的选项

```
      --chain-id string     网络链 ID
      --home string         配置和数据文件夹
      --log_format string   日志格式 (json|plain) 
      --log_level string    日志级别 (trace|debug|info|warn|error|fatal|panic|disabled 或 '*:[level],[key]:[level]') 
      --log_no_color        禁用彩色日志
      --trace               在出错时打印完整堆栈跟踪
```

### 另请参阅

* [zetacored query distribution](#zetacored-query-distribution)	- distribution 模块查询命令

## zetacored query distribution rewards

查询委托人全部奖励

### 概要

查询某个委托人已获得的所有奖励。

```
zetacored query distribution rewards [delegator-addr] [flags]
```

### 示例

```
$ zetacored query distribution rewards [delegator-address]
```

### 选项

```
      --grpc-addr string         使用的 gRPC 端点
      --grpc-insecure            允许在不安全通道上使用 gRPC，若未开启需使用 TLS
      --height int               在指定高度查询状态（节点裁剪状态时可能失败）
  -h, --help                     查看 rewards 的帮助
      --keyring-backend string   选择 keyring 后端 (os|file|kwallet|pass|test|memory) 
      --keyring-dir string       客户端 keyring 目录；未指定则使用默认 home 目录
      --no-indent                输出 JSON 时不缩进
      --node string              此链的 CometBFT RPC 地址 [host]:[port] 
  -o, --output string            输出格式 (text|json) 
```

### 继承自父命令的选项

```
      --chain-id string     网络链 ID
      --home string         配置和数据文件夹
      --log_format string   日志格式 (json|plain) 
      --log_level string    日志级别 (trace|debug|info|warn|error|fatal|panic|disabled 或 '*:[level],[key]:[level]') 
      --log_no_color        禁用彩色日志
      --trace               在出错时打印完整堆栈跟踪
```
### 另请参阅

* [zetacored query distribution](#zetacored-query-distribution)	- distribution 模块查询命令

## zetacored query distribution rewards-by-validator

查询来自指定验证人的委托奖励

```
zetacored query distribution rewards-by-validator [delegator-addr] [validator-addr] [flags]
```

### 示例

```
$ zetacored query distribution rewards [delegator-address] [validator-address]
```

### 选项

```
      --grpc-addr string         使用的 gRPC 端点
      --grpc-insecure            允许在不安全通道上使用 gRPC，若未开启需使用 TLS
      --height int               在指定高度查询状态（节点裁剪状态时可能失败）
  -h, --help                     查看 rewards-by-validator 的帮助
      --keyring-backend string   选择 keyring 后端 (os|file|kwallet|pass|test|memory) 
      --keyring-dir string       客户端 keyring 目录；未指定则使用默认 home 目录
      --no-indent                输出 JSON 时不缩进
      --node string              此链的 CometBFT RPC 地址 [host]:[port] 
  -o, --output string            输出格式 (text|json) 
```

### 继承自父命令的选项

```
      --chain-id string     网络链 ID
      --home string         配置和数据文件夹
      --log_format string   日志格式 (json|plain) 
      --log_level string    日志级别 (trace|debug|info|warn|error|fatal|panic|disabled 或 '*:[level],[key]:[level]') 
      --log_no_color        禁用彩色日志
      --trace               在出错时打印完整堆栈跟踪
```

### 另请参阅

* [zetacored query distribution](#zetacored-query-distribution)	- distribution 模块查询命令

## zetacored query distribution slashes

查询验证人惩罚记录

```
zetacored query distribution slashes [validator] [start-height] [end-height] [flags]
```

### 示例

```
$ zetacored query distribution slashes [validator-address] 0 100
```

### 选项

```
      --grpc-addr string         使用的 gRPC 端点
      --grpc-insecure            允许在不安全通道上使用 gRPC，若未开启需使用 TLS
      --height int               在指定高度查询状态（节点裁剪状态时可能失败）
  -h, --help                     查看 slashes 的帮助
      --keyring-backend string   选择 keyring 后端 (os|file|kwallet|pass|test|memory) 
      --keyring-dir string       客户端 keyring 目录；未指定则使用默认 home 目录
      --no-indent                输出 JSON 时不缩进
      --node string              此链的 CometBFT RPC 地址 [host]:[port] 
  -o, --output string            输出格式 (text|json) 
      --page-count-total         
      --page-key binary          
      --page-limit uint          
      --page-offset uint         
      --page-reverse             
```

### 继承自父命令的选项

```
      --chain-id string     网络链 ID
      --home string         配置和数据文件夹
      --log_format string   日志格式 (json|plain) 
      --log_level string    日志级别 (trace|debug|info|warn|error|fatal|panic|disabled 或 '*:[level],[key]:[level]') 
      --log_no_color        禁用彩色日志
      --trace               在出错时打印完整堆栈跟踪
```

### 另请参阅

* [zetacored query distribution](#zetacored-query-distribution)	- distribution 模块查询命令

## zetacored query distribution validator-distribution-info

查询验证人分配信息

```
zetacored query distribution validator-distribution-info [validator] [flags]
```

### 示例

```
示例: $ zetacored query distribution validator-distribution-info [validator-address]
```

### 选项

```
      --grpc-addr string         使用的 gRPC 端点
      --grpc-insecure            允许在不安全通道上使用 gRPC，若未开启需使用 TLS
      --height int               在指定高度查询状态（节点裁剪状态时可能失败）
  -h, --help                     查看 validator-distribution-info 的帮助
      --keyring-backend string   选择 keyring 后端 (os|file|kwallet|pass|test|memory) 
      --keyring-dir string       客户端 keyring 目录；未指定则使用默认 home 目录
      --no-indent                输出 JSON 时不缩进
      --node string              此链的 CometBFT RPC 地址 [host]:[port] 
  -o, --output string            输出格式 (text|json) 
```

### 继承自父命令的选项

```
      --chain-id string     网络链 ID
      --home string         配置和数据文件夹
      --log_format string   日志格式 (json|plain) 
      --log_level string    日志级别 (trace|debug|info|warn|error|fatal|panic|disabled 或 '*:[level],[key]:[level]') 
      --log_no_color        禁用彩色日志
      --trace               在出错时打印完整堆栈跟踪
```

### 另请参阅

* [zetacored query distribution](#zetacored-query-distribution)	- distribution 模块查询命令

## zetacored query distribution validator-outstanding-rewards

查询验证人及其委托未提取奖励

```
zetacored query distribution validator-outstanding-rewards [validator] [flags]
```

### 示例

```
$ zetacored query distribution validator-outstanding-rewards [validator-address]
```

### 选项

```
      --grpc-addr string         使用的 gRPC 端点
      --grpc-insecure            允许在不安全通道上使用 gRPC，若未开启需使用 TLS
      --height int               在指定高度查询状态（节点裁剪状态时可能失败）
  -h, --help                     查看 validator-outstanding-rewards 的帮助
      --keyring-backend string   选择 keyring 后端 (os|file|kwallet|pass|test|memory) 
      --keyring-dir string       客户端 keyring 目录；未指定则使用默认 home 目录
      --no-indent                输出 JSON 时不缩进
      --node string              此链的 CometBFT RPC 地址 [host]:[port] 
  -o, --output string            输出格式 (text|json) 
```

### 继承自父命令的选项

```
      --chain-id string     网络链 ID
      --home string         配置和数据文件夹
      --log_format string   日志格式 (json|plain) 
      --log_level string    日志级别 (trace|debug|info|warn|error|fatal|panic|disabled 或 '*:[level],[key]:[level]') 
      --log_no_color        禁用彩色日志
      --trace               在出错时打印完整堆栈跟踪
```

### 另请参阅

* [zetacored query distribution](#zetacored-query-distribution)	- distribution 模块查询命令

## zetacored query emissions

emissions 模块查询命令

```
zetacored query emissions [flags]
```

### 选项

```
  -h, --help   查看 emissions 的帮助
```

### 继承自父命令的选项

```
      --chain-id string     网络链 ID
      --home string         配置和数据文件夹
      --log_format string   日志格式 (json|plain) 
      --log_level string    日志级别 (trace|debug|info|warn|error|fatal|panic|disabled 或 '*:[level],[key]:[level]') 
      --log_no_color        禁用彩色日志
      --trace               在出错时打印完整堆栈跟踪
```

### 另请参阅

* [zetacored query](#zetacored-query)	- 查询子命令集合
* [zetacored query emissions list-pool-addresses](#zetacored-query-emissions-list-pool-addresses)	- 查询池地址列表
* [zetacored query emissions params](#zetacored-query-emissions-params)	- 查看模块参数
* [zetacored query emissions show-available-emissions](#zetacored-query-emissions-show-available-emissions)	- 查询可用排放额度

## zetacored query emissions list-pool-addresses

查询池地址列表

```
zetacored query emissions list-pool-addresses [flags]
```

### 选项

```
      --grpc-addr string   使用的 gRPC 端点
      --grpc-insecure      允许在不安全通道上使用 gRPC，若未开启需使用 TLS
      --height int         在指定高度查询状态（节点裁剪状态时可能失败）
  -h, --help               查看 list-pool-addresses 的帮助
      --node string        此链的 CometBFT RPC 地址 [host]:[port] 
  -o, --output string      输出格式 (text|json) 
```

### 继承自父命令的选项

```
      --chain-id string     网络链 ID
      --home string         配置和数据文件夹
      --log_format string   日志格式 (json|plain) 
      --log_level string    日志级别 (trace|debug|info|warn|error|fatal|panic|disabled 或 '*:[level],[key]:[level]') 
      --log_no_color        禁用彩色日志
      --trace               在出错时打印完整堆栈跟踪
```

### 另请参阅

* [zetacored query emissions](#zetacored-query-emissions)	- emissions 模块查询命令

## zetacored query emissions params

查看模块参数

```
zetacored query emissions params [flags]
```

### 选项

```
      --grpc-addr string   使用的 gRPC 端点
      --grpc-insecure      允许在不安全通道上使用 gRPC，若未开启需使用 TLS
      --height int         在指定高度查询状态（节点裁剪状态时可能失败）
  -h, --help               查看 params 的帮助
      --node string        此链的 CometBFT RPC 地址 [host]:[port] 
  -o, --output string      输出格式 (text|json) 
```

### 继承自父命令的选项

```
      --chain-id string     网络链 ID
      --home string         配置和数据文件夹
      --log_format string   日志格式 (json|plain) 
      --log_level string    日志级别 (trace|debug|info|warn|error|fatal|panic|disabled 或 '*:[level],[key]:[level]') 
      --log_no_color        禁用彩色日志
      --trace               在出错时打印完整堆栈跟踪
```

### 另请参阅

* [zetacored query emissions](#zetacored-query-emissions)	- emissions 模块查询命令

## zetacored query emissions show-available-emissions

查询可用排放额度

```
zetacored query emissions show-available-emissions [address] [flags]
```

### 选项

```
      --grpc-addr string   使用的 gRPC 端点
      --grpc-insecure      允许在不安全通道上使用 gRPC，若未开启需使用 TLS
      --height int         在指定高度查询状态（节点裁剪状态时可能失败）
  -h, --help               查看 show-available-emissions 的帮助
      --node string        此链的 CometBFT RPC 地址 [host]:[port] 
  -o, --output string      输出格式 (text|json) 
```

### 继承自父命令的选项

```
      --chain-id string     网络链 ID
      --home string         配置和数据文件夹
      --log_format string   日志格式 (json|plain) 
      --log_level string    日志级别 (trace|debug|info|warn|error|fatal|panic|disabled 或 '*:[level],[key]:[level]') 
      --log_no_color        禁用彩色日志
      --trace               在出错时打印完整堆栈跟踪
```

### 另请参阅

* [zetacored query emissions](#zetacored-query-emissions)	- emissions 模块查询命令

## zetacored query evidence

evidence 模块查询命令

```
zetacored query evidence [flags]
```

### 选项

```
  -h, --help   查看 evidence 的帮助
```

### 继承自父命令的选项

```
      --chain-id string     网络链 ID
      --home string         配置和数据文件夹
      --log_format string   日志格式 (json|plain) 
      --log_level string    日志级别 (trace|debug|info|warn|error|fatal|panic|disabled 或 '*:[level],[key]:[level]') 
      --log_no_color        禁用彩色日志
      --trace               在出错时打印完整堆栈跟踪
```

### 另请参阅

* [zetacored query](#zetacored-query)	- 查询子命令集合
* [zetacored query evidence evidence](#zetacored-query-evidence-evidence)	- 按哈希查询证据
* [zetacored query evidence list](#zetacored-query-evidence-list)	- 查询全部（分页）已提交证据

## zetacored query evidence evidence

按哈希查询证据

```
zetacored query evidence evidence [hash] [flags]
```

### 示例

```
zetacored query evidence evidence DF0C23E8634E480F84B9D5674A7CDC9816466DEC28A3358F73260F68D28D7660
```

### 选项

```
      --evidence-hash binary     证据哈希
      --grpc-addr string         使用的 gRPC 端点
      --grpc-insecure            允许在不安全通道上使用 gRPC，若未开启需使用 TLS
      --height int               在指定高度查询状态（节点裁剪状态时可能失败）
  -h, --help                     查看 evidence 的帮助
      --keyring-backend string   选择 keyring 后端 (os|file|kwallet|pass|test|memory) 
      --keyring-dir string       客户端 keyring 目录；未指定则使用默认 home 目录
      --no-indent                输出 JSON 时不缩进
      --node string              此链的 CometBFT RPC 地址 [host]:[port] 
  -o, --output string            输出格式 (text|json) 
```

### 继承自父命令的选项

```
      --chain-id string     网络链 ID
      --home string         配置和数据文件夹
      --log_format string   日志格式 (json|plain) 
      --log_level string    日志级别 (trace|debug|info|warn|error|fatal|panic|disabled 或 '*:[level],[key]:[level]') 
      --log_no_color        禁用彩色日志
      --trace               在出错时打印完整堆栈跟踪
```

### 另请参阅

* [zetacored query evidence](#zetacored-query-evidence)	- evidence 模块查询命令

## zetacored query evidence list

查询全部（分页）已提交证据

```
zetacored query evidence list [flags]
```

### 示例

```
zetacored query evidence list --page=2 --page-limit=50
```

### 选项

```
      --grpc-addr string         使用的 gRPC 端点
      --grpc-insecure            允许在不安全通道上使用 gRPC，若未开启需使用 TLS
      --height int               在指定高度查询状态（节点裁剪状态时可能失败）
  -h, --help                     查看 list 的帮助
      --keyring-backend string   选择 keyring 后端 (os|file|kwallet|pass|test|memory) 
      --keyring-dir string       客户端 keyring 目录；未指定则使用默认 home 目录
      --no-indent                输出 JSON 时不缩进
      --node string              此链的 CometBFT RPC 地址 [host]:[port] 
  -o, --output string            输出格式 (text|json) 
      --page-count-total         
      --page-key binary          
      --page-limit uint          
      --page-offset uint         
      --page-reverse             
```

### 继承自父命令的选项

```
      --chain-id string     网络链 ID
      --home string         配置和数据文件夹
      --log_format string   日志格式 (json|plain) 
      --log_level string    日志级别 (trace|debug|info|warn|error|fatal|panic|disabled 或 '*:[level],[key]:[level]') 
      --log_no_color        禁用彩色日志
      --trace               在出错时打印完整堆栈跟踪
```

### 另请参阅

* [zetacored query evidence](#zetacored-query-evidence)	- evidence 模块查询命令

## zetacored query authority

authority 模块查询命令

```
zetacored query authority [flags]
```

### 选项

```
  -h, --help   查看 authority 的帮助
```

### 继承自父命令的选项

```
      --chain-id string     网络链 ID
      --home string         配置和数据文件夹
      --log_format string   日志格式 (json|plain) 
      --log_level string    日志级别 (trace|debug|info|warn|error|fatal|panic|disabled 或 '*:[level],[key]:[level]') 
      --log_no_color        禁用彩色日志
      --trace               在出错时打印完整堆栈跟踪
```

### 另请参阅

* [zetacored query](#zetacored-query)	- 查询子命令集合
* [zetacored query authority list-authorizations](#zetacored-query-authority-list-authorizations)	- 列出所有授权
* [zetacored query authority show-authorization](#zetacored-query-authority-show-authorization)	- 查看指定消息 URL 的授权
* [zetacored query authority show-chain-info](#zetacored-query-authority-show-chain-info)	- 查看链信息
* [zetacored query authority show-policies](#zetacored-query-authority-show-policies)	- 查看策略

## zetacored query authority list-authorizations

列出所有授权

```
zetacored query authority list-authorizations [flags]
```

### 选项

```
      --grpc-addr string   使用的 gRPC 端点
      --grpc-insecure      允许在不安全通道上使用 gRPC，若未开启需使用 TLS
      --height int         在指定高度查询状态（节点裁剪状态时可能失败）
  -h, --help               查看 list-authorizations 的帮助
      --node string        此链的 CometBFT RPC 地址 [host]:[port] 
  -o, --output string      输出格式 (text|json) 
```

### 继承自父命令的选项

```
      --chain-id string     网络链 ID
      --home string         配置和数据文件夹
      --log_format string   日志格式 (json|plain) 
      --log_level string    日志级别 (trace|debug|info|warn|error|fatal|panic|disabled 或 '*:[level],[key]:[level]') 
      --log_no_color        禁用彩色日志
      --trace               在出错时打印完整堆栈跟踪
```

### 另请参阅

* [zetacored query authority](#zetacored-query-authority)	- authority 模块查询命令

## zetacored query authority show-authorization

查看指定消息 URL 的授权

```
zetacored query authority show-authorization [msg-url] [flags]
```

### 选项

```
      --grpc-addr string   使用的 gRPC 端点
      --grpc-insecure      允许在不安全通道上使用 gRPC，若未开启需使用 TLS
      --height int         在指定高度查询状态（节点裁剪状态时可能失败）
  -h, --help               查看 show-authorization 的帮助
      --node string        此链的 CometBFT RPC 地址 [host]:[port] 
  -o, --output string      输出格式 (text|json) 
```

### 继承自父命令的选项

```
      --chain-id string     网络链 ID
      --home string         配置和数据文件夹
      --log_format string   日志格式 (json|plain) 
      --log_level string    日志级别 (trace|debug|info|warn|error|fatal|panic|disabled 或 '*:[level],[key]:[level]') 
      --log_no_color        禁用彩色日志
      --trace               在出错时打印完整堆栈跟踪
```

### 另请参阅

* [zetacored query authority](#zetacored-query-authority)	- authority 模块查询命令

## zetacored query authority show-chain-info

查看链信息

```
zetacored query authority show-chain-info [flags]
```

### 选项

```
      --grpc-addr string   使用的 gRPC 端点
      --grpc-insecure      允许在不安全通道上使用 gRPC，若未开启需使用 TLS
      --height int         在指定高度查询状态（节点裁剪状态时可能失败）
  -h, --help               查看 show-chain-info 的帮助
      --node string        此链的 CometBFT RPC 地址 [host]:[port] 
  -o, --output string      输出格式 (text|json) 
```

### 继承自父命令的选项

```
      --chain-id string     网络链 ID
      --home string         配置和数据文件夹
      --log_format string   日志格式 (json|plain) 
      --log_level string    日志级别 (trace|debug|info|warn|error|fatal|panic|disabled 或 '*:[level],[key]:[level]') 
      --log_no_color        禁用彩色日志
      --trace               在出错时打印完整堆栈跟踪
```

### 另请参阅

* [zetacored query authority](#zetacored-query-authority)	- authority 模块查询命令

## zetacored query authority show-policies

查看策略

```
zetacored query authority show-policies [flags]
```

### 选项

```
      --grpc-addr string   使用的 gRPC 端点
      --grpc-insecure      允许在不安全通道上使用 gRPC，若未开启需使用 TLS
      --height int         在指定高度查询状态（节点裁剪状态时可能失败）
  -h, --help               查看 show-policies 的帮助
      --node string        此链的 CometBFT RPC 地址 [host]:[port] 
  -o, --output string      输出格式 (text|json) 
```

### 继承自父命令的选项

```
      --chain-id string     网络链 ID
      --home string         配置和数据文件夹
      --log_format string   日志格式 (json|plain) 
      --log_level string    日志级别 (trace|debug|info|warn|error|fatal|panic|disabled 或 '*:[level],[key]:[level]') 
      --log_no_color        禁用彩色日志
      --trace               在出错时打印完整堆栈跟踪
```

### 另请参阅

* [zetacored query authority](#zetacored-query-authority)	- authority 模块查询命令

## zetacored query auth account-info

查询适用于所有账户类型的通用信息

```
zetacored query auth account-info [address] [flags]
```

### 选项

```
      --grpc-addr string         使用的 gRPC 端点
      --grpc-insecure            允许在不安全通道上使用 gRPC，若未开启需使用 TLS
      --height int               在指定高度查询状态（节点裁剪状态时可能失败）
  -h, --help                     查看 account-info 的帮助
      --keyring-backend string   选择 keyring 后端 (os|file|kwallet|pass|test|memory) 
      --keyring-dir string       客户端 keyring 目录；未指定则使用默认 home 目录
      --no-indent                输出 JSON 时不缩进
      --node string              此链的 CometBFT RPC 地址 [host]:[port] 
  -o, --output string            输出格式 (text|json) 
```

### 继承自父命令的选项

```
      --chain-id string     网络链 ID
      --home string         配置和数据文件夹
      --log_format string   日志格式 (json|plain) 
      --log_level string    日志级别 (trace|debug|info|warn|error|fatal|panic|disabled 或 '*:[level],[key]:[level]') 
      --log_no_color        禁用彩色日志
      --trace               在出错时打印完整堆栈跟踪
```

### 另请参阅

* [zetacored query auth](#zetacored-query-auth)	- auth 模块查询命令

## zetacored query auth accounts

查询所有账户

```
zetacored query auth accounts [flags]
```

### 选项

```
      --grpc-addr string         使用的 gRPC 端点
      --grpc-insecure            允许在不安全通道上使用 gRPC，若未开启需使用 TLS
      --height int               在指定高度查询状态（节点裁剪状态时可能失败）
  -h, --help                     查看 accounts 的帮助
      --keyring-backend string   选择 keyring 后端 (os|file|kwallet|pass|test|memory) 
      --keyring-dir string       客户端 keyring 目录；未指定则使用默认 home 目录
      --no-indent                输出 JSON 时不缩进
      --node string              此链的 CometBFT RPC 地址 [host]:[port] 
  -o, --output string            输出格式 (text|json) 
      --page-count-total         
      --page-key binary          
      --page-limit uint          
      --page-offset uint         
      --page-reverse             
```

### 继承自父命令的选项

```
      --chain-id string     网络链 ID
      --home string         配置和数据文件夹
      --log_format string   日志格式 (json|plain) 
      --log_level string    日志级别 (trace|debug|info|warn|error|fatal|panic|disabled 或 '*:[level],[key]:[level]') 
      --log_no_color        禁用彩色日志
      --trace               在出错时打印完整堆栈跟踪
```

### 另请参阅

* [zetacored query auth](#zetacored-query-auth)	- auth 模块查询命令

## zetacored query auth address-by-acc-num

按账户号查询地址

```
zetacored query auth address-by-acc-num [acc-num] [flags]
```

### 选项

```
      --grpc-addr string         使用的 gRPC 端点
      --grpc-insecure            允许在不安全通道上使用 gRPC，若未开启需使用 TLS
      --height int               在指定高度查询状态（节点裁剪状态时可能失败）
  -h, --help                     查看 address-by-acc-num 的帮助
      --id int                   
      --keyring-backend string   选择 keyring 后端 (os|file|kwallet|pass|test|memory) 
      --keyring-dir string       客户端 keyring 目录；未指定则使用默认 home 目录
      --no-indent                输出 JSON 时不缩进
      --node string              此链的 CometBFT RPC 地址 [host]:[port] 
  -o, --output string            输出格式 (text|json) 
```

### 继承自父命令的选项

```
      --chain-id string     网络链 ID
      --home string         配置和数据文件夹
      --log_format string   日志格式 (json|plain) 
      --log_level string    日志级别 (trace|debug|info|warn|error|fatal|panic|disabled 或 '*:[level],[key]:[level]') 
      --log_no_color        禁用彩色日志
      --trace               在出错时打印完整堆栈跟踪
```

### 另请参阅

* [zetacored query auth](#zetacored-query-auth)	- auth 模块查询命令

## zetacored query auth address-bytes-to-string

将地址字节转换为字符串

```
zetacored query auth address-bytes-to-string [address-bytes] [flags]
```

### 选项

```
      --grpc-addr string         使用的 gRPC 端点
      --grpc-insecure            允许在不安全通道上使用 gRPC，若未开启需使用 TLS
      --height int               在指定高度查询状态（节点裁剪状态时可能失败）
  -h, --help                     查看 address-bytes-to-string 的帮助
      --keyring-backend string   选择 keyring 后端 (os|file|kwallet|pass|test|memory) 
      --keyring-dir string       客户端 keyring 目录；未指定则使用默认 home 目录
      --no-indent                输出 JSON 时不缩进
      --node string              此链的 CometBFT RPC 地址 [host]:[port] 
  -o, --output string            输出格式 (text|json) 
```

### 继承自父命令的选项

```
      --chain-id string     网络链 ID
      --home string         配置和数据文件夹
      --log_format string   日志格式 (json|plain) 
      --log_level string    日志级别 (trace|debug|info|warn|error|fatal|panic|disabled 或 '*:[level],[key]:[level]') 
      --log_no_color        禁用彩色日志
      --trace               在出错时打印完整堆栈跟踪
```

### 另请参阅

* [zetacored query auth](#zetacored-query-auth)	- auth 模块查询命令

## zetacored query auth address-string-to-bytes

将地址字符串转换为字节

```
zetacored query auth address-string-to-bytes [address-string] [flags]
```

### 选项

```
      --grpc-addr string         使用的 gRPC 端点
      --grpc-insecure            允许在不安全通道上使用 gRPC，若未开启需使用 TLS
      --height int               在指定高度查询状态（节点裁剪状态时可能失败）
  -h, --help                     查看 address-string-to-bytes 的帮助
      --keyring-backend string   选择 keyring 后端 (os|file|kwallet|pass|test|memory) 
      --keyring-dir string       客户端 keyring 目录；未指定则使用默认 home 目录
      --no-indent                输出 JSON 时不缩进
      --node string              此链的 CometBFT RPC 地址 [host]:[port] 
  -o, --output string            输出格式 (text|json) 
```

### 继承自父命令的选项

```
      --chain-id string     网络链 ID
      --home string         配置和数据文件夹
      --log_format string   日志格式 (json|plain) 
      --log_level string    日志级别 (trace|debug|info|warn|error|fatal|panic|disabled 或 '*:[level],[key]:[level]') 
      --log_no_color        禁用彩色日志
      --trace               在出错时打印完整堆栈跟踪
```
### 另请参阅

* [zetacored query auth](#zetacored-query-auth)	- auth 模块查询命令
## zetacored add-genesis-account

将创世账户添加到 genesis.json

### 概要

向 genesis.json 添加创世账户。需要提供账户地址或密钥名称以及初始资产列表。若指定密钥名称，将在本地 Keybase 中查找地址。初始代币列表必须使用合法计价单位，可选地添加锁仓参数。

```
zetacored add-genesis-account [address_or_key_name] [coin][,[coin]] [flags]
```

### 选项

```
      --grpc-addr string         此链使用的 gRPC 端点
      --grpc-insecure            允许在不安全通道上使用 gRPC，否则服务器需启用 TLS
      --height int               使用指定高度查询状态（节点裁剪状态时可能报错）
  -h, --help                     查看 add-genesis-account 的帮助
      --home string              应用数据目录
      --keyring-backend string   选择 keyring 后端 (os|file|kwallet|pass|test) 
      --node string              此链的 CometBFT RPC 地址 [host]:[port] 
  -o, --output string            输出格式 (text|json) 
      --vesting-amount string    锁仓账户的代币数量
      --vesting-end-time int     锁仓账户的结束时间（Unix 时间戳）
      --vesting-start-time int   锁仓账户的开始时间（Unix 时间戳）
```

### 继承自父命令的选项

```
      --log_format string   日志格式 (json|plain) 
      --log_level string    日志级别 (trace|debug|info|warn|error|fatal|panic|disabled 或 '*:[level],[key]:[level]') 
      --log_no_color        禁用彩色日志
      --trace               在出错时打印完整堆栈跟踪
```

### 另请参阅

* [zetacored](#zetacored)	- Zetacore 守护进程（服务器）

## zetacored add-observer-list

将观察者列表添加到 observer mapper，默认路径为 ~/.zetacored/os_info/observer_info.json

```
zetacored add-observer-list [observer-list.json]  [flags]
```

### 选项

```
  -h, --help                查看 add-observer-list 的帮助
      --keygen-block int    设置 keygen 区块，默认 20 (default 20)
      --tss-pubkey string   使用旧版 keygen 时指定 TSS 公钥
```

### 继承自父命令的选项

```
      --home string         配置和数据文件夹
      --log_format string   日志格式 (json|plain) 
      --log_level string    日志级别 (trace|debug|info|warn|error|fatal|panic|disabled 或 '*:[level],[key]:[level]') 
      --log_no_color        禁用彩色日志
      --trace               在出错时打印完整堆栈跟踪
```

### 另请参阅

* [zetacored](#zetacored)	- Zetacore 守护进程（服务器）

## zetacored addr-conversion

在 zeta1xxx 与 zetavaloper1xxx 地址之间互转

### 概要

读取 zeta1xxx 或 zetavaloper1xxx 地址并输出另一种格式；输出共三行：第一行是 zeta1xxx 地址，第二行是 zetavaloper1xxx 地址，第三行是以太坊地址。

```
zetacored addr-conversion [zeta address] [flags]
```

### 选项

```
  -h, --help   查看 addr-conversion 的帮助
```

### 继承自父命令的选项

```
      --home string         配置和数据文件夹
      --log_format string   日志格式 (json|plain) 
      --log_level string    日志级别 (trace|debug|info|warn|error|fatal|panic|disabled 或 '*:[level],[key]:[level]') 
      --log_no_color        禁用彩色日志
      --trace               在出错时打印完整堆栈跟踪
```

### 另请参阅

* [zetacored](#zetacored)	- Zetacore 守护进程（服务器）

## zetacored collect-gentxs

收集 genesis 交易并输出 genesis.json

```
zetacored collect-gentxs [flags]
```

### 选项

```
      --gentx-dir string   指定收集并执行创世交易的目录，默认 [--home]/config/gentx/
  -h, --help               查看 collect-gentxs 的帮助
      --home string        应用数据目录
```

### 继承自父命令的选项

```
      --log_format string   日志格式 (json|plain) 
      --log_level string    日志级别 (trace|debug|info|warn|error|fatal|panic|disabled 或 '*:[level],[key]:[level]') 
      --log_no_color        禁用彩色日志
      --trace               在出错时打印完整堆栈跟踪
```

### 另请参阅

* [zetacored](#zetacored)	- Zetacore 守护进程（服务器）

## zetacored collect-observer-info

从文件夹收集观察者信息写入创世文件，默认路径为 ~/.zetacored/os_info/

```
zetacored collect-observer-info [folder] [flags]
```

### 选项

```
  -h, --help   查看 collect-observer-info 的帮助
```

### 继承自父命令的选项

```
      --home string         配置和数据文件夹
      --log_format string   日志格式 (json|plain) 
      --log_level string    日志级别 (trace|debug|info|warn|error|fatal|panic|disabled 或 '*:[level],[key]:[level]') 
      --log_no_color        禁用彩色日志
      --trace               在出错时打印完整堆栈跟踪
```

### 另请参阅

* [zetacored](#zetacored)	- Zetacore 守护进程（服务器）

## zetacored comet

CometBFT 子命令

### 选项

```
  -h, --help   查看 comet 的帮助
```

### 继承自父命令的选项

```
      --home string         配置和数据文件夹
      --log_format string   日志格式 (json|plain) 
      --log_level string    日志级别 (trace|debug|info|warn|error|fatal|panic|disabled 或 '*:[level],[key]:[level]') 
      --log_no_color        禁用彩色日志
      --trace               在出错时打印完整堆栈跟踪
```

### 另请参阅

* [zetacored](#zetacored)	- Zetacore 守护进程（服务器）
* [zetacored comet bootstrap-state](#zetacored-comet-bootstrap-state)	- 使用轻节点在任意区块高度引导 CometBFT 状态
* [zetacored comet reset-state](#zetacored-comet-reset-state)	- 清除所有数据与 WAL
* [zetacored comet show-address](#zetacored-comet-show-address)	- 显示本节点的 CometBFT 验证人共识地址
* [zetacored comet show-node-id](#zetacored-comet-show-node-id)	- 显示本节点 ID
* [zetacored comet show-validator](#zetacored-comet-show-validator)	- 显示本节点的 CometBFT 验证人信息
* [zetacored comet unsafe-reset-all](#zetacored-comet-unsafe-reset-all)	- （危险操作）清除所有数据与 WAL，将验证人恢复到创世状态
* [zetacored comet version](#zetacored-comet-version)	- 打印 CometBFT 库版本

## zetacored comet bootstrap-state

使用轻客户端在任意高度引导 CometBFT 状态

```
zetacored comet bootstrap-state [flags]
```

### 选项

```
      --height int   引导状态所处的区块高度，未指定时使用应用状态中的最新高度
  -h, --help         查看 bootstrap-state 的帮助
```

### 继承自父命令的选项

```
      --home string         配置和数据文件夹
      --log_format string   日志格式 (json|plain) 
      --log_level string    日志级别 (trace|debug|info|warn|error|fatal|panic|disabled 或 '*:[level],[key]:[level]') 
      --log_no_color        禁用彩色日志
      --trace               在出错时打印完整堆栈跟踪
```

### 另请参阅

* [zetacored comet](#zetacored-comet)	- CometBFT 子命令

## zetacored comet reset-state

清除所有数据与 WAL

```
zetacored comet reset-state [flags]
```

### 选项

```
  -h, --help   查看 reset-state 的帮助
```

### 继承自父命令的选项

```
      --home string         配置和数据文件夹
      --log_format string   日志格式 (json|plain) 
      --log_level string    日志级别 (trace|debug|info|warn|error|fatal|panic|disabled 或 '*:[level],[key]:[level]') 
      --log_no_color        禁用彩色日志
      --trace               在出错时打印完整堆栈跟踪
```

### 另请参阅

* [zetacored comet](#zetacored-comet)	- CometBFT 子命令

## zetacored comet show-address

显示本节点的 CometBFT 验证人共识地址

```
zetacored comet show-address [flags]
```

### 选项

```
  -h, --help   查看 show-address 的帮助
```

### 继承自父命令的选项

```
      --home string         配置和数据文件夹
      --log_format string   日志格式 (json|plain) 
      --log_level string    日志级别 (trace|debug|info|warn|error|fatal|panic|disabled 或 '*:[level],[key]:[level]') 
      --log_no_color        禁用彩色日志
      --trace               在出错时打印完整堆栈跟踪
```

### 另请参阅

* [zetacored comet](#zetacored-comet)	- CometBFT 子命令

## zetacored comet show-node-id

显示本节点的 ID

```
zetacored comet show-node-id [flags]
```

### 选项

```
  -h, --help   查看 show-node-id 的帮助
```

### 继承自父命令的选项

```
      --home string         配置和数据文件夹
      --log_format string   日志格式 (json|plain) 
      --log_level string    日志级别 (trace|debug|info|warn|error|fatal|panic|disabled 或 '*:[level],[key]:[level]') 
      --log_no_color        禁用彩色日志
      --trace               在出错时打印完整堆栈跟踪
```

### 另请参阅

* [zetacored comet](#zetacored-comet)	- CometBFT 子命令

## zetacored comet show-validator

显示本节点的 CometBFT 验证人信息

```
zetacored comet show-validator [flags]
```

### 选项

```
  -h, --help   查看 show-validator 的帮助
```

### 继承自父命令的选项

```
      --home string         配置和数据文件夹
      --log_format string   日志格式 (json|plain) 
      --log_level string    日志级别 (trace|debug|info|warn|error|fatal|panic|disabled 或 '*:[level],[key]:[level]') 
      --log_no_color        禁用彩色日志
      --trace               在出错时打印完整堆栈跟踪
```

### 另请参阅

* [zetacored comet](#zetacored-comet)	- CometBFT 子命令

## zetacored comet unsafe-reset-all

（危险操作）清除所有数据和 WAL，将验证人恢复至创世状态

```
zetacored comet unsafe-reset-all [flags]
```

### 选项

```
  -h, --help             查看 unsafe-reset-all 的帮助
      --keep-addr-book   保留地址簿
```

### 继承自父命令的选项

```
      --home string         配置和数据文件夹
      --log_format string   日志格式 (json|plain) 
      --log_level string    日志级别 (trace|debug|info|warn|error|fatal|panic|disabled 或 '*:[level],[key]:[level]') 
      --log_no_color        禁用彩色日志
      --trace               在出错时打印完整堆栈跟踪
```

### 另请参阅

* [zetacored comet](#zetacored-comet)	- CometBFT 子命令

## zetacored query evm

evm 模块查询命令

```
zetacored query evm [flags]
```

### 选项

```
  -h, --help   查看 evm 的帮助
```

### 继承自父命令的选项

```
      --chain-id string     网络链 ID
      --home string         配置和数据文件夹
      --log_format string   日志格式 (json|plain) 
      --log_level string    日志级别 (trace|debug|info|warn|error|fatal|panic|disabled 或 '*:[level],[key]:[level]') 
      --log_no_color        禁用彩色日志
      --trace               在出错时打印完整堆栈跟踪
```

### 另请参阅

* [zetacored query](#zetacored-query)	- 查询子命令集合
* [zetacored query evm 0x-to-bech32](#zetacored-query-evm-0x-to-bech32)	- 将 0x 地址转换为 bech32
* [zetacored query evm account](#zetacored-query-evm-account)	- 查询地址的账户信息
* [zetacored query evm balance-bank](#zetacored-query-evm-balance-bank)	- 查询 0x 地址对应银行余额
* [zetacored query evm balance-erc20](#zetacored-query-evm-balance-erc20)	- 查询 0x 地址对应 ERC20 余额
* [zetacored query evm bech32-to-0x](#zetacored-query-evm-bech32-to-0x)	- 将 bech32 地址转换为 0x
* [zetacored query evm code](#zetacored-query-evm-code)	- 查询账户字节码
* [zetacored query evm config](#zetacored-query-evm-config)	- 查询 EVM 配置
* [zetacored query evm params](#zetacored-query-evm-params)	- 查询 EVM 参数
* [zetacored query evm storage](#zetacored-query-evm-storage)	- 查询账户存储

## zetacored query evm 0x-to-bech32

将 0x 地址转换为 bech32

### 概要

将指定 0x 地址转换为 bech32 地址。

```
zetacored query evm 0x-to-bech32 [flags]
```

### 示例

```
evmd query evm 0x-to-bech32 0x7cB61D4117AE31a12E393a1Cfa3BaC666481D02E
```

### 选项

```
      --grpc-addr string   使用的 gRPC 端点
      --grpc-insecure      允许在不安全通道上使用 gRPC，若未开启需使用 TLS
      --height int         在指定高度查询状态（节点裁剪状态时可能失败）
  -h, --help               查看 0x-to-bech32 的帮助
      --node string        此链的 CometBFT RPC 地址 [host]:[port] 
  -o, --output string      输出格式 (text|json) 
```

### 继承自父命令的选项

```
      --chain-id string     网络链 ID
      --home string         配置和数据文件夹
      --log_format string   日志格式 (json|plain) 
      --log_level string    日志级别 (trace|debug|info|warn|error|fatal|panic|disabled 或 '*:[level],[key]:[level]') 
      --log_no_color        禁用彩色日志
      --trace               在出错时打印完整堆栈跟踪
```

### 另请参阅

* [zetacored query evm](#zetacored-query-evm)	- evm 模块查询命令

## zetacored query evm account

查询地址的账户信息

### 概要

查询指定地址的账户信息；若未提供高度，则使用最新高度。

```
zetacored query evm account ADDRESS [flags]
```

### 选项

```
      --grpc-addr string   使用的 gRPC 端点
      --grpc-insecure      允许在不安全通道上使用 gRPC，若未开启需使用 TLS
      --height int         在指定高度查询状态（节点裁剪状态时可能失败）
  -h, --help               查看 account 的帮助
      --node string        此链的 CometBFT RPC 地址 [host]:[port] 
  -o, --output string      输出格式 (text|json) 
```

### 继承自父命令的选项

```
      --chain-id string     网络链 ID
      --home string         配置和数据文件夹
      --log_format string   日志格式 (json|plain) 
      --log_level string    日志级别 (trace|debug|info|warn|error|fatal|panic|disabled 或 '*:[level],[key]:[level]') 
      --log_no_color        禁用彩色日志
      --trace               在出错时打印完整堆栈跟踪
```

### 另请参阅

* [zetacored query evm](#zetacored-query-evm)	- evm 模块查询命令

## zetacored query evm balance-bank

查询 0x 地址在指定银行 denom 的余额

### 概要

查询某个 0x 地址在指定银行 denom 下的余额。

```
zetacored query evm balance-bank [address] [denom] [flags]
```

### 示例

```
evmd query evm balance-bank 0xA2A8B87390F8F2D188242656BFb6852914073D06 atoken
```

### 选项

```
      --grpc-addr string   使用的 gRPC 端点
      --grpc-insecure      允许在不安全通道上使用 gRPC，若未开启需使用 TLS
      --height int         在指定高度查询状态（节点裁剪状态时可能失败）
  -h, --help               查看 balance-bank 的帮助
      --node string        此链的 CometBFT RPC 地址 [host]:[port] 
  -o, --output string      输出格式 (text|json) 
```

### 继承自父命令的选项

```
      --chain-id string     网络链 ID
      --home string         配置和数据文件夹
      --log_format string   日志格式 (json|plain) 
      --log_level string    日志级别 (trace|debug|info|warn|error|fatal|panic|disabled 或 '*:[level],[key]:[level]') 
      --log_no_color        禁用彩色日志
      --trace               在出错时打印完整堆栈跟踪
```

### 另请参阅

* [zetacored query evm](#zetacored-query-evm)	- evm 模块查询命令

## zetacored query evm balance-erc20

查询 0x 地址在指定 ERC20 合约中的余额

### 概要

查询某个 0x 地址在指定 ERC20 合约下的余额。

```
zetacored query evm balance-erc20 [address] [erc20-address] [flags]
```

### 示例

```
evmd query evm balance-erc20 0xA2A8B87390F8F2D188242656BFb6852914073D06 0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE
```

### 选项

```
      --grpc-addr string   使用的 gRPC 端点
      --grpc-insecure      允许在不安全通道上使用 gRPC，若未开启需使用 TLS
      --height int         在指定高度查询状态（节点裁剪状态时可能失败）
  -h, --help               查看 balance-erc20 的帮助
      --node string        此链的 CometBFT RPC 地址 [host]:[port] 
  -o, --output string      输出格式 (text|json) 
```

### 继承自父命令的选项

```
      --chain-id string     网络链 ID
      --home string         配置和数据文件夹
      --log_format string   日志格式 (json|plain) 
      --log_level string    日志级别 (trace|debug|info|warn|error|fatal|panic|disabled 或 '*:[level],[key]:[level]') 
      --log_no_color        禁用彩色日志
      --trace               在出错时打印完整堆栈跟踪
```

### 另请参阅

* [zetacored query evm](#zetacored-query-evm)	- evm 模块查询命令

## zetacored query evm bech32-to-0x

将 bech32 地址转换为 0x 地址

### 概要

将指定 bech32 地址转换为 0x 地址。

```
zetacored query evm bech32-to-0x [flags]
```

### 示例

```
evmd query evm bech32-to-0x cosmos10jmp6sgh4cc6zt3e8gw05wavvejgr5pwsjskvv
```

### 选项

```
      --grpc-addr string   使用的 gRPC 端点
      --grpc-insecure      允许在不安全通道上使用 gRPC，若未开启需使用 TLS
      --height int         在指定高度查询状态（节点裁剪状态时可能失败）
  -h, --help               查看 bech32-to-0x 的帮助
      --node string        此链的 CometBFT RPC 地址 [host]:[port] 
  -o, --output string      输出格式 (text|json) 
```

### 继承自父命令的选项

```
      --chain-id string     网络链 ID
      --home string         配置和数据文件夹
      --log_format string   日志格式 (json|plain) 
      --log_level string    日志级别 (trace|debug|info|warn|error|fatal|panic|disabled 或 '*:[level],[key]:[level]') 
      --log_no_color        禁用彩色日志
      --trace               在出错时打印完整堆栈跟踪
```

### 另请参阅

* [zetacored query evm](#zetacored-query-evm)	- evm 模块查询命令

## zetacored query evm code

查询账户字节码

### 概要

查询指定账户的字节码。若未提供高度，则使用最新高度。

```
zetacored query evm code [address] [flags]
```

### 选项

```
      --grpc-addr string   使用的 gRPC 端点
      --grpc-insecure      允许在不安全通道上使用 gRPC，若未开启需使用 TLS
      --height int         在指定高度查询状态（节点裁剪状态时可能失败）
  -h, --help               查看 code 的帮助
      --node string        此链的 CometBFT RPC 地址 [host]:[port] 
  -o, --output string      输出格式 (text|json) 
```

### 继承自父命令的选项

```
      --chain-id string     网络链 ID
      --home string         配置和数据文件夹
      --log_format string   日志格式 (json|plain) 
      --log_level string    日志级别 (trace|debug|info|warn|error|fatal|panic|disabled 或 '*:[level],[key]:[level]') 
      --log_no_color        禁用彩色日志
      --trace               在出错时打印完整堆栈跟踪
```

### 另请参阅

* [zetacored query evm](#zetacored-query-evm)	- evm 模块查询命令

## zetacored query evm config

查询 EVM 配置

```
zetacored query evm config [flags]
```

### 选项

```
      --grpc-addr string   使用的 gRPC 端点
      --grpc-insecure      允许在不安全通道上使用 gRPC，若未开启需使用 TLS
      --height int         在指定高度查询状态（节点裁剪状态时可能失败）
  -h, --help               查看 config 的帮助
      --node string        此链的 CometBFT RPC 地址 [host]:[port] 
  -o, --output string      输出格式 (text|json) 
```

### 继承自父命令的选项

```
      --chain-id string     网络链 ID
      --home string         配置和数据文件夹
      --log_format string   日志格式 (json|plain) 
      --log_level string    日志级别 (trace|debug|info|warn|error|fatal|panic|disabled 或 '*:[level],[key]:[level]') 
      --log_no_color        禁用彩色日志
      --trace               在出错时打印完整堆栈跟踪
```

### 另请参阅

* [zetacored query evm](#zetacored-query-evm)	- evm 模块查询命令

## zetacored query evm params

查询 EVM 参数

```
zetacored query evm params [flags]
```

### 选项

```
      --grpc-addr string   使用的 gRPC 端点
      --grpc-insecure      允许在不安全通道上使用 gRPC，若未开启需使用 TLS
      --height int         在指定高度查询状态（节点裁剪状态时可能失败）
  -h, --help               查看 params 的帮助
      --node string        此链的 CometBFT RPC 地址 [host]:[port] 
  -o, --output string      输出格式 (text|json) 
```

### 继承自父命令的选项

```
      --chain-id string     网络链 ID
      --home string         配置和数据文件夹
      --log_format string   日志格式 (json|plain) 
      --log_level string    日志级别 (trace|debug|info|warn|error|fatal|panic|disabled 或 '*:[level],[key]:[level]') 
      --log_no_color        禁用彩色日志
      --trace               在出错时打印完整堆栈跟踪
```

### 另请参阅

* [zetacored query evm](#zetacored-query-evm)	- evm 模块查询命令

## zetacored query evm storage

查询账户存储

```
zetacored query evm storage [address] [key] [flags]
```

### 选项

```
      --grpc-addr string   使用的 gRPC 端点
      --grpc-insecure      允许在不安全通道上使用 gRPC，若未开启需使用 TLS
      --height int         在指定高度查询状态（节点裁剪状态时可能失败）
  -h, --help               查看 storage 的帮助
      --node string        此链的 CometBFT RPC 地址 [host]:[port] 
  -o, --output string      输出格式 (text|json) 
```

### 继承自父命令的选项

```
      --chain-id string     网络链 ID
      --home string         配置和数据文件夹
      --log_format string   日志格式 (json|plain) 
      --log_level string    日志级别 (trace|debug|info|warn|error|fatal|panic|disabled 或 '*:[level],[key]:[level]') 
      --log_no_color        禁用彩色日志
      --trace               在出错时打印完整堆栈跟踪
```

### 另请参阅

* [zetacored query evm](#zetacored-query-evm)	- evm 模块查询命令

## zetacored query feemarket

fee market 模块查询命令

```
zetacored query feemarket [flags]
```

### 选项

```
  -h, --help   查看 feemarket 的帮助
```

### 继承自父命令的选项

```
      --chain-id string     网络链 ID
      --home string         配置和数据文件夹
      --log_format string   日志格式 (json|plain) 
      --log_level string    日志级别 (trace|debug|info|warn|error|fatal|panic|disabled 或 '*:[level],[key]:[level]') 
      --log_no_color        禁用彩色日志
      --trace               在出错时打印完整堆栈跟踪
```

### 另请参阅

* [zetacored query](#zetacored-query)	- 查询子命令集合
* [zetacored query feemarket base-fee](#zetacored-query-feemarket-base-fee)	- 查询指定高度的基础手续费
* [zetacored query feemarket block-gas](#zetacored-query-feemarket-block-gas)	- 查询指定高度的区块 gas 使用量
* [zetacored query feemarket params](#zetacored-query-feemarket-params)	- 查询 fee market 模块参数

## zetacored query feemarket base-fee

查询指定高度的基础手续费

```
zetacored query feemarket base-fee [height] [flags]
```

### 选项

```
      --grpc-addr string   使用的 gRPC 端点
      --grpc-insecure      允许在不安全通道上使用 gRPC，若未开启需使用 TLS
      --height int         在指定高度查询状态（节点裁剪状态时可能失败）
  -h, --help               查看 base-fee 的帮助
      --node string        此链的 CometBFT RPC 地址 [host]:[port] 
  -o, --output string      输出格式 (text|json) 
```

### 继承自父命令的选项

```
      --chain-id string     网络链 ID
      --home string         配置和数据文件夹
      --log_format string   日志格式 (json|plain) 
      --log_level string    日志级别 (trace|debug|info|warn|error|fatal|panic|disabled 或 '*:[level],[key]:[level]') 
      --log_no_color        禁用彩色日志
      --trace               在出错时打印完整堆栈跟踪
```

### 另请参阅

* [zetacored query feemarket](#zetacored-query-feemarket)	- fee market 模块查询命令

## zetacored query feemarket block-gas

查询指定高度的区块 gas 使用量

```
zetacored query feemarket block-gas [height] [flags]
```

### 选项

```
      --grpc-addr string   使用的 gRPC 端点
      --grpc-insecure      允许在不安全通道上使用 gRPC，若未开启需使用 TLS
      --height int         在指定高度查询状态（节点裁剪状态时可能失败）
  -h, --help               查看 block-gas 的帮助
      --node string        此链的 CometBFT RPC 地址 [host]:[port] 
  -o, --output string      输出格式 (text|json) 
```

### 继承自父命令的选项

```
      --chain-id string     网络链 ID
      --home string         配置和数据文件夹
      --log_format string   日志格式 (json|plain) 
      --log_level string    日志级别 (trace|debug|info|warn|error|fatal|panic|disabled 或 '*:[level],[key]:[level]') 
      --log_no_color        禁用彩色日志
      --trace               在出错时打印完整堆栈跟踪
```

### 另请参阅

* [zetacored query feemarket](#zetacored-query-feemarket)	- fee market 模块查询命令

## zetacored query feemarket params

查询 fee market 模块参数

```
zetacored query feemarket params [flags]
```

### 选项

```
      --grpc-addr string   使用的 gRPC 端点
      --grpc-insecure      允许在不安全通道上使用 gRPC，若未开启需使用 TLS
      --height int         在指定高度查询状态（节点裁剪状态时可能失败）
  -h, --help               查看 params 的帮助
      --node string        此链的 CometBFT RPC 地址 [host]:[port] 
  -o, --output string      输出格式 (text|json) 
```

### 继承自父命令的选项

```
      --chain-id string     网络链 ID
      --home string         配置和数据文件夹
      --log_format string   日志格式 (json|plain) 
      --log_level string    日志级别 (trace|debug|info|warn|error|fatal|panic|disabled 或 '*:[level],[key]:[level]') 
      --log_no_color        禁用彩色日志
      --trace               在出错时打印完整堆栈跟踪
```

### 另请参阅

* [zetacored query feemarket](#zetacored-query-feemarket)	- fee market 模块查询命令

## zetacored query gov

gov 模块查询命令

```
zetacored query gov [flags]
```

### 选项

```
  -h, --help   查看 gov 的帮助
```

### 继承自父命令的选项

```
      --chain-id string     网络链 ID
      --home string         配置和数据文件夹
      --log_format string   日志格式 (json|plain) 
      --log_level string    日志级别 (trace|debug|info|warn|error|fatal|panic|disabled 或 '*:[level],[key]:[level]') 
      --log_no_color        禁用彩色日志
      --trace               在出错时打印完整堆栈跟踪
```

### 另请参阅

* [zetacored query](#zetacored-query)	- 查询子命令集合
* [zetacored query gov constitution](#zetacored-query-gov-constitution)	- 查询当前链宪章
* [zetacored query gov deposit](#zetacored-query-gov-deposit)	- 查询单笔押注详情
* [zetacored query gov deposits](#zetacored-query-gov-deposits)	- 查询提案的押注列表
* [zetacored query gov params](#zetacored-query-gov-params)	- 查询治理流程参数
* [zetacored query gov proposal](#zetacored-query-gov-proposal)	- 查询单个提案详情
* [zetacored query gov proposals](#zetacored-query-gov-proposals)	- 按条件筛选提案
* [zetacored query gov tally](#zetacored-query-gov-tally)	- 查询提案投票计票结果
* [zetacored query gov vote](#zetacored-query-gov-vote)	- 查询单个投票详情
* [zetacored query gov votes](#zetacored-query-gov-votes)	- 查询某提案的全部投票

## zetacored query gov constitution

查询当前链宪章

```
zetacored query gov constitution [flags]
```

### 选项

```
      --grpc-addr string         使用的 gRPC 端点
      --grpc-insecure            允许在不安全通道上使用 gRPC，若未开启需使用 TLS
      --height int               在指定高度查询状态（节点裁剪状态时可能失败）
  -h, --help                     查看 constitution 的帮助
      --keyring-backend string   选择 keyring 后端 (os|file|kwallet|pass|test|memory) 
      --keyring-dir string       客户端 keyring 目录；未指定则使用默认 home 目录
      --no-indent                输出 JSON 时不缩进
      --node string              此链的 CometBFT RPC 地址 [host]:[port] 
  -o, --output string            输出格式 (text|json) 
```

### 继承自父命令的选项

```
      --chain-id string     网络链 ID
      --home string         配置和数据文件夹
      --log_format string   日志格式 (json|plain) 
      --log_level string    日志级别 (trace|debug|info|warn|error|fatal|panic|disabled 或 '*:[level],[key]:[level]') 
      --log_no_color        禁用彩色日志
      --trace               在出错时打印完整堆栈跟踪
```

### 另请参阅

* [zetacored query gov](#zetacored-query-gov)	- gov 模块查询命令

## zetacored query gov deposit

查询单笔押注详情

```
zetacored query gov deposit [proposal-id] [depositer-addr] [flags]
```

### 选项

```
      --grpc-addr string         使用的 gRPC 端点
      --grpc-insecure            允许在不安全通道上使用 gRPC，若未开启需使用 TLS
      --height int               在指定高度查询状态（节点裁剪状态时可能失败）
  -h, --help                     查看 deposit 的帮助
      --keyring-backend string   选择 keyring 后端 (os|file|kwallet|pass|test|memory) 
      --keyring-dir string       客户端 keyring 目录；未指定则使用默认 home 目录
      --no-indent                输出 JSON 时不缩进
      --node string              此链的 CometBFT RPC 地址 [host]:[port] 
  -o, --output string            输出格式 (text|json) 
```

### 继承自父命令的选项

```
      --chain-id string     网络链 ID
      --home string         配置和数据文件夹
      --log_format string   日志格式 (json|plain) 
      --log_level string    日志级别 (trace|debug|info|warn|error|fatal|panic|disabled 或 '*:[level],[key]:[level]') 
      --log_no_color        禁用彩色日志
      --trace               在出错时打印完整堆栈跟踪
```

### 另请参阅

* [zetacored query gov](#zetacored-query-gov)	- gov 模块查询命令

## zetacored query gov deposits

查询提案的押注列表

```
zetacored query gov deposits [proposal-id] [flags]
```

### 选项

```
      --grpc-addr string         使用的 gRPC 端点
      --grpc-insecure            允许在不安全通道上使用 gRPC，若未开启需使用 TLS
      --height int               在指定高度查询状态（节点裁剪状态时可能失败）
  -h, --help                     查看 deposits 的帮助
      --keyring-backend string   选择 keyring 后端 (os|file|kwallet|pass|test|memory) 
      --keyring-dir string       客户端 keyring 目录；未指定则使用默认 home 目录
      --no-indent                输出 JSON 时不缩进
      --node string              此链的 CometBFT RPC 地址 [host]:[port] 
  -o, --output string            输出格式 (text|json) 
      --page-count-total         返回记录总数
      --page-key binary          使用分页 page-key 继续查询
      --page-limit uint          每页返回的记录数
      --page-offset uint         结果起始偏移量
      --page-reverse             按降序返回结果
```

### 继承自父命令的选项

```
      --chain-id string     网络链 ID
      --home string         配置和数据文件夹
      --log_format string   日志格式 (json|plain) 
      --log_level string    日志级别 (trace|debug|info|warn|error|fatal|panic|disabled 或 '*:[level],[key]:[level]') 
      --log_no_color        禁用彩色日志
      --trace               在出错时打印完整堆栈跟踪
```

### 另请参阅

* [zetacored query gov](#zetacored-query-gov)	- gov 模块查询命令

## zetacored query gov params

查询治理流程参数

```
zetacored query gov params [flags]
```

### 选项

```
      --grpc-addr string   使用的 gRPC 端点
      --grpc-insecure      允许在不安全通道上使用 gRPC，若未开启需使用 TLS
      --height int         在指定高度查询状态（节点裁剪状态时可能失败）
  -h, --help               查看 params 的帮助
      --keyring-backend string   选择 keyring 后端 (os|file|kwallet|pass|test|memory) 
      --keyring-dir string       客户端 keyring 目录；未指定则使用默认 home 目录
      --no-indent                输出 JSON 时不缩进
      --node string              此链的 CometBFT RPC 地址 [host]:[port] 
  -o, --output string            输出格式 (text|json) 
```

### 继承自父命令的选项

```
      --chain-id string     网络链 ID
      --home string         配置和数据文件夹
      --log_format string   日志格式 (json|plain) 
      --log_level string    日志级别 (trace|debug|info|warn|error|fatal|panic|disabled 或 '*:[level],[key]:[level]') 
      --log_no_color        禁用彩色日志
      --trace               在出错时打印完整堆栈跟踪
```

### 另请参阅

* [zetacored query gov](#zetacored-query-gov)	- gov 模块查询命令

## zetacored query gov proposal

查询单个提案详情

```
zetacored query gov proposal [proposal-id] [flags]
```

### 选项

```
      --grpc-addr string   使用的 gRPC 端点
      --grpc-insecure      允许在不安全通道上使用 gRPC，若未开启需使用 TLS
      --height int         在指定高度查询状态（节点裁剪状态时可能失败）
  -h, --help               查看 proposal 的帮助
      --keyring-backend string   选择 keyring 后端 (os|file|kwallet|pass|test|memory) 
      --keyring-dir string       客户端 keyring 目录；未指定则使用默认 home 目录
      --no-indent                输出 JSON 时不缩进
      --node string              此链的 CometBFT RPC 地址 [host]:[port] 
  -o, --output string            输出格式 (text|json) 
```

### 继承自父命令的选项

```
      --chain-id string     网络链 ID
      --home string         配置和数据文件夹
      --log_format string   日志格式 (json|plain) 
      --log_level string    日志级别 (trace|debug|info|warn|error|fatal|panic|disabled 或 '*:[level],[key]:[level]') 
      --log_no_color        禁用彩色日志
      --trace               在出错时打印完整堆栈跟踪
```

### 另请参阅

* [zetacored query gov](#zetacored-query-gov)	- gov 模块查询命令

## zetacored query gov proposals

按条件筛选提案

```
zetacored query gov proposals [flags]
```

### 示例

```
zetacored query gov proposals --depositor cosmos1...
zetacored query gov proposals --voter cosmos1...
zetacored query gov proposals --proposal-status (unspecified | deposit-period | voting-period | passed | rejected | failed)
```

### 选项

```
      --depositor account address or key name        指定押注账户地址或密钥名称
      --grpc-addr string                             使用的 gRPC 端点
      --grpc-insecure                                允许在不安全通道上使用 gRPC，若未开启需使用 TLS
      --height int                                   在指定高度查询状态（节点裁剪状态时可能失败）
  -h, --help                                         查看 proposals 的帮助
      --keyring-backend string                       选择 keyring 后端 (os|file|kwallet|pass|test|memory) 
      --keyring-dir string                           客户端 keyring 目录；未指定则使用默认 home 目录
      --no-indent                                    输出 JSON 时不缩进
      --node string                                  此链的 CometBFT RPC 地址 [host]:[port] 
  -o, --output string                                输出格式 (text|json) 
      --page-count-total                             返回记录总数
      --page-key binary                              使用分页 page-key 继续查询
      --page-limit uint                              每页返回的记录数
      --page-offset uint                             结果起始偏移量
      --page-reverse                                 按降序返回结果
      --proposal-status ProposalStatus (unspecified | deposit-period | voting-period | passed | rejected | failed)    过滤提案状态（默认 unspecified）
      --voter account address or key name            指定投票账户地址或密钥名称
```

### 继承自父命令的选项

```
      --chain-id string     网络链 ID
      --home string         配置和数据文件夹
      --log_format string   日志格式 (json|plain) 
      --log_level string    日志级别 (trace|debug|info|warn|error|fatal|panic|disabled 或 '*:[level],[key]:[level]') 
      --log_no_color        禁用彩色日志
      --trace               在出错时打印完整堆栈跟踪
```

### 另请参阅

* [zetacored query gov](#zetacored-query-gov)	- gov 模块查询命令

## zetacored query gov tally

查询提案投票计票结果

```
zetacored query gov tally [proposal-id] [flags]
```

### 选项

```
      --grpc-addr string   使用的 gRPC 端点
      --grpc-insecure      允许在不安全通道上使用 gRPC，若未开启需使用 TLS
      --height int         在指定高度查询状态（节点裁剪状态时可能失败）
  -h, --help               查看 tally 的帮助
      --keyring-backend string   选择 keyring 后端 (os|file|kwallet|pass|test|memory) 
      --keyring-dir string       客户端 keyring 目录；未指定则使用默认 home 目录
      --no-indent                输出 JSON 时不缩进
      --node string              此链的 CometBFT RPC 地址 [host]:[port] 
  -o, --output string            输出格式 (text|json) 
```

### 继承自父命令的选项

```
      --chain-id string     网络链 ID
      --home string         配置和数据文件夹
      --log_format string   日志格式 (json|plain) 
      --log_level string    日志级别 (trace|debug|info|warn|error|fatal|panic|disabled 或 '*:[level],[key]:[level]') 
      --log_no_color        禁用彩色日志
      --trace               在出错时打印完整堆栈跟踪
```

### 另请参阅

* [zetacored query gov](#zetacored-query-gov)	- gov 模块查询命令

## zetacored query gov vote

查询单个投票详情

```
zetacored query gov vote [proposal-id] [voter-addr] [flags]
```

### 选项

```
      --grpc-addr string   使用的 gRPC 端点
      --grpc-insecure      允许在不安全通道上使用 gRPC，若未开启需使用 TLS
      --height int         在指定高度查询状态（节点裁剪状态时可能失败）
  -h, --help               查看 vote 的帮助
      --keyring-backend string   选择 keyring 后端 (os|file|kwallet|pass|test|memory) 
      --keyring-dir string       客户端 keyring 目录；未指定则使用默认 home 目录
      --no-indent                输出 JSON 时不缩进
      --node string              此链的 CometBFT RPC 地址 [host]:[port] 
  -o, --output string            输出格式 (text|json) 
```

### 继承自父命令的选项

```
      --chain-id string     网络链 ID
      --home string         配置和数据文件夹
      --log_format string   日志格式 (json|plain) 
      --log_level string    日志级别 (trace|debug|info|warn|error|fatal|panic|disabled 或 '*:[level],[key]:[level]') 
      --log_no_color        禁用彩色日志
      --trace               在出错时打印完整堆栈跟踪
```

### 另请参阅

* [zetacored query gov](#zetacored-query-gov)	- gov 模块查询命令

## zetacored query gov votes

查询某提案的全部投票

```
zetacored query gov votes [proposal-id] [flags]
```

### 选项

```
      --grpc-addr string         使用的 gRPC 端点
      --grpc-insecure            允许在不安全通道上使用 gRPC，若未开启需使用 TLS
      --height int               在指定高度查询状态（节点裁剪状态时可能失败）
  -h, --help                     查看 votes 的帮助
      --keyring-backend string   选择 keyring 后端 (os|file|kwallet|pass|test|memory) 
      --keyring-dir string       客户端 keyring 目录；未指定则使用默认 home 目录
      --no-indent                输出 JSON 时不缩进
      --node string              此链的 CometBFT RPC 地址 [host]:[port] 
  -o, --output string            输出格式 (text|json) 
      --page-count-total         返回记录总数
      --page-key binary          使用分页 page-key 继续查询
      --page-limit uint          每页返回的记录数
      --page-offset uint         结果起始偏移量
      --page-reverse             按降序返回结果
```

### 继承自父命令的选项

```
      --chain-id string     网络链 ID
      --home string         配置和数据文件夹
      --log_format string   日志格式 (json|plain) 
      --log_level string    日志级别 (trace|debug|info|warn|error|fatal|panic|disabled 或 '*:[level],[key]:[level]') 
      --log_no_color        禁用彩色日志
      --trace               在出错时打印完整堆栈跟踪
```

### 另请参阅

* [zetacored query gov](#zetacored-query-gov)	- gov 模块查询命令

## zetacored query group

group 模块查询命令

```
zetacored query group [flags]
```

### 选项

```
  -h, --help   查看 group 的帮助
```

### 继承自父命令的选项

```
      --chain-id string     网络链 ID
      --home string         配置和数据文件夹
      --log_format string   日志格式 (json|plain) 
      --log_level string    日志级别 (trace|debug|info|warn|error|fatal|panic|disabled 或 '*:[level],[key]:[level]') 
      --log_no_color        禁用彩色日志
      --trace               在出错时打印完整堆栈跟踪
```

### 另请参阅

* [zetacored query](#zetacored-query)	- 查询子命令集合
* [zetacored query group group-info](#zetacored-query-group-group-info)	- 按组 ID 查询组信息
* [zetacored query group group-members](#zetacored-query-group-group-members)	- 按组 ID 查询组成员
* [zetacored query group group-policies-by-admin](#zetacored-query-group-group-policies-by-admin)	- 按管理员地址查询组策略
* [zetacored query group group-policies-by-group](#zetacored-query-group-group-policies-by-group)	- 按组 ID 查询组策略
* [zetacored query group group-policy-info](#zetacored-query-group-group-policy-info)	- 按组策略账户地址查询策略信息
* [zetacored query group groups](#zetacored-query-group-groups)	- 查询链上全部组
* [zetacored query group groups-by-admin](#zetacored-query-group-groups-by-admin)	- 按管理员地址查询组
* [zetacored query group groups-by-member](#zetacored-query-group-groups-by-member)	- 按成员地址查询组
* [zetacored query group proposal](#zetacored-query-group-proposal)	- 按提案 ID 查询提案
* [zetacored query group proposals-by-group-policy](#zetacored-query-group-proposals-by-group-policy)	- 按组策略账户地址查询提案
* [zetacored query group tally-result](#zetacored-query-group-tally-result)	- 查询提案计票结果
* [zetacored query group vote](#zetacored-query-group-vote)	- 按提案 ID 与投票者地址查询投票
* [zetacored query group votes-by-proposal](#zetacored-query-group-votes-by-proposal)	- 按提案 ID 查询全部投票
* [zetacored query group votes-by-voter](#zetacored-query-group-votes-by-voter)	- 按投票者地址查询投票

## zetacored query group group-info

按组 ID 查询组信息

```
zetacored query group group-info [group-id] [flags]
```

### 选项

```
      --grpc-addr string         使用的 gRPC 端点
      --grpc-insecure            允许在不安全通道上使用 gRPC，若未开启需使用 TLS
      --height int               在指定高度查询状态（节点裁剪状态时可能失败）
  -h, --help                     查看 group-info 的帮助
      --keyring-backend string   选择 keyring 后端 (os|file|kwallet|pass|test|memory) 
      --keyring-dir string       客户端 keyring 目录；未指定则使用默认 home 目录
      --no-indent                输出 JSON 时不缩进
      --node string              此链的 CometBFT RPC 地址 [host]:[port] 
  -o, --output string            输出格式 (text|json) 
```

### 继承自父命令的选项

```
      --chain-id string     网络链 ID
      --home string         配置和数据文件夹
      --log_format string   日志格式 (json|plain) 
      --log_level string    日志级别 (trace|debug|info|warn|error|fatal|panic|disabled 或 '*:[level],[key]:[level]') 
      --log_no_color        禁用彩色日志
      --trace               在出错时打印完整堆栈跟踪
```

### 另请参阅

* [zetacored query group](#zetacored-query-group)	- group 模块查询命令

## zetacored query group group-members

按组 ID 查询组成员

```
zetacored query group group-members [group-id] [flags]
```

### 选项

```
      --grpc-addr string         使用的 gRPC 端点
      --grpc-insecure            允许在不安全通道上使用 gRPC，若未开启需使用 TLS
      --height int               在指定高度查询状态（节点裁剪状态时可能失败）
  -h, --help                     查看 group-members 的帮助
      --keyring-backend string   选择 keyring 后端 (os|file|kwallet|pass|test|memory) 
      --keyring-dir string       客户端 keyring 目录；未指定则使用默认 home 目录
      --no-indent                输出 JSON 时不缩进
      --node string              此链的 CometBFT RPC 地址 [host]:[port] 
  -o, --output string            输出格式 (text|json) 
      --page-count-total         返回记录总数
      --page-key binary          使用分页 page-key 继续查询
      --page-limit uint          每页返回的记录数
      --page-offset uint         结果起始偏移量
      --page-reverse             按降序返回结果
```

### 继承自父命令的选项

```
      --chain-id string     网络链 ID
      --home string         配置和数据文件夹
      --log_format string   日志格式 (json|plain) 
      --log_level string    日志级别 (trace|debug|info|warn|error|fatal|panic|disabled 或 '*:[level],[key]:[level]') 
      --log_no_color        禁用彩色日志
      --trace               在出错时打印完整堆栈跟踪
```

### 另请参阅

* [zetacored query group](#zetacored-query-group)	- group 模块查询命令

## zetacored query group group-policies-by-admin

按管理员地址查询组策略

```
zetacored query group group-policies-by-admin [admin] [flags]
```

### 选项

```
      --grpc-addr string         使用的 gRPC 端点
      --grpc-insecure            允许在不安全通道上使用 gRPC，若未开启需使用 TLS
      --height int               在指定高度查询状态（节点裁剪状态时可能失败）
  -h, --help                     查看 group-policies-by-admin 的帮助
      --keyring-backend string   选择 keyring 后端 (os|file|kwallet|pass|test|memory) 
      --keyring-dir string       客户端 keyring 目录；未指定则使用默认 home 目录
      --no-indent                输出 JSON 时不缩进
      --node string              此链的 CometBFT RPC 地址 [host]:[port] 
  -o, --output string            输出格式 (text|json) 
      --page-count-total         返回记录总数
      --page-key binary          使用分页 page-key 继续查询
      --page-limit uint          每页返回的记录数
      --page-offset uint         结果起始偏移量
      --page-reverse             按降序返回结果
```

### 继承自父命令的选项

```
      --chain-id string     网络链 ID
      --home string         配置和数据文件夹
      --log_format string   日志格式 (json|plain) 
      --log_level string    日志级别 (trace|debug|info|warn|error|fatal|panic|disabled 或 '*:[level],[key]:[level]') 
      --log_no_color        禁用彩色日志
      --trace               在出错时打印完整堆栈跟踪
```

### 另请参阅

* [zetacored query group](#zetacored-query-group)	- group 模块查询命令

## zetacored query group group-policies-by-group

按组 ID 查询组策略

```
zetacored query group group-policies-by-group [group-id] [flags]
```

### 选项

```
      --grpc-addr string         使用的 gRPC 端点
      --grpc-insecure            允许在不安全通道上使用 gRPC，若未开启需使用 TLS
      --height int               在指定高度查询状态（节点裁剪状态时可能失败）
  -h, --help                     查看 group-policies-by-group 的帮助
      --keyring-backend string   选择 keyring 后端 (os|file|kwallet|pass|test|memory) 
      --keyring-dir string       客户端 keyring 目录；未指定则使用默认 home 目录
      --no-indent                输出 JSON 时不缩进
      --node string              此链的 CometBFT RPC 地址 [host]:[port] 
  -o, --output string            输出格式 (text|json) 
      --page-count-total         返回记录总数
      --page-key binary          使用分页 page-key 继续查询
      --page-limit uint          每页返回的记录数
      --page-offset uint         结果起始偏移量
      --page-reverse             按降序返回结果
```

### 继承自父命令的选项

```
      --chain-id string     网络链 ID
      --home string         配置和数据文件夹
      --log_format string   日志格式 (json|plain) 
      --log_level string    日志级别 (trace|debug|info|warn|error|fatal|panic|disabled 或 '*:[level],[key]:[level]') 
      --log_no_color        禁用彩色日志
      --trace               在出错时打印完整堆栈跟踪
```

### 另请参阅

* [zetacored query group](#zetacored-query-group)	- group 模块查询命令

## zetacored query group group-policy-info

按组策略账户地址查询策略信息

```
zetacored query group group-policy-info [group-policy-account] [flags]
```

### 选项

```
      --grpc-addr string         使用的 gRPC 端点
      --grpc-insecure            允许在不安全通道上使用 gRPC，若未开启需使用 TLS
      --height int               在指定高度查询状态（节点裁剪状态时可能失败）
  -h, --help                     查看 group-policy-info 的帮助
      --keyring-backend string   选择 keyring 后端 (os|file|kwallet|pass|test|memory) 
      --keyring-dir string       客户端 keyring 目录；未指定则使用默认 home 目录
      --no-indent                输出 JSON 时不缩进
      --node string              此链的 CometBFT RPC 地址 [host]:[port] 
  -o, --output string            输出格式 (text|json) 
```

### 继承自父命令的选项

```
      --chain-id string     网络链 ID
      --home string         配置和数据文件夹
      --log_format string   日志格式 (json|plain) 
      --log_level string    日志级别 (trace|debug|info|warn|error|fatal|panic|disabled 或 '*:[level],[key]:[level]') 
      --log_no_color        禁用彩色日志
      --trace               在出错时打印完整堆栈跟踪
```

### 另请参阅

* [zetacored query group](#zetacored-query-group)	- group 模块查询命令

## zetacored query group groups

查询链上全部组

```
zetacored query group groups [flags]
```

### 选项

```
      --grpc-addr string         使用的 gRPC 端点
      --grpc-insecure            允许在不安全通道上使用 gRPC，若未开启需使用 TLS
      --height int               在指定高度查询状态（节点裁剪状态时可能失败）
  -h, --help                     查看 groups 的帮助
      --keyring-backend string   选择 keyring 后端 (os|file|kwallet|pass|test|memory) 
      --keyring-dir string       客户端 keyring 目录；未指定则使用默认 home 目录
      --no-indent                输出 JSON 时不缩进
      --node string              此链的 CometBFT RPC 地址 [host]:[port] 
  -o, --output string            输出格式 (text|json) 
      --page-count-total         返回记录总数
      --page-key binary          使用分页 page-key 继续查询
      --page-limit uint          每页返回的记录数
      --page-offset uint         结果起始偏移量
      --page-reverse             按降序返回结果
```

### 继承自父命令的选项

```
      --chain-id string     网络链 ID
      --home string         配置和数据文件夹
      --log_format string   日志格式 (json|plain) 
      --log_level string    日志级别 (trace|debug|info|warn|error|fatal|panic|disabled 或 '*:[level],[key]:[level]') 
      --log_no_color        禁用彩色日志
      --trace               在出错时打印完整堆栈跟踪
```

### 另请参阅

* [zetacored query group](#zetacored-query-group)	- group 模块查询命令

## zetacored query group groups-by-admin

按管理员地址查询组

```
zetacored query group groups-by-admin [admin] [flags]
```

### 选项

```
      --grpc-addr string         使用的 gRPC 端点
      --grpc-insecure            允许在不安全通道上使用 gRPC，若未开启需使用 TLS
      --height int               在指定高度查询状态（节点裁剪状态时可能失败）
  -h, --help                     查看 groups-by-admin 的帮助
      --keyring-backend string   选择 keyring 后端 (os|file|kwallet|pass|test|memory) 
      --keyring-dir string       客户端 keyring 目录；未指定则使用默认 home 目录
      --no-indent                输出 JSON 时不缩进
      --node string              此链的 CometBFT RPC 地址 [host]:[port] 
  -o, --output string            输出格式 (text|json) 
      --page-count-total         返回记录总数
      --page-key binary          使用分页 page-key 继续查询
      --page-limit uint          每页返回的记录数
      --page-offset uint         结果起始偏移量
      --page-reverse             按降序返回结果
```

### 继承自父命令的选项

```
      --chain-id string     网络链 ID
      --home string         配置和数据文件夹
      --log_format string   日志格式 (json|plain) 
      --log_level string    日志级别 (trace|debug|info|warn|error|fatal|panic|disabled 或 '*:[level],[key]:[level]') 
      --log_no_color        禁用彩色日志
      --trace               在出错时打印完整堆栈跟踪
```

### 另请参阅

* [zetacored query group](#zetacored-query-group)	- group 模块查询命令

## zetacored query group groups-by-member

按成员地址查询组

```
zetacored query group groups-by-member [address] [flags]
```

### 选项

```
      --grpc-addr string         使用的 gRPC 端点
      --grpc-insecure            允许在不安全通道上使用 gRPC，若未开启需使用 TLS
      --height int               在指定高度查询状态（节点裁剪状态时可能失败）
  -h, --help                     查看 groups-by-member 的帮助
      --keyring-backend string   选择 keyring 后端 (os|file|kwallet|pass|test|memory) 
      --keyring-dir string       客户端 keyring 目录；未指定则使用默认 home 目录
      --no-indent                输出 JSON 时不缩进
      --node string              此链的 CometBFT RPC 地址 [host]:[port] 
  -o, --output string            输出格式 (text|json) 
      --page-count-total         返回记录总数
      --page-key binary          使用分页 page-key 继续查询
      --page-limit uint          每页返回的记录数
      --page-offset uint         结果起始偏移量
      --page-reverse             按降序返回结果
```

### 继承自父命令的选项

```
      --chain-id string     网络链 ID
      --home string         配置和数据文件夹
      --log_format string   日志格式 (json|plain) 
      --log_level string    日志级别 (trace|debug|info|warn|error|fatal|panic|disabled 或 '*:[level],[key]:[level]') 
      --log_no_color        禁用彩色日志
      --trace               在出错时打印完整堆栈跟踪
```

### 另请参阅

* [zetacored query group](#zetacored-query-group)	- group 模块查询命令

## zetacored query group proposal

按提案 ID 查询提案

```
zetacored query group proposal [proposal-id] [flags]
```

### 选项

```
      --grpc-addr string         使用的 gRPC 端点
      --grpc-insecure            允许在不安全通道上使用 gRPC，若未开启需使用 TLS
      --height int               在指定高度查询状态（节点裁剪状态时可能失败）
  -h, --help                     查看 proposal 的帮助
      --keyring-backend string   选择 keyring 后端 (os|file|kwallet|pass|test|memory) 
      --keyring-dir string       客户端 keyring 目录；未指定则使用默认 home 目录
      --no-indent                输出 JSON 时不缩进
      --node string              此链的 CometBFT RPC 地址 [host]:[port] 
  -o, --output string            输出格式 (text|json) 
```

### 继承自父命令的选项

```
      --chain-id string     网络链 ID
      --home string         配置和数据文件夹
      --log_format string   日志格式 (json|plain) 
      --log_level string    日志级别 (trace|debug|info|warn|error|fatal|panic|disabled 或 '*:[level],[key]:[level]') 
      --log_no_color        禁用彩色日志
      --trace               在出错时打印完整堆栈跟踪
```

### 另请参阅

* [zetacored query group](#zetacored-query-group)	- group 模块查询命令

## zetacored query group proposals-by-group-policy

按组策略账户地址查询提案

```
zetacored query group proposals-by-group-policy [group-policy-account] [flags]
```

### 选项

```
      --grpc-addr string         使用的 gRPC 端点
      --grpc-insecure            允许在不安全通道上使用 gRPC，若未开启需使用 TLS
      --height int               在指定高度查询状态（节点裁剪状态时可能失败）
  -h, --help                     查看 proposals-by-group-policy 的帮助
      --keyring-backend string   选择 keyring 后端 (os|file|kwallet|pass|test|memory) 
      --keyring-dir string       客户端 keyring 目录；未指定则使用默认 home 目录
      --no-indent                输出 JSON 时不缩进
      --node string              此链的 CometBFT RPC 地址 [host]:[port] 
  -o, --output string            输出格式 (text|json) 
      --page-count-total         返回记录总数
      --page-key binary          使用分页 page-key 继续查询
      --page-limit uint          每页返回的记录数
      --page-offset uint         结果起始偏移量
      --page-reverse             按降序返回结果
```

### 继承自父命令的选项

```
      --chain-id string     网络链 ID
      --home string         配置和数据文件夹
      --log_format string   日志格式 (json|plain) 
      --log_level string    日志级别 (trace|debug|info|warn|error|fatal|panic|disabled 或 '*:[level],[key]:[level]') 
      --log_no_color        禁用彩色日志
      --trace               在出错时打印完整堆栈跟踪
```

### 另请参阅

* [zetacored query group](#zetacored-query-group)	- group 模块查询命令

## zetacored query group tally-result

查询提案计票结果

```
zetacored query group tally-result [proposal-id] [flags]
```

### 选项

```
      --grpc-addr string         使用的 gRPC 端点
      --grpc-insecure            允许在不安全通道上使用 gRPC，若未开启需使用 TLS
      --height int               在指定高度查询状态（节点裁剪状态时可能失败）
  -h, --help                     查看 tally-result 的帮助
      --keyring-backend string   选择 keyring 后端 (os|file|kwallet|pass|test|memory) 
      --keyring-dir string       客户端 keyring 目录；未指定则使用默认 home 目录
      --no-indent                输出 JSON 时不缩进
      --node string              此链的 CometBFT RPC 地址 [host]:[port] 
  -o, --output string            输出格式 (text|json) 
```

### 继承自父命令的选项

```
      --chain-id string     网络链 ID
      --home string         配置和数据文件夹
      --log_format string   日志格式 (json|plain) 
      --log_level string    日志级别 (trace|debug|info|warn|error|fatal|panic|disabled 或 '*:[level],[key]:[level]') 
      --log_no_color        禁用彩色日志
      --trace               在出错时打印完整堆栈跟踪
```

### 另请参阅

* [zetacored query group](#zetacored-query-group)	- group 模块查询命令

## zetacored query group vote

按提案 ID 与投票者地址查询投票

```
zetacored query group vote [proposal-id] [voter] [flags]
```

### 选项

```
      --grpc-addr string         使用的 gRPC 端点
      --grpc-insecure            允许在不安全通道上使用 gRPC，若未开启需使用 TLS
      --height int               在指定高度查询状态（节点裁剪状态时可能失败）
  -h, --help                     查看 vote 的帮助
      --keyring-backend string   选择 keyring 后端 (os|file|kwallet|pass|test|memory) 
      --keyring-dir string       客户端 keyring 目录；未指定则使用默认 home 目录
      --no-indent                输出 JSON 时不缩进
      --node string              此链的 CometBFT RPC 地址 [host]:[port] 
  -o, --output string            输出格式 (text|json) 
```

### 继承自父命令的选项

```
      --chain-id string     网络链 ID
      --home string         配置和数据文件夹
      --log_format string   日志格式 (json|plain) 
      --log_level string    日志级别 (trace|debug|info|warn|error|fatal|panic|disabled 或 '*:[level],[key]:[level]') 
      --log_no_color        禁用彩色日志
      --trace               在出错时打印完整堆栈跟踪
```

### 另请参阅

* [zetacored query group](#zetacored-query-group)	- group 模块查询命令

## zetacored query group votes-by-proposal

按提案 ID 查询全部投票

```
zetacored query group votes-by-proposal [proposal-id] [flags]
```

### 选项

```
      --grpc-addr string         使用的 gRPC 端点
      --grpc-insecure            允许在不安全通道上使用 gRPC，若未开启需使用 TLS
      --height int               在指定高度查询状态（节点裁剪状态时可能失败）
  -h, --help                     查看 votes-by-proposal 的帮助
      --keyring-backend string   选择 keyring 后端 (os|file|kwallet|pass|test|memory) 
      --keyring-dir string       客户端 keyring 目录；未指定则使用默认 home 目录
      --no-indent                输出 JSON 时不缩进
      --node string              此链的 CometBFT RPC 地址 [host]:[port] 
  -o, --output string            输出格式 (text|json) 
      --page-count-total         返回记录总数
      --page-key binary          使用分页 page-key 继续查询
      --page-limit uint          每页返回的记录数
      --page-offset uint         结果起始偏移量
      --page-reverse             按降序返回结果
```

### 继承自父命令的选项

```
      --chain-id string     网络链 ID
      --home string         配置和数据文件夹
      --log_format string   日志格式 (json|plain) 
      --log_level string    日志级别 (trace|debug|info|warn|error|fatal|panic|disabled 或 '*:[level],[key]:[level]') 
      --log_no_color        禁用彩色日志
      --trace               在出错时打印完整堆栈跟踪
```

### 另请参阅

* [zetacored query group](#zetacored-query-group)	- group 模块查询命令

## zetacored query group votes-by-voter

按投票者地址查询投票

```
zetacored query group votes-by-voter [voter] [flags]
```

### 选项

```
      --grpc-addr string         使用的 gRPC 端点
      --grpc-insecure            允许在不安全通道上使用 gRPC，若未开启需使用 TLS
      --height int               在指定高度查询状态（节点裁剪状态时可能失败）
  -h, --help                     查看 votes-by-voter 的帮助
      --keyring-backend string   选择 keyring 后端 (os|file|kwallet|pass|test|memory) 
      --keyring-dir string       客户端 keyring 目录；未指定则使用默认 home 目录
      --no-indent                输出 JSON 时不缩进
      --node string              此链的 CometBFT RPC 地址 [host]:[port] 
  -o, --output string            输出格式 (text|json) 
      --page-count-total         返回记录总数
      --page-key binary          使用分页 page-key 继续查询
      --page-limit uint          每页返回的记录数
      --page-offset uint         结果起始偏移量
      --page-reverse             按降序返回结果
```

### 继承自父命令的选项

```
      --chain-id string     网络链 ID
      --home string         配置和数据文件夹
      --log_format string   日志格式 (json|plain) 
      --log_level string    日志级别 (trace|debug|info|warn|error|fatal|panic|disabled 或 '*:[level],[key]:[level]') 
      --log_no_color        禁用彩色日志
      --trace               在出错时打印完整堆栈跟踪
```

### 另请参阅

* [zetacored query group](#zetacored-query-group)	- group 模块查询命令

## zetacored query lightclient

lightclient 模块查询命令

```
zetacored query lightclient [flags]
```

### 选项

```
  -h, --help   查看 lightclient 的帮助
```

### 继承自父命令的选项

```
      --chain-id string     网络链 ID
      --home string         配置和数据文件夹
      --log_format string   日志格式 (json|plain) 
      --log_level string    日志级别 (trace|debug|info|warn|error|fatal|panic|disabled 或 '*:[level],[key]:[level]') 
      --log_no_color        禁用彩色日志
      --trace               在出错时打印完整堆栈跟踪
```

### 另请参阅

* [zetacored query](#zetacored-query)	- 查询子命令集合
* [zetacored query lightclient list-block-header](#zetacored-query-lightclient-list-block-header)	- 列出全部区块头
* [zetacored query lightclient list-chain-state](#zetacored-query-lightclient-list-chain-state)	- 列出全部链状态
* [zetacored query lightclient show-block-header](#zetacored-query-lightclient-show-block-header)	- 根据哈希查看区块头
* [zetacored query lightclient show-chain-state](#zetacored-query-lightclient-show-chain-state)	- 按链 ID 查看链状态
* [zetacored query lightclient show-header-enabled-chains](#zetacored-query-lightclient-show-header-enabled-chains)	- 查看区块头验证开关

## zetacored query lightclient list-block-header

列出全部区块头

```
zetacored query lightclient list-block-header [flags]
```

### 选项

```
      --grpc-addr string   使用的 gRPC 端点
      --grpc-insecure      允许在不安全通道上使用 gRPC，若未开启需使用 TLS
      --height int         在指定高度查询状态（节点裁剪状态时可能失败）
  -h, --help               查看 list-block-header 的帮助
      --node string        此链的 CometBFT RPC 地址 [host]:[port] 
  -o, --output string      输出格式 (text|json) 
```

### 继承自父命令的选项

```
      --chain-id string     网络链 ID
      --home string         配置和数据文件夹
      --log_format string   日志格式 (json|plain) 
      --log_level string    日志级别 (trace|debug|info|warn|error|fatal|panic|disabled 或 '*:[level],[key]:[level]') 
      --log_no_color        禁用彩色日志
      --trace               在出错时打印完整堆栈跟踪
```

### 另请参阅

* [zetacored query lightclient](#zetacored-query-lightclient)	- lightclient 模块查询命令

## zetacored query lightclient list-chain-state

列出全部链状态

```
zetacored query lightclient list-chain-state [flags]
```

### 选项

```
      --grpc-addr string   使用的 gRPC 端点
      --grpc-insecure      允许在不安全通道上使用 gRPC，若未开启需使用 TLS
      --height int         在指定高度查询状态（节点裁剪状态时可能失败）
  -h, --help               查看 list-chain-state 的帮助
      --node string        此链的 CometBFT RPC 地址 [host]:[port] 
  -o, --output string      输出格式 (text|json) 
```

### 继承自父命令的选项

```
      --chain-id string     网络链 ID
      --home string         配置和数据文件夹
      --log_format string   日志格式 (json|plain) 
      --log_level string    日志级别 (trace|debug|info|warn|error|fatal|panic|disabled 或 '*:[level],[key]:[level]') 
      --log_no_color        禁用彩色日志
      --trace               在出错时打印完整堆栈跟踪
```

### 另请参阅

* [zetacored query lightclient](#zetacored-query-lightclient)	- lightclient 模块查询命令

## zetacored query lightclient show-block-header

根据哈希查看区块头

```
zetacored query lightclient show-block-header [block-hash] [flags]
```

### 选项

```
      --grpc-addr string   使用的 gRPC 端点
      --grpc-insecure      允许在不安全通道上使用 gRPC，若未开启需使用 TLS
      --height int         在指定高度查询状态（节点裁剪状态时可能失败）
  -h, --help               查看 show-block-header 的帮助
      --node string        此链的 CometBFT RPC 地址 [host]:[port] 
  -o, --output string      输出格式 (text|json) 
```

### 继承自父命令的选项

```
      --chain-id string     网络链 ID
      --home string         配置和数据文件夹
      --log_format string   日志格式 (json|plain) 
      --log_level string    日志级别 (trace|debug|info|warn|error|fatal|panic|disabled 或 '*:[level],[key]:[level]') 
      --log_no_color        禁用彩色日志
      --trace               在出错时打印完整堆栈跟踪
```

### 另请参阅

* [zetacored query lightclient](#zetacored-query-lightclient)	- lightclient 模块查询命令

## zetacored query lightclient show-chain-state

按链 ID 查看链状态

```
zetacored query lightclient show-chain-state [chain-id] [flags]
```

### 选项

```
      --grpc-addr string   使用的 gRPC 端点
      --grpc-insecure      允许在不安全通道上使用 gRPC，若未开启需使用 TLS
      --height int         在指定高度查询状态（节点裁剪状态时可能失败）
  -h, --help               查看 show-chain-state 的帮助
      --node string        此链的 CometBFT RPC 地址 [host]:[port] 
  -o, --output string      输出格式 (text|json) 
```

### 继承自父命令的选项

```
      --chain-id string     网络链 ID
      --home string         配置和数据文件夹
      --log_format string   日志格式 (json|plain) 
      --log_level string    日志级别 (trace|debug|info|warn|error|fatal|panic|disabled 或 '*:[level],[key]:[level]') 
      --log_no_color        禁用彩色日志
      --trace               在出错时打印完整堆栈跟踪
```

### 另请参阅

* [zetacored query lightclient](#zetacored-query-lightclient)	- lightclient 模块查询命令

## zetacored query lightclient show-header-enabled-chains

查看区块头验证开关

```
zetacored query lightclient show-header-enabled-chains [flags]
```

### 选项

```
      --grpc-addr string   使用的 gRPC 端点
      --grpc-insecure      允许在不安全通道上使用 gRPC，若未开启需使用 TLS
      --height int         在指定高度查询状态（节点裁剪状态时可能失败）
  -h, --help               查看 show-header-enabled-chains 的帮助
      --node string        此链的 CometBFT RPC 地址 [host]:[port] 
  -o, --output string      输出格式 (text|json) 
```

### 继承自父命令的选项

```
      --chain-id string     网络链 ID
      --home string         配置和数据文件夹
      --log_format string   日志格式 (json|plain) 
      --log_level string    日志级别 (trace|debug|info|warn|error|fatal|panic|disabled 或 '*:[level],[key]:[level]') 
      --log_no_color        禁用彩色日志
      --trace               在出错时打印完整堆栈跟踪
```

### 另请参阅

* [zetacored query lightclient](#zetacored-query-lightclient)	- lightclient 模块查询命令

## zetacored query observer

observer 模块查询命令

```
zetacored query observer [flags]
```

### 选项

```
  -h, --help   查看 observer 的帮助
```

### 继承自父命令的选项

```
      --chain-id string     网络链 ID
      --home string         配置和数据文件夹
      --log_format string   日志格式 (json|plain) 
      --log_level string    日志级别 (trace|debug|info|warn|error|fatal|panic|disabled 或 '*:[level],[key]:[level]') 
      --log_no_color        禁用彩色日志
      --trace               在出错时打印完整堆栈跟踪
```

### 另请参阅

* [zetacored query](#zetacored-query)	- 查询子命令集合
* [zetacored query observer get-historical-tss-address](#zetacored-query-observer-get-historical-tss-address)	- 按最终确认的 Zeta 高度查询历史 TSS 地址
* [zetacored query observer get-tss-address](#zetacored-query-observer-get-tss-address)	- 查询当前 TSS 地址
* [zetacored query observer list-ballots](#zetacored-query-observer-list-ballots)	- 查询全部投票单
* [zetacored query observer list-ballots-for-height](#zetacored-query-observer-list-ballots-for-height)	- 按高度查询投票单列表
* [zetacored query observer list-blame](#zetacored-query-observer-list-blame)	- 查询全部责备记录
* [zetacored query observer list-blame-by-msg](#zetacored-query-observer-list-blame-by-msg)	- 按消息查询责备记录
* [zetacored query observer list-chain-nonces](#zetacored-query-observer-list-chain-nonces)	- 列出全部 chainNonces
* [zetacored query observer list-chain-params](#zetacored-query-observer-list-chain-params)	- 查询全部链参数
* [zetacored query observer list-chains](#zetacored-query-observer-list-chains)	- 列出全部受支持链
* [zetacored query observer list-node-account](#zetacored-query-observer-list-node-account)	- 列出全部节点账户
* [zetacored query observer list-observer-set](#zetacored-query-observer-list-observer-set)	- 查询观察者集合
* [zetacored query observer list-pending-nonces](#zetacored-query-observer-list-pending-nonces)	- 列出待处理的 chainNonces
* [zetacored query observer list-tss-funds-migrator](#zetacored-query-observer-list-tss-funds-migrator)	- 列出全部 TSS 资金迁移配置
* [zetacored query observer list-tss-history](#zetacored-query-observer-list-tss-history)	- 查看历史 TSS 列表
* [zetacored query observer show-ballot](#zetacored-query-observer-show-ballot)	- 按标识查询投票单
* [zetacored query observer show-blame](#zetacored-query-observer-show-blame)	- 按标识查询责备记录
* [zetacored query observer show-chain-nonces](#zetacored-query-observer-show-chain-nonces)	- 查看指定链的 chainNonces
* [zetacored query observer show-chain-params](#zetacored-query-observer-show-chain-params)	- 查看指定链的链参数
* [zetacored query observer show-crosschain-flags](#zetacored-query-observer-show-crosschain-flags)	- 查看跨链标志
* [zetacored query observer show-keygen](#zetacored-query-observer-show-keygen)	- 查看 keygen 状态
* [zetacored query observer show-node-account](#zetacored-query-observer-show-node-account)	- 查看节点账户
* [zetacored query observer show-observer-count](#zetacored-query-observer-show-observer-count)	- 查询观察者数量
* [zetacored query observer show-operational-flags](#zetacored-query-observer-show-operational-flags)	- 查看运营标志
* [zetacored query observer show-tss](#zetacored-query-observer-show-tss)	- 查看当前 TSS
* [zetacored query observer show-tss-funds-migrator](#zetacored-query-observer-show-tss-funds-migrator)	- 查看指定链的 TSS 资金迁移配置

## zetacored query observer get-historical-tss-address

按最终确认的 Zeta 高度查询历史 TSS 地址

```
zetacored query observer get-historical-tss-address [finalizedZetaHeight] [bitcoinChainId] [flags]
```

### 选项

```
      --grpc-addr string   使用的 gRPC 端点
      --grpc-insecure      允许在不安全通道上使用 gRPC，若未开启需使用 TLS
      --height int         在指定高度查询状态（节点裁剪状态时可能失败）
  -h, --help               查看 get-historical-tss-address 的帮助
      --node string        此链的 CometBFT RPC 地址 [host]:[port] 
  -o, --output string      输出格式 (text|json) 
```

### 继承自父命令的选项

```
      --chain-id string     网络链 ID
      --home string         配置和数据文件夹
      --log_format string   日志格式 (json|plain) 
      --log_level string    日志级别 (trace|debug|info|warn|error|fatal|panic|disabled 或 '*:[level],[key]:[level]') 
      --log_no_color        禁用彩色日志
      --trace               在出错时打印完整堆栈跟踪
```

### 另请参阅

* [zetacored query observer](#zetacored-query-observer)	- observer 模块查询命令

## zetacored query observer get-tss-address

查询当前 TSS 地址

```
zetacored query observer get-tss-address [bitcoinChainId]] [flags]
```

### 选项

```
      --grpc-addr string   使用的 gRPC 端点
      --grpc-insecure      允许在不安全通道上使用 gRPC，若未开启需使用 TLS
      --height int         在指定高度查询状态（节点裁剪状态时可能失败）
  -h, --help               查看 get-tss-address 的帮助
      --node string        此链的 CometBFT RPC 地址 [host]:[port] 
  -o, --output string      输出格式 (text|json) 
```

### 继承自父命令的选项

```
      --chain-id string     网络链 ID
      --home string         配置和数据文件夹
      --log_format string   日志格式 (json|plain) 
      --log_level string    日志级别 (trace|debug|info|warn|error|fatal|panic|disabled 或 '*:[level],[key]:[level]') 
      --log_no_color        禁用彩色日志
      --trace               在出错时打印完整堆栈跟踪
```

### 另请参阅

* [zetacored query observer](#zetacored-query-observer)	- observer 模块查询命令

## zetacored query observer list-ballots

查询全部投票单

```
zetacored query observer list-ballots [flags]
```

### 选项

```
      --count-total        统计 list-ballots 记录总数
      --grpc-addr string   使用的 gRPC 端点
      --grpc-insecure      允许在不安全通道上使用 gRPC，若未开启需使用 TLS
      --height int         在指定高度查询状态（节点裁剪状态时可能失败）
  -h, --help               查看 list-ballots 的帮助
      --limit uint         list-ballots 每页查询数量 (default 100)
      --node string        此链的 CometBFT RPC 地址 [host]:[port] 
      --offset uint        list-ballots 分页偏移量
  -o, --output string      输出格式 (text|json) 
      --page uint          list-ballots 查询页码（offset 为 limit 的倍数，default 1）
      --page-key string    list-ballots 分页 page-key
      --reverse            按降序返回结果
```

### 继承自父命令的选项

```
      --chain-id string     网络链 ID
      --home string         配置和数据文件夹
      --log_format string   日志格式 (json|plain) 
      --log_level string    日志级别 (trace|debug|info|warn|error|fatal|panic|disabled 或 '*:[level],[key]:[level]') 
      --log_no_color        禁用彩色日志
      --trace               在出错时打印完整堆栈跟踪
```

### 另请参阅

* [zetacored query observer](#zetacored-query-observer)	- observer 模块查询命令

## zetacored query observer list-ballots-for-height

按高度查询投票单列表

```
zetacored query observer list-ballots-for-height [height] [flags]
```

### 选项

```
      --grpc-addr string   使用的 gRPC 端点
      --grpc-insecure      允许在不安全通道上使用 gRPC，若未开启需使用 TLS
      --height int         在指定高度查询状态（节点裁剪状态时可能失败）
  -h, --help               查看 list-ballots-for-height 的帮助
      --node string        此链的 CometBFT RPC 地址 [host]:[port] 
  -o, --output string      输出格式 (text|json) 
```

### 继承自父命令的选项

```
      --chain-id string     网络链 ID
      --home string         配置和数据文件夹
      --log_format string   日志格式 (json|plain) 
      --log_level string    日志级别 (trace|debug|info|warn|error|fatal|panic|disabled 或 '*:[level],[key]:[level]') 
      --log_no_color        禁用彩色日志
      --trace               在出错时打印完整堆栈跟踪
```

### 另请参阅

* [zetacored query observer](#zetacored-query-observer)	- observer 模块查询命令

## zetacored query observer list-blame

查询全部责备记录

```
zetacored query observer list-blame [flags]
```

### 选项

```
      --grpc-addr string   使用的 gRPC 端点
      --grpc-insecure      允许在不安全通道上使用 gRPC，若未开启需使用 TLS
      --height int         在指定高度查询状态（节点裁剪状态时可能失败）
  -h, --help               查看 list-blame 的帮助
      --node string        此链的 CometBFT RPC 地址 [host]:[port] 
  -o, --output string      输出格式 (text|json) 
```

### 继承自父命令的选项

```
      --chain-id string     网络链 ID
      --home string         配置和数据文件夹
      --log_format string   日志格式 (json|plain) 
      --log_level string    日志级别 (trace|debug|info|warn|error|fatal|panic|disabled 或 '*:[level],[key]:[level]') 
      --log_no_color        禁用彩色日志
      --trace               在出错时打印完整堆栈跟踪
```

### 另请参阅

* [zetacored query observer](#zetacored-query-observer)	- observer 模块查询命令

## zetacored query observer list-blame-by-msg

按消息查询责备记录

```
zetacored query observer list-blame-by-msg [chainId] [nonce] [flags]
```

### 选项

```
      --grpc-addr string   使用的 gRPC 端点
      --grpc-insecure      允许在不安全通道上使用 gRPC，若未开启需使用 TLS
      --height int         在指定高度查询状态（节点裁剪状态时可能失败）
  -h, --help               查看 list-blame-by-msg 的帮助
      --node string        此链的 CometBFT RPC 地址 [host]:[port] 
  -o, --output string      输出格式 (text|json) 
```

### 继承自父命令的选项

```
      --chain-id string     网络链 ID
      --home string         配置和数据文件夹
      --log_format string   日志格式 (json|plain) 
      --log_level string    日志级别 (trace|debug|info|warn|error|fatal|panic|disabled 或 '*:[level],[key]:[level]') 
      --log_no_color        禁用彩色日志
      --trace               在出错时打印完整堆栈跟踪
```

### 另请参阅

* [zetacored query observer](#zetacored-query-observer)	- observer 模块查询命令

## zetacored query observer list-chain-nonces

列出全部 chainNonces

```
zetacored query observer list-chain-nonces [flags]
```

### 选项

```
      --count-total        统计 list-chain-nonces 记录总数
      --grpc-addr string   使用的 gRPC 端点
      --grpc-insecure      允许在不安全通道上使用 gRPC，若未开启需使用 TLS
      --height int         在指定高度查询状态（节点裁剪状态时可能失败）
  -h, --help               查看 list-chain-nonces 的帮助
      --limit uint         list-chain-nonces 每页查询数量 (default 100)
      --node string        此链的 CometBFT RPC 地址 [host]:[port] 
      --offset uint        list-chain-nonces 分页偏移量
  -o, --output string      输出格式 (text|json) 
      --page uint          list-chain-nonces 查询页码（offset 为 limit 的倍数，default 1）
      --page-key string    list-chain-nonces 分页 page-key
      --reverse            按降序返回结果
```

### 继承自父命令的选项

```
      --chain-id string     网络链 ID
      --home string         配置和数据文件夹
      --log_format string   日志格式 (json|plain) 
      --log_level string    日志级别 (trace|debug|info|warn|error|fatal|panic|disabled 或 '*:[level],[key]:[level]') 
      --log_no_color        禁用彩色日志
      --trace               在出错时打印完整堆栈跟踪
```

### 另请参阅

* [zetacored query observer](#zetacored-query-observer)	- observer 模块查询命令

## zetacored query observer list-chain-params

查询全部链参数

```
zetacored query observer list-chain-params [flags]
```

### 选项

```
      --grpc-addr string   使用的 gRPC 端点
      --grpc-insecure      允许在不安全通道上使用 gRPC，若未开启需使用 TLS
      --height int         在指定高度查询状态（节点裁剪状态时可能失败）
  -h, --help               查看 list-chain-params 的帮助
      --node string        此链的 CometBFT RPC 地址 [host]:[port] 
  -o, --output string      输出格式 (text|json) 
```

### 继承自父命令的选项

```
      --chain-id string     网络链 ID
      --home string         配置和数据文件夹
      --log_format string   日志格式 (json|plain) 
      --log_level string    日志级别 (trace|debug|info|warn|error|fatal|panic|disabled 或 '*:[level],[key]:[level]') 
      --log_no_color        禁用彩色日志
      --trace               在出错时打印完整堆栈跟踪
```

### 另请参阅

* [zetacored query observer](#zetacored-query-observer)	- observer 模块查询命令

## zetacored query observer list-chains

列出全部受支持链

```
zetacored query observer list-chains [flags]
```

### 选项

```
      --count-total        统计 list-chains 记录总数
      --grpc-addr string   使用的 gRPC 端点
      --grpc-insecure      允许在不安全通道上使用 gRPC，若未开启需使用 TLS
      --height int         在指定高度查询状态（节点裁剪状态时可能失败）
  -h, --help               查看 list-chains 的帮助
      --limit uint         list-chains 每页查询数量 (default 100)
      --node string        此链的 CometBFT RPC 地址 [host]:[port] 
      --offset uint        list-chains 分页偏移量
  -o, --output string      输出格式 (text|json) 
      --page uint          list-chains 查询页码（offset 为 limit 的倍数，default 1）
      --page-key string    list-chains 分页 page-key
      --reverse            按降序返回结果
```

### 继承自父命令的选项

```
      --chain-id string     网络链 ID
      --home string         配置和数据文件夹
      --log_format string   日志格式 (json|plain) 
      --log_level string    日志级别 (trace|debug|info|warn|error|fatal|panic|disabled 或 '*:[level],[key]:[level]') 
      --log_no_color        禁用彩色日志
      --trace               在出错时打印完整堆栈跟踪
```

### 另请参阅

* [zetacored query observer](#zetacored-query-observer)	- observer 模块查询命令

## zetacored query observer list-node-account

列出全部节点账户

```
zetacored query observer list-node-account [flags]
```

### 选项

```
      --count-total        统计 list-node-account 记录总数
      --grpc-addr string   使用的 gRPC 端点
      --grpc-insecure      允许在不安全通道上使用 gRPC，若未开启需使用 TLS
      --height int         在指定高度查询状态（节点裁剪状态时可能失败）
  -h, --help               查看 list-node-account 的帮助
      --limit uint         list-node-account 每页查询数量 (default 100)
      --node string        此链的 CometBFT RPC 地址 [host]:[port] 
      --offset uint        list-node-account 分页偏移量
  -o, --output string      输出格式 (text|json) 
      --page uint          list-node-account 查询页码（offset 为 limit 的倍数，default 1）
      --page-key string    list-node-account 分页 page-key
      --reverse            按降序返回结果
```

### 继承自父命令的选项

```
      --chain-id string     网络链 ID
      --home string         配置和数据文件夹
      --log_format string   日志格式 (json|plain) 
      --log_level string    日志级别 (trace|debug|info|warn|error|fatal|panic|disabled 或 '*:[level],[key]:[level]') 
      --log_no_color        禁用彩色日志
      --trace               在出错时打印完整堆栈跟踪
```

### 另请参阅

* [zetacored query observer](#zetacored-query-observer)	- observer 模块查询命令

## zetacored query observer list-observer-set

查询观察者集合

```
zetacored query observer list-observer-set [flags]
```

### 选项

```
      --grpc-addr string   使用的 gRPC 端点
      --grpc-insecure      允许在不安全通道上使用 gRPC，若未开启需使用 TLS
      --height int         在指定高度查询状态（节点裁剪状态时可能失败）
  -h, --help               查看 list-observer-set 的帮助
      --node string        此链的 CometBFT RPC 地址 [host]:[port] 
  -o, --output string      输出格式 (text|json) 
```

### 继承自父命令的选项

```
      --chain-id string     网络链 ID
      --home string         配置和数据文件夹
      --log_format string   日志格式 (json|plain) 
      --log_level string    日志级别 (trace|debug|info|warn|error|fatal|panic|disabled 或 '*:[level],[key]:[level]') 
      --log_no_color        禁用彩色日志
      --trace               在出错时打印完整堆栈跟踪
```

### 另请参阅

* [zetacored query observer](#zetacored-query-observer)	- observer 模块查询命令

## zetacored query observer list-pending-nonces

列出待处理的 chainNonces

```
zetacored query observer list-pending-nonces [flags]
```

### 选项

```
      --grpc-addr string   使用的 gRPC 端点
      --grpc-insecure      允许在不安全通道上使用 gRPC，若未开启需使用 TLS
      --height int         在指定高度查询状态（节点裁剪状态时可能失败）
  -h, --help               查看 list-pending-nonces 的帮助
      --node string        此链的 CometBFT RPC 地址 [host]:[port] 
  -o, --output string      输出格式 (text|json) 
```

### 继承自父命令的选项

```
      --chain-id string     网络链 ID
      --home string         配置和数据文件夹
      --log_format string   日志格式 (json|plain) 
      --log_level string    日志级别 (trace|debug|info|warn|error|fatal|panic|disabled 或 '*:[level],[key]:[level]') 
      --log_no_color        禁用彩色日志
      --trace               在出错时打印完整堆栈跟踪
```

### 另请参阅

* [zetacored query observer](#zetacored-query-observer)	- observer 模块查询命令

## zetacored query observer list-tss-funds-migrator

列出全部 TSS 资金迁移配置

```
zetacored query observer list-tss-funds-migrator [flags]
```

### 选项

```
      --count-total        统计 list-tss-funds-migrator 记录总数
      --grpc-addr string   使用的 gRPC 端点
      --grpc-insecure      允许在不安全通道上使用 gRPC，若未开启需使用 TLS
      --height int         在指定高度查询状态（节点裁剪状态时可能失败）
  -h, --help               查看 list-tss-funds-migrator 的帮助
      --limit uint         list-tss-funds-migrator 每页查询数量 (default 100)
      --node string        此链的 CometBFT RPC 地址 [host]:[port] 
      --offset uint        list-tss-funds-migrator 分页偏移量
  -o, --output string      输出格式 (text|json) 
      --page uint          list-tss-funds-migrator 查询页码（offset 为 limit 的倍数，default 1）
      --page-key string    list-tss-funds-migrator 分页 page-key
      --reverse            按降序返回结果
```

### 继承自父命令的选项

```
      --chain-id string     网络链 ID
      --home string         配置和数据文件夹
      --log_format string   日志格式 (json|plain) 
      --log_level string    日志级别 (trace|debug|info|warn|error|fatal|panic|disabled 或 '*:[level],[key]:[level]') 
      --log_no_color        禁用彩色日志
      --trace               在出错时打印完整堆栈跟踪
```

### 另请参阅

* [zetacored query observer](#zetacored-query-observer)	- observer 模块查询命令

## zetacored query observer list-tss-history

查看历史 TSS 列表

```
zetacored query observer list-tss-history [flags]
```

### 选项

```
      --grpc-addr string   使用的 gRPC 端点
      --grpc-insecure      允许在不安全通道上使用 gRPC，若未开启需使用 TLS
      --height int         在指定高度查询状态（节点裁剪状态时可能失败）
  -h, --help               查看 list-tss-history 的帮助
      --node string        此链的 CometBFT RPC 地址 [host]:[port] 
  -o, --output string      输出格式 (text|json) 
```

### 继承自父命令的选项

```
      --chain-id string     网络链 ID
      --home string         配置和数据文件夹
      --log_format string   日志格式 (json|plain) 
      --log_level string    日志级别 (trace|debug|info|warn|error|fatal|panic|disabled 或 '*:[level],[key]:[level]') 
      --log_no_color        禁用彩色日志
      --trace               在出错时打印完整堆栈跟踪
```

### 另请参阅

* [zetacored query observer](#zetacored-query-observer)	- observer 模块查询命令

## zetacored query observer show-ballot

按标识查询投票单

```
zetacored query observer show-ballot [ballot-identifier] [flags]
```

### 选项

```
      --grpc-addr string   使用的 gRPC 端点
      --grpc-insecure      允许在不安全通道上使用 gRPC，若未开启需使用 TLS
      --height int         在指定高度查询状态（节点裁剪状态时可能失败）
  -h, --help               查看 show-ballot 的帮助
      --node string        此链的 CometBFT RPC 地址 [host]:[port] 
  -o, --output string      输出格式 (text|json) 
```

### 继承自父命令的选项

```
      --chain-id string     网络链 ID
      --home string         配置和数据文件夹
      --log_format string   日志格式 (json|plain) 
      --log_level string    日志级别 (trace|debug|info|warn|error|fatal|panic|disabled 或 '*:[level],[key]:[level]') 
      --log_no_color        禁用彩色日志
      --trace               在出错时打印完整堆栈跟踪
```

### 另请参阅

* [zetacored query observer](#zetacored-query-observer)	- observer 模块查询命令

## zetacored query observer show-blame

按标识查询责备记录

```
zetacored query observer show-blame [blame-identifier] [flags]
```

### 选项

```
      --grpc-addr string   使用的 gRPC 端点
      --grpc-insecure      允许在不安全通道上使用 gRPC，若未开启需使用 TLS
      --height int         在指定高度查询状态（节点裁剪状态时可能失败）
  -h, --help               查看 show-blame 的帮助
      --node string        此链的 CometBFT RPC 地址 [host]:[port] 
  -o, --output string      输出格式 (text|json) 
```

### 继承自父命令的选项

```
      --chain-id string     网络链 ID
      --home string         配置和数据文件夹
      --log_format string   日志格式 (json|plain) 
      --log_level string    日志级别 (trace|debug|info|warn|error|fatal|panic|disabled 或 '*:[level],[key]:[level]') 
      --log_no_color        禁用彩色日志
      --trace               在出错时打印完整堆栈跟踪
```

### 另请参阅

* [zetacored query observer](#zetacored-query-observer)	- observer 模块查询命令

## zetacored query observer show-chain-nonces

查看指定链的 chainNonces

```
zetacored query observer show-chain-nonces [chain-id] [flags]
```

### 选项

```
      --grpc-addr string   使用的 gRPC 端点
      --grpc-insecure      允许在不安全通道上使用 gRPC，若未开启需使用 TLS
      --height int         在指定高度查询状态（节点裁剪状态时可能失败）
  -h, --help               查看 show-chain-nonces 的帮助
      --node string        此链的 CometBFT RPC 地址 [host]:[port] 
  -o, --output string      输出格式 (text|json) 
```

### 继承自父命令的选项

```
      --chain-id string     网络链 ID
      --home string         配置和数据文件夹
      --log_format string   日志格式 (json|plain) 
      --log_level string    日志级别 (trace|debug|info|warn|error|fatal|panic|disabled 或 '*:[level],[key]:[level]') 
      --log_no_color        禁用彩色日志
      --trace               在出错时打印完整堆栈跟踪
```

### 另请参阅

* [zetacored query observer](#zetacored-query-observer)	- observer 模块查询命令

## zetacored query observer show-chain-params

查看指定链的链参数

```
zetacored query observer show-chain-params [chain-id] [flags]
```

### 选项

```
      --grpc-addr string   使用的 gRPC 端点
      --grpc-insecure      允许在不安全通道上使用 gRPC，若未开启需使用 TLS
      --height int         在指定高度查询状态（节点裁剪状态时可能失败）
  -h, --help               查看 show-chain-params 的帮助
      --node string        此链的 CometBFT RPC 地址 [host]:[port] 
  -o, --output string      输出格式 (text|json) 
```

### 继承自父命令的选项

```
      --chain-id string     网络链 ID
      --home string         配置和数据文件夹
      --log_format string   日志格式 (json|plain) 
      --log_level string    日志级别 (trace|debug|info|warn|error|fatal|panic|disabled 或 '*:[level],[key]:[level]') 
      --log_no_color        禁用彩色日志
      --trace               在出错时打印完整堆栈跟踪
```

### 另请参阅

* [zetacored query observer](#zetacored-query-observer)	- observer 模块查询命令

## zetacored query observer show-crosschain-flags

查看跨链标志

```
zetacored query observer show-crosschain-flags [flags]
```

### 选项

```
      --grpc-addr string   使用的 gRPC 端点
      --grpc-insecure      允许在不安全通道上使用 gRPC，若未开启需使用 TLS
      --height int         在指定高度查询状态（节点裁剪状态时可能失败）
  -h, --help               查看 show-crosschain-flags 的帮助
      --node string        此链的 CometBFT RPC 地址 [host]:[port] 
  -o, --output string      输出格式 (text|json) 
```

### 继承自父命令的选项

```
      --chain-id string     网络链 ID
      --home string         配置和数据文件夹
      --log_format string   日志格式 (json|plain) 
      --log_level string    日志级别 (trace|debug|info|warn|error|fatal|panic|disabled 或 '*:[level],[key]:[level]') 
      --log_no_color        禁用彩色日志
      --trace               在出错时打印完整堆栈跟踪
```

### 另请参阅

* [zetacored query observer](#zetacored-query-observer)	- observer 模块查询命令

## zetacored query observer show-keygen

查看 keygen 状态

```
zetacored query observer show-keygen [flags]
```

### 选项

```
      --grpc-addr string   使用的 gRPC 端点
      --grpc-insecure      允许在不安全通道上使用 gRPC，若未开启需使用 TLS
      --height int         在指定高度查询状态（节点裁剪状态时可能失败）
  -h, --help               查看 show-keygen 的帮助
      --node string        此链的 CometBFT RPC 地址 [host]:[port] 
  -o, --output string      输出格式 (text|json) 
```

### 继承自父命令的选项

```
      --chain-id string     网络链 ID
      --home string         配置和数据文件夹
      --log_format string   日志格式 (json|plain) 
      --log_level string    日志级别 (trace|debug|info|warn|error|fatal|panic|disabled 或 '*:[level],[key]:[level]') 
      --log_no_color        禁用彩色日志
      --trace               在出错时打印完整堆栈跟踪
```

### 另请参阅

* [zetacored query observer](#zetacored-query-observer)	- observer 模块查询命令

## zetacored query observer show-node-account

查看节点账户

```
zetacored query observer show-node-account [operator_address] [flags]
```

### 选项

```
      --grpc-addr string   使用的 gRPC 端点
      --grpc-insecure      允许在不安全通道上使用 gRPC，若未开启需使用 TLS
      --height int         在指定高度查询状态（节点裁剪状态时可能失败）
  -h, --help               查看 show-node-account 的帮助
      --node string        此链的 CometBFT RPC 地址 [host]:[port] 
  -o, --output string      输出格式 (text|json) 
```

### 继承自父命令的选项

```
      --chain-id string     网络链 ID
      --home string         配置和数据文件夹
      --log_format string   日志格式 (json|plain) 
      --log_level string    日志级别 (trace|debug|info|warn|error|fatal|panic|disabled 或 '*:[level],[key]:[level]') 
      --log_no_color        禁用彩色日志
      --trace               在出错时打印完整堆栈跟踪
```

### 另请参阅

* [zetacored query observer](#zetacored-query-observer)	- observer 模块查询命令

## zetacored query observer show-observer-count

查询观察者数量

```
zetacored query observer show-observer-count [flags]
```

### 选项

```
      --grpc-addr string   使用的 gRPC 端点
      --grpc-insecure      允许在不安全通道上使用 gRPC，若未开启需使用 TLS
      --height int         在指定高度查询状态（节点裁剪状态时可能失败）
  -h, --help               查看 show-observer-count 的帮助
      --node string        此链的 CometBFT RPC 地址 [host]:[port] 
  -o, --output string      输出格式 (text|json) 
```

### 继承自父命令的选项

```
      --chain-id string     网络链 ID
      --home string         配置和数据文件夹
      --log_format string   日志格式 (json|plain) 
      --log_level string    日志级别 (trace|debug|info|warn|error|fatal|panic|disabled 或 '*:[level],[key]:[level]') 
      --log_no_color        禁用彩色日志
      --trace               在出错时打印完整堆栈跟踪
```

### 另请参阅

* [zetacored query observer](#zetacored-query-observer)	- observer 模块查询命令

## zetacored query observer show-operational-flags

查看运营标志

```
zetacored query observer show-operational-flags [flags]
```

### 选项

```
      --grpc-addr string   使用的 gRPC 端点
      --grpc-insecure      允许在不安全通道上使用 gRPC，若未开启需使用 TLS
      --height int         在指定高度查询状态（节点裁剪状态时可能失败）
  -h, --help               查看 show-operational-flags 的帮助
      --node string        此链的 CometBFT RPC 地址 [host]:[port] 
  -o, --output string      输出格式 (text|json) 
```

### 继承自父命令的选项

```
      --chain-id string     网络链 ID
      --home string         配置和数据文件夹
      --log_format string   日志格式 (json|plain) 
      --log_level string    日志级别 (trace|debug|info|warn|error|fatal|panic|disabled 或 '*:[level],[key]:[level]') 
      --log_no_color        禁用彩色日志
      --trace               在出错时打印完整堆栈跟踪
```

### 另请参阅

* [zetacored query observer](#zetacored-query-observer)	- observer 模块查询命令

## zetacored query observer show-tss

查看当前 TSS

```
zetacored query observer show-tss [flags]
```

### 选项

```
      --grpc-addr string   使用的 gRPC 端点
      --grpc-insecure      允许在不安全通道上使用 gRPC，若未开启需使用 TLS
      --height int         在指定高度查询状态（节点裁剪状态时可能失败）
  -h, --help               查看 show-tss 的帮助
      --node string        此链的 CometBFT RPC 地址 [host]:[port] 
  -o, --output string      输出格式 (text|json) 
```

### 继承自父命令的选项

```
      --chain-id string     网络链 ID
      --home string         配置和数据文件夹
      --log_format string   日志格式 (json|plain) 
      --log_level string    日志级别 (trace|debug|info|warn|error|fatal|panic|disabled 或 '*:[level],[key]:[level]') 
      --log_no_color        禁用彩色日志
      --trace               在出错时打印完整堆栈跟踪
```

### 另请参阅

* [zetacored query observer](#zetacored-query-observer)	- observer 模块查询命令

## zetacored query observer show-tss-funds-migrator

查看指定链的 TSS 资金迁移配置

```
zetacored query observer show-tss-funds-migrator [chain-id] [flags]
```

### 选项

```
      --count-total        统计 show-tss-funds-migrator 记录总数
      --grpc-addr string   使用的 gRPC 端点
      --grpc-insecure      允许在不安全通道上使用 gRPC，若未开启需使用 TLS
      --height int         在指定高度查询状态（节点裁剪状态时可能失败）
  -h, --help               查看 show-tss-funds-migrator 的帮助
      --limit uint         show-tss-funds-migrator 每页查询数量 (default 100)
      --node string        此链的 CometBFT RPC 地址 [host]:[port] 
      --offset uint        show-tss-funds-migrator 分页偏移量
  -o, --output string      输出格式 (text|json) 
      --page uint          show-tss-funds-migrator 查询页码（offset 为 limit 的倍数，default 1）
      --page-key string    show-tss-funds-migrator 分页 page-key
      --reverse            按降序返回结果
```

### 继承自父命令的选项

```
      --chain-id string     网络链 ID
      --home string         配置和数据文件夹
      --log_format string   日志格式 (json|plain) 
      --log_level string    日志级别 (trace|debug|info|warn|error|fatal|panic|disabled 或 '*:[level],[key]:[level]') 
      --log_no_color        禁用彩色日志
      --trace               在出错时打印完整堆栈跟踪
```

### 另请参阅

* [zetacored query observer](#zetacored-query-observer)	- observer 模块查询命令

## zetacored query params

params 模块查询命令

```
zetacored query params [flags]
```

### 选项

```
  -h, --help   查看 params 的帮助
```

### 继承自父命令的选项

```
      --chain-id string     网络链 ID
      --home string         配置和数据文件夹
      --log_format string   日志格式 (json|plain) 
      --log_level string    日志级别 (trace|debug|info|warn|error|fatal|panic|disabled 或 '*:[level],[key]:[level]') 
      --log_no_color        禁用彩色日志
      --trace               在出错时打印完整堆栈跟踪
```

### 另请参阅

* [zetacored query](#zetacored-query)	- 查询子命令集合
* [zetacored query params subspace](#zetacored-query-params-subspace)	- 按子空间与键查询原始参数
* [zetacored query params subspaces](#zetacored-query-params-subspaces)	- 查询已注册子空间及其键列表

## zetacored query params subspace

按子空间与键查询原始参数

```
zetacored query params subspace [subspace] [key] [flags]
```

### 选项

```
      --grpc-addr string         使用的 gRPC 端点
      --grpc-insecure            允许在不安全通道上使用 gRPC，若未开启需使用 TLS
      --height int               在指定高度查询状态（节点裁剪状态时可能失败）
  -h, --help                     查看 subspace 的帮助
      --keyring-backend string   选择 keyring 后端 (os|file|kwallet|pass|test|memory) 
      --keyring-dir string       客户端 keyring 目录；未指定则使用默认 home 目录
      --no-indent                输出 JSON 时不缩进
      --node string              此链的 CometBFT RPC 地址 [host]:[port] 
  -o, --output string            输出格式 (text|json) 
```

### 继承自父命令的选项

```
      --chain-id string     网络链 ID
      --home string         配置和数据文件夹
      --log_format string   日志格式 (json|plain) 
      --log_level string    日志级别 (trace|debug|info|warn|error|fatal|panic|disabled 或 '*:[level],[key]:[level]') 
      --log_no_color        禁用彩色日志
      --trace               在出错时打印完整堆栈跟踪
```

### 另请参阅

* [zetacored query params](#zetacored-query-params)	- params 模块查询命令

## zetacored query params subspaces

查询已注册的子空间及其键列表

```
zetacored query params subspaces [flags]
```

### 选项

```
      --grpc-addr string         使用的 gRPC 端点
      --grpc-insecure            允许在不安全通道上使用 gRPC，若未开启需使用 TLS
      --height int               在指定高度查询状态（节点裁剪状态时可能失败）
  -h, --help                     查看 subspaces 的帮助
      --keyring-backend string   选择 keyring 后端 (os|file|kwallet|pass|test|memory) 
      --keyring-dir string       客户端 keyring 目录；未指定则使用默认 home 目录
      --no-indent                输出 JSON 时不缩进
      --node string              此链的 CometBFT RPC 地址 [host]:[port] 
  -o, --output string            输出格式 (text|json) 
```

### 继承自父命令的选项

```
      --chain-id string     网络链 ID
      --home string         配置和数据文件夹
      --log_format string   日志格式 (json|plain) 
      --log_level string    日志级别 (trace|debug|info|warn|error|fatal|panic|disabled 或 '*:[level],[key]:[level]') 
      --log_no_color        禁用彩色日志
      --trace               在出错时打印完整堆栈跟踪
```

### 另请参阅

* [zetacored query params](#zetacored-query-params)	- params 模块查询命令

## zetacored query slashing

slashing 模块查询命令

```
zetacored query slashing [flags]
```

### 选项

```
  -h, --help   查看 slashing 的帮助
```

### 继承自父命令的选项

```
      --chain-id string     网络链 ID
      --home string         配置和数据文件夹
      --log_format string   日志格式 (json|plain) 
      --log_level string    日志级别 (trace|debug|info|warn|error|fatal|panic|disabled 或 '*:[level],[key]:[level]') 
      --log_no_color        禁用彩色日志
      --trace               在出错时打印完整堆栈跟踪
```

### 另请参阅

* [zetacored query](#zetacored-query)	- 查询子命令集合
* [zetacored query slashing params](#zetacored-query-slashing-params)	- 查询 slashing 模块参数
* [zetacored query slashing signing-info](#zetacored-query-slashing-signing-info)	- 查询验证人的签名信息
* [zetacored query slashing signing-infos](#zetacored-query-slashing-signing-infos)	- 查询所有验证人的签名信息

## zetacored query slashing params

查询 slashing 模块参数

```
zetacored query slashing params [flags]
```

### 选项

```
      --grpc-addr string         使用的 gRPC 端点
      --grpc-insecure            允许在不安全通道上使用 gRPC，若未开启需使用 TLS
      --height int               在指定高度查询状态（节点裁剪状态时可能失败）
  -h, --help                     查看 params 的帮助
      --keyring-backend string   选择 keyring 后端 (os|file|kwallet|pass|test|memory) 
      --keyring-dir string       客户端 keyring 目录；未指定则使用默认 home 目录
      --no-indent                输出 JSON 时不缩进
      --node string              此链的 CometBFT RPC 地址 [host]:[port] 
  -o, --output string            输出格式 (text|json) 
```

### 继承自父命令的选项

```
      --chain-id string     网络链 ID
      --home string         配置和数据文件夹
      --log_format string   日志格式 (json|plain) 
      --log_level string    日志级别 (trace|debug|info|warn|error|fatal|panic|disabled 或 '*:[level],[key]:[level]') 
      --log_no_color        禁用彩色日志
      --trace               在出错时打印完整堆栈跟踪
```

### 另请参阅

* [zetacored query slashing](#zetacored-query-slashing)	- slashing 模块查询命令

## zetacored query slashing signing-info

查询验证人的签名信息

### 概要

使用公钥（可由 `zetacored comet show-validator` 获取）或共识地址查询验证人的签名信息。

```
zetacored query slashing signing-info [validator-conspub/address] [flags]
```

### 示例

```
zetacored query slashing signing-info '{"@type":"/cosmos.crypto.ed25519.PubKey","key":"OauFcTKbN5Lx3fJL689cikXBqe+hcp6Y+x0rYUdR9Jk="}'
```

### 选项

```
      --grpc-addr string         使用的 gRPC 端点
      --grpc-insecure            允许在不安全通道上使用 gRPC，若未开启需使用 TLS
      --height int               在指定高度查询状态（节点裁剪状态时可能失败）
  -h, --help                     查看 signing-info 的帮助
      --keyring-backend string   选择 keyring 后端 (os|file|kwallet|pass|test|memory) 
      --keyring-dir string       客户端 keyring 目录；未指定则使用默认 home 目录
      --no-indent                输出 JSON 时不缩进
      --node string              此链的 CometBFT RPC 地址 [host]:[port] 
  -o, --output string            输出格式 (text|json) 
```

### 继承自父命令的选项

```
      --chain-id string     网络链 ID
      --home string         配置和数据文件夹
      --log_format string   日志格式 (json|plain) 
      --log_level string    日志级别 (trace|debug|info|warn|error|fatal|panic|disabled 或 '*:[level],[key]:[level]') 
      --log_no_color        禁用彩色日志
      --trace               在出错时打印完整堆栈跟踪
```

### 另请参阅

* [zetacored query slashing](#zetacored-query-slashing)	- slashing 模块查询命令

## zetacored query slashing signing-infos

查询所有验证人的签名信息

```
zetacored query slashing signing-infos [flags]
```

### 选项

```
      --grpc-addr string         使用的 gRPC 端点
      --grpc-insecure            允许在不安全通道上使用 gRPC，若未开启需使用 TLS
      --height int               在指定高度查询状态（节点裁剪状态时可能失败）
  -h, --help                     查看 signing-infos 的帮助
      --keyring-backend string   选择 keyring 后端 (os|file|kwallet|pass|test|memory) 
      --keyring-dir string       客户端 keyring 目录；未指定则使用默认 home 目录
      --no-indent                输出 JSON 时不缩进
      --node string              此链的 CometBFT RPC 地址 [host]:[port] 
  -o, --output string            输出格式 (text|json) 
      --page-count-total         返回记录总数
      --page-key binary          使用分页 page-key 继续查询
      --page-limit uint          每页返回的记录数
      --page-offset uint         结果起始偏移量
      --page-reverse             按降序返回结果
```

### 继承自父命令的选项

```
      --chain-id string     网络链 ID
      --home string         配置和数据文件夹
      --log_format string   日志格式 (json|plain) 
      --log_level string    日志级别 (trace|debug|info|warn|error|fatal|panic|disabled 或 '*:[level],[key]:[level]') 
      --log_no_color        禁用彩色日志
      --trace               在出错时打印完整堆栈跟踪
```

### 另请参阅

* [zetacored query slashing](#zetacored-query-slashing)	- slashing 模块查询命令

## zetacored query staking

staking 模块查询命令

```
zetacored query staking [flags]
```

### 选项

```
  -h, --help   查看 staking 的帮助
```

### 继承自父命令的选项

```
      --chain-id string     网络链 ID
      --home string         配置和数据文件夹
      --log_format string   日志格式 (json|plain) 
      --log_level string    日志级别 (trace|debug|info|warn|error|fatal|panic|disabled 或 '*:[level],[key]:[level]') 
      --log_no_color        禁用彩色日志
      --trace               在出错时打印完整堆栈跟踪
```

### 另请参阅

* [zetacored query](#zetacored-query)	- 查询子命令集合
* [zetacored query staking delegation](#zetacored-query-staking-delegation)	- 按委托人与验证人地址查询单个委托记录
* [zetacored query staking delegations](#zetacored-query-staking-delegations)	- 查询某委托人全部委托
* [zetacored query staking delegations-to](#zetacored-query-staking-delegations-to)	- 查询委托给某验证人的全部委托
* [zetacored query staking delegator-validator](#zetacored-query-staking-delegator-validator)	- 查询特定委托人与验证人的关联信息
* [zetacored query staking delegator-validators](#zetacored-query-staking-delegator-validators)	- 查询某委托人关联的全部验证人
* [zetacored query staking historical-info](#zetacored-query-staking-historical-info)	- 按高度查询历史 staking 信息
* [zetacored query staking params](#zetacored-query-staking-params)	- 查询当前 staking 参数
* [zetacored query staking pool](#zetacored-query-staking-pool)	- 查询当前 staking 池数值
* [zetacored query staking redelegation](#zetacored-query-staking-redelegation)	- 查询特定再委托记录
* [zetacored query staking unbonding-delegation](#zetacored-query-staking-unbonding-delegation)	- 查询单个解绑委托记录
* [zetacored query staking unbonding-delegations](#zetacored-query-staking-unbonding-delegations)	- 查询某委托人的全部解绑委托
* [zetacored query staking unbonding-delegations-from](#zetacored-query-staking-unbonding-delegations-from)	- 查询来自某验证人的全部解绑委托
* [zetacored query staking validator](#zetacored-query-staking-validator)	- 查询单个验证人
* [zetacored query staking validators](#zetacored-query-staking-validators)	- 查询全部验证人

## zetacored query staking delegation

按委托人与验证人地址查询单个委托记录

```
zetacored query staking delegation [delegator-addr] [validator-addr] [flags]
```

### 选项

```
      --grpc-addr string         使用的 gRPC 端点
      --grpc-insecure            允许在不安全通道上使用 gRPC，若未开启需使用 TLS
      --height int               在指定高度查询状态（节点裁剪状态时可能失败）
  -h, --help                     查看 delegation 的帮助
      --keyring-backend string   选择 keyring 后端 (os|file|kwallet|pass|test|memory) 
      --keyring-dir string       客户端 keyring 目录；未指定则使用默认 home 目录
      --no-indent                输出 JSON 时不缩进
      --node string              此链的 CometBFT RPC 地址 [host]:[port] 
  -o, --output string            输出格式 (text|json) 
```

### 继承自父命令的选项

```
      --chain-id string     网络链 ID
      --home string         配置和数据文件夹
      --log_format string   日志格式 (json|plain) 
      --log_level string    日志级别 (trace|debug|info|warn|error|fatal|panic|disabled 或 '*:[level],[key]:[level]') 
      --log_no_color        禁用彩色日志
      --trace               在出错时打印完整堆栈跟踪
```

### 另请参阅

* [zetacored query staking](#zetacored-query-staking)	- staking 模块查询命令

## zetacored query staking delegations

查询某委托人全部委托

```
zetacored query staking delegations [delegator-addr] [flags]
```

### 选项

```
      --grpc-addr string         使用的 gRPC 端点
      --grpc-insecure            允许在不安全通道上使用 gRPC，若未开启需使用 TLS
      --height int               在指定高度查询状态（节点裁剪状态时可能失败）
  -h, --help                     查看 delegations 的帮助
      --keyring-backend string   选择 keyring 后端 (os|file|kwallet|pass|test|memory) 
      --keyring-dir string       客户端 keyring 目录；未指定则使用默认 home 目录
      --no-indent                输出 JSON 时不缩进
      --node string              此链的 CometBFT RPC 地址 [host]:[port] 
  -o, --output string            输出格式 (text|json) 
      --page-count-total         返回记录总数
      --page-key binary          使用分页 page-key 继续查询
      --page-limit uint          每页返回的记录数
      --page-offset uint         结果起始偏移量
      --page-reverse             按降序返回结果
```

### 继承自父命令的选项

```
      --chain-id string     网络链 ID
      --home string         配置和数据文件夹
      --log_format string   日志格式 (json|plain) 
      --log_level string    日志级别 (trace|debug|info|warn|error|fatal|panic|disabled 或 '*:[level],[key]:[level]') 
      --log_no_color        禁用彩色日志
      --trace               在出错时打印完整堆栈跟踪
```

### 另请参阅

* [zetacored query staking](#zetacored-query-staking)	- staking 模块查询命令

## zetacored query staking delegations-to

查询委托给指定验证人的全部委托

```
zetacored query staking delegations-to [validator-addr] [flags]
```

### 选项

```
      --grpc-addr string         使用的 gRPC 端点
      --grpc-insecure            允许在不安全通道上使用 gRPC，若未开启需使用 TLS
      --height int               在指定高度查询状态（节点裁剪状态时可能失败）
  -h, --help                     查看 delegations-to 的帮助
      --keyring-backend string   选择 keyring 后端 (os|file|kwallet|pass|test|memory) 
      --keyring-dir string       客户端 keyring 目录；未指定则使用默认 home 目录
      --no-indent                输出 JSON 时不缩进
      --node string              此链的 CometBFT RPC 地址 [host]:[port] 
  -o, --output string            输出格式 (text|json) 
      --page-count-total         返回记录总数
      --page-key binary          使用分页 page-key 继续查询
      --page-limit uint          每页返回的记录数
      --page-offset uint         结果起始偏移量
      --page-reverse             按降序返回结果
```

### 继承自父命令的选项

```
      --chain-id string     网络链 ID
      --home string         配置和数据文件夹
      --log_format string   日志格式 (json|plain) 
      --log_level string    日志级别 (trace|debug|info|warn|error|fatal|panic|disabled 或 '*:[level],[key]:[level]') 
      --log_no_color        禁用彩色日志
      --trace               在出错时打印完整堆栈跟踪
```

### 另请参阅

* [zetacored query staking](#zetacored-query-staking)	- staking 模块查询命令

## zetacored query staking delegator-validator

查询特定委托人与验证人的关联信息

```
zetacored query staking delegator-validator [delegator-addr] [validator-addr] [flags]
```

### 选项

```
      --grpc-addr string         使用的 gRPC 端点
      --grpc-insecure            允许在不安全通道上使用 gRPC，若未开启需使用 TLS
      --height int               在指定高度查询状态（节点裁剪状态时可能失败）
  -h, --help                     查看 delegator-validator 的帮助
      --keyring-backend string   选择 keyring 后端 (os|file|kwallet|pass|test|memory) 
      --keyring-dir string       客户端 keyring 目录；未指定则使用默认 home 目录
      --no-indent                输出 JSON 时不缩进
      --node string              此链的 CometBFT RPC 地址 [host]:[port] 
  -o, --output string            输出格式 (text|json) 
```

### 继承自父命令的选项

```
      --chain-id string     网络链 ID
      --home string         配置和数据文件夹
      --log_format string   日志格式 (json|plain) 
      --log_level string    日志级别 (trace|debug|info|warn|error|fatal|panic|disabled 或 '*:[level],[key]:[level]') 
      --log_no_color        禁用彩色日志
      --trace               在出错时打印完整堆栈跟踪
```

### 另请参阅

* [zetacored query staking](#zetacored-query-staking)	- staking 模块查询命令

## zetacored query staking delegator-validators

查询某委托人关联的全部验证人

```
zetacored query staking delegator-validators [delegator-addr] [flags]
```

### 选项

```
      --grpc-addr string         使用的 gRPC 端点
      --grpc-insecure            允许在不安全通道上使用 gRPC，若未开启需使用 TLS
      --height int               在指定高度查询状态（节点裁剪状态时可能失败）
  -h, --help                     查看 delegator-validators 的帮助
      --keyring-backend string   选择 keyring 后端 (os|file|kwallet|pass|test|memory) 
      --keyring-dir string       客户端 keyring 目录；未指定则使用默认 home 目录
      --no-indent                输出 JSON 时不缩进
      --node string              此链的 CometBFT RPC 地址 [host]:[port] 
  -o, --output string            输出格式 (text|json) 
      --page-count-total         返回记录总数
      --page-key binary          使用分页 page-key 继续查询
      --page-limit uint          每页返回的记录数
      --page-offset uint         结果起始偏移量
      --page-reverse             按降序返回结果
```

### 继承自父命令的选项

```
      --chain-id string     网络链 ID
      --home string         配置和数据文件夹
      --log_format string   日志格式 (json|plain) 
      --log_level string    日志级别 (trace|debug|info|warn|error|fatal|panic|disabled 或 '*:[level],[key]:[level]') 
      --log_no_color        禁用彩色日志
      --trace               在出错时打印完整堆栈跟踪
```

### 另请参阅

* [zetacored query staking](#zetacored-query-staking)	- staking 模块查询命令

## zetacored query staking historical-info

按高度查询历史 staking 信息

```
zetacored query staking historical-info [height] [flags]
```

### 示例

```
$ zetacored query staking historical-info 5
```

### 选项

```
      --grpc-addr string         使用的 gRPC 端点
      --grpc-insecure            允许在不安全通道上使用 gRPC，若未开启需使用 TLS
      --height int               在指定高度查询状态（节点裁剪状态时可能失败）
  -h, --help                     查看 historical-info 的帮助
      --keyring-backend string   选择 keyring 后端 (os|file|kwallet|pass|test|memory) 
      --keyring-dir string       客户端 keyring 目录；未指定则使用默认 home 目录
      --no-indent                输出 JSON 时不缩进
      --node string              此链的 CometBFT RPC 地址 [host]:[port] 
  -o, --output string            输出格式 (text|json) 
```

### 继承自父命令的选项

```
      --chain-id string     网络链 ID
      --home string         配置和数据文件夹
      --log_format string   日志格式 (json|plain) 
      --log_level string    日志级别 (trace|debug|info|warn|error|fatal|panic|disabled 或 '*:[level],[key]:[level]') 
      --log_no_color        禁用彩色日志
      --trace               在出错时打印完整堆栈跟踪
```

### 另请参阅

* [zetacored query staking](#zetacored-query-staking)	- staking 模块查询命令

## zetacored query staking params

查询当前 staking 参数

```
zetacored query staking params [flags]
```

### 选项

```
      --grpc-addr string         使用的 gRPC 端点
      --grpc-insecure            允许在不安全通道上使用 gRPC，若未开启需使用 TLS
      --height int               在指定高度查询状态（节点裁剪状态时可能失败）
  -h, --help                     查看 params 的帮助
      --keyring-backend string   选择 keyring 后端 (os|file|kwallet|pass|test|memory) 
      --keyring-dir string       客户端 keyring 目录；未指定则使用默认 home 目录
      --no-indent                输出 JSON 时不缩进
      --node string              此链的 CometBFT RPC 地址 [host]:[port] 
  -o, --output string            输出格式 (text|json) 
```

### 继承自父命令的选项

```
      --chain-id string     网络链 ID
      --home string         配置和数据文件夹
      --log_format string   日志格式 (json|plain) 
      --log_level string    日志级别 (trace|debug|info|warn|error|fatal|panic|disabled 或 '*:[level],[key]:[level]') 
      --log_no_color        禁用彩色日志
      --trace               在出错时打印完整堆栈跟踪
```

### 另请参阅

* [zetacored query staking](#zetacored-query-staking)	- staking 模块查询命令

## zetacored query staking pool

查询当前 staking 池数值

```
zetacored query staking pool [flags]
```

### 选项

```
      --grpc-addr string         使用的 gRPC 端点
      --grpc-insecure            允许在不安全通道上使用 gRPC，若未开启需使用 TLS
      --height int               在指定高度查询状态（节点裁剪状态时可能失败）
  -h, --help                     查看 pool 的帮助
      --keyring-backend string   选择 keyring 后端 (os|file|kwallet|pass|test|memory) 
      --keyring-dir string       客户端 keyring 目录；未指定则使用默认 home 目录
      --no-indent                输出 JSON 时不缩进
      --node string              此链的 CometBFT RPC 地址 [host]:[port] 
  -o, --output string            输出格式 (text|json) 
```

### 继承自父命令的选项

```
      --chain-id string     网络链 ID
      --home string         配置和数据文件夹
      --log_format string   日志格式 (json|plain) 
      --log_level string    日志级别 (trace|debug|info|warn|error|fatal|panic|disabled 或 '*:[level],[key]:[level]') 
      --log_no_color        禁用彩色日志
      --trace               在出错时打印完整堆栈跟踪
```

### 另请参阅

* [zetacored query staking](#zetacored-query-staking)	- staking 模块查询命令

## zetacored query staking redelegation

查询特定再委托记录

```
zetacored query staking redelegation [delegator-addr] [src-validator-addr] [dst-validator-addr] [flags]
```

### 选项

```
      --grpc-addr string         使用的 gRPC 端点
      --grpc-insecure            允许在不安全通道上使用 gRPC，若未开启需使用 TLS
      --height int               在指定高度查询状态（节点裁剪状态时可能失败）
  -h, --help                     查看 redelegation 的帮助
      --keyring-backend string   选择 keyring 后端 (os|file|kwallet|pass|test|memory) 
      --keyring-dir string       客户端 keyring 目录；未指定则使用默认 home 目录
      --no-indent                输出 JSON 时不缩进
      --node string              此链的 CometBFT RPC 地址 [host]:[port] 
  -o, --output string            输出格式 (text|json) 
```

### 继承自父命令的选项

```
      --chain-id string     网络链 ID
      --home string         配置和数据文件夹
      --log_format string   日志格式 (json|plain) 
      --log_level string    日志级别 (trace|debug|info|warn|error|fatal|panic|disabled 或 '*:[level],[key]:[level]') 
      --log_no_color        禁用彩色日志
      --trace               在出错时打印完整堆栈跟踪
```

### 另请参阅

* [zetacored query staking](#zetacored-query-staking)	- staking 模块查询命令

## zetacored query staking unbonding-delegation

查询单个解绑委托记录

```
zetacored query staking unbonding-delegation [delegator-addr] [validator-addr] [flags]
```

### 选项

```
      --grpc-addr string         使用的 gRPC 端点
      --grpc-insecure            允许在不安全通道上使用 gRPC，若未开启需使用 TLS
      --height int               在指定高度查询状态（节点裁剪状态时可能失败）
  -h, --help                     查看 unbonding-delegation 的帮助
      --keyring-backend string   选择 keyring 后端 (os|file|kwallet|pass|test|memory) 
      --keyring-dir string       客户端 keyring 目录；未指定则使用默认 home 目录
      --no-indent                输出 JSON 时不缩进
      --node string              此链的 CometBFT RPC 地址 [host]:[port] 
  -o, --output string            输出格式 (text|json) 
```

### 继承自父命令的选项

```
      --chain-id string     网络链 ID
      --home string         配置和数据文件夹
      --log_format string   日志格式 (json|plain) 
      --log_level string    日志级别 (trace|debug|info|warn|error|fatal|panic|disabled 或 '*:[level],[key]:[level]') 
      --log_no_color        禁用彩色日志
      --trace               在出错时打印完整堆栈跟踪
```

### 另请参阅

* [zetacored query staking](#zetacored-query-staking)	- staking 模块查询命令

## zetacored query staking unbonding-delegations

查询某委托人的全部解绑委托

```
zetacored query staking unbonding-delegations [delegator-addr] [flags]
```

### 选项

```
      --grpc-addr string         使用的 gRPC 端点
      --grpc-insecure            允许在不安全通道上使用 gRPC，若未开启需使用 TLS
      --height int               在指定高度查询状态（节点裁剪状态时可能失败）
  -h, --help                     查看 unbonding-delegations 的帮助
      --keyring-backend string   选择 keyring 后端 (os|file|kwallet|pass|test|memory) 
      --keyring-dir string       客户端 keyring 目录；未指定则使用默认 home 目录
      --no-indent                输出 JSON 时不缩进
      --node string              此链的 CometBFT RPC 地址 [host]:[port] 
  -o, --output string            输出格式 (text|json) 
      --page-count-total         返回记录总数
      --page-key binary          使用分页 page-key 继续查询
      --page-limit uint          每页返回的记录数
      --page-offset uint         结果起始偏移量
      --page-reverse             按降序返回结果
```

### 继承自父命令的选项

```
      --chain-id string     网络链 ID
      --home string         配置和数据文件夹
      --log_format string   日志格式 (json|plain) 
      --log_level string    日志级别 (trace|debug|info|warn|error|fatal|panic|disabled 或 '*:[level],[key]:[level]') 
      --log_no_color        禁用彩色日志
      --trace               在出错时打印完整堆栈跟踪
```

### 另请参阅

* [zetacored query staking](#zetacored-query-staking)	- staking 模块查询命令

## zetacored query staking unbonding-delegations-from

查询来自指定验证人的全部解绑委托

```
zetacored query staking unbonding-delegations-from [validator-addr] [flags]
```

### 示例

```
$ zetacored query staking unbonding-delegations-from [val-addr]
```

### 选项

```
      --grpc-addr string         使用的 gRPC 端点
      --grpc-insecure            允许在不安全通道上使用 gRPC，若未开启需使用 TLS
      --height int               在指定高度查询状态（节点裁剪状态时可能失败）
  -h, --help                     查看 unbonding-delegations-from 的帮助
      --keyring-backend string   选择 keyring 后端 (os|file|kwallet|pass|test|memory) 
      --keyring-dir string       客户端 keyring 目录；未指定则使用默认 home 目录
      --no-indent                输出 JSON 时不缩进
      --node string              此链的 CometBFT RPC 地址 [host]:[port] 
  -o, --output string            输出格式 (text|json) 
      --page-count-total         返回记录总数
      --page-key binary          使用分页 page-key 继续查询
      --page-limit uint          每页返回的记录数
      --page-offset uint         结果起始偏移量
      --page-reverse             按降序返回结果
```

### 继承自父命令的选项

```
      --chain-id string     网络链 ID
      --home string         配置和数据文件夹
      --log_format string   日志格式 (json|plain) 
      --log_level string    日志级别 (trace|debug|info|warn|error|fatal|panic|disabled 或 '*:[level],[key]:[level]') 
      --log_no_color        禁用彩色日志
      --trace               在出错时打印完整堆栈跟踪
```

### 另请参阅

* [zetacored query staking](#zetacored-query-staking)	- staking 模块查询命令

## zetacored query staking validator

查询单个验证人

```
zetacored query staking validator [validator-addr] [flags]
```

### 选项

```
      --grpc-addr string         使用的 gRPC 端点
      --grpc-insecure            允许在不安全通道上使用 gRPC，若未开启需使用 TLS
      --height int               在指定高度查询状态（节点裁剪状态时可能失败）
  -h, --help                     查看 validator 的帮助
      --keyring-backend string   选择 keyring 后端 (os|file|kwallet|pass|test|memory) 
      --keyring-dir string       客户端 keyring 目录；未指定则使用默认 home 目录
      --no-indent                输出 JSON 时不缩进
      --node string              此链的 CometBFT RPC 地址 [host]:[port] 
  -o, --output string            输出格式 (text|json) 
```

### 继承自父命令的选项

```
      --chain-id string     网络链 ID
      --home string         配置和数据文件夹
      --log_format string   日志格式 (json|plain) 
      --log_level string    日志级别 (trace|debug|info|warn|error|fatal|panic|disabled 或 '*:[level],[key]:[level]') 
      --log_no_color        禁用彩色日志
      --trace               在出错时打印完整堆栈跟踪
```

### 另请参阅

* [zetacored query staking](#zetacored-query-staking)	- staking 模块查询命令

## zetacored query staking validators

查询全部验证人

```
zetacored query staking validators [flags]
```

### 选项

```
      --grpc-addr string         使用的 gRPC 端点
      --grpc-insecure            允许在不安全通道上使用 gRPC，若未开启需使用 TLS
      --height int               在指定高度查询状态（节点裁剪状态时可能失败）
  -h, --help                     查看 validators 的帮助
      --keyring-backend string   选择 keyring 后端 (os|file|kwallet|pass|test|memory) 
      --keyring-dir string       客户端 keyring 目录；未指定则使用默认 home 目录
      --no-indent                输出 JSON 时不缩进
      --node string              此链的 CometBFT RPC 地址 [host]:[port] 
  -o, --output string            输出格式 (text|json) 
      --page-count-total         返回记录总数
      --page-key binary          使用分页 page-key 继续查询
      --page-limit uint          每页返回的记录数
      --page-offset uint         结果起始偏移量
      --page-reverse             按降序返回结果
```

### 继承自父命令的选项

```
      --chain-id string     网络链 ID
      --home string         配置和数据文件夹
      --log_format string   日志格式 (json|plain) 
      --log_level string    日志级别 (trace|debug|info|warn|error|fatal|panic|disabled 或 '*:[level],[key]:[level]') 
      --log_no_color        禁用彩色日志
      --trace               在出错时打印完整堆栈跟踪
```

### 另请参阅

* [zetacored query staking](#zetacored-query-staking)	- staking 模块查询命令

## zetacored query tx

通过哈希、`[addr]/[seq]` 组合或逗号分隔签名查询已提交交易

### 概要

示例：
$ zetacored query tx [hash]
$ zetacored query tx --type=acc_seq [addr]/[sequence]
$ zetacored query tx --type=signature [sig1_base64],[sig2_base64...]

```
zetacored query tx --type=[hash|acc_seq|signature] [hash|acc_seq|signature] [flags]
```

### 选项

```
      --grpc-addr string   使用的 gRPC 端点
      --grpc-insecure      允许在不安全通道上使用 gRPC，若未开启需使用 TLS
      --height int         在指定高度查询状态（节点裁剪状态时可能失败）
  -h, --help               查看 tx 的帮助
      --node string        此链的 CometBFT RPC 地址 [host]:[port] 
  -o, --output string      输出格式 (text|json) 
      --type string        查询交易时使用的类型，可选 "hash"、"acc_seq"、"signature" 
```

### 继承自父命令的选项

```
      --chain-id string     网络链 ID
      --home string         配置和数据文件夹
      --log_format string   日志格式 (json|plain) 
      --log_level string    日志级别 (trace|debug|info|warn|error|fatal|panic|disabled 或 '*:[level],[key]:[level]') 
      --log_no_color        禁用彩色日志
      --trace               在出错时打印完整堆栈跟踪
```

### 另请参阅

* [zetacored query](#zetacored-query)	- 查询子命令集合

## zetacored query txs

按事件条件搜索交易并分页返回结果

### 概要

检索完全匹配给定事件条件的交易，结果支持分页。事件查询将直接转发至 Tendermint 的 RPC `TxSearch` 接口，需符合其查询语法。请参阅各模块文档中的事件说明（`xx_events.md`）。

```
zetacored query txs [flags]
```

### 示例

```
$ zetacored query txs --query "message.sender='cosmos1...' AND message.action='withdraw_delegator_reward' AND tx.height > 7" --page 1 --limit 30
```

### 选项

```
      --grpc-addr string   使用的 gRPC 端点
      --grpc-insecure      允许在不安全通道上使用 gRPC，若未开启需使用 TLS
      --height int         在指定高度查询状态（节点裁剪状态时可能失败）
  -h, --help               查看 txs 的帮助
      --limit int          每页返回的交易数量 (default 100)
      --node string        此链的 CometBFT RPC 地址 [host]:[port] 
      --order_by string    结果排序方式 (asc|dsc)
  -o, --output string      输出格式 (text|json) 
      --page int           查询分页页码 (default 1)
      --query string       按 Tendermint 语法编写的交易事件查询条件
```

### 继承自父命令的选项

```
      --chain-id string     网络链 ID
      --home string         配置和数据文件夹
      --log_format string   日志格式 (json|plain) 
      --log_level string    日志级别 (trace|debug|info|warn|error|fatal|panic|disabled 或 '*:[level],[key]:[level]') 
      --log_no_color        禁用彩色日志
      --trace               在出错时打印完整堆栈跟踪
```

### 另请参阅

* [zetacored query](#zetacored-query)	- 查询子命令集合
## zetacored query upgrade

upgrade 模块查询命令

```
zetacored query upgrade [flags]
```

### 选项

```
  -h, --help   查看 upgrade 的帮助
```

### 继承自父命令的选项

```
      --chain-id string     网络链 ID
      --home string         配置和数据文件夹
      --log_format string   日志格式 (json|plain) 
      --log_level string    日志级别 (trace|debug|info|warn|error|fatal|panic|disabled 或 '*:[level],[key]:[level]') 
      --log_no_color        禁用彩色日志
      --trace               在出错时打印完整堆栈跟踪
```

### 另请参阅

* [zetacored query](#zetacored-query)	- 查询子命令集合
* [zetacored query upgrade applied](#zetacored-query-upgrade-applied)	- 查询升级生效高度对应的区块头
* [zetacored query upgrade authority](#zetacored-query-upgrade-authority)	- 获取升级管理地址
* [zetacored query upgrade module-versions](#zetacored-query-upgrade-module-versions)	- 查询模块版本列表
* [zetacored query upgrade plan](#zetacored-query-upgrade-plan)	- 查询当前的升级计划

## zetacored query upgrade applied

查询已完成升级生效时的区块头

```
zetacored query upgrade applied [upgrade-name] [flags]
```

### 选项

```
      --grpc-addr string         使用的 gRPC 端点
      --grpc-insecure            允许在不安全通道上使用 gRPC，若未开启需使用 TLS
      --height int               在指定高度查询状态（节点裁剪状态时可能失败）
  -h, --help                     查看 applied 的帮助
      --node string              此链的 CometBFT RPC 地址 [host]:[port] 
  -o, --output string            输出格式 (text|json) 
```

### 继承自父命令的选项

```
      --chain-id string     网络链 ID
      --home string         配置和数据文件夹
      --log_format string   日志格式 (json|plain) 
      --log_level string    日志级别 (trace|debug|info|warn|error|fatal|panic|disabled 或 '*:[level],[key]:[level]') 
      --log_no_color        禁用彩色日志
      --trace               在出错时打印完整堆栈跟踪
```

### 另请参阅

* [zetacored query upgrade](#zetacored-query-upgrade)	- upgrade 模块查询命令

## zetacored query upgrade authority

获取升级管理地址

```
zetacored query upgrade authority [flags]
```

### 选项

```
      --grpc-addr string         使用的 gRPC 端点
      --grpc-insecure            允许在不安全通道上使用 gRPC，若未开启需使用 TLS
      --height int               在指定高度查询状态（节点裁剪状态时可能失败）
  -h, --help                     查看 authority 的帮助
      --node string              此链的 CometBFT RPC 地址 [host]:[port] 
  -o, --output string            输出格式 (text|json) 
```

### 继承自父命令的选项

```
      --chain-id string     网络链 ID
      --home string         配置和数据文件夹
      --log_format string   日志格式 (json|plain) 
      --log_level string    日志级别 (trace|debug|info|warn|error|fatal|panic|disabled 或 '*:[level],[key]:[level]') 
      --log_no_color        禁用彩色日志
      --trace               在出错时打印完整堆栈跟踪
```

### 另请参阅

* [zetacored query upgrade](#zetacored-query-upgrade)	- upgrade 模块查询命令

## zetacored query upgrade module-versions

查询模块版本列表

```
zetacored query upgrade module-versions [optional module_name] [flags]
```

### 选项

```
      --grpc-addr string         使用的 gRPC 端点
      --grpc-insecure            允许在不安全通道上使用 gRPC，若未开启需使用 TLS
      --height int               在指定高度查询状态（节点裁剪状态时可能失败）
  -h, --help                     查看 module-versions 的帮助
      --node string              此链的 CometBFT RPC 地址 [host]:[port] 
  -o, --output string            输出格式 (text|json) 
```

### 继承自父命令的选项

```
      --chain-id string     网络链 ID
      --home string         配置和数据文件夹
      --log_format string   日志格式 (json|plain) 
      --log_level string    日志级别 (trace|debug|info|warn|error|fatal|panic|disabled 或 '*:[level],[key]:[level]') 
      --log_no_color        禁用彩色日志
      --trace               在出错时打印完整堆栈跟踪
```

### 另请参阅

* [zetacored query upgrade](#zetacored-query-upgrade)	- upgrade 模块查询命令

## zetacored query upgrade plan

查询当前的升级计划（若存在）

```
zetacored query upgrade plan [flags]
```

### 选项

```
      --grpc-addr string         使用的 gRPC 端点
      --grpc-insecure            允许在不安全通道上使用 gRPC，若未开启需使用 TLS
      --height int               在指定高度查询状态（节点裁剪状态时可能失败）
  -h, --help                     查看 plan 的帮助
      --node string              此链的 CometBFT RPC 地址 [host]:[port] 
  -o, --output string            输出格式 (text|json) 
```

### 继承自父命令的选项

```
      --chain-id string     网络链 ID
      --home string         配置和数据文件夹
      --log_format string   日志格式 (json|plain) 
      --log_level string    日志级别 (trace|debug|info|warn|error|fatal|panic|disabled 或 '*:[level],[key]:[level]') 
      --log_no_color        禁用彩色日志
      --trace               在出错时打印完整堆栈跟踪
```

### 另请参阅

* [zetacored query upgrade](#zetacored-query-upgrade)	- upgrade 模块查询命令
## zetacored query crosschain get-zeta-accounting

查询 ZETA 统计

```
zetacored query crosschain get-zeta-accounting [flags]
```

### 选项

```
      --grpc-addr string   使用的 gRPC 端点
      --grpc-insecure      允许在不安全通道上使用 gRPC，若未开启需使用 TLS
      --height int         在指定高度查询状态（节点裁剪状态时可能失败）
  -h, --help               查看 get-zeta-accounting 的帮助
      --node string        此链的 CometBFT RPC 地址 [host]:[port] 
  -o, --output string      输出格式 (text|json) 
```

### 继承自父命令的选项

```
      --chain-id string     网络链 ID
      --home string         配置和数据文件夹
      --log_format string   日志格式 (json|plain) 
      --log_level string    日志级别 (trace|debug|info|warn|error|fatal|panic|disabled 或 '*:[level],[key]:[level]') 
      --log_no_color        禁用彩色日志
      --trace               在出错时打印完整堆栈跟踪
```

### 另请参阅

* [zetacored query crosschain](#zetacored-query-crosschain)	- crosschain 模块查询命令

## zetacored query crosschain inbound-hash-to-cctx-data

通过 inbound 哈希查询 CCTX 数据

```
zetacored query crosschain inbound-hash-to-cctx-data [inbound-hash] [flags]
```

### 选项

```
      --grpc-addr string   使用的 gRPC 端点
      --grpc-insecure      允许在不安全通道上使用 gRPC，若未开启需使用 TLS
      --height int         在指定高度查询状态（节点裁剪状态时可能失败）
  -h, --help               查看 inbound-hash-to-cctx-data 的帮助
      --node string        此链的 CometBFT RPC 地址 [host]:[port] 
  -o, --output string      输出格式 (text|json) 
```

### 继承自父命令的选项

```
      --chain-id string     网络链 ID
      --home string         配置和数据文件夹
      --log_format string   日志格式 (json|plain) 
      --log_level string    日志级别 (trace|debug|info|warn|error|fatal|panic|disabled 或 '*:[level],[key]:[level]') 
      --log_no_color        禁用彩色日志
      --trace               在出错时打印完整堆栈跟踪
```

### 另请参阅

* [zetacored query crosschain](#zetacored-query-crosschain)	- crosschain 模块查询命令

## zetacored query crosschain last-zeta-height

查询最新 Zeta 高度

```
zetacored query crosschain last-zeta-height [flags]
```

### 选项

```
      --grpc-addr string   使用的 gRPC 端点
      --grpc-insecure      允许在不安全通道上使用 gRPC，若未开启需使用 TLS
      --height int         在指定高度查询状态（节点裁剪状态时可能失败）
  -h, --help               查看 last-zeta-height 的帮助
      --node string        此链的 CometBFT RPC 地址 [host]:[port] 
  -o, --output string      输出格式 (text|json) 
```

### 继承自父命令的选项

```
      --chain-id string     网络链 ID
      --home string         配置和数据文件夹
      --log_format string   日志格式 (json|plain) 
      --log_level string    日志级别 (trace|debug|info|warn|error|fatal|panic|disabled 或 '*:[level],[key]:[level]') 
      --log_no_color        禁用彩色日志
      --trace               在出错时打印完整堆栈跟踪
```

### 另请参阅

* [zetacored query crosschain](#zetacored-query-crosschain)	- crosschain 模块查询命令

## zetacored query crosschain list-all-inbound-trackers

查看全部 inbound tracker

```
zetacored query crosschain list-all-inbound-trackers [flags]
```

### 选项

```
      --grpc-addr string   使用的 gRPC 端点
      --grpc-insecure      允许在不安全通道上使用 gRPC，若未开启需使用 TLS
      --height int         在指定高度查询状态（节点裁剪状态时可能失败）
  -h, --help               查看 list-all-inbound-trackers 的帮助
      --node string        此链的 CometBFT RPC 地址 [host]:[port] 
  -o, --output string      输出格式 (text|json) 
```
### 继承自父命令的选项

```
      --chain-id string     网络链 ID
      --home string         配置和数据文件夹
      --log_format string   日志格式 (json|plain) 
      --log_level string    日志级别 (trace|debug|info|warn|error|fatal|panic|disabled 或 '*:[level],[key]:[level]') 
      --log_no_color        禁用彩色日志
      --trace               在出错时打印完整堆栈跟踪
```

### 另请参阅

* [zetacored query crosschain](#zetacored-query-crosschain)	- crosschain 模块查询命令

## zetacored query crosschain list-cctx

列出全部 CCTX

```
zetacored query crosschain list-cctx [flags]
```

### 选项

```
      --count-total        统计 list-cctx 的记录总数
      --grpc-addr string   使用的 gRPC 端点
      --grpc-insecure      允许在不安全通道上使用 gRPC，若未开启需使用 TLS
      --height int         在指定高度查询状态（节点裁剪状态时可能失败）
  -h, --help               查看 list-cctx 的帮助
      --limit uint         list-cctx 的分页条数 (default 100)
      --node string        此链的 CometBFT RPC 地址 [host]:[port] 
      --offset uint        list-cctx 的分页偏移
  -o, --output string      输出格式 (text|json) 
      --page uint          list-cctx 的分页页码，设置后 offset 为 limit 的倍数 (default 1)
      --page-key string    list-cctx 的分页 page-key
      --reverse            按降序返回结果
```

### 继承自父命令的选项

```
      --chain-id string     网络链 ID
      --home string         配置和数据文件夹
      --log_format string   日志格式 (json|plain) 
      --log_level string    日志级别 (trace|debug|info|warn|error|fatal|panic|disabled 或 '*:[level],[key]:[level]') 
      --log_no_color        禁用彩色日志
      --trace               在出错时打印完整堆栈跟踪
```

### 另请参阅

* [zetacored query crosschain](#zetacored-query-crosschain)	- crosschain 模块查询命令

## zetacored query crosschain list-gas-price

列出全部 gasPrice

```
zetacored query crosschain list-gas-price [flags]
```

### 选项

```
      --count-total        统计 list-gas-price 的记录总数
      --grpc-addr string   使用的 gRPC 端点
      --grpc-insecure      允许在不安全通道上使用 gRPC，若未开启需使用 TLS
      --height int         在指定高度查询状态（节点裁剪状态时可能失败）
  -h, --help               查看 list-gas-price 的帮助
      --limit uint         list-gas-price 的分页条数 (default 100)
      --node string        此链的 CometBFT RPC 地址 [host]:[port] 
      --offset uint        list-gas-price 的分页偏移
  -o, --output string      输出格式 (text|json) 
      --page uint          list-gas-price 的分页页码 (default 1)
      --page-key string    list-gas-price 的分页 page-key
      --reverse            按降序返回结果
```

### 继承自父命令的选项

```
      --chain-id string     网络链 ID
      --home string         配置和数据文件夹
      --log_format string   日志格式 (json|plain) 
      --log_level string    日志级别 (trace|debug|info|warn|error|fatal|panic|disabled 或 '*:[level],[key]:[level]') 
      --log_no_color        禁用彩色日志
      --trace               在出错时打印完整堆栈跟踪
```

### 另请参阅

* [zetacored query crosschain](#zetacored-query-crosschain)	- crosschain 模块查询命令

## zetacored query crosschain list-inbound-hash-to-cctx

列出全部 inboundHashToCctx

```
zetacored query crosschain list-inbound-hash-to-cctx [flags]
```

### 选项

```
      --count-total        统计 list-inbound-hash-to-cctx 的记录总数
      --grpc-addr string   使用的 gRPC 端点
      --grpc-insecure      允许在不安全通道上使用 gRPC，若未开启需使用 TLS
      --height int         在指定高度查询状态（节点裁剪状态时可能失败）
  -h, --help               查看 list-inbound-hash-to-cctx 的帮助
      --limit uint         list-inbound-hash-to-cctx 的分页条数 (default 100)
      --node string        此链的 CometBFT RPC 地址 [host]:[port] 
      --offset uint        list-inbound-hash-to-cctx 的分页偏移
  -o, --output string      输出格式 (text|json) 
      --page uint          list-inbound-hash-to-cctx 的分页页码 (default 1)
      --page-key string    list-inbound-hash-to-cctx 的分页 page-key
      --reverse            按降序返回结果
```

### 继承自父命令的选项

```
      --chain-id string     网络链 ID
      --home string         配置和数据文件夹
      --log_format string   日志格式 (json|plain) 
      --log_level string    日志级别 (trace|debug|info|warn|error|fatal|panic|disabled 或 '*:[level],[key]:[level]') 
      --log_no_color        禁用彩色日志
      --trace               在出错时打印完整堆栈跟踪
```

### 另请参阅

* [zetacored query crosschain](#zetacored-query-crosschain)	- crosschain 模块查询命令

## zetacored query crosschain list-inbound-tracker

按链 ID 查看 inbound tracker 列表

```
zetacored query crosschain list-inbound-tracker [chain-id] [flags]
```

### 选项

```
      --count-total        统计 list-inbound-tracker 的记录总数
      --grpc-addr string   使用的 gRPC 端点
      --grpc-insecure      允许在不安全通道上使用 gRPC，若未开启需使用 TLS
      --height int         在指定高度查询状态（节点裁剪状态时可能失败）
  -h, --help               查看 list-inbound-tracker 的帮助
      --limit uint         list-inbound-tracker 的分页条数 (default 100)
      --node string        此链的 CometBFT RPC 地址 [host]:[port] 
      --offset uint        list-inbound-tracker 的分页偏移
  -o, --output string      输出格式 (text|json) 
      --page uint          list-inbound-tracker 的分页页码 (default 1)
      --page-key string    list-inbound-tracker 的分页 page-key
      --reverse            按降序返回结果
```

### 继承自父命令的选项

```
      --chain-id string     网络链 ID
      --home string         配置和数据文件夹
      --log_format string   日志格式 (json|plain) 
      --log_level string    日志级别 (trace|debug|info|warn|error|fatal|panic|disabled 或 '*:[level],[key]:[level]') 
      --log_no_color        禁用彩色日志
      --trace               在出错时打印完整堆栈跟踪
```

### 另请参阅

* [zetacored query crosschain](#zetacored-query-crosschain)	- crosschain 模块查询命令

## zetacored query crosschain list-outbound-tracker

列出全部 outbound tracker

```
zetacored query crosschain list-outbound-tracker [flags]
```

### 选项

```
      --count-total        统计 list-outbound-tracker 的记录总数
      --grpc-addr string   使用的 gRPC 端点
      --grpc-insecure      允许在不安全通道上使用 gRPC，若未开启需使用 TLS
      --height int         在指定高度查询状态（节点裁剪状态时可能失败）
  -h, --help               查看 list-outbound-tracker 的帮助
      --limit uint         list-outbound-tracker 的分页条数 (default 100)
      --node string        此链的 CometBFT RPC 地址 [host]:[port] 
      --offset uint        list-outbound-tracker 的分页偏移
  -o, --output string      输出格式 (text|json) 
      --page uint          list-outbound-tracker 的分页页码 (default 1)
      --page-key string    list-outbound-tracker 的分页 page-key
      --reverse            按降序返回结果
```

### 继承自父命令的选项

```
      --chain-id string     网络链 ID
      --home string         配置和数据文件夹
      --log_format string   日志格式 (json|plain) 
      --log_level string    日志级别 (trace|debug|info|warn|error|fatal|panic|disabled 或 '*:[level],[key]:[level]') 
      --log_no_color        禁用彩色日志
      --trace               在出错时打印完整堆栈跟踪
```

### 另请参阅

* [zetacored query crosschain](#zetacored-query-crosschain)	- crosschain 模块查询命令

## zetacored query crosschain list-pending-cctx

查看待处理 CCTX

```
zetacored query crosschain list-pending-cctx [chain-id] [limit] [flags]
```

### 选项

```
      --grpc-addr string   使用的 gRPC 端点
      --grpc-insecure      允许在不安全通道上使用 gRPC，若未开启需使用 TLS
      --height int         在指定高度查询状态（节点裁剪状态时可能失败）
  -h, --help               查看 list-pending-cctx 的帮助
      --node string        此链的 CometBFT RPC 地址 [host]:[port] 
  -o, --output string      输出格式 (text|json) 
```

### 继承自父命令的选项

```
      --chain-id string     网络链 ID
      --home string         配置和数据文件夹
      --log_format string   日志格式 (json|plain) 
      --log_level string    日志级别 (trace|debug|info|warn|error|fatal|panic|disabled 或 '*:[level],[key]:[level]') 
      --log_no_color        禁用彩色日志
      --trace               在出错时打印完整堆栈跟踪
```

### 另请参阅

* [zetacored query crosschain](#zetacored-query-crosschain)	- crosschain 模块查询命令

## zetacored query crosschain list_pending_cctx_within_rate_limit

查看限额内的待处理 CCTX

```
zetacored query crosschain list_pending_cctx_within_rate_limit [flags]
```

### 选项

```
      --count-total        统计 list_pending_cctx_within_rate_limit 的记录总数
      --grpc-addr string   使用的 gRPC 端点
      --grpc-insecure      允许在不安全通道上使用 gRPC，若未开启需使用 TLS
      --height int         在指定高度查询状态（节点裁剪状态时可能失败）
  -h, --help               查看 list_pending_cctx_within_rate_limit 的帮助
      --limit uint         list_pending_cctx_within_rate_limit 的分页条数 (default 100)
      --node string        此链的 CometBFT RPC 地址 [host]:[port] 
      --offset uint        list_pending_cctx_within_rate_limit 的分页偏移
  -o, --output string      输出格式 (text|json) 
      --page uint          list_pending_cctx_within_rate_limit 的分页页码 (default 1)
      --page-key string    list_pending_cctx_within_rate_limit 的分页 page-key
      --reverse            按降序返回结果
```

### 继承自父命令的选项

```
      --chain-id string     网络链 ID
      --home string         配置和数据文件夹
      --log_format string   日志格式 (json|plain) 
      --log_level string    日志级别 (trace|debug|info|warn|error|fatal|panic|disabled 或 '*:[level],[key]:[level]') 
      --log_no_color        禁用彩色日志
      --trace               在出错时打印完整堆栈跟踪
```

### 另请参阅

* [zetacored query crosschain](#zetacored-query-crosschain)	- crosschain 模块查询命令

## zetacored query crosschain show-cctx

查看单个 CCTX

```
zetacored query crosschain show-cctx [index] [flags]
```

### 选项

```
      --grpc-addr string   使用的 gRPC 端点
      --grpc-insecure      允许在不安全通道上使用 gRPC，若未开启需使用 TLS
      --height int         在指定高度查询状态（节点裁剪状态时可能失败）
  -h, --help               查看 show-cctx 的帮助
      --node string        此链的 CometBFT RPC 地址 [host]:[port] 
  -o, --output string      输出格式 (text|json) 
```

### 继承自父命令的选项

```
      --chain-id string     网络链 ID
      --home string         配置和数据文件夹
      --log_format string   日志格式 (json|plain) 
      --log_level string    日志级别 (trace|debug|info|warn|error|fatal|panic|disabled 或 '*:[level],[key]:[level]') 
      --log_no_color        禁用彩色日志
      --trace               在出错时打印完整堆栈跟踪
```

### 另请参阅

* [zetacored query crosschain](#zetacored-query-crosschain)	- crosschain 模块查询命令

## zetacored query crosschain show-gas-price

查看单个 gasPrice

```
zetacored query crosschain show-gas-price [index] [flags]
```

### 选项

```
      --grpc-addr string   使用的 gRPC 端点
      --grpc-insecure      允许在不安全通道上使用 gRPC，若未开启需使用 TLS
      --height int         在指定高度查询状态（节点裁剪状态时可能失败）
  -h, --help               查看 show-gas-price 的帮助
      --node string        此链的 CometBFT RPC 地址 [host]:[port] 
  -o, --output string      输出格式 (text|json) 
```

### 继承自父命令的选项

```
      --chain-id string     网络链 ID
      --home string         配置和数据文件夹
      --log_format string   日志格式 (json|plain) 
      --log_level string    日志级别 (trace|debug|info|warn|error|fatal|panic|disabled 或 '*:[level],[key]:[level]') 
      --log_no_color        禁用彩色日志
      --trace               在出错时打印完整堆栈跟踪
```

### 另请参阅

* [zetacored query crosschain](#zetacored-query-crosschain)	- crosschain 模块查询命令

## zetacored query crosschain show-inbound-hash-to-cctx

查看单个 inboundHashToCctx

```
zetacored query crosschain show-inbound-hash-to-cctx [index] [flags]
```

### 选项

```
      --grpc-addr string   使用的 gRPC 端点
      --grpc-insecure      允许在不安全通道上使用 gRPC，若未开启需使用 TLS
      --height int         在指定高度查询状态（节点裁剪状态时可能失败）
  -h, --help               查看 show-inbound-hash-to-cctx 的帮助
      --node string        此链的 CometBFT RPC 地址 [host]:[port] 
  -o, --output string      输出格式 (text|json) 
```

### 继承自父命令的选项

```
      --chain-id string     网络链 ID
      --home string         配置和数据文件夹
      --log_format string   日志格式 (json|plain) 
      --log_level string    日志级别 (trace|debug|info|warn|error|fatal|panic|disabled 或 '*:[level],[key]:[level]') 
      --log_no_color        禁用彩色日志
      --trace               在出错时打印完整堆栈跟踪
```

### 另请参阅

* [zetacored query crosschain](#zetacored-query-crosschain)	- crosschain 模块查询命令

## zetacored query crosschain show-inbound-tracker

按链 ID 与 txHash 查看 inbound tracker

```
zetacored query crosschain show-inbound-tracker [chain-id] [tx-hash] [flags]
```

### 选项

```
      --grpc-addr string   使用的 gRPC 端点
      --grpc-insecure      允许在不安全通道上使用 gRPC，若未开启需使用 TLS
      --height int         在指定高度查询状态（节点裁剪状态时可能失败）
  -h, --help               查看 show-inbound-tracker 的帮助
      --node string        此链的 CometBFT RPC 地址 [host]:[port] 
  -o, --output string      输出格式 (text|json) 
```

### 继承自父命令的选项

```
      --chain-id string     网络链 ID
      --home string         配置和数据文件夹
      --log_format string   日志格式 (json|plain) 
      --log_level string    日志级别 (trace|debug|info|warn|error|fatal|panic|disabled 或 '*:[level],[key]:[level]') 
      --log_no_color        禁用彩色日志
      --trace               在出错时打印完整堆栈跟踪
```

### 另请参阅

* [zetacored query crosschain](#zetacored-query-crosschain)	- crosschain 模块查询命令

## zetacored query crosschain show-outbound-tracker

查看单个 outbound tracker

```
zetacored query crosschain show-outbound-tracker [index] [flags]
```

### 选项

```
      --grpc-addr string   使用的 gRPC 端点
      --grpc-insecure      允许在不安全通道上使用 gRPC，若未开启需使用 TLS
      --height int         在指定高度查询状态（节点裁剪状态时可能失败）
  -h, --help               查看 show-outbound-tracker 的帮助
      --node string        此链的 CometBFT RPC 地址 [host]:[port] 
  -o, --output string      输出格式 (text|json) 
```

### 继承自父命令的选项

```
      --chain-id string     网络链 ID
      --home string         配置和数据文件夹
      --log_format string   日志格式 (json|plain) 
      --log_level string    日志级别 (trace|debug|info|warn|error|fatal|panic|disabled 或 '*:[level],[key]:[level]') 
      --log_no_color        禁用彩色日志
      --trace               在出错时打印完整堆栈跟踪
```

### 另请参阅

* [zetacored query crosschain](#zetacored-query-crosschain)	- crosschain 模块查询命令

## zetacored query crosschain show-rate-limiter-flags

查看限流标志

```
zetacored query crosschain show-rate-limiter-flags [flags]
```

### 选项

```
      --grpc-addr string   使用的 gRPC 端点
      --grpc-insecure      允许在不安全通道上使用 gRPC，若未开启需使用 TLS
      --height int         在指定高度查询状态（节点裁剪状态时可能失败）
  -h, --help               查看 show-rate-limiter-flags 的帮助
      --node string        此链的 CometBFT RPC 地址 [host]:[port] 
  -o, --output string      输出格式 (text|json) 
```

### 继承自父命令的选项

```
      --chain-id string     网络链 ID
      --home string         配置和数据文件夹
      --log_format string   日志格式 (json|plain) 
      --log_level string    日志级别 (trace|debug|info|warn|error|fatal|panic|disabled 或 '*:[level],[key]:[level]') 
      --log_no_color        禁用彩色日志
      --trace               在出错时打印完整堆栈跟踪
```

### 另请参阅

* [zetacored query crosschain](#zetacored-query-crosschain)	- crosschain 模块查询命令

## zetacored query distribution commission

查询验证人分配佣金

```
zetacored query distribution commission [validator] [flags]
```

### 示例

```
$ zetacored query distribution commission [validator-address]
```

### 选项

```
      --grpc-addr string         使用的 gRPC 端点
      --grpc-insecure            允许在不安全通道上使用 gRPC，若未开启需使用 TLS
      --height int               在指定高度查询状态（节点裁剪状态时可能失败）
  -h, --help                     查看 commission 的帮助
      --keyring-backend string   选择 keyring 后端 (os|file|kwallet|pass|test|memory) 
      --keyring-dir string       客户端 keyring 目录；未指定则使用默认 home 目录
      --no-indent                输出 JSON 时不缩进
      --node string              此链的 CometBFT RPC 地址 [host]:[port] 
  -o, --output string            输出格式 (text|json) 
```

### 继承自父命令的选项

```
      --chain-id string     网络链 ID
      --home string         配置和数据文件夹
      --log_format string   日志格式 (json|plain) 
      --log_level string    日志级别 (trace|debug|info|warn|error|fatal|panic|disabled 或 '*:[level],[key]:[level]') 
      --log_no_color        禁用彩色日志
      --trace               在出错时打印完整堆栈跟踪
```

### 另请参阅

* [zetacored query distribution](#zetacored-query-distribution)	- distribution 模块查询命令

## zetacored query distribution community-pool

查询社区资金池资产

```
zetacored query distribution community-pool [flags]
```

### 示例

```
$ zetacored query distribution community-pool
```

### 选项

```
      --grpc-addr string         使用的 gRPC 端点
      --grpc-insecure            允许在不安全通道上使用 gRPC，若未开启需使用 TLS
      --height int               在指定高度查询状态（节点裁剪状态时可能失败）
  -h, --help                     查看 community-pool 的帮助
      --keyring-backend string   选择 keyring 后端 (os|file|kwallet|pass|test|memory) 
      --keyring-dir string       客户端 keyring 目录；未指定则使用默认 home 目录
      --no-indent                输出 JSON 时不缩进
      --node string              此链的 CometBFT RPC 地址 [host]:[port] 
  -o, --output string            输出格式 (text|json) 
```

### 继承自父命令的选项

```
      --chain-id string     网络链 ID
      --home string         配置和数据文件夹
      --log_format string   日志格式 (json|plain) 
      --log_level string    日志级别 (trace|debug|info|warn|error|fatal|panic|disabled 或 '*:[level],[key]:[level]') 
      --log_no_color        禁用彩色日志
      --trace               在出错时打印完整堆栈跟踪
```

### 另请参阅

* [zetacored query distribution](#zetacored-query-distribution)	- distribution 模块查询命令

## zetacored query distribution delegator-validators

调用 DelegatorValidators RPC

```
zetacored query distribution delegator-validators [flags]
```

### 选项

```
      --delegator-address   账户地址或密钥名称
      --grpc-addr string    使用的 gRPC 端点
      --grpc-insecure       允许在不安全通道上使用 gRPC，若未开启需使用 TLS
      --height int          在指定高度查询状态（节点裁剪状态时可能失败）
  -h, --help                查看 delegator-validators 的帮助
      --keyring-backend string   选择 keyring 后端 (os|file|kwallet|pass|test|memory) 
      --keyring-dir string       客户端 keyring 目录；未指定则使用默认 home 目录
      --no-indent                输出 JSON 时不缩进
      --node string              此链的 CometBFT RPC 地址 [host]:[port] 
  -o, --output string            输出格式 (text|json) 
```

### 继承自父命令的选项

```
      --chain-id string     网络链 ID
      --home string         配置和数据文件夹
      --log_format string   日志格式 (json|plain) 
      --log_level string    日志级别 (trace|debug|info|warn|error|fatal|panic|disabled 或 '*:[level],[key]:[level]') 
      --log_no_color        禁用彩色日志
      --trace               在出错时打印完整堆栈跟踪
```

### 另请参阅

* [zetacored query distribution](#zetacored-query-distribution)	- distribution 模块查询命令

## zetacored query distribution delegator-withdraw-address

调用 DelegatorWithdrawAddress RPC

```
zetacored query distribution delegator-withdraw-address [flags]
```

### 选项

```
      --delegator-address   账户地址或密钥名称
      --grpc-addr string    使用的 gRPC 端点
      --grpc-insecure       允许在不安全通道上使用 gRPC，若未开启需使用 TLS
      --height int          在指定高度查询状态（节点裁剪状态时可能失败）
  -h, --help                查看 delegator-withdraw-address 的帮助
      --keyring-backend string   选择 keyring 后端 (os|file|kwallet|pass|test|memory) 
      --keyring-dir string       客户端 keyring 目录；未指定则使用默认 home 目录
      --no-indent                输出 JSON 时不缩进
      --node string              此链的 CometBFT RPC 地址 [host]:[port] 
  -o, --output string            输出格式 (text|json) 
```

### 继承自父命令的选项

```
      --chain-id string     网络链 ID
      --home string         配置和数据文件夹
      --log_format string   日志格式 (json|plain) 
      --log_level string    日志级别 (trace|debug|info|warn|error|fatal|panic|disabled 或 '*:[level],[key]:[level]') 
      --log_no_color        禁用彩色日志
      --trace               在出错时打印完整堆栈跟踪
```

### 另请参阅

* [zetacored query distribution](#zetacored-query-distribution)	- distribution 模块查询命令

## zetacored query distribution params

查询 distribution 模块参数

```
zetacored query distribution params [flags]
```

### 选项

```
      --grpc-addr string         使用的 gRPC 端点
      --grpc-insecure            允许在不安全通道上使用 gRPC，若未开启需使用 TLS
      --height int               在指定高度查询状态（节点裁剪状态时可能失败）
  -h, --help                     查看 params 的帮助
      --keyring-backend string   选择 keyring 后端 (os|file|kwallet|pass|test|memory) 
      --keyring-dir string       客户端 keyring 目录；未指定则使用默认 home 目录
      --no-indent                输出 JSON 时不缩进
      --node string              此链的 CometBFT RPC 地址 [host]:[port] 
  -o, --output string            输出格式 (text|json) 
```

### 继承自父命令的选项

```
      --chain-id string     网络链 ID
      --home string         配置和数据文件夹
      --log_format string   日志格式 (json|plain) 
      --log_level string    日志级别 (trace|debug|info|warn|error|fatal|panic|disabled 或 '*:[level],[key]:[level]') 
      --log_no_color        禁用彩色日志
      --trace               在出错时打印完整堆栈跟踪
```

### 另请参阅

* [zetacored query distribution](#zetacored-query-distribution)	- distribution 模块查询命令

## zetacored query distribution rewards

查询委托人全部奖励

### 概要

查询某个委托人已获得的所有奖励。

```
zetacored query distribution rewards [delegator-addr] [flags]
```

### 示例

```
$ zetacored query distribution rewards [delegator-address]
```

### 选项

```
      --grpc-addr string         使用的 gRPC 端点
      --grpc-insecure            允许在不安全通道上使用 gRPC，若未开启需使用 TLS
      --height int               在指定高度查询状态（节点裁剪状态时可能失败）
  -h, --help                     查看 rewards 的帮助
      --keyring-backend string   选择 keyring 后端 (os|file|kwallet|pass|test|memory) 
      --keyring-dir string       客户端 keyring 目录；未指定则使用默认 home 目录
      --no-indent                输出 JSON 时不缩进
      --node string              此链的 CometBFT RPC 地址 [host]:[port] 
  -o, --output string            输出格式 (text|json) 
```

### 继承自父命令的选项

```
      --chain-id string     网络链 ID
      --home string         配置和数据文件夹
      --log_format string   日志格式 (json|plain) 
      --log_level string    日志级别 (trace|debug|info|warn|error|fatal|panic|disabled 或 '*:[level],[key]:[level]') 
      --log_no_color        禁用彩色日志
      --trace               在出错时打印完整堆栈跟踪
```
### 另请参阅

* [zetacored query distribution](#zetacored-query-distribution)	- distribution 模块查询命令

## zetacored query distribution rewards-by-validator

查询来自指定验证人的委托奖励

```
zetacored query distribution rewards-by-validator [delegator-addr] [validator-addr] [flags]
```

### 示例

```
$ zetacored query distribution rewards [delegator-address] [validator-address]
```

### 选项

```
      --grpc-addr string         使用的 gRPC 端点
      --grpc-insecure            允许在不安全通道上使用 gRPC，若未开启需使用 TLS
      --height int               在指定高度查询状态（节点裁剪状态时可能失败）
  -h, --help                     查看 rewards-by-validator 的帮助
      --keyring-backend string   选择 keyring 后端 (os|file|kwallet|pass|test|memory) 
      --keyring-dir string       客户端 keyring 目录；未指定则使用默认 home 目录
      --no-indent                输出 JSON 时不缩进
      --node string              此链的 CometBFT RPC 地址 [host]:[port] 
  -o, --output string            输出格式 (text|json) 
```

### 继承自父命令的选项

```
      --chain-id string     网络链 ID
      --home string         配置和数据文件夹
      --log_format string   日志格式 (json|plain) 
      --log_level string    日志级别 (trace|debug|info|warn|error|fatal|panic|disabled 或 '*:[level],[key]:[level]') 
      --log_no_color        禁用彩色日志
      --trace               在出错时打印完整堆栈跟踪
```

### 另请参阅

* [zetacored query distribution](#zetacored-query-distribution)	- distribution 模块查询命令

## zetacored query distribution slashes

查询验证人惩罚记录

```
zetacored query distribution slashes [validator] [start-height] [end-height] [flags]
```

### 示例

```
$ zetacored query distribution slashes [validator-address] 0 100
```

### 选项

```
      --grpc-addr string         使用的 gRPC 端点
      --grpc-insecure            允许在不安全通道上使用 gRPC，若未开启需使用 TLS
      --height int               在指定高度查询状态（节点裁剪状态时可能失败）
  -h, --help                     查看 slashes 的帮助
      --keyring-backend string   选择 keyring 后端 (os|file|kwallet|pass|test|memory) 
      --keyring-dir string       客户端 keyring 目录；未指定则使用默认 home 目录
      --no-indent                输出 JSON 时不缩进
      --node string              此链的 CometBFT RPC 地址 [host]:[port] 
  -o, --output string            输出格式 (text|json) 
      --page-count-total         
      --page-key binary          
      --page-limit uint          
      --page-offset uint         
      --page-reverse             
```

### 继承自父命令的选项

```
      --chain-id string     网络链 ID
      --home string         配置和数据文件夹
      --log_format string   日志格式 (json|plain) 
      --log_level string    日志级别 (trace|debug|info|warn|error|fatal|panic|disabled 或 '*:[level],[key]:[level]') 
      --log_no_color        禁用彩色日志
      --trace               在出错时打印完整堆栈跟踪
```

### 另请参阅

* [zetacored query distribution](#zetacored-query-distribution)	- distribution 模块查询命令

## zetacored query distribution validator-distribution-info

查询验证人分配信息

```
zetacored query distribution validator-distribution-info [validator] [flags]
```

### 示例

```
示例: $ zetacored query distribution validator-distribution-info [validator-address]
```

### 选项

```
      --grpc-addr string         使用的 gRPC 端点
      --grpc-insecure            允许在不安全通道上使用 gRPC，若未开启需使用 TLS
      --height int               在指定高度查询状态（节点裁剪状态时可能失败）
  -h, --help                     查看 validator-distribution-info 的帮助
      --keyring-backend string   选择 keyring 后端 (os|file|kwallet|pass|test|memory) 
      --keyring-dir string       客户端 keyring 目录；未指定则使用默认 home 目录
      --no-indent                输出 JSON 时不缩进
      --node string              此链的 CometBFT RPC 地址 [host]:[port] 
  -o, --output string            输出格式 (text|json) 
```

### 继承自父命令的选项

```
      --chain-id string     网络链 ID
      --home string         配置和数据文件夹
      --log_format string   日志格式 (json|plain) 
      --log_level string    日志级别 (trace|debug|info|warn|error|fatal|panic|disabled 或 '*:[level],[key]:[level]') 
      --log_no_color        禁用彩色日志
      --trace               在出错时打印完整堆栈跟踪
```

### 另请参阅

* [zetacored query distribution](#zetacored-query-distribution)	- distribution 模块查询命令

## zetacored query distribution validator-outstanding-rewards

查询验证人及其委托未提取奖励

```
zetacored query distribution validator-outstanding-rewards [validator] [flags]
```

### 示例

```
$ zetacored query distribution validator-outstanding-rewards [validator-address]
```

### 选项

```
      --grpc-addr string         使用的 gRPC 端点
      --grpc-insecure            允许在不安全通道上使用 gRPC，若未开启需使用 TLS
      --height int               在指定高度查询状态（节点裁剪状态时可能失败）
  -h, --help                     查看 validator-outstanding-rewards 的帮助
      --keyring-backend string   选择 keyring 后端 (os|file|kwallet|pass|test|memory) 
      --keyring-dir string       客户端 keyring 目录；未指定则使用默认 home 目录
      --no-indent                输出 JSON 时不缩进
      --node string              此链的 CometBFT RPC 地址 [host]:[port] 
  -o, --output string            输出格式 (text|json) 
```

### 继承自父命令的选项

```
      --chain-id string     网络链 ID
      --home string         配置和数据文件夹
      --log_format string   日志格式 (json|plain) 
      --log_level string    日志级别 (trace|debug|info|warn|error|fatal|panic|disabled 或 '*:[level],[key]:[level]') 
      --log_no_color        禁用彩色日志
      --trace               在出错时打印完整堆栈跟踪
```

### 另请参阅

* [zetacored query distribution](#zetacored-query-distribution)	- distribution 模块查询命令

## zetacored query emissions

emissions 模块查询命令

```
zetacored query emissions [flags]
```

### 选项

```
  -h, --help   查看 emissions 的帮助
```

### 继承自父命令的选项

```
      --chain-id string     网络链 ID
      --home string         配置和数据文件夹
      --log_format string   日志格式 (json|plain) 
      --log_level string    日志级别 (trace|debug|info|warn|error|fatal|panic|disabled 或 '*:[level],[key]:[level]') 
      --log_no_color        禁用彩色日志
      --trace               在出错时打印完整堆栈跟踪
```

### 另请参阅

* [zetacored query](#zetacored-query)	- 查询子命令集合
* [zetacored query emissions list-pool-addresses](#zetacored-query-emissions-list-pool-addresses)	- 查询池地址列表
* [zetacored query emissions params](#zetacored-query-emissions-params)	- 查看模块参数
* [zetacored query emissions show-available-emissions](#zetacored-query-emissions-show-available-emissions)	- 查询可用排放额度

## zetacored query emissions list-pool-addresses

查询池地址列表

```
zetacored query emissions list-pool-addresses [flags]
```

### 选项

```
      --grpc-addr string   使用的 gRPC 端点
      --grpc-insecure      允许在不安全通道上使用 gRPC，若未开启需使用 TLS
      --height int         在指定高度查询状态（节点裁剪状态时可能失败）
  -h, --help               查看 list-pool-addresses 的帮助
      --node string        此链的 CometBFT RPC 地址 [host]:[port] 
  -o, --output string      输出格式 (text|json) 
```

### 继承自父命令的选项

```
      --chain-id string     网络链 ID
      --home string         配置和数据文件夹
      --log_format string   日志格式 (json|plain) 
      --log_level string    日志级别 (trace|debug|info|warn|error|fatal|panic|disabled 或 '*:[level],[key]:[level]') 
      --log_no_color        禁用彩色日志
      --trace               在出错时打印完整堆栈跟踪
```

### 另请参阅

* [zetacored query emissions](#zetacored-query-emissions)	- emissions 模块查询命令

## zetacored query emissions params

查看模块参数

```
zetacored query emissions params [flags]
```

### 选项

```
      --grpc-addr string   使用的 gRPC 端点
      --grpc-insecure      允许在不安全通道上使用 gRPC，若未开启需使用 TLS
      --height int         在指定高度查询状态（节点裁剪状态时可能失败）
  -h, --help               查看 params 的帮助
      --node string        此链的 CometBFT RPC 地址 [host]:[port] 
  -o, --output string      输出格式 (text|json) 
```

### 继承自父命令的选项

```
      --chain-id string     网络链 ID
      --home string         配置和数据文件夹
      --log_format string   日志格式 (json|plain) 
      --log_level string    日志级别 (trace|debug|info|warn|error|fatal|panic|disabled 或 '*:[level],[key]:[level]') 
      --log_no_color        禁用彩色日志
      --trace               在出错时打印完整堆栈跟踪
```

### 另请参阅

* [zetacored query emissions](#zetacored-query-emissions)	- emissions 模块查询命令

## zetacored query emissions show-available-emissions

查询可用排放额度

```
zetacored query emissions show-available-emissions [address] [flags]
```

### 选项

```
      --grpc-addr string   使用的 gRPC 端点
      --grpc-insecure      允许在不安全通道上使用 gRPC，若未开启需使用 TLS
      --height int         在指定高度查询状态（节点裁剪状态时可能失败）
  -h, --help               查看 show-available-emissions 的帮助
      --node string        此链的 CometBFT RPC 地址 [host]:[port] 
  -o, --output string      输出格式 (text|json) 
```

### 继承自父命令的选项

```
      --chain-id string     网络链 ID
      --home string         配置和数据文件夹
      --log_format string   日志格式 (json|plain) 
      --log_level string    日志级别 (trace|debug|info|warn|error|fatal|panic|disabled 或 '*:[level],[key]:[level]') 
      --log_no_color        禁用彩色日志
      --trace               在出错时打印完整堆栈跟踪
```

### 另请参阅

* [zetacored query emissions](#zetacored-query-emissions)	- emissions 模块查询命令

## zetacored query evidence

evidence 模块查询命令

```
zetacored query evidence [flags]
```

### 选项

```
  -h, --help   查看 evidence 的帮助
```

### 继承自父命令的选项

```
      --chain-id string     网络链 ID
      --home string         配置和数据文件夹
      --log_format string   日志格式 (json|plain) 
      --log_level string    日志级别 (trace|debug|info|warn|error|fatal|panic|disabled 或 '*:[level],[key]:[level]') 
      --log_no_color        禁用彩色日志
      --trace               在出错时打印完整堆栈跟踪
```

### 另请参阅

* [zetacored query](#zetacored-query)	- 查询子命令集合
* [zetacored query evidence evidence](#zetacored-query-evidence-evidence)	- 按哈希查询证据
* [zetacored query evidence list](#zetacored-query-evidence-list)	- 查询全部（分页）已提交证据

## zetacored query evidence evidence

按哈希查询证据

```
zetacored query evidence evidence [hash] [flags]
```

### 示例

```
zetacored query evidence evidence DF0C23E8634E480F84B9D5674A7CDC9816466DEC28A3358F73260F68D28D7660
```

### 选项

```
      --evidence-hash binary     证据哈希
      --grpc-addr string         使用的 gRPC 端点
      --grpc-insecure            允许在不安全通道上使用 gRPC，若未开启需使用 TLS
      --height int               在指定高度查询状态（节点裁剪状态时可能失败）
  -h, --help                     查看 evidence 的帮助
      --keyring-backend string   选择 keyring 后端 (os|file|kwallet|pass|test|memory) 
      --keyring-dir string       客户端 keyring 目录；未指定则使用默认 home 目录
      --no-indent                输出 JSON 时不缩进
      --node string              此链的 CometBFT RPC 地址 [host]:[port] 
  -o, --output string            输出格式 (text|json) 
```

### 继承自父命令的选项

```
      --chain-id string     网络链 ID
      --home string         配置和数据文件夹
      --log_format string   日志格式 (json|plain) 
      --log_level string    日志级别 (trace|debug|info|warn|error|fatal|panic|disabled 或 '*:[level],[key]:[level]') 
      --log_no_color        禁用彩色日志
      --trace               在出错时打印完整堆栈跟踪
```

### 另请参阅

* [zetacored query evidence](#zetacored-query-evidence)	- evidence 模块查询命令

## zetacored query evidence list

查询全部（分页）已提交证据

```
zetacored query evidence list [flags]
```

### 示例

```
zetacored query evidence list --page=2 --page-limit=50
```

### 选项

```
      --grpc-addr string         使用的 gRPC 端点
      --grpc-insecure            允许在不安全通道上使用 gRPC，若未开启需使用 TLS
      --height int               在指定高度查询状态（节点裁剪状态时可能失败）
  -h, --help                     查看 list 的帮助
      --keyring-backend string   选择 keyring 后端 (os|file|kwallet|pass|test|memory) 
      --keyring-dir string       客户端 keyring 目录；未指定则使用默认 home 目录
      --no-indent                输出 JSON 时不缩进
      --node string              此链的 CometBFT RPC 地址 [host]:[port] 
  -o, --output string            输出格式 (text|json) 
      --page-count-total         
      --page-key binary          
      --page-limit uint          
      --page-offset uint         
      --page-reverse             
```

### 继承自父命令的选项

```
      --chain-id string     网络链 ID
      --home string         配置和数据文件夹
      --log_format string   日志格式 (json|plain) 
      --log_level string    日志级别 (trace|debug|info|warn|error|fatal|panic|disabled 或 '*:[level],[key]:[level]') 
      --log_no_color        禁用彩色日志
      --trace               在出错时打印完整堆栈跟踪
```

### 另请参阅

* [zetacored query evidence](#zetacored-query-evidence)	- evidence 模块查询命令

## zetacored query authority

authority 模块查询命令

```
zetacored query authority [flags]
```

### 选项

```
  -h, --help   查看 authority 的帮助
```

### 继承自父命令的选项

```
      --chain-id string     网络链 ID
      --home string         配置和数据文件夹
      --log_format string   日志格式 (json|plain) 
      --log_level string    日志级别 (trace|debug|info|warn|error|fatal|panic|disabled 或 '*:[level],[key]:[level]') 
      --log_no_color        禁用彩色日志
      --trace               在出错时打印完整堆栈跟踪
```

### 另请参阅

* [zetacored query](#zetacored-query)	- 查询子命令集合
* [zetacored query authority list-authorizations](#zetacored-query-authority-list-authorizations)	- 列出所有授权
* [zetacored query authority show-authorization](#zetacored-query-authority-show-authorization)	- 查看指定消息 URL 的授权
* [zetacored query authority show-chain-info](#zetacored-query-authority-show-chain-info)	- 查看链信息
* [zetacored query authority show-policies](#zetacored-query-authority-show-policies)	- 查看策略

## zetacored query authority list-authorizations

列出所有授权

```
zetacored query authority list-authorizations [flags]
```

### 选项

```
      --grpc-addr string   使用的 gRPC 端点
      --grpc-insecure      允许在不安全通道上使用 gRPC，若未开启需使用 TLS
      --height int         在指定高度查询状态（节点裁剪状态时可能失败）
  -h, --help               查看 list-authorizations 的帮助
      --node string        此链的 CometBFT RPC 地址 [host]:[port] 
  -o, --output string      输出格式 (text|json) 
```

### 继承自父命令的选项

```
      --chain-id string     网络链 ID
      --home string         配置和数据文件夹
      --log_format string   日志格式 (json|plain) 
      --log_level string    日志级别 (trace|debug|info|warn|error|fatal|panic|disabled 或 '*:[level],[key]:[level]') 
      --log_no_color        禁用彩色日志
      --trace               在出错时打印完整堆栈跟踪
```

### 另请参阅

* [zetacored query authority](#zetacored-query-authority)	- authority 模块查询命令

## zetacored query authority show-authorization

查看指定消息 URL 的授权

```
zetacored query authority show-authorization [msg-url] [flags]
```

### 选项

```
      --grpc-addr string   使用的 gRPC 端点
      --grpc-insecure      允许在不安全通道上使用 gRPC，若未开启需使用 TLS
      --height int         在指定高度查询状态（节点裁剪状态时可能失败）
  -h, --help               查看 show-authorization 的帮助
      --node string        此链的 CometBFT RPC 地址 [host]:[port] 
  -o, --output string      输出格式 (text|json) 
```

### 继承自父命令的选项

```
      --chain-id string     网络链 ID
      --home string         配置和数据文件夹
      --log_format string   日志格式 (json|plain) 
      --log_level string    日志级别 (trace|debug|info|warn|error|fatal|panic|disabled 或 '*:[level],[key]:[level]') 
      --log_no_color        禁用彩色日志
      --trace               在出错时打印完整堆栈跟踪
```

### 另请参阅

* [zetacored query authority](#zetacored-query-authority)	- authority 模块查询命令

## zetacored query authority show-chain-info

查看链信息

```
zetacored query authority show-chain-info [flags]
```

### 选项

```
      --grpc-addr string   使用的 gRPC 端点
      --grpc-insecure      允许在不安全通道上使用 gRPC，若未开启需使用 TLS
      --height int         在指定高度查询状态（节点裁剪状态时可能失败）
  -h, --help               查看 show-chain-info 的帮助
      --node string        此链的 CometBFT RPC 地址 [host]:[port] 
  -o, --output string      输出格式 (text|json) 
```

### 继承自父命令的选项

```
      --chain-id string     网络链 ID
      --home string         配置和数据文件夹
      --log_format string   日志格式 (json|plain) 
      --log_level string    日志级别 (trace|debug|info|warn|error|fatal|panic|disabled 或 '*:[level],[key]:[level]') 
      --log_no_color        禁用彩色日志
      --trace               在出错时打印完整堆栈跟踪
```

### 另请参阅

* [zetacored query authority](#zetacored-query-authority)	- authority 模块查询命令

## zetacored query authority show-policies

查看策略

```
zetacored query authority show-policies [flags]
```

### 选项

```
      --grpc-addr string   使用的 gRPC 端点
      --grpc-insecure      允许在不安全通道上使用 gRPC，若未开启需使用 TLS
      --height int         在指定高度查询状态（节点裁剪状态时可能失败）
  -h, --help               查看 show-policies 的帮助
      --node string        此链的 CometBFT RPC 地址 [host]:[port] 
  -o, --output string      输出格式 (text|json) 
```

### 继承自父命令的选项

```
      --chain-id string     网络链 ID
      --home string         配置和数据文件夹
      --log_format string   日志格式 (json|plain) 
      --log_level string    日志级别 (trace|debug|info|warn|error|fatal|panic|disabled 或 '*:[level],[key]:[level]') 
      --log_no_color        禁用彩色日志
      --trace               在出错时打印完整堆栈跟踪
```

### 另请参阅

* [zetacored query authority](#zetacored-query-authority)	- authority 模块查询命令

## zetacored tx

交易子命令

```
zetacored tx [flags]
```

### 选项

```
      --chain-id string   网络链 ID
  -h, --help              查看 tx 的帮助
```

### 继承自父命令的选项

```
      --home string         配置和数据文件夹
      --log_format string   日志格式 (json|plain) 
      --log_level string    日志级别 (trace|debug|info|warn|error|fatal|panic|disabled 或 '*:[level],[key]:[level]') 
      --log_no_color        禁用彩色日志
      --trace               在出错时打印完整堆栈跟踪
```

### 另请参阅

* [zetacored](#zetacored)	- Zetacore 守护进程（服务器）
* [zetacored tx auth](#zetacored-tx-auth)	- auth 模块交易命令
* [zetacored tx authority](#zetacored-tx-authority)	- authority 模块交易命令
* [zetacored tx authz](#zetacored-tx-authz)	- 授权 (authz) 交易子命令
* [zetacored tx bank](#zetacored-tx-bank)	- bank 模块交易命令
* [zetacored tx broadcast](#zetacored-tx-broadcast)	- 广播离线生成的交易
* [zetacored tx consensus](#zetacored-tx-consensus)	- consensus 模块交易命令
* [zetacored tx crisis](#zetacored-tx-crisis)	- crisis 模块交易命令
* [zetacored tx crosschain](#zetacored-tx-crosschain)	- crosschain 模块交易子命令
* [zetacored tx decode](#zetacored-tx-decode)	- 解码二进制编码的交易字符串
* [zetacored tx distribution](#zetacored-tx-distribution)	- distribution 模块交易子命令
* [zetacored tx emissions](#zetacored-tx-emissions)	- emissions 模块交易子命令
* [zetacored tx encode](#zetacored-tx-encode)	- 编码离线生成的交易
* [zetacored tx evidence](#zetacored-tx-evidence)	- evidence 模块交易子命令
* [zetacored tx evm](#zetacored-tx-evm)	- EVM 交易子命令
* [zetacored tx feemarket](#zetacored-tx-feemarket)	- feemarket 模块交易命令
* [zetacored tx fungible](#zetacored-tx-fungible)	- fungible 模块交易子命令
* [zetacored tx gov](#zetacored-tx-gov)	- 治理模块交易子命令
* [zetacored tx group](#zetacored-tx-group)	- group 模块交易子命令
* [zetacored tx lightclient](#zetacored-tx-lightclient)	- lightclient 模块交易子命令
* [zetacored tx multi-sign](#zetacored-tx-multi-sign)	- 为离线生成的交易制作多签名
* [zetacored tx multisign-batch](#zetacored-tx-multisign-batch)	- 批量组装多签交易
* [zetacored tx observer](#zetacored-tx-observer)	- observer 模块交易子命令
* [zetacored tx sign](#zetacored-tx-sign)	- 离线生成的交易签名
* [zetacored tx sign-batch](#zetacored-tx-sign-batch)	- 批量签名交易文件
* [zetacored tx slashing](#zetacored-tx-slashing)	- slashing 模块交易命令
* [zetacored tx staking](#zetacored-tx-staking)	- staking 模块交易子命令
* [zetacored tx upgrade](#zetacored-tx-upgrade)	- upgrade 模块交易子命令
* [zetacored tx validate-signatures](#zetacored-tx-validate-signatures)	- 校验交易签名
* [zetacored tx vesting](#zetacored-tx-vesting)	- vesting 模块交易子命令

## zetacored tx auth

auth 模块交易命令

```
zetacored tx auth [flags]
```

### 选项

```
  -h, --help   查看 auth 的帮助
```

### 继承自父命令的选项

```
      --chain-id string     网络链 ID
      --home string         配置和数据文件夹
      --log_format string   日志格式 (json|plain) 
      --log_level string    日志级别 (trace|debug|info|warn|error|fatal|panic|disabled 或 '*:[level],[key]:[level]') 
      --log_no_color        禁用彩色日志
      --trace               在出错时打印完整堆栈跟踪
```

### 另请参阅

* [zetacored tx](#zetacored-tx)	- 交易子命令集合
* [zetacored tx auth update-params-proposal](#zetacored-tx-auth-update-params-proposal)	- 提交提案以更新 auth 模块参数

## zetacored tx auth update-params-proposal

提交提案以更新 auth 模块参数（须一次性提供全部参数）。

```
zetacored tx auth update-params-proposal [params] [flags]
```

### 示例

```
zetacored tx auth update-params-proposal '{ "max_memo_characters": 0, "tx_sig_limit": 0, "tx_size_cost_per_byte": 0, "sig_verify_cost_ed25519": 0, "sig_verify_cost_secp256k1": 0 }'
```

### 选项

```
  -a, --account-number uint         签名账户的账号（仅离线模式）
      --aux                         生成辅助签名数据而不是发送交易
  -b, --broadcast-mode string       交易广播模式 (sync|async) 
      --chain-id string             网络链 ID
      --dry-run                     忽略 --gas 参数，模拟交易但不广播（启用时无法访问本地 Keybase）
      --fee-granter string          为交易提供费用的 fee granter 地址
      --fee-payer string            由该地址支付交易费用，而不是从签名者扣除
      --fees string                 交易需支付的费用，例如 10uatom
      --from string                 用于签名的私钥名称或地址
      --gas string                  每笔交易的 gas 上限；设置为 "auto" 可自动估算（注意 "auto" 可能并非精确结果，可设置有效的代币值微调，亦可替代 --fees）（默认 200000）
      --gas-adjustment float        与模拟返回的 gas 估值相乘的调整系数；若手动指定 gas 上限则忽略该参数（默认 1）
      --gas-prices string           以小数表示的 gas price，用于计算交易费用（如 0.1uatom）
      --generate-only               构建未签名交易并输出到标准输出（启用时仅在提供密钥名称的情况下访问本地 Keybase）
  -h, --help                        查看 update-params-proposal 的帮助
      --keyring-backend string      选择 keyring 后端 (os|file|kwallet|pass|test|memory) 
      --keyring-dir string          客户端 keyring 目录；未指定则使用默认 home 目录
      --ledger                      使用已连接的 Ledger 设备
      --node string                 此链的 CometBFT RPC 地址 [host]:[port] 
      --note string                 为交易添加说明（旧参数 --memo）
      --offline                     离线模式（禁用所有联网功能）
  -o, --output string               输出格式 (text|json) 
  -s, --sequence uint               签名账户的 sequence（仅离线模式）
      --sign-mode string            选择签名模式 (direct|amino-json|direct-aux|textual)，属于高级选项
      --timeout-duration duration   TimeoutDuration 表示交易在内存池中保持有效的持续时间。交易的无序 nonce 将设为创建时间加该持续时长；若交易仍在内存池且区块时间超过提交时间加 TimeoutTimestamp，交易将被拒绝。
      --timeout-height uint         已弃用：请改用 --timeout-duration。设置区块超时高度，防止交易在超出该高度后被提交
      --tip string                  小费金额，将在目标链转给费用支付者。仅与 --aux 搭配时有效，若目标链未启用 TipDecorator 则忽略
      --unordered                   启用无序交易投递；须与 --timeout-duration 一起使用
  -y, --yes                         跳过交易广播时的确认提示
```

### 继承自父命令的选项

```
      --home string         配置和数据文件夹
      --log_format string   日志格式 (json|plain) 
      --log_level string    日志级别 (trace|debug|info|warn|error|fatal|panic|disabled 或 '*:[level],[key]:[level]') 
      --log_no_color        禁用彩色日志
      --trace               在出错时打印完整堆栈跟踪
```

### 另请参阅

* [zetacored tx auth](#zetacored-tx-auth)	- auth 模块交易命令


## zetacored tx authority

authority 模块交易子命令

```
zetacored tx authority [flags]
```

### 选项

```
  -h, --help   查看 authority 的帮助
```

### 继承自父命令的选项

```
      --chain-id string     网络链 ID
      --home string         配置和数据文件夹
      --log_format string   日志格式 (json|plain) 
      --log_level string    日志级别 (trace|debug|info|warn|error|fatal|panic|disabled 或 '*:[level],[key]:[level]') 
      --log_no_color        禁用彩色日志
      --trace               在出错时打印完整堆栈跟踪
```

### 另请参阅

* [zetacored tx](#zetacored-tx)	- 交易子命令集合
* [zetacored tx authority add-authorization](#zetacored-tx-authority-add-authorization)	- 新增授权或更新既有授权的策略（策略类型：0=紧急、1=运营、2=管理员）
* [zetacored tx authority remove-authorization](#zetacored-tx-authority-remove-authorization)	- 移除既有授权
* [zetacored tx authority remove-chain-info](#zetacored-tx-authority-remove-chain-info)	- 移除指定链 ID 的链信息
* [zetacored tx authority update-chain-info](#zetacored-tx-authority-update-chain-info)	- 更新链信息
* [zetacored tx authority update-policies](#zetacored-tx-authority-update-policies)	- 按 JSON 文件内容更新策略

## zetacored tx authority add-authorization

新增授权或更新既有授权的策略。策略类型：0=groupEmergency，1=groupOperational，2=groupAdmin。

```
zetacored tx authority add-authorization [msg-url] [authorized-policy] [flags]
```

### 选项

```
  -a, --account-number uint         签名账户的账号（仅离线模式）
      --aux                         生成辅助签名数据而不是发送交易
  -b, --broadcast-mode string       交易广播模式 (sync|async) 
      --chain-id string             网络链 ID
      --dry-run                     忽略 --gas 参数，模拟交易但不广播（启用时无法访问本地 Keybase）
      --fee-granter string          为交易提供费用的 fee granter 地址
      --fee-payer string            由该地址支付交易费用，而不是从签名者扣除
      --fees string                 交易需支付的费用，例如 10uatom
      --from string                 用于签名的私钥名称或地址
      --gas string                  每笔交易的 gas 上限；设置为 "auto" 可自动估算（注意 "auto" 可能并非精确结果，可设置有效的代币值微调，亦可替代 --fees）（默认 200000）
      --gas-adjustment float        与模拟返回的 gas 估值相乘的调整系数；若手动指定 gas 上限则忽略该参数（默认 1）
      --gas-prices string           以小数表示的 gas price，用于计算交易费用（如 0.1uatom）
      --generate-only               构建未签名交易并输出到标准输出（启用时仅在提供密钥名称的情况下访问本地 Keybase）
  -h, --help                        查看 add-authorization 的帮助
      --keyring-backend string      选择 keyring 后端 (os|file|kwallet|pass|test|memory) 
      --keyring-dir string          客户端 keyring 目录；未指定则使用默认 home 目录
      --ledger                      使用已连接的 Ledger 设备
      --node string                 此链的 CometBFT RPC 地址 [host]:[port] 
      --note string                 为交易添加说明（旧参数 --memo）
      --offline                     离线模式（禁用所有联网功能）
  -o, --output string               输出格式 (text|json) 
  -s, --sequence uint               签名账户的 sequence（仅离线模式）
      --sign-mode string            选择签名模式 (direct|amino-json|direct-aux|textual)，属于高级选项
      --timeout-duration duration   TimeoutDuration 表示交易在内存池中保持有效的持续时间。交易的无序 nonce 将设为创建时间加该持续时长；若交易仍在内存池且区块时间超过提交时间加 TimeoutTimestamp，交易将被拒绝。
      --timeout-height uint         已弃用：请改用 --timeout-duration。设置区块超时高度，防止交易在超出该高度后被提交
      --tip string                  小费金额，将在目标链转给费用支付者。仅与 --aux 搭配时有效，若目标链未启用 TipDecorator 则忽略
      --unordered                   启用无序交易投递；须与 --timeout-duration 一起使用
  -y, --yes                         跳过交易广播时的确认提示
```

### 继承自父命令的选项

```
      --home string         配置和数据文件夹
      --log_format string   日志格式 (json|plain) 
      --log_level string    日志级别 (trace|debug|info|warn|error|fatal|panic|disabled 或 '*:[level],[key]:[level]') 
      --log_no_color        禁用彩色日志
      --trace               在出错时打印完整堆栈跟踪
```

### 另请参阅

* [zetacored tx authority](#zetacored-tx-authority)	- authority 模块交易子命令

## zetacored tx authority remove-authorization

移除既有授权

```
zetacored tx authority remove-authorization [msg-url] [flags]
```

### 选项

```
  -a, --account-number uint         签名账户的账号（仅离线模式）
      --aux                         生成辅助签名数据而不是发送交易
  -b, --broadcast-mode string       交易广播模式 (sync|async) 
      --chain-id string             网络链 ID
      --dry-run                     忽略 --gas 参数，模拟交易但不广播（启用时无法访问本地 Keybase）
      --fee-granter string          为交易提供费用的 fee granter 地址
      --fee-payer string            由该地址支付交易费用，而不是从签名者扣除
      --fees string                 交易需支付的费用，例如 10uatom
      --from string                 用于签名的私钥名称或地址
      --gas string                  每笔交易的 gas 上限；设置为 "auto" 可自动估算（注意 "auto" 可能并非精确结果，可设置有效的代币值微调，亦可替代 --fees）（默认 200000）
      --gas-adjustment float        与模拟返回的 gas 估值相乘的调整系数；若手动指定 gas 上限则忽略该参数（默认 1）
      --gas-prices string           以小数表示的 gas price，用于计算交易费用（如 0.1uatom）
      --generate-only               构建未签名交易并输出到标准输出（启用时仅在提供密钥名称的情况下访问本地 Keybase）
  -h, --help                        查看 remove-authorization 的帮助
      --keyring-backend string      选择 keyring 后端 (os|file|kwallet|pass|test|memory) 
      --keyring-dir string          客户端 keyring 目录；未指定则使用默认 home 目录
      --ledger                      使用已连接的 Ledger 设备
      --node string                 此链的 CometBFT RPC 地址 [host]:[port] 
      --note string                 为交易添加说明（旧参数 --memo）
      --offline                     离线模式（禁用所有联网功能）
  -o, --output string               输出格式 (text|json) 
  -s, --sequence uint               签名账户的 sequence（仅离线模式）
      --sign-mode string            选择签名模式 (direct|amino-json|direct-aux|textual)，属于高级选项
      --timeout-duration duration   TimeoutDuration 表示交易在内存池中保持有效的持续时间。交易的无序 nonce 将设为创建时间加该持续时长；若交易仍在内存池且区块时间超过提交时间加 TimeoutTimestamp，交易将被拒绝。
      --timeout-height uint         已弃用：请改用 --timeout-duration。设置区块超时高度，防止交易在超出该高度后被提交
      --tip string                  小费金额，将在目标链转给费用支付者。仅与 --aux 搭配时有效，若目标链未启用 TipDecorator 则忽略
      --unordered                   启用无序交易投递；须与 --timeout-duration 一起使用
  -y, --yes                         跳过交易广播时的确认提示
```

### 继承自父命令的选项

```
      --home string         配置和数据文件夹
      --log_format string   日志格式 (json|plain) 
      --log_level string    日志级别 (trace|debug|info|warn|error|fatal|panic|disabled 或 '*:[level],[key]:[level]') 
      --log_no_color        禁用彩色日志
      --trace               在出错时打印完整堆栈跟踪
```

### 另请参阅

* [zetacored tx authority](#zetacored-tx-authority)	- authority 模块交易子命令

## zetacored tx authority remove-chain-info

移除指定链 ID 的链信息

```
zetacored tx authority remove-chain-info [chain-id] [flags]
```

### 选项

```
  -a, --account-number uint         签名账户的账号（仅离线模式）
      --aux                         生成辅助签名数据而不是发送交易
  -b, --broadcast-mode string       交易广播模式 (sync|async) 
      --chain-id string             网络链 ID
      --dry-run                     忽略 --gas 参数，模拟交易但不广播（启用时无法访问本地 Keybase）
      --fee-granter string          为交易提供费用的 fee granter 地址
      --fee-payer string            由该地址支付交易费用，而不是从签名者扣除
      --fees string                 交易需支付的费用，例如 10uatom
      --from string                 用于签名的私钥名称或地址
      --gas string                  每笔交易的 gas 上限；设置为 "auto" 可自动估算（注意 "auto" 可能并非精确结果，可设置有效的代币值微调，亦可替代 --fees）（默认 200000）
      --gas-adjustment float        与模拟返回的 gas 估值相乘的调整系数；若手动指定 gas 上限则忽略该参数（默认 1）
      --gas-prices string           以小数表示的 gas price，用于计算交易费用（如 0.1uatom）
      --generate-only               构建未签名交易并输出到标准输出（启用时仅在提供密钥名称的情况下访问本地 Keybase）
  -h, --help                        查看 remove-chain-info 的帮助
      --keyring-backend string      选择 keyring 后端 (os|file|kwallet|pass|test|memory) 
      --keyring-dir string          客户端 keyring 目录；未指定则使用默认 home 目录
      --ledger                      使用已连接的 Ledger 设备
      --node string                 此链的 CometBFT RPC 地址 [host]:[port] 
      --note string                 为交易添加说明（旧参数 --memo）
      --offline                     离线模式（禁用所有联网功能）
  -o, --output string               输出格式 (text|json) 
  -s, --sequence uint               签名账户的 sequence（仅离线模式）
      --sign-mode string            选择签名模式 (direct|amino-json|direct-aux|textual)，属于高级选项
      --timeout-duration duration   TimeoutDuration 表示交易在内存池中保持有效的持续时间。交易的无序 nonce 将设为创建时间加该持续时长；若交易仍在内存池且区块时间超过提交时间加 TimeoutTimestamp，交易将被拒绝。
      --timeout-height uint         已弃用：请改用 --timeout-duration。设置区块超时高度，防止交易在超出该高度后被提交
      --tip string                  小费金额，将在目标链转给费用支付者。仅与 --aux 搭配时有效，若目标链未启用 TipDecorator 则忽略
      --unordered                   启用无序交易投递；须与 --timeout-duration 一起使用
  -y, --yes                         跳过交易广播时的确认提示
```

### 继承自父命令的选项

```
      --home string         配置和数据文件夹
      --log_format string   日志格式 (json|plain) 
      --log_level string    日志级别 (trace|debug|info|warn|error|fatal|panic|disabled 或 '*:[level],[key]:[level]') 
      --log_no_color        禁用彩色日志
      --trace               在出错时打印完整堆栈跟踪
```

### 另请参阅

* [zetacored tx authority](#zetacored-tx-authority)	- authority 模块交易子命令

## zetacored tx authority update-chain-info

更新链信息

```
zetacored tx authority update-chain-info [chain-info-json-file] [flags]
```

### 选项

```
  -a, --account-number uint         签名账户的账号（仅离线模式）
      --aux                         生成辅助签名数据而不是发送交易
  -b, --broadcast-mode string       交易广播模式 (sync|async) 
      --chain-id string             网络链 ID
      --dry-run                     忽略 --gas 参数，模拟交易但不广播（启用时无法访问本地 Keybase）
      --fee-granter string          为交易提供费用的 fee granter 地址
      --fee-payer string            由该地址支付交易费用，而不是从签名者扣除
      --fees string                 交易需支付的费用，例如 10uatom
      --from string                 用于签名的私钥名称或地址
      --gas string                  每笔交易的 gas 上限；设置为 "auto" 可自动估算（注意 "auto" 可能并非精确结果，可设置有效的代币值微调，亦可替代 --fees）（默认 200000）
      --gas-adjustment float        与模拟返回的 gas 估值相乘的调整系数；若手动指定 gas 上限则忽略该参数（默认 1）
      --gas-prices string           以小数表示的 gas price，用于计算交易费用（如 0.1uatom）
      --generate-only               构建未签名交易并输出到标准输出（启用时仅在提供密钥名称的情况下访问本地 Keybase）
  -h, --help                        查看 update-chain-info 的帮助
      --keyring-backend string      选择 keyring 后端 (os|file|kwallet|pass|test|memory) 
      --keyring-dir string          客户端 keyring 目录；未指定则使用默认 home 目录
      --ledger                      使用已连接的 Ledger 设备
      --node string                 此链的 CometBFT RPC 地址 [host]:[port] 
      --note string                 为交易添加说明（旧参数 --memo）
      --offline                     离线模式（禁用所有联网功能）
  -o, --output string               输出格式 (text|json) 
  -s, --sequence uint               签名账户的 sequence（仅离线模式）
      --sign-mode string            选择签名模式 (direct|amino-json|direct-aux|textual)，属于高级选项
      --timeout-duration duration   TimeoutDuration 表示交易在内存池中保持有效的持续时间。交易的无序 nonce 将设为创建时间加该持续时长；若交易仍在内存池且区块时间超过提交时间加 TimeoutTimestamp，交易将被拒绝。
      --timeout-height uint         已弃用：请改用 --timeout-duration。设置区块超时高度，防止交易在超出该高度后被提交
      --tip string                  小费金额，将在目标链转给费用支付者。仅与 --aux 搭配时有效，若目标链未启用 TipDecorator 则忽略
      --unordered                   启用无序交易投递；须与 --timeout-duration 一起使用
  -y, --yes                         跳过交易广播时的确认提示
```

### 继承自父命令的选项

```
      --home string         配置和数据文件夹
      --log_format string   日志格式 (json|plain) 
      --log_level string    日志级别 (trace|debug|info|warn|error|fatal|panic|disabled 或 '*:[level],[key]:[level]') 
      --log_no_color        禁用彩色日志
      --trace               在出错时打印完整堆栈跟踪
```

### 另请参阅

* [zetacored tx authority](#zetacored-tx-authority)	- authority 模块交易子命令

## zetacored tx authority update-policies

根据 JSON 文件中提供的配置更新策略

```
zetacored tx authority update-policies [policies-json-file] [flags]
```

### 选项

```
  -a, --account-number uint         签名账户的账号（仅离线模式）
      --aux                         生成辅助签名数据而不是发送交易
  -b, --broadcast-mode string       交易广播模式 (sync|async) 
      --chain-id string             网络链 ID
      --dry-run                     忽略 --gas 参数，模拟交易但不广播（启用时无法访问本地 Keybase）
      --fee-granter string          为交易提供费用的 fee granter 地址
      --fee-payer string            由该地址支付交易费用，而不是从签名者扣除
      --fees string                 交易需支付的费用，例如 10uatom
      --from string                 用于签名的私钥名称或地址
      --gas string                  每笔交易的 gas 上限；设置为 "auto" 可自动估算（注意 "auto" 可能并非精确结果，可设置有效的代币值微调，亦可替代 --fees）（默认 200000）
      --gas-adjustment float        与模拟返回的 gas 估值相乘的调整系数；若手动指定 gas 上限则忽略该参数（默认 1）
      --gas-prices string           以小数表示的 gas price，用于计算交易费用（如 0.1uatom）
      --generate-only               构建未签名交易并输出到标准输出（启用时仅在提供密钥名称的情况下访问本地 Keybase）
  -h, --help                        查看 update-policies 的帮助
      --keyring-backend string      选择 keyring 后端 (os|file|kwallet|pass|test|memory) 
      --keyring-dir string          客户端 keyring 目录；未指定则使用默认 home 目录
      --ledger                      使用已连接的 Ledger 设备
      --node string                 此链的 CometBFT RPC 地址 [host]:[port] 
      --note string                 为交易添加说明（旧参数 --memo）
      --offline                     离线模式（禁用所有联网功能）
  -o, --output string               输出格式 (text|json) 
  -s, --sequence uint               签名账户的 sequence（仅离线模式）
      --sign-mode string            选择签名模式 (direct|amino-json|direct-aux|textual)，属于高级选项
      --timeout-duration duration   TimeoutDuration 表示交易在内存池中保持有效的持续时间。交易的无序 nonce 将设为创建时间加该持续时长；若交易仍在内存池且区块时间超过提交时间加 TimeoutTimestamp，交易将被拒绝。
      --timeout-height uint         已弃用：请改用 --timeout-duration。设置区块超时高度，防止交易在超出该高度后被提交
      --tip string                  小费金额，将在目标链转给费用支付者。仅与 --aux 搭配时有效，若目标链未启用 TipDecorator 则忽略
      --unordered                   启用无序交易投递；须与 --timeout-duration 一起使用
  -y, --yes                         跳过交易广播时的确认提示
```

### 继承自父命令的选项

```
      --home string         配置和数据文件夹
      --log_format string   日志格式 (json|plain) 
      --log_level string    日志级别 (trace|debug|info|warn|error|fatal|panic|disabled 或 '*:[level],[key]:[level]') 
      --log_no_color        禁用彩色日志
      --trace               在出错时打印完整堆栈跟踪
```

### 另请参阅

* [zetacored tx authority](#zetacored-tx-authority)	- authority 模块交易子命令

## zetacored tx authz

授权 (authz) 模块交易子命令

### 概要

授权或撤销他人代为执行交易的权限。

```
zetacored tx authz [flags]
```

### 选项

```
  -h, --help   查看 authz 的帮助
```

### 继承自父命令的选项

```
      --chain-id string     网络链 ID
      --home string         配置和数据文件夹
      --log_format string   日志格式 (json|plain) 
      --log_level string    日志级别 (trace|debug|info|warn|error|fatal|panic|disabled 或 '*:[level],[key]:[level]') 
      --log_no_color        禁用彩色日志
      --trace               在出错时打印完整堆栈跟踪
```

### 另请参阅

* [zetacored tx](#zetacored-tx)	- 交易子命令集合
* [zetacored tx authz exec](#zetacored-tx-authz-exec)	- 代表授权者执行交易
* [zetacored tx authz grant](#zetacored-tx-authz-grant)	- 向地址授予授权
* [zetacored tx authz revoke](#zetacored-tx-authz-revoke)	- 撤销授权

## zetacored tx authz exec

代表授权者执行交易

### 概要

使用授权执行交易：
示例：
 $ zetacored tx authz exec tx.json --from grantee
 $ zetacored tx bank send [granter] [recipient] --from [granter] --chain-id [chain-id] --generate-only > tx.json && zetacored tx authz exec tx.json --from grantee

```
zetacored tx authz exec [tx-json-file] --from [grantee] [flags]
```

### 选项

```
  -a, --account-number uint         签名账户的账号（仅离线模式）
      --aux                         生成辅助签名数据而不是发送交易
  -b, --broadcast-mode string       交易广播模式 (sync|async) 
      --chain-id string             网络链 ID
      --dry-run                     忽略 --gas 参数，模拟交易但不广播（启用时无法访问本地 Keybase）
      --fee-granter string          为交易提供费用的 fee granter 地址
      --fee-payer string            由该地址支付交易费用，而不是从签名者扣除
      --fees string                 交易需支付的费用，例如 10uatom
      --from string                 用于签名的私钥名称或地址
      --gas string                  每笔交易的 gas 上限；设置为 "auto" 可自动估算（注意 "auto" 可能并非精确结果，可设置有效的代币值微调，亦可替代 --fees）（默认 200000）
      --gas-adjustment float        与模拟返回的 gas 估值相乘的调整系数；若手动指定 gas 上限则忽略该参数（默认 1）
      --gas-prices string           以小数表示的 gas price，用于计算交易费用（如 0.1uatom）
      --generate-only               构建未签名交易并输出到标准输出（启用时仅在提供密钥名称的情况下访问本地 Keybase）
  -h, --help                        查看 exec 的帮助
      --keyring-backend string      选择 keyring 后端 (os|file|kwallet|pass|test|memory) 
      --keyring-dir string          客户端 keyring 目录；未指定则使用默认 home 目录
      --ledger                      使用已连接的 Ledger 设备
      --node string                 此链的 CometBFT RPC 地址 [host]:[port] 
      --note string                 为交易添加说明（旧参数 --memo）
      --offline                     离线模式（禁用所有联网功能）
  -o, --output string               输出格式 (text|json) 
  -s, --sequence uint               签名账户的 sequence（仅离线模式）
      --sign-mode string            选择签名模式 (direct|amino-json|direct-aux|textual)，属于高级选项
      --timeout-duration duration   TimeoutDuration 表示交易在内存池中保持有效的持续时间。交易的无序 nonce 将设为创建时间加该持续时长；若交易仍在内存池且区块时间超过提交时间加 TimeoutTimestamp，交易将被拒绝。
      --timeout-height uint         已弃用：请改用 --timeout-duration。设置区块超时高度，防止交易在超出该高度后被提交
      --tip string                  小费金额，将在目标链转给费用支付者。仅与 --aux 搭配时有效，若目标链未启用 TipDecorator 则忽略
      --unordered                   启用无序交易投递；须与 --timeout-duration 一起使用
  -y, --yes                         跳过交易广播时的确认提示
```

### 继承自父命令的选项

```
      --home string         配置和数据文件夹
      --log_format string   日志格式 (json|plain) 
      --log_level string    日志级别 (trace|debug|info|warn|error|fatal|panic|disabled 或 '*:[level],[key]:[level]') 
      --log_no_color        禁用彩色日志
      --trace               在出错时打印完整堆栈跟踪
```

### 另请参阅

* [zetacored tx authz](#zetacored-tx-authz)	- 授权 (authz) 模块交易子命令

## zetacored tx authz grant

向某地址授予授权

### 概要

创建新的授权，使某地址可以代你执行交易：
示例：
 $ zetacored tx authz grant cosmos1skjw.. send --spend-limit=1000stake --from=cosmos1skl..
 $ zetacored tx authz grant cosmos1skjw.. generic --msg-type=/cosmos.gov.v1.MsgVote --from=cosmos1sk..

```
zetacored tx authz grant [grantee] [authorization_type="send"|"generic"|"delegate"|"unbond"|"redelegate"] --from [granter] [flags]
```

### 选项

```
  -a, --account-number uint          签名账户的账号（仅离线模式）
      --allow-list strings           被授权地址可向哪些地址转账（逗号分隔）
      --allowed-validators strings   允许的验证人地址（逗号分隔）
      --aux                          生成辅助签名数据而不是发送交易
  -b, --broadcast-mode string        交易广播模式 (sync|async) 
      --chain-id string              网络链 ID
      --deny-validators strings      禁止的验证人地址列表（逗号分隔）
      --dry-run                      忽略 --gas 参数，模拟交易但不广播（启用时无法访问本地 Keybase）
      --expiration int               过期时间 Unix 时间戳，0 表示不过期（默认 0）
      --fee-granter string           为交易提供费用的 fee granter 地址
      --fee-payer string            由该地址支付交易费用，而不是从签名者扣除
      --fees string                  交易需支付的费用，例如 10uatom
      --from string                  用于签名的私钥名称或地址
      --gas string                   每笔交易的 gas 上限；设置为 "auto" 可自动估算（注意 "auto" 可能并非精确结果，可设置有效的代币值微调，亦可替代 --fees）（默认 200000）
      --gas-adjustment float         与模拟返回的 gas 估值相乘的调整系数；若手动指定 gas 上限则忽略该参数（默认 1）
      --gas-prices string            以小数表示的 gas price，用于计算交易费用（如 0.1uatom）
      --generate-only                构建未签名交易并输出到标准输出（启用时仅在提供密钥名称的情况下访问本地 Keybase）
  -h, --help                         查看 grant 的帮助
      --keyring-backend string       选择 keyring 后端 (os|file|kwallet|pass|test|memory) 
      --keyring-dir string           客户端 keyring 目录；未指定则使用默认 home 目录
      --ledger                       使用已连接的 Ledger 设备
      --msg-type string              针对 GenericAuthorization 指定的消息类型
      --node string                  此链的 CometBFT RPC 地址 [host]:[port] 
      --note string                  为交易添加说明（旧参数 --memo）
      --offline                      离线模式（禁用所有联网功能）
  -o, --output string                输出格式 (text|json) 
  -s, --sequence uint                签名账户的 sequence（仅离线模式）
      --sign-mode string             选择签名模式 (direct|amino-json|direct-aux|textual)，属于高级选项
      --spend-limit string           Send 授权的支出上限（Coins 数组）
      --timeout-duration duration    TimeoutDuration 表示交易在内存池中保持有效的持续时间。交易的无序 nonce 将设为创建时间加该持续时长；若交易仍在内存池且区块时间超过提交时间加 TimeoutTimestamp，交易将被拒绝。
      --timeout-height uint          已弃用：请改用 --timeout-duration。设置区块超时高度，防止交易在超出该高度后被提交
      --tip string                   小费金额，将在目标链转给费用支付者。仅与 --aux 搭配时有效，若目标链未启用 TipDecorator 则忽略
      --unordered                    启用无序交易投递；须与 --timeout-duration 一起使用
  -y, --yes                          跳过交易广播时的确认提示
```

### 继承自父命令的选项

```
      --home string         配置和数据文件夹
      --log_format string   日志格式 (json|plain) 
      --log_level string    日志级别 (trace|debug|info|warn|error|fatal|panic|disabled 或 '*:[level],[key]:[level]') 
      --log_no_color        禁用彩色日志
      --trace               在出错时打印完整堆栈跟踪
```

### 另请参阅

* [zetacored tx authz](#zetacored-tx-authz)	- 授权 (authz) 模块交易子命令

## zetacored tx authz revoke

撤销授权

### 概要

撤销授权者对受权者的授权：
示例：
 $ zetacored tx authz revoke cosmos1skj.. /cosmos.bank.v1beta1.MsgSend --from=cosmos1skj..

```
zetacored tx authz revoke [grantee] [msg-type-url] --from=[granter] [flags]
```

### 选项

```
  -a, --account-number uint         签名账户的账号（仅离线模式）
      --aux                         生成辅助签名数据而不是发送交易
  -b, --broadcast-mode string       交易广播模式 (sync|async) 
      --chain-id string             网络链 ID
      --dry-run                     忽略 --gas 参数，模拟交易但不广播（启用时无法访问本地 Keybase）
      --fee-granter string          为交易提供费用的 fee granter 地址
      --fee-payer string            由该地址支付交易费用，而不是从签名者扣除
      --fees string                 交易需支付的费用，例如 10uatom
      --from string                 用于签名的私钥名称或地址
      --gas string                  每笔交易的 gas 上限；设置为 "auto" 可自动估算（注意 "auto" 可能并非精确结果，可设置有效的代币值微调，亦可替代 --fees）（默认 200000）
      --gas-adjustment float        与模拟返回的 gas 估值相乘的调整系数；若手动指定 gas 上限则忽略该参数（默认 1）
      --gas-prices string           以小数表示的 gas price，用于计算交易费用（如 0.1uatom）
      --generate-only               构建未签名交易并输出到标准输出（启用时仅在提供密钥名称的情况下访问本地 Keybase）
  -h, --help                        查看 revoke 的帮助
      --keyring-backend string      选择 keyring 后端 (os|file|kwallet|pass|test|memory) 
      --keyring-dir string          客户端 keyring 目录；未指定则使用默认 home 目录
      --ledger                      使用已连接的 Ledger 设备
      --node string                 此链的 CometBFT RPC 地址 [host]:[port] 
      --note string                 为交易添加说明（旧参数 --memo）
      --offline                     离线模式（禁用所有联网功能）
  -o, --output string               输出格式 (text|json) 
  -s, --sequence uint               签名账户的 sequence（仅离线模式）
      --sign-mode string            选择签名模式 (direct|amino-json|direct-aux|textual)，属于高级选项
      --timeout-duration duration   TimeoutDuration 表示交易在内存池中保持有效的持续时间。交易的无序 nonce 将设为创建时间加该持续时长；若交易仍在内存池且区块时间超过提交时间加 TimeoutTimestamp，交易将被拒绝。
      --timeout-height uint         已弃用：请改用 --timeout-duration。设置区块超时高度，防止交易在超出该高度后被提交
      --tip string                  小费金额，将在目标链转给费用支付者。仅与 --aux 搭配时有效，若目标链未启用 TipDecorator 则忽略
      --unordered                   启用无序交易投递；须与 --timeout-duration 一起使用
  -y, --yes                         跳过交易广播时的确认提示
```

### 继承自父命令的选项

```
      --home string         配置和数据文件夹
      --log_format string   日志格式 (json|plain) 
      --log_level string    日志级别 (trace|debug|info|warn|error|fatal|panic|disabled 或 '*:[level],[key]:[level]') 
      --log_no_color        禁用彩色日志
      --trace               在出错时打印完整堆栈跟踪
```

### 另请参阅

* [zetacored tx authz](#zetacored-tx-authz)	- 授权 (authz) 模块交易子命令

## zetacored tx bank

bank 模块交易子命令

```
zetacored tx bank [flags]
```

### 选项

```
  -h, --help   查看 bank 的帮助
```

### 继承自父命令的选项

```
      --chain-id string     网络链 ID
      --home string         配置和数据文件夹
      --log_format string   日志格式 (json|plain) 
      --log_level string    日志级别 (trace|debug|info|warn|error|fatal|panic|disabled 或 '*:[level],[key]:[level]') 
      --log_no_color        禁用彩色日志
      --trace               在出错时打印完整堆栈跟踪
```

### 另请参阅

* [zetacored tx](#zetacored-tx)	- 交易子命令集合
* [zetacored tx bank multi-send](#zetacored-tx-bank-multi-send)	- 从一个账户向多个账户发送资金
* [zetacored tx bank send](#zetacored-tx-bank-send)	- 从一个账户向另一个账户发送资金
* [zetacored tx bank set-send-enabled-proposal](#zetacored-tx-bank-set-send-enabled-proposal)	- 提交提案以设置/更新/删除 Send Enabled 项
* [zetacored tx bank update-params-proposal](#zetacored-tx-bank-update-params-proposal)	- 提交提案以更新 bank 模块参数（需一次性提供全部参数）

## zetacored tx bank multi-send

从一个账户向多个账户发送资金。

### 概要

默认情况下，会将 [amount] 全额发送给列表中的每个地址。若使用 `--split`，则 [amount] 会被平均分配给所有地址。`--from` 参数会被忽略，因为它已由 [from_key_or_address] 指定。地址间请以空格分隔。启用 `--dry-run` 时只能使用 bech32 地址，无法使用密钥名称。

```
zetacored tx bank multi-send [from_key_or_address] [to_address_1 to_address_2 ...] [amount] [flags]
```

### 示例

```
zetacored tx bank multi-send cosmos1... cosmos1... cosmos1... cosmos1... 10stake
```

### 选项

```
  -a, --account-number uint         签名账户的账号（仅离线模式）
      --aux                         生成辅助签名数据而不是发送交易
  -b, --broadcast-mode string       交易广播模式 (sync|async) 
      --chain-id string             网络链 ID
      --dry-run                     忽略 --gas 参数，模拟交易但不广播（启用时无法访问本地 Keybase）
      --fee-granter string          为交易提供费用的 fee granter 地址
      --fee-payer string            由该地址支付交易费用，而不是从签名者扣除
      --fees string                 交易需支付的费用，例如 10uatom
      --from string                 用于签名的私钥名称或地址
      --gas string                  每笔交易的 gas 上限；设置为 "auto" 可自动估算（注意 "auto" 可能并非精确结果，可设置有效的代币值微调，亦可替代 --fees）（默认 200000）
      --gas-adjustment float        与模拟返回的 gas 估值相乘的调整系数；若手动指定 gas 上限则忽略该参数（默认 1）
      --gas-prices string           以小数表示的 gas price，用于计算交易费用（如 0.1uatom）
      --generate-only               构建未签名交易并输出到标准输出（启用时仅在提供密钥名称的情况下访问本地 Keybase）
  -h, --help                        查看 multi-send 的帮助
      --keyring-backend string      选择 keyring 后端 (os|file|kwallet|pass|test|memory) 
      --keyring-dir string          客户端 keyring 目录；未指定则使用默认 home 目录
      --ledger                      使用已连接的 Ledger 设备
      --node string                 此链的 CometBFT RPC 地址 [host]:[port] 
      --note string                 为交易添加说明（旧参数 --memo）
      --offline                     离线模式（禁用所有联网功能）
  -o, --output string               输出格式 (text|json) 
  -s, --sequence uint               签名账户的 sequence（仅离线模式）
      --sign-mode string            选择签名模式 (direct|amino-json|direct-aux|textual)，属于高级选项
      --split                       将代币金额平均分配至每个地址
      --timeout-duration duration   TimeoutDuration 表示交易在内存池中保持有效的持续时间。交易的无序 nonce 将设为创建时间加该持续时长；若交易仍在内存池且区块时间超过提交时间加 TimeoutTimestamp，交易将被拒绝。
      --timeout-height uint         已弃用：请改用 --timeout-duration。设置区块超时高度，防止交易在超出该高度后被提交
      --tip string                  小费金额，将在目标链转给费用支付者。仅与 --aux 搭配时有效，若目标链未启用 TipDecorator 则忽略
      --unordered                   启用无序交易投递；须与 --timeout-duration 一起使用
  -y, --yes                         跳过交易广播时的确认提示
```

### 继承自父命令的选项

```
      --home string         配置和数据文件夹
      --log_format string   日志格式 (json|plain) 
      --log_level string    日志级别 (trace|debug|info|warn|error|fatal|panic|disabled 或 '*:[level],[key]:[level]') 
      --log_no_color        禁用彩色日志
      --trace               在出错时打印完整堆栈跟踪
```

### 另请参阅

* [zetacored tx bank](#zetacored-tx-bank)	- bank 模块交易子命令

## zetacored tx bank send

从一个账户向另一个账户发送资金。

### 概要

`--from` 参数会被忽略，因为它已由 [from_key_or_address] 指定。启用 `--dry-run` 时只能使用 bech32 地址，无法使用密钥名称。

```
zetacored tx bank send [from_key_or_address] [to_address] [amount] [flags]
```

### 选项

```
  -a, --account-number uint         签名账户的账号（仅离线模式）
      --aux                         生成辅助签名数据而不是发送交易
  -b, --broadcast-mode string       交易广播模式 (sync|async) 
      --chain-id string             网络链 ID
      --dry-run                     忽略 --gas 参数，模拟交易但不广播（启用时无法访问本地 Keybase）
      --fee-granter string          为交易提供费用的 fee granter 地址
      --fee-payer string            由该地址支付交易费用，而不是从签名者扣除
      --fees string                 交易需支付的费用，例如 10uatom
      --from string                 用于签名的私钥名称或地址
      --gas string                  每笔交易的 gas 上限；设置为 "auto" 可自动估算（注意 "auto" 可能并非精确结果，可设置有效的代币值微调，亦可替代 --fees）（默认 200000）
      --gas-adjustment float        与模拟返回的 gas 估值相乘的调整系数；若手动指定 gas 上限则忽略该参数（默认 1）
      --gas-prices string           以小数表示的 gas price，用于计算交易费用（如 0.1uatom）
      --generate-only               构建未签名交易并输出到标准输出（启用时仅在提供密钥名称的情况下访问本地 Keybase）
  -h, --help                        查看 send 的帮助
      --keyring-backend string      选择 keyring 后端 (os|file|kwallet|pass|test|memory) 
      --keyring-dir string          客户端 keyring 目录；未指定则使用默认 home 目录
      --ledger                      使用已连接的 Ledger 设备
      --node string                 此链的 CometBFT RPC 地址 [host]:[port] 
      --note string                 为交易添加说明（旧参数 --memo）
      --offline                     离线模式（禁用所有联网功能）
  -o, --output string               输出格式 (text|json) 
  -s, --sequence uint               签名账户的 sequence（仅离线模式）
      --sign-mode string            选择签名模式 (direct|amino-json|direct-aux|textual)，属于高级选项
      --timeout-duration duration   TimeoutDuration 表示交易在内存池中保持有效的持续时间。交易的无序 nonce 将设为创建时间加该持续时长；若交易仍在内存池且区块时间超过提交时间加 TimeoutTimestamp，交易将被拒绝。
      --timeout-height uint         已弃用：请改用 --timeout-duration。设置区块超时高度，防止交易在超出该高度后被提交
      --tip string                  小费金额，将在目标链转给费用支付者。仅与 --aux 搭配时有效，若目标链未启用 TipDecorator 则忽略
      --unordered                   启用无序交易投递；须与 --timeout-duration 一起使用
  -y, --yes                         跳过交易广播时的确认提示
```

### 继承自父命令的选项

```
      --home string         配置和数据文件夹
      --log_format string   日志格式 (json|plain) 
      --log_level string    日志级别 (trace|debug|info|warn|error|fatal|panic|disabled 或 '*:[level],[key]:[level]') 
      --log_no_color        禁用彩色日志
      --trace               在出错时打印完整堆栈跟踪
```

### 另请参阅

* [zetacored tx bank](#zetacored-tx-bank)	- bank 模块交易子命令

## zetacored tx bank set-send-enabled-proposal

提交提案以设置、更新或删除 Send Enabled 项。

```
zetacored tx bank set-send-enabled-proposal [send_enabled] [flags]
```

### 示例

```
zetacored tx bank set-send-enabled-proposal '{"denom":"stake","enabled":true}'
```

### 选项

```
  -a, --account-number uint         签名账户的账号（仅离线模式）
      --aux                         生成辅助签名数据而不是发送交易
  -b, --broadcast-mode string       交易广播模式 (sync|async) 
      --chain-id string             网络链 ID
      --dry-run                     忽略 --gas 参数，模拟交易但不广播（启用时无法访问本地 Keybase）
      --fee-granter string          为交易提供费用的 fee granter 地址
      --fee-payer string            由该地址支付交易费用，而不是从签名者扣除
      --fees string                 交易需支付的费用，例如 10uatom
      --from string                 用于签名的私钥名称或地址
      --gas string                  每笔交易的 gas 上限；设置为 "auto" 可自动估算（注意 "auto" 可能并非精确结果，可设置有效的代币值微调，亦可替代 --fees）（默认 200000）
      --gas-adjustment float        与模拟返回的 gas 估值相乘的调整系数；若手动指定 gas 上限则忽略该参数（默认 1）
      --gas-prices string           以小数表示的 gas price，用于计算交易费用（如 0.1uatom）
      --generate-only               构建未签名交易并输出到标准输出（启用时仅在提供密钥名称的情况下访问本地 Keybase）
  -h, --help                        查看 set-send-enabled-proposal 的帮助
      --keyring-backend string      选择 keyring 后端 (os|file|kwallet|pass|test|memory) 
      --keyring-dir string          客户端 keyring 目录；未指定则使用默认 home 目录
      --ledger                      使用已连接的 Ledger 设备
      --node string                 此链的 CometBFT RPC 地址 [host]:[port] 
      --note string                 为交易添加说明（旧参数 --memo）
      --offline                     离线模式（禁用所有联网功能）
  -o, --output string               输出格式 (text|json) 
  -s, --sequence uint               签名账户的 sequence（仅离线模式）
      --sign-mode string            选择签名模式 (direct|amino-json|direct-aux|textual)，属于高级选项
      --timeout-duration duration   TimeoutDuration 表示交易在内存池中保持有效的持续时间。交易的无序 nonce 将设为创建时间加该持续时长；若交易仍在内存池且区块时间超过提交时间加 TimeoutTimestamp，交易将被拒绝。
      --timeout-height uint         已弃用：请改用 --timeout-duration。设置区块超时高度，防止交易在超出该高度后被提交
      --tip string                  小费金额，将在目标链转给费用支付者。仅与 --aux 搭配时有效，若目标链未启用 TipDecorator 则忽略
      --unordered                   启用无序交易投递；须与 --timeout-duration 一起使用
      --use-default-for strings     对指定 denom 使用默认设置（删除 send enabled 条目）
  -y, --yes                         跳过交易广播时的确认提示
```

### 继承自父命令的选项

```
      --home string         配置和数据文件夹
      --log_format string   日志格式 (json|plain) 
      --log_level string    日志级别 (trace|debug|info|warn|error|fatal|panic|disabled 或 '*:[level],[key]:[level]') 
      --log_no_color        禁用彩色日志
      --trace               在出错时打印完整堆栈跟踪
```

### 另请参阅

* [zetacored tx bank](#zetacored-tx-bank)	- bank 模块交易子命令

## zetacored tx bank update-params-proposal

提交提案以更新 bank 模块参数（需一次性提供全部参数）。

```
zetacored tx bank update-params-proposal [params] [flags]
```

### 示例

```
zetacored tx bank update-params-proposal '{ "default_send_enabled": true }'
```

### 选项

```
  -a, --account-number uint         签名账户的账号（仅离线模式）
      --aux                         生成辅助签名数据而不是发送交易
  -b, --broadcast-mode string       交易广播模式 (sync|async) 
      --chain-id string             网络链 ID
      --dry-run                     忽略 --gas 参数，模拟交易但不广播（启用时无法访问本地 Keybase）
      --fee-granter string          为交易提供费用的 fee granter 地址
      --fee-payer string            由该地址支付交易费用，而不是从签名者扣除
      --fees string                 交易需支付的费用，例如 10uatom
      --from string                 用于签名的私钥名称或地址
      --gas string                  每笔交易的 gas 上限；设置为 "auto" 可自动估算（注意 "auto" 可能并非精确结果，可设置有效的代币值微调，亦可替代 --fees）（默认 200000）
      --gas-adjustment float        与模拟返回的 gas 估值相乘的调整系数；若手动指定 gas 上限则忽略该参数（默认 1）
      --gas-prices string           以小数表示的 gas price，用于计算交易费用（如 0.1uatom）
      --generate-only               构建未签名交易并输出到标准输出（启用时仅在提供密钥名称的情况下访问本地 Keybase）
  -h, --help                        查看 update-params-proposal 的帮助
      --keyring-backend string      选择 keyring 后端 (os|file|kwallet|pass|test|memory) 
      --keyring-dir string          客户端 keyring 目录；未指定则使用默认 home 目录
      --ledger                      使用已连接的 Ledger 设备
      --node string                 此链的 CometBFT RPC 地址 [host]:[port] 
      --note string                 为交易添加说明（旧参数 --memo）
      --offline                     离线模式（禁用所有联网功能）
  -o, --output string               输出格式 (text|json) 
  -s, --sequence uint               签名账户的 sequence（仅离线模式）
      --sign-mode string            选择签名模式 (direct|amino-json|direct-aux|textual)，属于高级选项
      --timeout-duration duration   TimeoutDuration 表示交易在内存池中保持有效的持续时间。交易的无序 nonce 将设为创建时间加该持续时长；若交易仍在内存池且区块时间超过提交时间加 TimeoutTimestamp，交易将被拒绝。
      --timeout-height uint         已弃用：请改用 --timeout-duration。设置区块超时高度，防止交易在超出该高度后被提交
      --tip string                  小费金额，将在目标链转给费用支付者。仅与 --aux 搭配时有效，若目标链未启用 TipDecorator 则忽略
      --unordered                   启用无序交易投递；须与 --timeout-duration 一起使用
  -y, --yes                         跳过交易广播时的确认提示
```

### 继承自父命令的选项

```
      --home string         配置和数据文件夹
      --log_format string   日志格式 (json|plain) 
      --log_level string    日志级别 (trace|debug|info|warn|error|fatal|panic|disabled 或 '*:[level],[key]:[level]') 
      --log_no_color        禁用彩色日志
      --trace               在出错时打印完整堆栈跟踪
```

### 另请参阅

* [zetacored tx bank](#zetacored-tx-bank)	- bank 模块交易子命令

## zetacored tx broadcast

广播离线生成的交易

### 概要

广播使用 `--generate-only` 生成且经 `sign` 命令签名的交易。支持从文件或标准输入读取交易。示例：

```
$ zetacored tx broadcast ./mytxn.json
```

```
zetacored tx broadcast [file_path] [flags]
``

### 选项

```
  -a, --account-number uint         签名账户的账号（仅离线模式）
      --aux                         生成辅助签名数据而不是发送交易
  -b, --broadcast-mode string       交易广播模式 (sync|async) 
      --chain-id string             网络链 ID
      --dry-run                     忽略 --gas 参数，模拟交易但不广播（启用时无法访问本地 Keybase）
      --fee-granter string          为交易提供费用的 fee granter 地址
      --fee-payer string            由该地址支付交易费用，而不是从签名者扣除
      --fees string                 交易需支付的费用，例如 10uatom
      --from string                 用于签名的私钥名称或地址
      --gas string                  每笔交易的 gas 上限；设置为 "auto" 可自动估算（注意 "auto" 可能并非精确结果，可设置有效的代币值微调，亦可替代 --fees）（默认 200000）
      --gas-adjustment float        与模拟返回的 gas 估值相乘的调整系数；若手动指定 gas 上限则忽略该参数（默认 1）
      --gas-prices string           以小数表示的 gas price，用于计算交易费用（如 0.1uatom）
      --generate-only               构建未签名交易并输出到标准输出（启用时仅在提供密钥名称的情况下访问本地 Keybase）
  -h, --help                        查看 broadcast 的帮助
      --keyring-backend string      选择 keyring 后端 (os|file|kwallet|pass|test|memory) 
      --keyring-dir string          客户端 keyring 目录；未指定则使用默认 home 目录
      --ledger                      使用已连接的 Ledger 设备
      --node string                 此链的 CometBFT RPC 地址 [host]:[port] 
      --note string                 为交易添加说明（旧参数 --memo）
      --offline                     离线模式（禁用所有联网功能）
  -o, --output string               输出格式 (text|json) 
  -s, --sequence uint               签名账户的 sequence（仅离线模式）
      --sign-mode string            选择签名模式 (direct|amino-json|direct-aux|textual)，属于高级选项
      --timeout-duration duration   TimeoutDuration 表示交易在内存池中保持有效的持续时间。交易的无序 nonce 将设为创建时间加该持续时长；若交易仍在内存池且区块时间超过提交时间加 TimeoutTimestamp，交易将被拒绝。
      --timeout-height uint         已弃用：请改用 --timeout-duration。设置区块超时高度，防止交易在超出该高度后被提交
      --tip string                  小费金额，将在目标链转给费用支付者。仅与 --aux 搭配时有效，若目标链未启用 TipDecorator 则忽略
      --unordered                   启用无序交易投递；须与 --timeout-duration 一起使用
  -y, --yes                         跳过交易广播时的确认提示
```

### 继承自父命令的选项

```
      --home string         配置和数据文件夹
      --log_format string   日志格式 (json|plain) 
      --log_level string    日志级别 (trace|debug|info|warn|error|fatal|panic|disabled 或 '*:[level],[key]:[level]') 
      --log_no_color        禁用彩色日志
      --trace               在出错时打印完整堆栈跟踪
```

### 另请参阅

* [zetacored tx](#zetacored-tx)	- 交易子命令集合

## zetacored tx consensus

共识模块的交易命令

```
zetacored tx consensus [flags]
```

### 选项

```
  -h, --help   查看 consensus 的帮助
```

### 继承自父命令的选项

```
      --chain-id string     网络链 ID
      --home string         配置和数据文件夹
      --log_format string   日志格式 (json|plain) 
      --log_level string    日志级别 (trace|debug|info|warn|error|fatal|panic|disabled 或 '*:[level],[key]:[level]') 
      --log_no_color        禁用彩色日志
      --trace               在出错时打印完整堆栈跟踪
```

### 另请参阅

* [zetacored tx](#zetacored-tx)	- 交易子命令集合
* [zetacored tx consensus update-params-proposal](#zetacored-tx-consensus-update-params-proposal)	- 提交提案以更新共识模块参数，需一次性提供全部参数

## zetacored tx consensus update-params-proposal

提交提案以更新共识模块参数，需一次性提供全部参数。

```
zetacored tx consensus update-params-proposal [params] [flags]
```

### 示例

```
zetacored tx consensus update-params-proposal '{ params }'
```

### 选项

```
  -a, --account-number uint         签名账户的账号（仅离线模式）
      --aux                         生成辅助签名数据而不是发送交易
  -b, --broadcast-mode string       交易广播模式 (sync|async) 
      --chain-id string             网络链 ID
      --dry-run                     忽略 --gas 参数，模拟交易但不广播（启用时无法访问本地 Keybase）
      --fee-granter string          为交易提供费用的 fee granter 地址
      --fee-payer string            由该地址支付交易费用，而不是从签名者扣除
      --fees string                 交易需支付的费用，例如 10uatom
      --from string                 用于签名的私钥名称或地址
      --gas string                  每笔交易的 gas 上限；设置为 "auto" 可自动估算（注意 "auto" 可能并非精确结果，可设置有效的代币值微调，亦可替代 --fees）（默认 200000）
      --gas-adjustment float        与模拟返回的 gas 估值相乘的调整系数；若手动指定 gas 上限则忽略该参数（默认 1）
      --gas-prices string           以小数表示的 gas price，用于计算交易费用（如 0.1uatom）
      --generate-only               构建未签名交易并输出到标准输出（启用时仅在提供密钥名称的情况下访问本地 Keybase）
  -h, --help                        查看 update-params-proposal 的帮助
      --keyring-backend string      选择 keyring 后端 (os|file|kwallet|pass|test|memory) 
      --keyring-dir string          客户端 keyring 目录；未指定则使用默认 home 目录
      --ledger                      使用已连接的 Ledger 设备
      --node string                 此链的 CometBFT RPC 地址 [host]:[port] 
      --note string                 为交易添加说明（旧参数 --memo）
      --offline                     离线模式（禁用所有联网功能）
  -o, --output string               输出格式 (text|json) 
  -s, --sequence uint               签名账户的 sequence（仅离线模式）
      --sign-mode string            选择签名模式 (direct|amino-json|direct-aux|textual)，属于高级选项
      --timeout-duration duration   TimeoutDuration 表示交易在内存池中保持有效的持续时间。交易的无序 nonce 将设为创建时间加该持续时长；若交易仍在内存池且区块时间超过提交时间加 TimeoutTimestamp，交易将被拒绝。
      --timeout-height uint         已弃用：请改用 --timeout-duration。设置区块超时高度，防止交易在超出该高度后被提交
      --tip string                  小费金额，将在目标链转给费用支付者。仅与 --aux 搭配时有效，若目标链未启用 TipDecorator 则忽略
      --unordered                   启用无序交易投递；须与 --timeout-duration 一起使用
  -y, --yes                         跳过交易广播时的确认提示
```

### 继承自父命令的选项

```
      --home string         配置和数据文件夹
      --log_format string   日志格式 (json|plain) 
      --log_level string    日志级别 (trace|debug|info|warn|error|fatal|panic|disabled 或 '*:[level],[key]:[level]') 
      --log_no_color        禁用彩色日志
      --trace               在出错时打印完整堆栈跟踪
```

### 另请参阅

* [zetacored tx consensus](#zetacored-tx-consensus)	- 共识模块的交易命令

## zetacored tx crisis

危机模块的交易命令

```
zetacored tx crisis [flags]
```

### 选项

```
  -h, --help   查看 crisis 的帮助
```

### 继承自父命令的选项

```
      --chain-id string     网络链 ID
      --home string         配置和数据文件夹
      --log_format string   日志格式 (json|plain) 
      --log_level string    日志级别 (trace|debug|info|warn|error|fatal|panic|disabled 或 '*:[level],[key]:[level]') 
      --log_no_color        禁用彩色日志
      --trace               在出错时打印完整堆栈跟踪
```

### 另请参阅

* [zetacored tx](#zetacored-tx)	- 交易子命令集合
* [zetacored tx crisis invariant-broken](#zetacored-tx-crisis-invariant-broken)	- 提交证明某个约束已被破坏

## zetacored tx crisis invariant-broken

提交证明某个约束已被破坏。

```
zetacored tx crisis invariant-broken [module-name] [invariant-route] --from mykey [flags]
```

### 选项

```
  -a, --account-number uint         签名账户的账号（仅离线模式）
      --aux                         生成辅助签名数据而不是发送交易
  -b, --broadcast-mode string       交易广播模式 (sync|async) 
      --chain-id string             网络链 ID
      --dry-run                     忽略 --gas 参数，模拟交易但不广播（启用时无法访问本地 Keybase）
      --fee-granter string          为交易提供费用的 fee granter 地址
      --fee-payer string            由该地址支付交易费用，而不是从签名者扣除
      --fees string                 交易需支付的费用，例如 10uatom
      --from string                 用于签名的私钥名称或地址
      --gas string                  每笔交易的 gas 上限；设置为 "auto" 可自动估算（注意 "auto" 可能并非精确结果，可设置有效的代币值微调，亦可替代 --fees）（默认 200000）
      --gas-adjustment float        与模拟返回的 gas 估值相乘的调整系数；若手动指定 gas 上限则忽略该参数（默认 1）
      --gas-prices string           以小数表示的 gas price，用于计算交易费用（如 0.1uatom）
      --generate-only               构建未签名交易并输出到标准输出（启用时仅在提供密钥名称的情况下访问本地 Keybase）
  -h, --help                        查看 invariant-broken 的帮助
      --keyring-backend string      选择 keyring 后端 (os|file|kwallet|pass|test|memory) 
      --keyring-dir string          客户端 keyring 目录；未指定则使用默认 home 目录
      --ledger                      使用已连接的 Ledger 设备
      --node string                 此链的 CometBFT RPC 地址 [host]:[port] 
      --note string                 为交易添加说明（旧参数 --memo）
      --offline                     离线模式（禁用所有联网功能）
  -o, --output string               输出格式 (text|json) 
  -s, --sequence uint               签名账户的 sequence（仅离线模式）
      --sign-mode string            选择签名模式 (direct|amino-json|direct-aux|textual)，属于高级选项
      --timeout-duration duration   TimeoutDuration 表示交易在内存池中保持有效的持续时间。交易的无序 nonce 将设为创建时间加该持续时长；若交易仍在内存池且区块时间超过提交时间加 TimeoutTimestamp，交易将被拒绝。
      --timeout-height uint         已弃用：请改用 --timeout-duration。设置区块超时高度，防止交易在超出该高度后被提交
      --tip string                  小费金额，将在目标链转给费用支付者。仅与 --aux 搭配时有效，若目标链未启用 TipDecorator 则忽略
      --unordered                   启用无序交易投递；须与 --timeout-duration 一起使用
  -y, --yes                         跳过交易广播时的确认提示
```

### 继承自父命令的选项

```
      --home string         配置和数据文件夹
      --log_format string   日志格式 (json|plain) 
      --log_level string    日志级别 (trace|debug|info|warn|error|fatal|panic|disabled 或 '*:[level],[key]:[level]') 
      --log_no_color        禁用彩色日志
      --trace               在出错时打印完整堆栈跟踪
```

### 另请参阅

* [zetacored tx crisis](#zetacored-tx-crisis)	- 危机模块的交易命令

## zetacored tx crosschain

跨链交易子命令

```
zetacored tx crosschain [flags]
```

### 选项

```
  -h, --help   查看 crosschain 的帮助
```

### 继承自父命令的选项

```
      --chain-id string     网络链 ID
      --home string         配置和数据文件夹 
      --log_format string   日志格式 (json|plain) 
      --log_level string    日志级别 (trace|debug|info|warn|error|fatal|panic|disabled 或 '*:[level],[key]:[level]') 
      --log_no_color        禁用彩色日志
      --trace               在出错时打印完整堆栈跟踪
```

### 另请参阅

* [zetacored tx](#zetacored-tx)	- 交易子命令集合
* [zetacored tx crosschain abort-stuck-cctx](#zetacored-tx-crosschain-abort-stuck-cctx)	- 中止卡住的 CCTX
* [zetacored tx crosschain add-inbound-tracker](#zetacored-tx-crosschain-add-inbound-tracker)	- 添加入站跟踪器（币种类型：0 表示 Zeta，1 表示 Gas，2 表示 ERC20）
* [zetacored tx crosschain add-outbound-tracker](#zetacored-tx-crosschain-add-outbound-tracker)	- 添加出站跟踪器
* [zetacored tx crosschain migrate-tss-funds](#zetacored-tx-crosschain-migrate-tss-funds)	- 将 TSS 资金迁移至最新 TSS 地址
* [zetacored tx crosschain refund-aborted](#zetacored-tx-crosschain-refund-aborted)	- 为已中止的交易退款；若未提供退款地址，则默认退回给 CCTX 的发送方/tx origin
* [zetacored tx crosschain remove-inbound-tracker](#zetacored-tx-crosschain-remove-inbound-tracker)	- 移除入站跟踪器
* [zetacored tx crosschain remove-outbound-tracker](#zetacored-tx-crosschain-remove-outbound-tracker)	- 移除出站跟踪器
* [zetacored tx crosschain update-tss-address](#zetacored-tx-crosschain-update-tss-address)	- 创建新的 TSSVoter
* [zetacored tx crosschain vote-gas-price](#zetacored-tx-crosschain-vote-gas-price)	- 广播 Gas Price 投票
* [zetacored tx crosschain vote-inbound](#zetacored-tx-crosschain-vote-inbound)	- 广播入站交易投票
* [zetacored tx crosschain vote-outbound](#zetacored-tx-crosschain-vote-outbound)	- 广播出站交易投票
* [zetacored tx crosschain whitelist-erc20](#zetacored-tx-crosschain-whitelist-erc20)	- 将新的 ERC20 代币加入白名单

## zetacored tx crosschain abort-stuck-cctx

中止卡住的 CCTX。

```
zetacored tx crosschain abort-stuck-cctx [index] [flags]
```

### 选项

```
  -a, --account-number uint         签名账户的账号（仅离线模式）
      --aux                         生成辅助签名数据而不是发送交易
  -b, --broadcast-mode string       交易广播模式 (sync|async) 
      --chain-id string             网络链 ID
      --dry-run                     忽略 --gas 参数，模拟交易但不广播（启用时无法访问本地 Keybase）
      --fee-granter string          为交易提供费用的 fee granter 地址
      --fee-payer string            由该地址支付交易费用，而不是从签名者扣除
      --fees string                 交易需支付的费用，例如 10uatom
      --from string                 用于签名的私钥名称或地址
      --gas string                  每笔交易的 gas 上限；设置为 "auto" 可自动估算（注意 "auto" 可能并非精确结果，可设置有效的代币值微调，亦可替代 --fees）（默认 200000）
      --gas-adjustment float        与模拟返回的 gas 估值相乘的调整系数；若手动指定 gas 上限则忽略该参数（默认 1）
      --gas-prices string           以小数表示的 gas price，用于计算交易费用（如 0.1uatom）
      --generate-only               构建未签名交易并输出到标准输出（启用时仅在提供密钥名称的情况下访问本地 Keybase）
  -h, --help                        查看 abort-stuck-cctx 的帮助
      --keyring-backend string      选择 keyring 后端 (os|file|kwallet|pass|test|memory) 
      --keyring-dir string          客户端 keyring 目录；未指定则使用默认 home 目录
      --ledger                      使用已连接的 Ledger 设备
      --node string                 此链的 CometBFT RPC 地址 [host]:[port] 
      --note string                 为交易添加说明（旧参数 --memo）
      --offline                     离线模式（禁用所有联网功能）
  -o, --output string               输出格式 (text|json) 
  -s, --sequence uint               签名账户的 sequence（仅离线模式）
      --sign-mode string            选择签名模式 (direct|amino-json|direct-aux|textual)，属于高级选项
      --timeout-duration duration   TimeoutDuration 表示交易在内存池中保持有效的持续时间。交易的无序 nonce 将设为创建时间加该持续时长；若交易仍在内存池且区块时间超过提交时间加 TimeoutTimestamp，交易将被拒绝。
      --timeout-height uint         已弃用：请改用 --timeout-duration。设置区块超时高度，防止交易在超出该高度后被提交
      --tip string                  小费金额，将在目标链转给费用支付者。仅与 --aux 搭配时有效，若目标链未启用 TipDecorator 则忽略
      --unordered                   启用无序交易投递；须与 --timeout-duration 一起使用
  -y, --yes                         跳过交易广播时的确认提示
```

### 继承自父命令的选项

```
      --home string         配置和数据文件夹 
      --log_format string   日志格式 (json|plain) 
      --log_level string    日志级别 (trace|debug|info|warn|error|fatal|panic|disabled 或 '*:[level],[key]:[level]') 
      --log_no_color        禁用彩色日志
      --trace               在出错时打印完整堆栈跟踪
```

### 另请参阅

* [zetacored tx crosschain](#zetacored-tx-crosschain)	- 跨链交易子命令

## zetacored tx crosschain add-inbound-tracker

添加入站跟踪器。

```
zetacored tx crosschain add-inbound-tracker [chain-id] [tx-hash] [coin-type] [flags]
```

### 选项

```
  -a, --account-number uint         签名账户的账号（仅离线模式）
      --aux                         生成辅助签名数据而不是发送交易
  -b, --broadcast-mode string       交易广播模式 (sync|async) 
      --chain-id string             网络链 ID
      --dry-run                     忽略 --gas 参数，模拟交易但不广播（启用时无法访问本地 Keybase）
      --fee-granter string          为交易提供费用的 fee granter 地址
      --fee-payer string            由该地址支付交易费用，而不是从签名者扣除
      --fees string                 交易需支付的费用，例如 10uatom
      --from string                 用于签名的私钥名称或地址
      --gas string                  每笔交易的 gas 上限；设置为 "auto" 可自动估算（注意 "auto" 可能并非精确结果，可设置有效的代币值微调，亦可替代 --fees）（默认 200000）
      --gas-adjustment float        与模拟返回的 gas 估值相乘的调整系数；若手动指定 gas 上限则忽略该参数（默认 1）
      --gas-prices string           以小数表示的 gas price，用于计算交易费用（如 0.1uatom）
      --generate-only               构建未签名交易并输出到标准输出（启用时仅在提供密钥名称的情况下访问本地 Keybase）
  -h, --help                        查看 add-inbound-tracker 的帮助
      --keyring-backend string      选择 keyring 后端 (os|file|kwallet|pass|test|memory) 
      --keyring-dir string          客户端 keyring 目录；未指定则使用默认 home 目录
      --ledger                      使用已连接的 Ledger 设备
      --node string                 此链的 CometBFT RPC 地址 [host]:[port] 
      --note string                 为交易添加说明（旧参数 --memo）
      --offline                     离线模式（禁用所有联网功能）
  -o, --output string               输出格式 (text|json) 
  -s, --sequence uint               签名账户的 sequence（仅离线模式）
      --sign-mode string            选择签名模式 (direct|amino-json|direct-aux|textual)，属于高级选项
      --timeout-duration duration   TimeoutDuration 表示交易在内存池中保持有效的持续时间。交易的无序 nonce 将设为创建时间加该持续时长；若交易仍在内存池且区块时间超过提交时间加 TimeoutTimestamp，交易将被拒绝。
      --timeout-height uint         已弃用：请改用 --timeout-duration。设置区块超时高度，防止交易在超出该高度后被提交
      --tip string                  小费金额，将在目标链转给费用支付者。仅与 --aux 搭配时有效，若目标链未启用 TipDecorator 则忽略
      --unordered                   启用无序交易投递；须与 --timeout-duration 一起使用
  -y, --yes                         跳过交易广播时的确认提示
```

### 继承自父命令的选项

```
      --home string         配置和数据文件夹 
      --log_format string   日志格式 (json|plain) 
      --log_level string    日志级别 (trace|debug|info|warn|error|fatal|panic|disabled 或 '*:[level],[key]:[level]') 
      --log_no_color        禁用彩色日志
      --trace               在出错时打印完整堆栈跟踪
```

### 另请参阅

* [zetacored tx crosschain](#zetacored-tx-crosschain)	- 跨链交易子命令

## zetacored tx crosschain add-outbound-tracker

添加出站跟踪器。

```
zetacored tx crosschain add-outbound-tracker [chain] [nonce] [tx-hash] [flags]
```

### 选项

```
  -a, --account-number uint         签名账户的账号（仅离线模式）
      --aux                         生成辅助签名数据而不是发送交易
  -b, --broadcast-mode string       交易广播模式 (sync|async) 
      --chain-id string             网络链 ID
      --dry-run                     忽略 --gas 参数，模拟交易但不广播（启用时无法访问本地 Keybase）
      --fee-granter string          为交易提供费用的 fee granter 地址
      --fee-payer string            由该地址支付交易费用，而不是从签名者扣除
      --fees string                 交易需支付的费用，例如 10uatom
      --from string                 用于签名的私钥名称或地址
      --gas string                  每笔交易的 gas 上限；设置为 "auto" 可自动估算（注意 "auto" 可能并非精确结果，可设置有效的代币值微调，亦可替代 --fees）（默认 200000）
      --gas-adjustment float        与模拟返回的 gas 估值相乘的调整系数；若手动指定 gas 上限则忽略该参数（默认 1）
      --gas-prices string           以小数表示的 gas price，用于计算交易费用（如 0.1uatom）
      --generate-only               构建未签名交易并输出到标准输出（启用时仅在提供密钥名称的情况下访问本地 Keybase）
  -h, --help                        查看 add-outbound-tracker 的帮助
      --keyring-backend string      选择 keyring 后端 (os|file|kwallet|pass|test|memory) 
      --keyring-dir string          客户端 keyring 目录；未指定则使用默认 home 目录
      --ledger                      使用已连接的 Ledger 设备
      --node string                 此链的 CometBFT RPC 地址 [host]:[port] 
      --note string                 为交易添加说明（旧参数 --memo）
      --offline                     离线模式（禁用所有联网功能）
  -o, --output string               输出格式 (text|json) 
  -s, --sequence uint               签名账户的 sequence（仅离线模式）
      --sign-mode string            选择签名模式 (direct|amino-json|direct-aux|textual)，属于高级选项
      --timeout-duration duration   TimeoutDuration 表示交易在内存池中保持有效的持续时间。交易的无序 nonce 将设为创建时间加该持续时长；若交易仍在内存池且区块时间超过提交时间加 TimeoutTimestamp，交易将被拒绝。
      --timeout-height uint         已弃用：请改用 --timeout-duration。设置区块超时高度，防止交易在超出该高度后被提交
      --tip string                  小费金额，将在目标链转给费用支付者。仅与 --aux 搭配时有效，若目标链未启用 TipDecorator 则忽略
      --unordered                   启用无序交易投递；须与 --timeout-duration 一起使用
  -y, --yes                         跳过交易广播时的确认提示
```

### 继承自父命令的选项

```
      --home string         配置和数据文件夹 
      --log_format string   日志格式 (json|plain) 
      --log_level string    日志级别 (trace|debug|info|warn|error|fatal|panic|disabled 或 '*:[level],[key]:[level]') 
      --log_no_color        禁用彩色日志
      --trace               在出错时打印完整堆栈跟踪
```

### 另请参阅

* [zetacored tx crosschain](#zetacored-tx-crosschain)	- 跨链交易子命令

## zetacored tx crosschain migrate-tss-funds

将 TSS 资金迁移至最新的 TSS 地址。

```
zetacored tx crosschain migrate-tss-funds [chainID] [amount] [flags]
```

### 选项

```
  -a, --account-number uint         签名账户的账号（仅离线模式）
      --aux                         生成辅助签名数据而不是发送交易
  -b, --broadcast-mode string       交易广播模式 (sync|async) 
      --chain-id string             网络链 ID
      --dry-run                     忽略 --gas 参数，模拟交易但不广播（启用时无法访问本地 Keybase）
      --fee-granter string          为交易提供费用的 fee granter 地址
      --fee-payer string            由该地址支付交易费用，而不是从签名者扣除
      --fees string                 交易需支付的费用，例如 10uatom
      --from string                 用于签名的私钥名称或地址
      --gas string                  每笔交易的 gas 上限；设置为 "auto" 可自动估算（注意 "auto" 可能并非精确结果，可设置有效的代币值微调，亦可替代 --fees）（默认 200000）
      --gas-adjustment float        与模拟返回的 gas 估值相乘的调整系数；若手动指定 gas 上限则忽略该参数（默认 1）
      --gas-prices string           以小数表示的 gas price，用于计算交易费用（如 0.1uatom）
      --generate-only               构建未签名交易并输出到标准输出（启用时仅在提供密钥名称的情况下访问本地 Keybase）
  -h, --help                        查看 migrate-tss-funds 的帮助
      --keyring-backend string      选择 keyring 后端 (os|file|kwallet|pass|test|memory) 
      --keyring-dir string          客户端 keyring 目录；未指定则使用默认 home 目录
      --ledger                      使用已连接的 Ledger 设备
      --node string                 此链的 CometBFT RPC 地址 [host]:[port] 
      --note string                 为交易添加说明（旧参数 --memo）
      --offline                     离线模式（禁用所有联网功能）
  -o, --output string               输出格式 (text|json) 
  -s, --sequence uint               签名账户的 sequence（仅离线模式）
      --sign-mode string            选择签名模式 (direct|amino-json|direct-aux|textual)，属于高级选项
      --timeout-duration duration   TimeoutDuration 表示交易在内存池中保持有效的持续时间。交易的无序 nonce 将设为创建时间加该持续时长；若交易仍在内存池且区块时间超过提交时间加 TimeoutTimestamp，交易将被拒绝。
      --timeout-height uint         已弃用：请改用 --timeout-duration。设置区块超时高度，防止交易在超出该高度后被提交
      --tip string                  小费金额，将在目标链转给费用支付者。仅与 --aux 搭配时有效，若目标链未启用 TipDecorator 则忽略
      --unordered                   启用无序交易投递；须与 --timeout-duration 一起使用
  -y, --yes                         跳过交易广播时的确认提示
```

### 继承自父命令的选项

```
      --home string         配置和数据文件夹 
      --log_format string   日志格式 (json|plain) 
      --log_level string    日志级别 (trace|debug|info|warn|error|fatal|panic|disabled 或 '*:[level],[key]:[level]') 
      --log_no_color        禁用彩色日志
      --trace               在出错时打印完整堆栈跟踪
```

### 另请参阅

* [zetacored tx crosschain](#zetacored-tx-crosschain)	- 跨链交易子命令

## zetacored tx crosschain refund-aborted

为已中止的交易退款。退款地址为可选项，若未指定，则退回给 CCTX 的发送者/交易发起方。

```
zetacored tx crosschain refund-aborted [cctx-index] [refund-address] [flags]
```

### 选项

```
  -a, --account-number uint         签名账户的账号（仅离线模式）
      --aux                         生成辅助签名数据而不是发送交易
  -b, --broadcast-mode string       交易广播模式 (sync|async) 
      --chain-id string             网络链 ID
      --dry-run                     忽略 --gas 参数，模拟交易但不广播（启用时无法访问本地 Keybase）
      --fee-granter string          为交易提供费用的 fee granter 地址
      --fee-payer string            由该地址支付交易费用，而不是从签名者扣除
      --fees string                 交易需支付的费用，例如 10uatom
      --from string                 用于签名的私钥名称或地址
      --gas string                  每笔交易的 gas 上限；设置为 "auto" 可自动估算（注意 "auto" 可能并非精确结果，可设定有效代币值微调，亦可替代 --fees）（默认 200000）
      --gas-adjustment float        与模拟返回的 gas 估值相乘的调整系数；若手动指定 gas 上限则忽略该参数（默认 1）
      --gas-prices string           以小数表示的 gas price，用于计算交易费用（如 0.1uatom）
      --generate-only               构建未签名交易并输出到标准输出（启用时仅在提供密钥名称的情况下访问本地 Keybase）
  -h, --help                        查看 refund-aborted 的帮助
      --keyring-backend string      选择 keyring 后端 (os|file|kwallet|pass|test|memory) 
      --keyring-dir string          客户端 keyring 目录；未指定则使用默认 home 目录
      --ledger                      使用已连接的 Ledger 设备
      --node string                 此链的 CometBFT RPC 地址 [host]:[port] 
      --note string                 为交易添加说明（旧参数 --memo）
      --offline                     离线模式（禁用所有联网功能）
  -o, --output string               输出格式 (text|json) 
  -s, --sequence uint               签名账户的 sequence（仅离线模式）
      --sign-mode string            选择签名模式 (direct|amino-json|direct-aux|textual)，属于高级选项
      --timeout-duration duration   TimeoutDuration 表示交易在内存池中保持有效的持续时间。交易的无序 nonce 将设为创建时间加该持续时长；若交易仍在内存池且区块时间超过提交时间加 TimeoutTimestamp，交易将被拒绝。
      --timeout-height uint         已弃用：请改用 --timeout-duration。设置区块超时高度，防止交易在超出该高度后被提交
      --tip string                  小费金额，将在目标链转给费用支付者。仅与 --aux 搭配时有效，若目标链未启用 TipDecorator 则忽略
      --unordered                   启用无序交易投递；须与 --timeout-duration 一起使用
  -y, --yes                         跳过交易广播时的确认提示
```

### 继承自父命令的选项

```
      --home string         配置和数据文件夹 
      --log_format string   日志格式 (json|plain) 
      --log_level string    日志级别 (trace|debug|info|warn|error|fatal|panic|disabled 或 '*:[level],[key]:[level]') 
      --log_no_color        禁用彩色日志
      --trace               在出错时打印完整堆栈跟踪
```

### 另请参阅

* [zetacored tx crosschain](#zetacored-tx-crosschain)	- 跨链交易子命令

## zetacored tx crosschain remove-inbound-tracker

移除入站跟踪器。

```
zetacored tx crosschain remove-inbound-tracker [chain-id] [tx-hash] [flags]
```

### 选项

```
  -a, --account-number uint         签名账户的账号（仅离线模式）
      --aux                         生成辅助签名数据而不是发送交易
  -b, --broadcast-mode string       交易广播模式 (sync|async) 
      --chain-id string             网络链 ID
      --dry-run                     忽略 --gas 参数，模拟交易但不广播（启用时无法访问本地 Keybase）
      --fee-granter string          为交易提供费用的 fee granter 地址
      --fee-payer string            由该地址支付交易费用，而不是从签名者扣除
      --fees string                 交易需支付的费用，例如 10uatom
      --from string                 用于签名的私钥名称或地址
      --gas string                  每笔交易的 gas 上限；设置为 "auto" 可自动估算（注意 "auto" 可能并非精确结果，可设置有效的代币值微调，亦可替代 --fees）（默认 200000）
      --gas-adjustment float        与模拟返回的 gas 估值相乘的调整系数；若手动指定 gas 上限则忽略该参数（默认 1）
      --gas-prices string           以小数表示的 gas price，用于计算交易费用（如 0.1uatom）
      --generate-only               构建未签名交易并输出到标准输出（启用时仅在提供密钥名称的情况下访问本地 Keybase）
  -h, --help                        查看 remove-inbound-tracker 的帮助
      --keyring-backend string      选择 keyring 后端 (os|file|kwallet|pass|test|memory) 
      --keyring-dir string          客户端 keyring 目录；未指定则使用默认 home 目录
      --ledger                      使用已连接的 Ledger 设备
      --node string                 此链的 CometBFT RPC 地址 [host]:[port] 
      --note string                 为交易添加说明（旧参数 --memo）
      --offline                     离线模式（禁用所有联网功能）
  -o, --output string               输出格式 (text|json) 
  -s, --sequence uint               签名账户的 sequence（仅离线模式）
      --sign-mode string            选择签名模式 (direct|amino-json|direct-aux|textual)，属于高级选项
      --timeout-duration duration   TimeoutDuration 表示交易在内存池中保持有效的持续时间。交易的无序 nonce 将设为创建时间加该持续时长；若交易仍在内存池且区块时间超过提交时间加 TimeoutTimestamp，交易将被拒绝。
      --timeout-height uint         已弃用：请改用 --timeout-duration。设置区块超时高度，防止交易在超出该高度后被提交
      --tip string                  小费金额，将在目标链转给费用支付者。仅与 --aux 搭配时有效，若目标链未启用 TipDecorator 则忽略
      --unordered                   启用无序交易投递；须与 --timeout-duration 一起使用
  -y, --yes                         跳过交易广播时的确认提示
```

### 继承自父命令的选项

```
      --home string         配置和数据文件夹 
      --log_format string   日志格式 (json|plain) 
      --log_level string    日志级别 (trace|debug|info|warn|error|fatal|panic|disabled 或 '*:[level],[key]:[level]') 
      --log_no_color        禁用彩色日志
      --trace               在出错时打印完整堆栈跟踪
```

### 另请参阅

* [zetacored tx crosschain](#zetacored-tx-crosschain)	- 跨链交易子命令

## zetacored tx crosschain remove-outbound-tracker

移除出站跟踪器。

```
zetacored tx crosschain remove-outbound-tracker [chain] [nonce] [flags]
```

### 选项

```
  -a, --account-number uint         签名账户的账号（仅离线模式）
      --aux                         生成辅助签名数据而不是发送交易
  -b, --broadcast-mode string       交易广播模式 (sync|async) 
      --chain-id string             网络链 ID
      --dry-run                     忽略 --gas 参数，模拟交易但不广播（启用时无法访问本地 Keybase）
      --fee-granter string          为交易提供费用的 fee granter 地址
      --fee-payer string            由该地址支付交易费用，而不是从签名者扣除
      --fees string                 交易需支付的费用，例如 10uatom
      --from string                 用于签名的私钥名称或地址
      --gas string                  每笔交易的 gas 上限；设置为 "auto" 可自动估算（注意 "auto" 可能并非精确结果，可设置有效的代币值微调，亦可替代 --fees）（默认 200000）
      --gas-adjustment float        与模拟返回的 gas 估值相乘的调整系数；若手动指定 gas 上限则忽略该参数（默认 1）
      --gas-prices string           以小数表示的 gas price，用于计算交易费用（如 0.1uatom）
      --generate-only               构建未签名交易并输出到标准输出（启用时仅在提供密钥名称的情况下访问本地 Keybase）
  -h, --help                        查看 remove-outbound-tracker 的帮助
      --keyring-backend string      选择 keyring 后端 (os|file|kwallet|pass|test|memory) 
      --keyring-dir string          客户端 keyring 目录；未指定则使用默认 home 目录
      --ledger                      使用已连接的 Ledger 设备
      --node string                 此链的 CometBFT RPC 地址 [host]:[port] 
      --note string                 为交易添加说明（旧参数 --memo）
      --offline                     离线模式（禁用所有联网功能）
  -o, --output string               输出格式 (text|json) 
  -s, --sequence uint               签名账户的 sequence（仅离线模式）
      --sign-mode string            选择签名模式 (direct|amino-json|direct-aux|textual)，属于高级选项
      --timeout-duration duration   TimeoutDuration 表示交易在内存池中保持有效的持续时间。交易的无序 nonce 将设为创建时间加该持续时长；若交易仍在内存池且区块时间超过提交时间加 TimeoutTimestamp，交易将被拒绝。
      --timeout-height uint         已弃用：请改用 --timeout-duration。设置区块超时高度，防止交易在超出该高度后被提交
      --tip string                  小费金额，将在目标链转给费用支付者。仅与 --aux 搭配时有效，若目标链未启用 TipDecorator 则忽略
      --unordered                   启用无序交易投递；须与 --timeout-duration 一起使用
  -y, --yes                         跳过交易广播时的确认提示
```

### 继承自父命令的选项

```
      --home string         配置和数据文件夹 
      --log_format string   日志格式 (json|plain) 
      --log_level string    日志级别 (trace|debug|info|warn|error|fatal|panic|disabled 或 '*:[level],[key]:[level]') 
      --log_no_color        禁用彩色日志
      --trace               在出错时打印完整堆栈跟踪
```

### 另请参阅

* [zetacored tx crosschain](#zetacored-tx-crosschain)	- 跨链交易子命令

## zetacored tx crosschain update-tss-address

## zetacored tx crosschain update-tss-address

创建新的 TSSVoter。

```
zetacored tx crosschain update-tss-address [pubkey] [flags]
```

### 选项

```
  -a, --account-number uint         签名账户的账号（仅离线模式）
      --aux                         生成辅助签名数据而不是发送交易
  -b, --broadcast-mode string       交易广播模式 (sync|async) 
      --chain-id string             网络链 ID
      --dry-run                     忽略 --gas 参数，模拟交易但不广播（启用时无法访问本地 Keybase）
      --fee-granter string          为交易提供费用的 fee granter 地址
      --fee-payer string            由该地址支付交易费用，而不是从签名者扣除
      --fees string                 交易需支付的费用，例如 10uatom
      --from string                 用于签名的私钥名称或地址
      --gas string                  每笔交易的 gas 上限；设置为 "auto" 可自动估算（注意 "auto" 可能并非精确结果，可设置有效的代币值微调，亦可替代 --fees）（默认 200000）
      --gas-adjustment float        与模拟返回的 gas 估值相乘的调整系数；若手动指定 gas 上限则忽略该参数（默认 1）
      --gas-prices string           以小数表示的 gas price，用于计算交易费用（如 0.1uatom）
      --generate-only               构建未签名交易并输出到标准输出（启用时仅在提供密钥名称的情况下访问本地 Keybase）
  -h, --help                        查看 update-tss-address 的帮助
      --keyring-backend string      选择 keyring 后端 (os|file|kwallet|pass|test|memory) 
      --keyring-dir string          客户端 keyring 目录；未指定则使用默认 home 目录
      --ledger                      使用已连接的 Ledger 设备
      --node string                 此链的 CometBFT RPC 地址 [host]:[port] 
      --note string                 为交易添加说明（旧参数 --memo）
      --offline                     离线模式（禁用所有联网功能）
  -o, --output string               输出格式 (text|json) 
  -s, --sequence uint               签名账户的 sequence（仅离线模式）
      --sign-mode string            选择签名模式 (direct|amino-json|direct-aux|textual)，属于高级选项
      --timeout-duration duration   TimeoutDuration 表示交易在内存池中保持有效的持续时间。交易的无序 nonce 将设为创建时间加该持续时长；若交易仍在内存池且区块时间超过提交时间加 TimeoutTimestamp，交易将被拒绝。
      --timeout-height uint         已弃用：请改用 --timeout-duration。设置区块超时高度，防止交易在超出该高度后被提交
      --tip string                  小费金额，将在目标链转给费用支付者。仅与 --aux 搭配时有效，若目标链未启用 TipDecorator 则忽略
      --unordered                   启用无序交易投递；须与 --timeout-duration 一起使用
  -y, --yes                         跳过交易广播时的确认提示
```

### 继承自父命令的选项

```
      --home string         配置和数据文件夹 
      --log_format string   日志格式 (json|plain) 
      --log_level string    日志级别 (trace|debug|info|warn|error|fatal|panic|disabled 或 '*:[level],[key]:[level]') 
      --log_no_color        禁用彩色日志
      --trace               在出错时打印完整堆栈跟踪
```

### 另请参阅

* [zetacored tx crosschain](#zetacored-tx-crosschain)	- 跨链交易子命令

## zetacored tx crosschain vote-gas-price

广播 Gas Price 投票。

```
zetacored tx crosschain vote-gas-price [chain] [price] [priorityFee] [blockNumber] [flags]
```

### 选项

```
  -a, --account-number uint         签名账户的账号（仅离线模式）
      --aux                         生成辅助签名数据而不是发送交易
  -b, --broadcast-mode string       交易广播模式 (sync|async) 
      --chain-id string             网络链 ID
      --dry-run                     忽略 --gas 参数，模拟交易但不广播（启用时无法访问本地 Keybase）
      --fee-granter string          为交易提供费用的 fee granter 地址
      --fee-payer string            由该地址支付交易费用，而不是从签名者扣除
      --fees string                 交易需支付的费用，例如 10uatom
      --from string                 用于签名的私钥名称或地址
      --gas string                  每笔交易的 gas 上限；设置为 "auto" 可自动估算（注意 "auto" 可能并非精确结果，可设置有效的代币值微调，亦可替代 --fees）（默认 200000）
      --gas-adjustment float        与模拟返回的 gas 估值相乘的调整系数；若手动指定 gas 上限则忽略该参数（默认 1）
      --gas-prices string           以小数表示的 gas price，用于计算交易费用（如 0.1uatom）
      --generate-only               构建未签名交易并输出到标准输出（启用时仅在提供密钥名称的情况下访问本地 Keybase）
  -h, --help                        查看 vote-gas-price 的帮助
      --keyring-backend string      选择 keyring 后端 (os|file|kwallet|pass|test|memory) 
      --keyring-dir string          客户端 keyring 目录；未指定则使用默认 home 目录
      --ledger                      使用已连接的 Ledger 设备
      --node string                 此链的 CometBFT RPC 地址 [host]:[port] 
      --note string                 为交易添加说明（旧参数 --memo）
      --offline                     离线模式（禁用所有联网功能）
  -o, --output string               输出格式 (text|json) 
  -s, --sequence uint               签名账户的 sequence（仅离线模式）
      --sign-mode string            选择签名模式 (direct|amino-json|direct-aux|textual)，属于高级选项
      --timeout-duration duration   TimeoutDuration 表示交易在内存池中保持有效的持续时间。交易的无序 nonce 将设为创建时间加该持续时长；若交易仍在内存池且区块时间超过提交时间加 TimeoutTimestamp，交易将被拒绝。
      --timeout-height uint         已弃用：请改用 --timeout-duration。设置区块超时高度，防止交易在超出该高度后被提交
      --tip string                  小费金额，将在目标链转给费用支付者。仅与 --aux 搭配时有效，若目标链未启用 TipDecorator 则忽略
      --unordered                   启用无序交易投递；须与 --timeout-duration 一起使用
  -y, --yes                         跳过交易广播时的确认提示
```

### 继承自父命令的选项

```
      --home string         配置和数据文件夹 
      --log_format string   日志格式 (json|plain) 
      --log_level string    日志级别 (trace|debug|info|warn|error|fatal|panic|disabled 或 '*:[level],[key]:[level]') 
      --log_no_color        禁用彩色日志
      --trace               在出错时打印完整堆栈跟踪
```

### 另请参阅

* [zetacored tx crosschain](#zetacored-tx-crosschain)	- 跨链交易子命令

## zetacored tx crosschain vote-inbound

广播入站交易投票。

```
zetacored tx crosschain vote-inbound [sender] [senderChainID] [txOrigin] [receiver] [receiverChainID] [amount] [message] [inboundHash] [inBlockHeight] [coinType] [asset] [eventIndex] [protocolContractVersion] [isArbitraryCall] [confirmationMode] [inboundStatus] [flags]
```

### 示例

```
zetacored tx crosschain vote-inbound 0xfa233D806C8EB69548F3c4bC0ABb46FaD4e2EB26 8453 "" 0xfa233D806C8EB69548F3c4bC0ABb46FaD4e2EB26 7000 1000000 "" 0x66b59ad844404e91faa9587a3061e2f7af36f7a7a1a0afaca3a2efd811bc9463 26170791 Gas 0x0000000000000000000000000000000000000000 587 V2 FALSE SAFE SUCCESS
```

### 选项

```
  -a, --account-number uint         签名账户的账号（仅离线模式）
      --aux                         生成辅助签名数据而不是发送交易
  -b, --broadcast-mode string       交易广播模式 (sync|async) 
      --chain-id string             网络链 ID
      --dry-run                     忽略 --gas 参数，模拟交易但不广播（启用时无法访问本地 Keybase）
      --fee-granter string          为交易提供费用的 fee granter 地址
      --fee-payer string            由该地址支付交易费用，而不是从签名者扣除
      --fees string                 交易需支付的费用，例如 10uatom
      --from string                 用于签名的私钥名称或地址
      --gas string                  每笔交易的 gas 上限；设置为 "auto" 可自动估算（注意 "auto" 可能并非精确结果，可设置有效的代币值微调，亦可替代 --fees）（默认 200000）
      --gas-adjustment float        与模拟返回的 gas 估值相乘的调整系数；若手动指定 gas 上限则忽略该参数（默认 1）
      --gas-prices string           以小数表示的 gas price，用于计算交易费用（如 0.1uatom）
      --generate-only               构建未签名交易并输出到标准输出（启用时仅在提供密钥名称的情况下访问本地 Keybase）
  -h, --help                        查看 vote-inbound 的帮助
      --keyring-backend string      选择 keyring 后端 (os|file|kwallet|pass|test|memory) 
      --keyring-dir string          客户端 keyring 目录；未指定则使用默认 home 目录
      --ledger                      使用已连接的 Ledger 设备
      --node string                 此链的 CometBFT RPC 地址 [host]:[port] 
      --note string                 为交易添加说明（旧参数 --memo）
      --offline                     离线模式（禁用所有联网功能）
  -o, --output string               输出格式 (text|json) 
  -s, --sequence uint               签名账户的 sequence（仅离线模式）
      --sign-mode string            选择签名模式 (direct|amino-json|direct-aux|textual)，属于高级选项
      --timeout-duration duration   TimeoutDuration 表示交易在内存池中保持有效的持续时间。交易的无序 nonce 将设为创建时间加该持续时长；若交易仍在内存池且区块时间超过提交时间加 TimeoutTimestamp，交易将被拒绝。
      --timeout-height uint         已弃用：请改用 --timeout-duration。设置区块超时高度，防止交易在超出该高度后被提交
      --tip string                  小费金额，将在目标链转给费用支付者。仅与 --aux 搭配时有效，若目标链未启用 TipDecorator 则忽略
      --unordered                   启用无序交易投递；须与 --timeout-duration 一起使用
  -y, --yes                         跳过交易广播时的确认提示
```

### 继承自父命令的选项

```
      --home string         配置和数据文件夹 
      --log_format string   日志格式 (json|plain) 
      --log_level string    日志级别 (trace|debug|info|warn|error|fatal|panic|disabled 或 '*:[level],[key]:[level]') 
      --log_no_color        禁用彩色日志
      --trace               在出错时打印完整堆栈跟踪
```

### 另请参阅

* [zetacored tx crosschain](#zetacored-tx-crosschain)	- 跨链交易子命令

## zetacored tx crosschain vote-outbound

广播出站交易投票。

```
zetacored tx crosschain vote-outbound [sendHash] [outboundHash] [outBlockHeight] [outGasUsed] [outEffectiveGasPrice] [outEffectiveGasLimit] [valueReceived] [Status] [chain] [outTXNonce] [coinType] [confirmationMode] [flags]
```

### 示例

```
zetacored tx crosschain vote-outbound 0x12044bec3b050fb28996630e9f2e9cc8d6cf9ef0e911e73348ade46c7ba3417a 0x4f29f9199b10189c8d02b83568aba4cb23984f11adf23e7e5d2eb037ca309497 67773716 65646 30011221226 100000 297254 0 137 13812 ERC20 SAFE
```

### 选项

```
  -a, --account-number uint         签名账户的账号（仅离线模式）
      --aux                         生成辅助签名数据而不是发送交易
  -b, --broadcast-mode string       交易广播模式 (sync|async) 
      --chain-id string             网络链 ID
      --dry-run                     忽略 --gas 参数，模拟交易但不广播（启用时无法访问本地 Keybase）
      --fee-granter string          为交易提供费用的 fee granter 地址
      --fee-payer string            由该地址支付交易费用，而不是从签名者扣除
      --fees string                 交易需支付的费用，例如 10uatom
      --from string                 用于签名的私钥名称或地址
      --gas string                  每笔交易的 gas 上限；设置为 "auto" 可自动估算（注意 "auto" 可能并非精确结果，可设置有效的代币值微调，亦可替代 --fees）（默认 200000）
      --gas-adjustment float        与模拟返回的 gas 估值相乘的调整系数；若手动指定 gas 上限则忽略该参数（默认 1）
      --gas-prices string           以小数表示的 gas price，用于计算交易费用（如 0.1uatom）
      --generate-only               构建未签名交易并输出到标准输出（启用时仅在提供密钥名称的情况下访问本地 Keybase）
  -h, --help                        查看 vote-outbound 的帮助
      --keyring-backend string      选择 keyring 后端 (os|file|kwallet|pass|test|memory) 
      --keyring-dir string          客户端 keyring 目录；未指定则使用默认 home 目录
      --ledger                      使用已连接的 Ledger 设备
      --node string                 此链的 CometBFT RPC 地址 [host]:[port] 
      --note string                 为交易添加说明（旧参数 --memo）
      --offline                     离线模式（禁用所有联网功能）
  -o, --output string               输出格式 (text|json) 
  -s, --sequence uint               签名账户的 sequence（仅离线模式）
      --sign-mode string            选择签名模式 (direct|amino-json|direct-aux|textual)，属于高级选项
      --timeout-duration duration   TimeoutDuration 表示交易在内存池中保持有效的持续时间。交易的无序 nonce 将设为创建时间加该持续时长；若交易仍在内存池且区块时间超过提交时间加 TimeoutTimestamp，交易将被拒绝。
      --timeout-height uint         已弃用：请改用 --timeout-duration。设置区块超时高度，防止交易在超出该高度后被提交
      --tip string                  小费金额，将在目标链转给费用支付者。仅与 --aux 搭配时有效，若目标链未启用 TipDecorator 则忽略
      --unordered                   启用无序交易投递；须与 --timeout-duration 一起使用
  -y, --yes                         跳过交易广播时的确认提示
```

### 继承自父命令的选项

```
      --home string         配置和数据文件夹 
      --log_format string   日志格式 (json|plain) 
      --log_level string    日志级别 (trace|debug|info|warn|error|fatal|panic|disabled 或 '*:[level],[key]:[level]') 
      --log_no_color        禁用彩色日志
      --trace               在出错时打印完整堆栈跟踪
```

### 另请参阅

* [zetacored tx crosschain](#zetacored-tx-crosschain)	- 跨链交易子命令

## zetacored tx crosschain whitelist-erc20

将新的 ERC20 代币加入白名单。

```
zetacored tx crosschain whitelist-erc20 [erc20Address] [chainID] [name] [symbol] [decimals] [gasLimit] [liquidityCap] [flags]
```

### 选项

```
  -a, --account-number uint         签名账户的账号（仅离线模式）
      --aux                         生成辅助签名数据而不是发送交易
  -b, --broadcast-mode string       交易广播模式 (sync|async) 
      --chain-id string             网络链 ID
      --dry-run                     忽略 --gas 参数，模拟交易但不广播（启用时无法访问本地 Keybase）
      --fee-granter string          为交易提供费用的 fee granter 地址
      --fee-payer string            由该地址支付交易费用，而不是从签名者扣除
      --fees string                 交易需支付的费用，例如 10uatom
      --from string                 用于签名的私钥名称或地址
      --gas string                  每笔交易的 gas 上限；设置为 "auto" 可自动估算（注意 "auto" 可能并非精确结果，可设置有效的代币值微调，亦可替代 --fees）（默认 200000）
      --gas-adjustment float        与模拟返回的 gas 估值相乘的调整系数；若手动指定 gas 上限则忽略该参数（默认 1）
      --gas-prices string           以小数表示的 gas price，用于计算交易费用（如 0.1uatom）
      --generate-only               构建未签名交易并输出到标准输出（启用时仅在提供密钥名称的情况下访问本地 Keybase）
  -h, --help                        查看 whitelist-erc20 的帮助
      --keyring-backend string      选择 keyring 后端 (os|file|kwallet|pass|test|memory) 
      --keyring-dir string          客户端 keyring 目录；未指定则使用默认 home 目录
      --ledger                      使用已连接的 Ledger 设备
      --node string                 此链的 CometBFT RPC 地址 [host]:[port] 
      --note string                 为交易添加说明（旧参数 --memo）
      --offline                     离线模式（禁用所有联网功能）
  -o, --output string               输出格式 (text|json) 
  -s, --sequence uint               签名账户的 sequence（仅离线模式）
      --sign-mode string            选择签名模式 (direct|amino-json|direct-aux|textual)，属于高级选项
      --timeout-duration duration   TimeoutDuration 表示交易在内存池中保持有效的持续时间。交易的无序 nonce 将设为创建时间加该持续时长；若交易仍在内存池且区块时间超过提交时间加 TimeoutTimestamp，交易将被拒绝。
      --timeout-height uint         已弃用：请改用 --timeout-duration。设置区块超时高度，防止交易在超出该高度后被提交
      --tip string                  小费金额，将在目标链转给费用支付者。仅与 --aux 搭配时有效，若目标链未启用 TipDecorator 则忽略
      --unordered                   启用无序交易投递；须与 --timeout-duration 一起使用
  -y, --yes                         跳过交易广播时的确认提示
```

### 继承自父命令的选项

```
      --home string         配置和数据文件夹 
      --log_format string   日志格式 (json|plain) 
      --log_level string    日志级别 (trace|debug|info|warn|error|fatal|panic|disabled 或 '*:[level],[key]:[level]') 
      --log_no_color        禁用彩色日志
      --trace               在出错时打印完整堆栈跟踪
```

### 另请参阅

* [zetacored tx crosschain](#zetacored-tx-crosschain)	- 跨链交易子命令

## zetacored tx decode

解码二进制编码的交易字符串

```
zetacored tx decode [protobuf-byte-string] [flags]
```

### 选项

```
  -a, --account-number uint         签名账户的账号（仅离线模式）
      --aux                         生成辅助签名数据而不是发送交易
  -b, --broadcast-mode string       交易广播模式 (sync|async) 
      --chain-id string             网络链 ID
      --dry-run                     忽略 --gas 参数，模拟交易但不广播（启用时无法访问本地 Keybase）
      --fee-granter string          为交易提供费用的 fee granter 地址
      --fee-payer string            由该地址支付交易费用，而不是从签名者扣除
      --fees string                 交易需支付的费用，例如 10uatom
      --from string                 用于签名的私钥名称或地址
      --gas string                  每笔交易的 gas 上限；设置为 "auto" 可自动估算（注意 "auto" 可能并非精确结果，可设置有效的代币值微调，亦可替代 --fees）（默认 200000）
      --gas-adjustment float        与模拟返回的 gas 估值相乘的调整系数；若手动指定 gas 上限则忽略该参数（默认 1）
      --gas-prices string           以小数表示的 gas price，用于计算交易费用（如 0.1uatom）
      --generate-only               构建未签名交易并输出到标准输出（启用时仅在提供密钥名称的情况下访问本地 Keybase）
  -h, --help                        查看 decode 的帮助
  -x, --hex                         将输入视为十六进制而非 base64
      --keyring-backend string      选择 keyring 后端 (os|file|kwallet|pass|test|memory) 
      --keyring-dir string          客户端 keyring 目录；未指定则使用默认 home 目录
      --ledger                      使用已连接的 Ledger 设备
      --node string                 此链的 CometBFT RPC 地址 [host]:[port] 
      --note string                 为交易添加说明（旧参数 --memo）
      --offline                     离线模式（禁用所有联网功能）
  -s, --sequence uint               签名账户的 sequence（仅离线模式）
      --sign-mode string            选择签名模式 (direct|amino-json|direct-aux|textual)，属于高级选项
      --timeout-duration duration   TimeoutDuration 表示交易在内存池中保持有效的持续时间。交易的无序 nonce 将设为创建时间加该持续时长；若交易仍在内存池且区块时间超过提交时间加 TimeoutTimestamp，交易将被拒绝。
      --timeout-height uint         已弃用：请改用 --timeout-duration。设置区块超时高度，防止交易在超出该高度后被提交
      --tip string                  小费金额，将在目标链转给费用支付者。仅与 --aux 搭配时有效，若目标链未启用 TipDecorator 则忽略
      --unordered                   启用无序交易投递；须与 --timeout-duration 一起使用
  -y, --yes                         跳过交易广播时的确认提示
```

### 继承自父命令的选项

```
      --home string         配置和数据文件夹 
      --log_format string   日志格式 (json|plain) 
      --log_level string    日志级别 (trace|debug|info|warn|error|fatal|panic|disabled 或 '*:[level],[key]:[level]') 
      --log_no_color        禁用彩色日志
      --trace               在出错时打印完整堆栈跟踪
```

### 另请参阅

* [zetacored tx](#zetacored-tx)	- 交易子命令集合

## zetacored tx distribution

分发模块的交易子命令

```
zetacored tx distribution [flags]
```

### 选项

```
  -h, --help   查看 distribution 的帮助
```

### 继承自父命令的选项

```
      --chain-id string     网络链 ID
      --home string         配置和数据文件夹 
      --log_format string   日志格式 (json|plain) 
      --log_level string    日志级别 (trace|debug|info|warn|error|fatal|panic|disabled 或 '*:[level],[key]:[level]') 
      --log_no_color        禁用彩色日志
      --trace               在出错时打印完整堆栈跟踪
```

### 另请参阅

* [zetacored tx](#zetacored-tx)	- 交易子命令集合
* [zetacored tx distribution community-pool-spend-proposal](#zetacored-tx-distribution-community-pool-spend-proposal)	- 提交提案以动用社区资金池
* [zetacored tx distribution fund-community-pool](#zetacored-tx-distribution-fund-community-pool)	- 按指定金额为社区资金池注资
* [zetacored tx distribution fund-validator-rewards-pool](#zetacored-tx-distribution-fund-validator-rewards-pool)	- 按指定金额为验证者奖励池注资
* [zetacored tx distribution set-withdraw-addr](#zetacored-tx-distribution-set-withdraw-addr)	- 更改与某地址关联奖励的默认提取地址
* [zetacored tx distribution update-params-proposal](#zetacored-tx-distribution-update-params-proposal)	- 提交提案以更新分发模块参数（需一次性提供全部参数）
* [zetacored tx distribution withdraw-all-rewards](#zetacored-tx-distribution-withdraw-all-rewards)	- 为委托人提取所有委托奖励
* [zetacored tx distribution withdraw-rewards](#zetacored-tx-distribution-withdraw-rewards)	- 提取指定委托地址的奖励，并可选择提取验证者佣金
* [zetacored tx distribution withdraw-validator-commission](#zetacored-tx-distribution-withdraw-validator-commission)	- 提取验证者地址的佣金（必须是验证者运营方）

## zetacored tx distribution community-pool-spend-proposal

提交提案以动用社区资金池。

```
zetacored tx distribution community-pool-spend-proposal [recipient] [amount] [flags]
```

### 示例

```
$ zetacored tx distribution community-pool-spend-proposal [recipient] 100uatom
```

### 选项

```
  -a, --account-number uint         签名账户的账号（仅离线模式）
      --aux                         生成辅助签名数据而不是发送交易
  -b, --broadcast-mode string       交易广播模式 (sync|async) 
      --chain-id string             网络链 ID
      --dry-run                     忽略 --gas 参数，模拟交易但不广播（启用时无法访问本地 Keybase）
      --fee-granter string          为交易提供费用的 fee granter 地址
      --fee-payer string            由该地址支付交易费用，而不是从签名者扣除
      --fees string                 交易需支付的费用，例如 10uatom
      --from string                 用于签名的私钥名称或地址
      --gas string                  每笔交易的 gas 上限；设置为 "auto" 可自动估算（注意 "auto" 可能并非精确结果，可设置有效的代币值微调，亦可替代 --fees）（默认 200000）
      --gas-adjustment float        与模拟返回的 gas 估值相乘的调整系数；若手动指定 gas 上限则忽略该参数（默认 1）
      --gas-prices string           以小数表示的 gas price，用于计算交易费用（如 0.1uatom）
      --generate-only               构建未签名交易并输出到标准输出（启用时仅在提供密钥名称的情况下访问本地 Keybase）
  -h, --help                        查看 community-pool-spend-proposal 的帮助
      --keyring-backend string      选择 keyring 后端 (os|file|kwallet|pass|test|memory) 
      --keyring-dir string          客户端 keyring 目录；未指定则使用默认 home 目录
      --ledger                      使用已连接的 Ledger 设备
      --node string                 此链的 CometBFT RPC 地址 [host]:[port] 
      --note string                 为交易添加说明（旧参数 --memo）
      --offline                     离线模式（禁用所有联网功能）
  -o, --output string               输出格式 (text|json) 
  -s, --sequence uint               签名账户的 sequence（仅离线模式）
      --sign-mode string            选择签名模式 (direct|amino-json|direct-aux|textual)，属于高级选项
      --timeout-duration duration   TimeoutDuration 表示交易在内存池中保持有效的持续时间。交易的无序 nonce 将设为创建时间加该持续时长；若交易仍在内存池且区块时间超过提交时间加 TimeoutTimestamp，交易将被拒绝。
      --timeout-height uint         已弃用：请改用 --timeout-duration。设置区块超时高度，防止交易在超出该高度后被提交
      --tip string                  小费金额，将在目标链转给费用支付者。仅与 --aux 搭配时有效，若目标链未启用 TipDecorator 则忽略
      --unordered                   启用无序交易投递；须与 --timeout-duration 一起使用
  -y, --yes                         跳过交易广播时的确认提示
```

### 继承自父命令的选项

```
      --home string         配置和数据文件夹 
      --log_format string   日志格式 (json|plain) 
      --log_level string    日志级别 (trace|debug|info|warn|error|fatal|panic|disabled 或 '*:[level],[key]:[level]') 
      --log_no_color        禁用彩色日志
      --trace               在出错时打印完整堆栈跟踪
```

### 另请参阅

* [zetacored tx distribution](#zetacored-tx-distribution)	- 分发模块的交易子命令

## zetacored tx distribution fund-community-pool

按指定金额为社区资金池注资。

### 概要

按指定金额为社区资金池注资。

示例：
```
$ zetacored tx distribution fund-community-pool 100uatom --from mykey
```

```
zetacored tx distribution fund-community-pool [amount] [flags]
```

### 选项

```
  -a, --account-number uint         签名账户的账号（仅离线模式）
      --aux                         生成辅助签名数据而不是发送交易
  -b, --broadcast-mode string       交易广播模式 (sync|async) 
      --chain-id string             网络链 ID
      --dry-run                     忽略 --gas 参数，模拟交易但不广播（启用时无法访问本地 Keybase）
      --fee-granter string          为交易提供费用的 fee granter 地址
      --fee-payer string            由该地址支付交易费用，而不是从签名者扣除
      --fees string                 交易需支付的费用，例如 10uatom
      --from string                 用于签名的私钥名称或地址
      --gas string                  每笔交易的 gas 上限；设置为 "auto" 可自动估算（注意 "auto" 可能并非精确结果，可设置有效的代币值微调，亦可替代 --fees）（默认 200000）
      --gas-adjustment float        与模拟返回的 gas 估值相乘的调整系数；若手动指定 gas 上限则忽略该参数（默认 1）
      --gas-prices string           以小数表示的 gas price，用于计算交易费用（如 0.1uatom）
      --generate-only               构建未签名交易并输出到标准输出（启用时仅在提供密钥名称的情况下访问本地 Keybase）
  -h, --help                        查看 fund-community-pool 的帮助
      --keyring-backend string      选择 keyring 后端 (os|file|kwallet|pass|test|memory) 
      --keyring-dir string          客户端 keyring 目录；未指定则使用默认 home 目录
      --ledger                      使用已连接的 Ledger 设备
      --node string                 此链的 CometBFT RPC 地址 [host]:[port] 
      --note string                 为交易添加说明（旧参数 --memo）
      --offline                     离线模式（禁用所有联网功能）
  -o, --output string               输出格式 (text|json) 
  -s, --sequence uint               签名账户的 sequence（仅离线模式）
      --sign-mode string            选择签名模式 (direct|amino-json|direct-aux|textual)，属于高级选项
      --timeout-duration duration   TimeoutDuration 表示交易在内存池中保持有效的持续时间。交易的无序 nonce 将设为创建时间加该持续时长；若交易仍在内存池且区块时间超过提交时间加 TimeoutTimestamp，交易将被拒绝。
      --timeout-height uint         已弃用：请改用 --timeout-duration。设置区块超时高度，防止交易在超出该高度后被提交
      --tip string                  小费金额，将在目标链转给费用支付者。仅与 --aux 搭配时有效，若目标链未启用 TipDecorator 则忽略
      --unordered                   启用无序交易投递；须与 --timeout-duration 一起使用
  -y, --yes                         跳过交易广播时的确认提示
```

### 继承自父命令的选项

```
      --home string         配置和数据文件夹 
      --log_format string   日志格式 (json|plain) 
      --log_level string    日志级别 (trace|debug|info|warn|error|fatal|panic|disabled 或 '*:[level],[key]:[level]') 
      --log_no_color        禁用彩色日志
      --trace               在出错时打印完整堆栈跟踪
```

### 另请参阅

* [zetacored tx distribution](#zetacored-tx-distribution)	- 分发模块的交易子命令


## zetacored tx distribution fund-validator-rewards-pool

按指定金额为验证者奖励池注资。

```
zetacored tx distribution fund-validator-rewards-pool [val_addr] [amount] [flags]
```

### 示例

```
zetacored tx distribution fund-validator-rewards-pool cosmosvaloper1x20lytyf6zkcrv5edpkfkn8sz578qg5sqfyqnp 100uatom --from mykey
```

### 选项

```
  -a, --account-number uint         签名账户的账号（仅离线模式）
      --aux                         生成辅助签名数据而不是发送交易
  -b, --broadcast-mode string       交易广播模式 (sync|async) 
      --chain-id string             网络链 ID
      --dry-run                     忽略 --gas 参数，模拟交易但不广播（启用时无法访问本地 Keybase）
      --fee-granter string          为交易提供费用的 fee granter 地址
      --fee-payer string            由该地址支付交易费用，而不是从签名者扣除
      --fees string                 交易需支付的费用，例如 10uatom
      --from string                 用于签名的私钥名称或地址
      --gas string                  每笔交易的 gas 上限；设置为 "auto" 可自动估算（注意 "auto" 可能并非精确结果，可设置有效的代币值微调，亦可替代 --fees）（默认 200000）
      --gas-adjustment float        与模拟返回的 gas 估值相乘的调整系数；若手动指定 gas 上限则忽略该参数（默认 1）
      --gas-prices string           以小数表示的 gas price，用于计算交易费用（如 0.1uatom）
      --generate-only               构建未签名交易并输出到标准输出（启用时仅在提供密钥名称的情况下访问本地 Keybase）
  -h, --help                        查看 fund-validator-rewards-pool 的帮助
      --keyring-backend string      选择 keyring 后端 (os|file|kwallet|pass|test|memory) 
      --keyring-dir string          客户端 keyring 目录；未指定则使用默认 home 目录
      --ledger                      使用已连接的 Ledger 设备
      --node string                 此链的 CometBFT RPC 地址 [host]:[port] 
      --note string                 为交易添加说明（旧参数 --memo）
      --offline                     离线模式（禁用所有联网功能）
  -o, --output string               输出格式 (text|json) 
  -s, --sequence uint               签名账户的 sequence（仅离线模式）
      --sign-mode string            选择签名模式 (direct|amino-json|direct-aux|textual)，属于高级选项
      --timeout-duration duration   TimeoutDuration 表示交易在内存池中保持有效的持续时间。交易的无序 nonce 将设为创建时间加该持续时长；若交易仍在内存池且区块时间超过提交时间加 TimeoutTimestamp，交易将被拒绝。
      --timeout-height uint         已弃用：请改用 --timeout-duration。设置区块超时高度，防止交易在超出该高度后被提交
      --tip string                  小费金额，将在目标链转给费用支付者。仅与 --aux 搭配时有效，若目标链未启用 TipDecorator 则忽略
      --unordered                   启用无序交易投递；须与 --timeout-duration 一起使用
  -y, --yes                         跳过交易广播时的确认提示
```

### 继承自父命令的选项

```
      --home string         配置和数据文件夹 
      --log_format string   日志格式 (json|plain) 
      --log_level string    日志级别 (trace|debug|info|warn|error|fatal|panic|disabled 或 '*:[level],[key]:[level]') 
      --log_no_color        禁用彩色日志
      --trace               在出错时打印完整堆栈跟踪
```

### 另请参阅

* [zetacored tx distribution](#zetacored-tx-distribution)	- 分发模块的交易子命令


## zetacored tx distribution set-withdraw-addr

更改与某地址关联奖励的默认提取地址。

### 概要

为委托地址关联的奖励设置新的提取地址。

示例：
```
$ zetacored tx distribution set-withdraw-addr zeta1gghjut3ccd8ay0zduzj64hwre2fxs9ld75ru9p --from mykey
```

```
zetacored tx distribution set-withdraw-addr [withdraw-addr] [flags]
```

### 选项

```
  -a, --account-number uint         签名账户的账号（仅离线模式）
      --aux                         生成辅助签名数据而不是发送交易
  -b, --broadcast-mode string       交易广播模式 (sync|async) 
      --chain-id string             网络链 ID
      --dry-run                     忽略 --gas 参数，模拟交易但不广播（启用时无法访问本地 Keybase）
      --fee-granter string          为交易提供费用的 fee granter 地址
      --fee-payer string            由该地址支付交易费用，而不是从签名者扣除
      --fees string                 交易需支付的费用，例如 10uatom
      --from string                 用于签名的私钥名称或地址
      --gas string                  每笔交易的 gas 上限；设置为 "auto" 可自动估算（注意 "auto" 可能并非精确结果，可设置有效的代币值微调，亦可替代 --fees）（默认 200000）
      --gas-adjustment float        与模拟返回的 gas 估值相乘的调整系数；若手动指定 gas 上限则忽略该参数（默认 1）
      --gas-prices string           以小数表示的 gas price，用于计算交易费用（如 0.1uatom）
      --generate-only               构建未签名交易并输出到标准输出（启用时仅在提供密钥名称的情况下访问本地 Keybase）
  -h, --help                        查看 set-withdraw-addr 的帮助
      --keyring-backend string      选择 keyring 后端 (os|file|kwallet|pass|test|memory) 
      --keyring-dir string          客户端 keyring 目录；未指定则使用默认 home 目录
      --ledger                      使用已连接的 Ledger 设备
      --node string                 此链的 CometBFT RPC 地址 [host]:[port] 
      --note string                 为交易添加说明（旧参数 --memo）
      --offline                     离线模式（禁用所有联网功能）
  -o, --output string               输出格式 (text|json) 
  -s, --sequence uint               签名账户的 sequence（仅离线模式）
      --sign-mode string            选择签名模式 (direct|amino-json|direct-aux|textual)，属于高级选项
      --timeout-duration duration   TimeoutDuration 表示交易在内存池中保持有效的持续时间。交易的无序 nonce 将设为创建时间加该持续时长；若交易仍在内存池且区块时间超过提交时间加 TimeoutTimestamp，交易将被拒绝。
      --timeout-height uint         已弃用：请改用 --timeout-duration。设置区块超时高度，防止交易在超出该高度后被提交
      --tip string                  小费金额，将在目标链转给费用支付者。仅与 --aux 搭配时有效，若目标链未启用 TipDecorator 则忽略
      --unordered                   启用无序交易投递；须与 --timeout-duration 一起使用
  -y, --yes                         跳过交易广播时的确认提示
```

### 继承自父命令的选项

```
      --home string         配置和数据文件夹 
      --log_format string   日志格式 (json|plain) 
      --log_level string    日志级别 (trace|debug|info|warn|error|fatal|panic|disabled 或 '*:[level],[key]:[level]') 
      --log_no_color        禁用彩色日志
      --trace               在出错时打印完整堆栈跟踪
```

### 另请参阅

* [zetacored tx distribution](#zetacored-tx-distribution)	- 分发模块的交易子命令


## zetacored tx distribution update-params-proposal

提交提案以更新分发模块参数（需一次性提供全部参数）。

```
zetacored tx distribution update-params-proposal [params] [flags]
```

### 示例

```
zetacored tx distribution update-params-proposal '{ "community_tax": "20000", "base_proposer_reward": "0", "bonus_proposer_reward": "0", "withdraw_addr_enabled": true }'
```

### 选项

```
  -a, --account-number uint         签名账户的账号（仅离线模式）
      --aux                         生成辅助签名数据而不是发送交易
  -b, --broadcast-mode string       交易广播模式 (sync|async) 
      --chain-id string             网络链 ID
      --dry-run                     忽略 --gas 参数，模拟交易但不广播（启用时无法访问本地 Keybase）
      --fee-granter string          为交易提供费用的 fee granter 地址
      --fee-payer string            由该地址支付交易费用，而不是从签名者扣除
      --fees string                 交易需支付的费用，例如 10uatom
      --from string                 用于签名的私钥名称或地址
      --gas string                  每笔交易的 gas 上限；设置为 "auto" 可自动估算（注意 "auto" 可能并非精确结果，可设置有效的代币值微调，亦可替代 --fees）（默认 200000）
      --gas-adjustment float        与模拟返回的 gas 估值相乘的调整系数；若手动指定 gas 上限则忽略该参数（默认 1）
      --gas-prices string           以小数表示的 gas price，用于计算交易费用（如 0.1uatom）
      --generate-only               构建未签名交易并输出到标准输出（启用时仅在提供密钥名称的情况下访问本地 Keybase）
  -h, --help                        查看 update-params-proposal 的帮助
      --keyring-backend string      选择 keyring 后端 (os|file|kwallet|pass|test|memory) 
      --keyring-dir string          客户端 keyring 目录；未指定则使用默认 home 目录
      --ledger                      使用已连接的 Ledger 设备
      --node string                 此链的 CometBFT RPC 地址 [host]:[port] 
      --note string                 为交易添加说明（旧参数 --memo）
      --offline                     离线模式（禁用所有联网功能）
  -o, --output string               输出格式 (text|json) 
  -s, --sequence uint               签名账户的 sequence（仅离线模式）
      --sign-mode string            选择签名模式 (direct|amino-json|direct-aux|textual)，属于高级选项
      --timeout-duration duration   TimeoutDuration 表示交易在内存池中保持有效的持续时间。交易的无序 nonce 将设为创建时间加该持续时长；若交易仍在内存池且区块时间超过提交时间加 TimeoutTimestamp，交易将被拒绝。
      --timeout-height uint         已弃用：请改用 --timeout-duration。设置区块超时高度，防止交易在超出该高度后被提交
      --tip string                  小费金额，将在目标链转给费用支付者。仅与 --aux 搭配时有效，若目标链未启用 TipDecorator 则忽略
      --unordered                   启用无序交易投递；须与 --timeout-duration 一起使用
  -y, --yes                         跳过交易广播时的确认提示
```

### 继承自父命令的选项

```
      --home string         配置和数据文件夹 
      --log_format string   日志格式 (json|plain) 
      --log_level string    日志级别 (trace|debug|info|warn|error|fatal|panic|disabled 或 '*:[level],[key]:[level]') 
      --log_no_color        禁用彩色日志
      --trace               在出错时打印完整堆栈跟踪
```

### 另请参阅

* [zetacored tx distribution](#zetacored-tx-distribution)	- 分发模块的交易子命令


## zetacored tx distribution withdraw-all-rewards

为某委托人提取所有委托奖励。

### 概要

为单个委托人提取所有奖励。若使用 `--broadcast-mode=sync` 或 `--broadcast-mode=async`，`--max-msgs` 会自动设为 0。

示例：
```
$ zetacored tx distribution withdraw-all-rewards --from mykey
```

```
zetacored tx distribution withdraw-all-rewards [flags]
```

### 选项

```
  -a, --account-number uint         签名账户的账号（仅离线模式）
      --aux                         生成辅助签名数据而不是发送交易
  -b, --broadcast-mode string       交易广播模式 (sync|async) 
      --chain-id string             网络链 ID
      --dry-run                     忽略 --gas 参数，模拟交易但不广播（启用时无法访问本地 Keybase）
      --fee-granter string          为交易提供费用的 fee granter 地址
      --fee-payer string            由该地址支付交易费用，而不是从签名者扣除
      --fees string                 交易需支付的费用，例如 10uatom
      --from string                 用于签名的私钥名称或地址
      --gas string                  每笔交易的 gas 上限；设置为 "auto" 可自动估算（注意 "auto" 可能并非精确结果，可设置有效的代币值微调，亦可替代 --fees）（默认 200000）
      --gas-adjustment float        与模拟返回的 gas 估值相乘的调整系数；若手动指定 gas 上限则忽略该参数（默认 1）
      --gas-prices string           以小数表示的 gas price，用于计算交易费用（如 0.1uatom）
      --generate-only               构建未签名交易并输出到标准输出（启用时仅在提供密钥名称的情况下访问本地 Keybase）
  -h, --help                        查看 withdraw-all-rewards 的帮助
      --keyring-backend string      选择 keyring 后端 (os|file|kwallet|pass|test|memory) 
      --keyring-dir string          客户端 keyring 目录；未指定则使用默认 home 目录
      --ledger                      使用已连接的 Ledger 设备
      --max-msgs int                限制每笔交易的消息数量（0 表示不限）
      --node string                 此链的 CometBFT RPC 地址 [host]:[port] 
      --note string                 为交易添加说明（旧参数 --memo）
      --offline                     离线模式（禁用所有联网功能）
  -o, --output string               输出格式 (text|json) 
  -s, --sequence uint               签名账户的 sequence（仅离线模式）
      --sign-mode string            选择签名模式 (direct|amino-json|direct-aux|textual)，属于高级选项
      --timeout-duration duration   TimeoutDuration 表示交易在内存池中保持有效的持续时间。交易的无序 nonce 将设为创建时间加该持续时长；若交易仍在内存池且区块时间超过提交时间加 TimeoutTimestamp，交易将被拒绝。
      --timeout-height uint         已弃用：请改用 --timeout-duration。设置区块超时高度，防止交易在超出该高度后被提交
      --tip string                  小费金额，将在目标链转给费用支付者。仅与 --aux 搭配时有效，若目标链未启用 TipDecorator 则忽略
      --unordered                   启用无序交易投递；须与 --timeout-duration 一起使用
  -y, --yes                         跳过交易广播时的确认提示
```

### 继承自父命令的选项

```
      --home string         配置和数据文件夹 
      --log_format string   日志格式 (json|plain) 
      --log_level string    日志级别 (trace|debug|info|warn|error|fatal|panic|disabled 或 '*:[level],[key]:[level]') 
      --log_no_color        禁用彩色日志
      --trace               在出错时打印完整堆栈跟踪
```

### 另请参阅

* [zetacored tx distribution](#zetacored-tx-distribution)	- 分发模块的交易子命令


## zetacored tx distribution withdraw-rewards

提取指定委托地址的奖励，可选提取验证者佣金（若该委托地址为验证者运营者）。

### 概要

从给定的委托地址提取奖励；若委托地址是验证者运营方，可额外提取验证者佣金。

示例：
```
$ zetacored tx distribution withdraw-rewards zetavaloper1gghjut3ccd8ay0zduzj64hwre2fxs9ldmqhffj --from mykey
$ zetacored tx distribution withdraw-rewards zetavaloper1gghjut3ccd8ay0zduzj64hwre2fxs9ldmqhffj --from mykey --commission
```

```
zetacored tx distribution withdraw-rewards [validator-addr] [flags]
```

### 选项

```
  -a, --account-number uint         签名账户的账号（仅离线模式）
      --aux                         生成辅助签名数据而不是发送交易
  -b, --broadcast-mode string       交易广播模式 (sync|async) 
      --chain-id string             网络链 ID
      --commission                  除奖励外一并提取验证者佣金
      --dry-run                     忽略 --gas 参数，模拟交易但不广播（启用时无法访问本地 Keybase）
      --fee-granter string          为交易提供费用的 fee granter 地址
      --fee-payer string            由该地址支付交易费用，而不是从签名者扣除
      --fees string                 交易需支付的费用，例如 10uatom
      --from string                 用于签名的私钥名称或地址
      --gas string                  每笔交易的 gas 上限；设置为 "auto" 可自动估算（注意 "auto" 可能并非精确结果，可设置有效的代币值微调，亦可替代 --fees）（默认 200000）
      --gas-adjustment float        与模拟返回的 gas 估值相乘的调整系数；若手动指定 gas 上限则忽略该参数（默认 1）
      --gas-prices string           以小数表示的 gas price，用于计算交易费用（如 0.1uatom）
      --generate-only               构建未签名交易并输出到标准输出（启用时仅在提供密钥名称的情况下访问本地 Keybase）
  -h, --help                        查看 withdraw-rewards 的帮助
      --keyring-backend string      选择 keyring 后端 (os|file|kwallet|pass|test|memory) 
      --keyring-dir string          客户端 keyring 目录；未指定则使用默认 home 目录
      --ledger                      使用已连接的 Ledger 设备
      --node string                 此链的 CometBFT RPC 地址 [host]:[port] 
      --note string                 为交易添加说明（旧参数 --memo）
      --offline                     离线模式（禁用所有联网功能）
  -o, --output string               输出格式 (text|json) 
  -s, --sequence uint               签名账户的 sequence（仅离线模式）
      --sign-mode string            选择签名模式 (direct|amino-json|direct-aux|textual)，属于高级选项
      --timeout-duration duration   TimeoutDuration 表示交易在内存池中保持有效的持续时间。交易的无序 nonce 将设为创建时间加该持续时长；若交易仍在内存池且区块时间超过提交时间加 TimeoutTimestamp，交易将被拒绝。
      --timeout-height uint         已弃用：请改用 --timeout-duration。设置区块超时高度，防止交易在超出该高度后被提交
      --tip string                  小费金额，将在目标链转给费用支付者。仅与 --aux 搭配时有效，若目标链未启用 TipDecorator 则忽略
      --unordered                   启用无序交易投递；须与 --timeout-duration 一起使用
  -y, --yes                         跳过交易广播时的确认提示
```

### 继承自父命令的选项

```
      --home string         配置和数据文件夹 
      --log_format string   日志格式 (json|plain) 
      --log_level string    日志级别 (trace|debug|info|warn|error|fatal|panic|disabled 或 '*:[level],[key]:[level]') 
      --log_no_color        禁用彩色日志
      --trace               在出错时打印完整堆栈跟踪
```

### 另请参阅

* [zetacored tx distribution](#zetacored-tx-distribution)	- 分发模块的交易子命令


## zetacored tx distribution withdraw-validator-commission

提取验证者地址的佣金（必须是验证者运营者）。

```
zetacored tx distribution withdraw-validator-commission [validator-addr] [flags]
```

### 选项

```
  -a, --account-number uint         签名账户的账号（仅离线模式）
      --aux                         生成辅助签名数据而不是发送交易
  -b, --broadcast-mode string       交易广播模式 (sync|async) 
      --chain-id string             网络链 ID
      --dry-run                     忽略 --gas 参数，模拟交易但不广播（启用时无法访问本地 Keybase）
      --fee-granter string          为交易提供费用的 fee granter 地址
      --fee-payer string            由该地址支付交易费用，而不是从签名者扣除
      --fees string                 交易需支付的费用，例如 10uatom
      --from string                 用于签名的私钥名称或地址
      --gas string                  每笔交易的 gas 上限；设置为 "auto" 可自动估算（注意 "auto" 可能并非精确结果，可设置有效的代币值微调，亦可替代 --fees）（默认 200000）
      --gas-adjustment float        与模拟返回的 gas 估值相乘的调整系数；若手动指定 gas 上限则忽略该参数（默认 1）
      --gas-prices string           以小数表示的 gas price，用于计算交易费用（如 0.1uatom）
      --generate-only               构建未签名交易并输出到标准输出（启用时仅在提供密钥名称的情况下访问本地 Keybase）
  -h, --help                        查看 withdraw-validator-commission 的帮助
      --keyring-backend string      选择 keyring 后端 (os|file|kwallet|pass|test|memory) 
      --keyring-dir string          客户端 keyring 目录；未指定则使用默认 home 目录
      --ledger                      使用已连接的 Ledger 设备
      --node string                 此链的 CometBFT RPC 地址 [host]:[port] 
      --note string                 为交易添加说明（旧参数 --memo）
      --offline                     离线模式（禁用所有联网功能）
  -o, --output string               输出格式 (text|json) 
  -s, --sequence uint               签名账户的 sequence（仅离线模式）
      --sign-mode string            选择签名模式 (direct|amino-json|direct-aux|textual)，属于高级选项
      --timeout-duration duration   TimeoutDuration 表示交易在内存池中保持有效的持续时间。交易的无序 nonce 将设为创建时间加该持续时长；若交易仍在内存池且区块时间超过提交时间加 TimeoutTimestamp，交易将被拒绝。
      --timeout-height uint         已弃用：请改用 --timeout-duration。设置区块超时高度，防止交易在超出该高度后被提交
      --tip string                  小费金额，将在目标链转给费用支付者。仅与 --aux 搭配时有效，若目标链未启用 TipDecorator 则忽略
      --unordered                   启用无序交易投递；须与 --timeout-duration 一起使用
  -y, --yes                         跳过交易广播时的确认提示
```

### 继承自父命令的选项

```
      --home string         配置和数据文件夹 
      --log_format string   日志格式 (json|plain) 
      --log_level string    日志级别 (trace|debug|info|warn|error|fatal|panic|disabled 或 '*:[level],[key]:[level]') 
      --log_no_color        禁用彩色日志
      --trace               在出错时打印完整堆栈跟踪
```

### 另请参阅

* [zetacored tx distribution](#zetacored-tx-distribution)	- 分发模块的交易子命令


## zetacored tx emissions

发行模块的交易子命令

```
zetacored tx emissions [flags]
```

### 选项

```
  -h, --help   查看 emissions 的帮助
```

### 继承自父命令的选项

```
      --chain-id string     网络链 ID
      --home string         配置和数据文件夹 
      --log_format string   日志格式 (json|plain) 
      --log_level string    日志级别 (trace|debug|info|warn|error|fatal|panic|disabled 或 '*:[level],[key]:[level]') 
      --log_no_color        禁用彩色日志
      --trace               在出错时打印完整堆栈跟踪
```

### 另请参阅

* [zetacored tx](#zetacored-tx)	- 交易子命令集合
* [zetacored tx emissions withdraw-emission](#zetacored-tx-emissions-withdraw-emission)	- 创建新的 withdrawEmission

## zetacored tx emissions withdraw-emission

创建新的 withdrawEmission。

```
zetacored tx emissions withdraw-emission [amount] [flags]
```

### 选项

```
  -a, --account-number uint         签名账户的账号（仅离线模式）
      --aux                         生成辅助签名数据而不是发送交易
  -b, --broadcast-mode string       交易广播模式 (sync|async) 
      --chain-id string             网络链 ID
      --dry-run                     忽略 --gas 参数，模拟交易但不广播（启用时无法访问本地 Keybase）
      --fee-granter string          为交易提供费用的 fee granter 地址
      --fee-payer string            由该地址支付交易费用，而不是从签名者扣除
      --fees string                 交易需支付的费用，例如 10uatom
      --from string                 用于签名的私钥名称或地址
      --gas string                  每笔交易的 gas 上限；设置为 "auto" 可自动估算（注意 "auto" 可能并非精确结果，可设置有效的代币值微调，亦可替代 --fees）（默认 200000）
      --gas-adjustment float        与模拟返回的 gas 估值相乘的调整系数；若手动指定 gas 上限则忽略该参数（默认 1）
      --gas-prices string           以小数表示的 gas price，用于计算交易费用（如 0.1uatom）
      --generate-only               构建未签名交易并输出到标准输出（启用时仅在提供密钥名称的情况下访问本地 Keybase）
  -h, --help                        查看 withdraw-emission 的帮助
      --keyring-backend string      选择 keyring 后端 (os|file|kwallet|pass|test|memory) 
      --keyring-dir string          客户端 keyring 目录；未指定则使用默认 home 目录
      --ledger                      使用已连接的 Ledger 设备
      --node string                 此链的 CometBFT RPC 地址 [host]:[port] 
      --note string                 为交易添加说明（旧参数 --memo）
      --offline                     离线模式（禁用所有联网功能）
  -o, --output string               输出格式 (text|json) 
  -s, --sequence uint               签名账户的 sequence（仅离线模式）
      --sign-mode string            选择签名模式 (direct|amino-json|direct-aux|textual)，属于高级选项
      --timeout-duration duration   TimeoutDuration 表示交易在内存池中保持有效的持续时间。交易的无序 nonce 将设为创建时间加该持续时长；若交易仍在内存池且区块时间超过提交时间加 TimeoutTimestamp，交易将被拒绝。
      --timeout-height uint         已弃用：请改用 --timeout-duration。设置区块超时高度，防止交易在超出该高度后被提交
      --tip string                  小费金额，将在目标链转给费用支付者。仅与 --aux 搭配时有效，若目标链未启用 TipDecorator 则忽略
      --unordered                   启用无序交易投递；须与 --timeout-duration 一起使用
  -y, --yes                         跳过交易广播时的确认提示
```

### 继承自父命令的选项

```
      --home string         配置和数据文件夹 
      --log_format string   日志格式 (json|plain) 
      --log_level string    日志级别 (trace|debug|info|warn|error|fatal|panic|disabled 或 '*:[level],[key]:[level]') 
      --log_no_color        禁用彩色日志
      --trace               在出错时打印完整堆栈跟踪
```

### 另请参阅

* [zetacored tx emissions](#zetacored-tx-emissions)	- 发行模块的交易子命令

## zetacored tx encode

广播前对离线生成的交易进行编码。

### 概要

对使用 `--generate-only` 生成或通过 `sign` 命令签名的交易进行编码。从 [file] 读取交易，将其序列化为 Protobuf 线协议后输出 base64。如果输入文件名使用连字符 (-)，则改为从标准输入读取。

```
zetacored tx encode [file] [flags]
```

### 选项

```
  -a, --account-number uint         签名账户的账号（仅离线模式）
      --aux                         生成辅助签名数据而不是发送交易
  -b, --broadcast-mode string       交易广播模式 (sync|async) 
      --chain-id string             网络链 ID
      --dry-run                     忽略 --gas 参数，模拟交易但不广播（启用时无法访问本地 Keybase）
      --fee-granter string          为交易提供费用的 fee granter 地址
      --fee-payer string            由该地址支付交易费用，而不是从签名者扣除
      --fees string                 交易需支付的费用，例如 10uatom
      --from string                 用于签名的私钥名称或地址
      --gas string                  每笔交易的 gas 上限；设置为 "auto" 可自动估算（注意 "auto" 可能并非精确结果，可设置有效的代币值微调，亦可替代 --fees）（默认 200000）
      --gas-adjustment float        与模拟返回的 gas 估值相乘的调整系数；若手动指定 gas 上限则忽略该参数（默认 1）
      --gas-prices string           以小数表示的 gas price，用于计算交易费用（如 0.1uatom）
      --generate-only               构建未签名交易并输出到标准输出（启用时仅在提供密钥名称的情况下访问本地 Keybase）
  -h, --help                        查看 encode 的帮助
      --keyring-backend string      选择 keyring 后端 (os|file|kwallet|pass|test|memory) 
      --keyring-dir string          客户端 keyring 目录；未指定则使用默认 home 目录
      --ledger                      使用已连接的 Ledger 设备
      --node string                 此链的 CometBFT RPC 地址 [host]:[port] 
      --note string                 为交易添加说明（旧参数 --memo）
      --offline                     离线模式（禁用所有联网功能）
  -s, --sequence uint               签名账户的 sequence（仅离线模式）
      --sign-mode string            选择签名模式 (direct|amino-json|direct-aux|textual)，属于高级选项
      --timeout-duration duration   TimeoutDuration 表示交易在内存池中保持有效的持续时间。交易的无序 nonce 将设为创建时间加该持续时长；若交易仍在内存池且区块时间超过提交时间加 TimeoutTimestamp，交易将被拒绝。
      --timeout-height uint         已弃用：请改用 --timeout-duration。设置区块超时高度，防止交易在超出该高度后被提交
      --tip string                  小费金额，将在目标链转给费用支付者。仅与 --aux 搭配时有效，若目标链未启用 TipDecorator 则忽略
      --unordered                   启用无序交易投递；须与 --timeout-duration 一起使用
  -y, --yes                         跳过交易广播时的确认提示
```

### 继承自父命令的选项

```
      --home string         配置和数据文件夹 
      --log_format string   日志格式 (json|plain) 
      --log_level string    日志级别 (trace|debug|info|warn|error|fatal|panic|disabled 或 '*:[level],[key]:[level]') 
      --log_no_color        禁用彩色日志
      --trace               在出错时打印完整堆栈跟踪
```

### 另请参阅

* [zetacored tx](#zetacored-tx)	- 交易子命令集合


## zetacored tx evidence

证据模块的交易子命令

```
zetacored tx evidence [flags]
```

### 选项

```
  -h, --help   查看 evidence 的帮助
```

### 继承自父命令的选项

```
      --chain-id string     网络链 ID
      --home string         配置和数据文件夹 
      --log_format string   日志格式 (json|plain) 
      --log_level string    日志级别 (trace|debug|info|warn|error|fatal|panic|disabled 或 '*:[level],[key]:[level]') 
      --log_no_color        禁用彩色日志
      --trace               在出错时打印完整堆栈跟踪
```

### 另请参阅

* [zetacored tx](#zetacored-tx)	- 交易子命令集合


## zetacored tx evm

evm 子命令

```
zetacored tx evm [flags]
```

### 选项

```
  -h, --help   查看 evm 的帮助
```

### 继承自父命令的选项

```
      --chain-id string     网络链 ID
      --home string         配置和数据文件夹 
      --log_format string   日志格式 (json|plain) 
      --log_level string    日志级别 (trace|debug|info|warn|error|fatal|panic|disabled 或 '*:[level],[key]:[level]') 
      --log_no_color        禁用彩色日志
      --trace               在出错时打印完整堆栈跟踪
```

### 另请参阅

* [zetacored tx](#zetacored-tx)	- 交易子命令集合
* [zetacored tx evm raw](#zetacored-tx-evm-raw)	- 基于原始以太坊交易构建 Cosmos 交易
* [zetacored tx evm send](#zetacored-tx-evm-send)	- 从一个账户向另一个账户发送资金

## zetacored tx evm raw

基于原始以太坊交易构建 Cosmos 交易。

```
zetacored tx evm raw TX_HEX [flags]
```

### 选项

```
  -a, --account-number uint         签名账户的账号（仅离线模式）
      --aux                         生成辅助签名数据而不是发送交易
  -b, --broadcast-mode string       交易广播模式 (sync|async) 
      --chain-id string             网络链 ID
      --dry-run                     忽略 --gas 参数，模拟交易但不广播（启用时无法访问本地 Keybase）
      --fee-granter string          为交易提供费用的 fee granter 地址
      --fee-payer string            由该地址支付交易费用，而不是从签名者扣除
      --fees string                 交易需支付的费用，例如 10uatom
      --from string                 用于签名的私钥名称或地址
      --gas string                  每笔交易的 gas 上限；设置为 "auto" 可自动估算（注意 "auto" 可能并非精确结果，可设置有效的代币值微调，亦可替代 --fees）（默认 200000）
      --gas-adjustment float        与模拟返回的 gas 估值相乘的调整系数；若手动指定 gas 上限则忽略该参数（默认 1）
      --gas-prices string           以小数表示的 gas price，用于计算交易费用（如 0.1uatom）
      --generate-only               构建未签名交易并输出到标准输出（启用时仅在提供密钥名称的情况下访问本地 Keybase）
  -h, --help                        查看 raw 的帮助
      --keyring-backend string      选择 keyring 后端 (os|file|kwallet|pass|test|memory) 
      --keyring-dir string          客户端 keyring 目录；未指定则使用默认 home 目录
      --ledger                      使用已连接的 Ledger 设备
      --node string                 此链的 CometBFT RPC 地址 [host]:[port] 
      --note string                 为交易添加说明（旧参数 --memo）
      --offline                     离线模式（禁用所有联网功能）
  -o, --output string               输出格式 (text|json) 
  -s, --sequence uint               签名账户的 sequence（仅离线模式）
      --sign-mode string            选择签名模式 (direct|amino-json|direct-aux|textual)，属于高级选项
      --timeout-duration duration   TimeoutDuration 表示交易在内存池中保持有效的持续时间。交易的无序 nonce 将设为创建时间加该持续时长；若交易仍在内存池且区块时间超过提交时间加 TimeoutTimestamp，交易将被拒绝。
      --timeout-height uint         已弃用：请改用 --timeout-duration。设置区块超时高度，防止交易在超出该高度后被提交
      --tip string                  小费金额，将在目标链转给费用支付者。仅与 --aux 搭配时有效，若目标链未启用 TipDecorator 则忽略
      --unordered                   启用无序交易投递；须与 --timeout-duration 一起使用
  -y, --yes                         跳过交易广播时的确认提示
```

### 继承自父命令的选项

```
      --home string         配置和数据文件夹 
      --log_format string   日志格式 (json|plain) 
      --log_level string    日志级别 (trace|debug|info|warn|error|fatal|panic|disabled 或 '*:[level],[key]:[level]') 
      --log_no_color        禁用彩色日志
      --trace               在出错时打印完整堆栈跟踪
```

### 另请参阅

* [zetacored tx evm](#zetacored-tx-evm)	- evm 子命令

## zetacored tx evm send

从一个账户向另一个账户发送资金。

### 概要

支持 0x 与 bech32 地址。`--from` 参数会被忽略，因为它已由 [from_key_or_address] 指定。启用 `--dry-run` 时只能使用 0x 或 bech32 地址，无法使用密钥名称。

```
zetacored tx evm send [from_key_or_address] [to_address] [amount] [flags]
```

### 示例

```
evmd tx evm send 0x7cB61D4117AE31a12E393a1Cfa3BaC666481D02E 0xA2A8B87390F8F2D188242656BFb6852914073D06 10utoken
```

### 选项

```
  -a, --account-number uint         签名账户的账号（仅离线模式）
      --aux                         生成辅助签名数据而不是发送交易
  -b, --broadcast-mode string       交易广播模式 (sync|async) 
      --chain-id string             网络链 ID
      --dry-run                     忽略 --gas 参数，模拟交易但不广播（启用时无法访问本地 Keybase）
      --fee-granter string          为交易提供费用的 fee granter 地址
      --fee-payer string            由该地址支付交易费用，而不是从签名者扣除
      --fees string                 交易需支付的费用，例如 10uatom
      --from string                 用于签名的私钥名称或地址
      --gas string                  每笔交易的 gas 上限；设置为 "auto" 可自动估算（注意 "auto" 可能并非精确结果，可设置有效的代币值微调，亦可替代 --fees）（默认 200000）
      --gas-adjustment float        与模拟返回的 gas 估值相乘的调整系数；若手动指定 gas 上限则忽略该参数（默认 1）
      --gas-prices string           以小数表示的 gas price，用于计算交易费用（如 0.1uatom）
      --generate-only               构建未签名交易并输出到标准输出（启用时仅在提供密钥名称的情况下访问本地 Keybase）
  -h, --help                        查看 send 的帮助
      --keyring-backend string      选择 keyring 后端 (os|file|kwallet|pass|test|memory) 
      --keyring-dir string          客户端 keyring 目录；未指定则使用默认 home 目录
      --ledger                      使用已连接的 Ledger 设备
      --node string                 此链的 CometBFT RPC 地址 [host]:[port] 
      --note string                 为交易添加说明（旧参数 --memo）
      --offline                     离线模式（禁用所有联网功能）
  -o, --output string               输出格式 (text|json) 
  -s, --sequence uint               签名账户的 sequence（仅离线模式）
      --sign-mode string            选择签名模式 (direct|amino-json|direct-aux|textual)，属于高级选项
      --timeout-duration duration   TimeoutDuration 表示交易在内存池中保持有效的持续时间。交易的无序 nonce 将设为创建时间加该持续时长；若交易仍在内存池且区块时间超过提交时间加 TimeoutTimestamp，交易将被拒绝。
      --timeout-height uint         已弃用：请改用 --timeout-duration。设置区块超时高度，防止交易在超出该高度后被提交
      --tip string                  小费金额，将在目标链转给费用支付者。仅与 --aux 搭配时有效，若目标链未启用 TipDecorator 则忽略
      --unordered                   启用无序交易投递；须与 --timeout-duration 一起使用
  -y, --yes                         跳过交易广播时的确认提示
```

### 继承自父命令的选项

```
      --home string         配置和数据文件夹 
      --log_format string   日志格式 (json|plain) 
      --log_level string    日志级别 (trace|debug|info|warn|error|fatal|panic|disabled 或 '*:[level],[key]:[level]') 
      --log_no_color        禁用彩色日志
      --trace               在出错时打印完整堆栈跟踪
```

### 另请参阅

* [zetacored tx evm](#zetacored-tx-evm)	- evm 子命令


## zetacored tx feemarket

费用市场模块的交易命令

```
zetacored tx feemarket [flags]
```

### 选项

```
  -h, --help   查看 feemarket 的帮助
```

### 继承自父命令的选项

```
      --chain-id string     网络链 ID
      --home string         配置和数据文件夹 
      --log_format string   日志格式 (json|plain) 
      --log_level string    日志级别 (trace|debug|info|warn|error|fatal|panic|disabled 或 '*:[level],[key]:[level]') 
      --log_no_color        禁用彩色日志
      --trace               在出错时打印完整堆栈跟踪
```

### 另请参阅

* [zetacored tx](#zetacored-tx)	- 交易子命令集合
* [zetacored tx feemarket update-params](#zetacored-tx-feemarket-update-params)	- 调用 UpdateParams RPC 方法

## zetacored tx feemarket update-params

调用 UpdateParams RPC 方法。

```
zetacored tx feemarket update-params [flags]
```

### 选项

```
  -a, --account-number uint                            签名账户的账号（仅离线模式）
      --aux                                            生成辅助签名数据而不是发送交易
  -b, --broadcast-mode string                          交易广播模式 (sync|async) 
      --chain-id string                                网络链 ID
      --dry-run                                        忽略 --gas 参数，模拟交易但不广播（启用时无法访问本地 Keybase）
      --fee-granter string                             为交易提供费用的 fee granter 地址
      --fee-payer string                               由该地址支付交易费用，而不是从签名者扣除
      --fees string                                    交易需支付的费用，例如 10uatom
      --from string                                    用于签名的私钥名称或地址
      --gas string                                     每笔交易的 gas 上限；设置为 "auto" 可自动估算（注意 "auto" 可能并非精确结果，可设置有效的代币值微调，亦可替代 --fees）（默认 200000）
      --gas-adjustment float                           与模拟返回的 gas 估值相乘的调整系数；若手动指定 gas 上限则忽略该参数（默认 1）
      --gas-prices string                              以小数表示的 gas price，用于计算交易费用（如 0.1uatom）
      --generate-only                                  构建未签名交易并输出到标准输出（启用时仅在提供密钥名称的情况下访问本地 Keybase）
  -h, --help                                           查看 update-params 的帮助
      --keyring-backend string                         选择 keyring 后端 (os|file|kwallet|pass|test|memory) 
      --keyring-dir string                             客户端 keyring 目录；未指定则使用默认 home 目录
      --ledger                                         使用已连接的 Ledger 设备
      --node string                                    此链的 CometBFT RPC 地址 [host]:[port] 
      --note string                                    为交易添加说明（旧参数 --memo）
      --offline                                        离线模式（禁用所有联网功能）
  -o, --output string                                  输出格式 (text|json) 
      --params cosmos.evm.feemarket.v1.Params (json)   以 JSON 格式提供的新参数
  -s, --sequence uint                                  签名账户的 sequence（仅离线模式）
      --sign-mode string                               选择签名模式 (direct|amino-json|direct-aux|textual)，属于高级选项
      --timeout-duration duration                      TimeoutDuration 表示交易在内存池中保持有效的持续时间。交易的无序 nonce 将设为创建时间加该持续时长；若交易仍在内存池且区块时间超过提交时间加 TimeoutTimestamp，交易将被拒绝。
      --timeout-height uint                            已弃用：请改用 --timeout-duration。设置区块超时高度，防止交易在超出该高度后被提交
      --tip string                                     小费金额，将在目标链转给费用支付者。仅与 --aux 搭配时有效，若目标链未启用 TipDecorator 则忽略
      --unordered                                      启用无序交易投递；须与 --timeout-duration 一起使用
  -y, --yes                                            跳过交易广播时的确认提示
```

### 继承自父命令的选项

```
      --home string         配置和数据文件夹 
      --log_format string   日志格式 (json|plain) 
      --log_level string    日志级别 (trace|debug|info|warn|error|fatal|panic|disabled 或 '*:[level],[key]:[level]') 
      --log_no_color        禁用彩色日志
      --trace               在出错时打印完整堆栈跟踪
```

### 另请参阅

* [zetacored tx feemarket](#zetacored-tx-feemarket)	- 费用市场模块的交易命令


## zetacored tx fungible

同质化资产模块的交易子命令

```
zetacored tx fungible [flags]
```

### 选项

```
  -h, --help   查看 fungible 的帮助
```

### 继承自父命令的选项

```
      --chain-id string     网络链 ID
      --home string         配置和数据文件夹 
      --log_format string   日志格式 (json|plain) 
      --log_level string    日志级别 (trace|debug|info|warn|error|fatal|panic|disabled 或 '*:[level],[key]:[level]') 
      --log_no_color        禁用彩色日志
      --trace               在出错时打印完整堆栈跟踪
```

### 另请参阅

* [zetacored tx](#zetacored-tx)	- 交易子命令集合
* [zetacored tx fungible deploy-fungible-coin-zrc-4](#zetacored-tx-fungible-deploy-fungible-coin-zrc-4)	- 广播 DeployFungibleCoinZRC20 消息
* [zetacored tx fungible deploy-system-contracts](#zetacored-tx-fungible-deploy-system-contracts)	- 广播 SystemContracts 消息
* [zetacored tx fungible pause-zrc20](#zetacored-tx-fungible-pause-zrc20)	- 广播 PauseZRC20 消息
* [zetacored tx fungible remove-foreign-coin](#zetacored-tx-fungible-remove-foreign-coin)	- 广播 RemoveForeignCoin 消息
* [zetacored tx fungible unpause-zrc20](#zetacored-tx-fungible-unpause-zrc20)	- 广播 UnpauseZRC20 消息
* [zetacored tx fungible update-contract-bytecode](#zetacored-tx-fungible-update-contract-bytecode)	- 广播 UpdateContractBytecode 消息
* [zetacored tx fungible update-gateway-contract](#zetacored-tx-fungible-update-gateway-contract)	- 广播 UpdateGatewayContract 消息以更新网关合约地址
* [zetacored tx fungible update-system-contract](#zetacored-tx-fungible-update-system-contract)	- 广播 UpdateSystemContract 消息
* [zetacored tx fungible update-zrc20-liquidity-cap](#zetacored-tx-fungible-update-zrc20-liquidity-cap)	- 广播 UpdateZRC20LiquidityCap 消息
* [zetacored tx fungible update-zrc20-withdraw-fee](#zetacored-tx-fungible-update-zrc20-withdraw-fee)	- 广播 UpdateZRC20WithdrawFee 消息

## zetacored tx fungible deploy-fungible-coin-zrc-4

广播 DeployFungibleCoinZRC20 消息。

```
zetacored tx fungible deploy-fungible-coin-zrc-4 [erc-20] [foreign-chain] [decimals] [name] [symbol] [coin-type] [gas-limit] [liquidity-cap] [flags]
```

### 选项

```
  -a, --account-number uint         签名账户的账号（仅离线模式）
      --aux                         生成辅助签名数据而不是发送交易
  -b, --broadcast-mode string       交易广播模式 (sync|async) 
      --chain-id string             网络链 ID
      --dry-run                     忽略 --gas 参数，模拟交易但不广播（启用时无法访问本地 Keybase）
      --fee-granter string          为交易提供费用的 fee granter 地址
      --fee-payer string            由该地址支付交易费用，而不是从签名者扣除
      --fees string                 交易需支付的费用，例如 10uatom
      --from string                 用于签名的私钥名称或地址
      --gas string                  每笔交易的 gas 上限；设置为 "auto" 可自动估算（注意 "auto" 可能并非精确结果，可设置有效的代币值微调，亦可替代 --fees）（默认 200000）
      --gas-adjustment float        与模拟返回的 gas 估值相乘的调整系数；若手动指定 gas 上限则忽略该参数（默认 1）
      --gas-prices string           以小数表示的 gas price，用于计算交易费用（如 0.1uatom）
      --generate-only               构建未签名交易并输出到标准输出（启用时仅在提供密钥名称的情况下访问本地 Keybase）
  -h, --help                        查看 deploy-fungible-coin-zrc-4 的帮助
      --keyring-backend string      选择 keyring 后端 (os|file|kwallet|pass|test|memory) 
      --keyring-dir string          客户端 keyring 目录；未指定则使用默认 home 目录
      --ledger                      使用已连接的 Ledger 设备
      --node string                 此链的 CometBFT RPC 地址 [host]:[port] 
      --note string                 为交易添加说明（旧参数 --memo）
      --offline                     离线模式（禁用所有联网功能）
  -o, --output string               输出格式 (text|json) 
  -s, --sequence uint               签名账户的 sequence（仅离线模式）
      --sign-mode string            选择签名模式 (direct|amino-json|direct-aux|textual)，属于高级选项
      --timeout-duration duration   TimeoutDuration 表示交易在内存池中保持有效的持续时间。交易的无序 nonce 将设为创建时间加该持续时长；若交易仍在内存池且区块时间超过提交时间加 TimeoutTimestamp，交易将被拒绝。
      --timeout-height uint         已弃用：请改用 --timeout-duration。设置区块超时高度，防止交易在超出该高度后被提交
      --tip string                  小费金额，将在目标链转给费用支付者。仅与 --aux 搭配时有效，若目标链未启用 TipDecorator 则忽略
      --unordered                   启用无序交易投递；须与 --timeout-duration 一起使用
  -y, --yes                         跳过交易广播时的确认提示
```

### 继承自父命令的选项

```
      --home string         配置和数据文件夹 
      --log_format string   日志格式 (json|plain) 
      --log_level string    日志级别 (trace|debug|info|warn|error|fatal|panic|disabled 或 '*:[level],[key]:[level]') 
      --log_no_color        禁用彩色日志
      --trace               在出错时打印完整堆栈跟踪
```

### 另请参阅

* [zetacored tx fungible](#zetacored-tx-fungible)	- 同质化资产模块的交易子命令

## zetacored tx fungible deploy-system-contracts

广播 SystemContracts 消息。

```
zetacored tx fungible deploy-system-contracts [flags]
```

### 选项

```
  -a, --account-number uint         签名账户的账号（仅离线模式）
      --aux                         生成辅助签名数据而不是发送交易
  -b, --broadcast-mode string       交易广播模式 (sync|async) 
      --chain-id string             网络链 ID
      --dry-run                     忽略 --gas 参数，模拟交易但不广播（启用时无法访问本地 Keybase）
      --fee-granter string          为交易提供费用的 fee granter 地址
      --fee-payer string            由该地址支付交易费用，而不是从签名者扣除
      --fees string                 交易需支付的费用，例如 10uatom
      --from string                 用于签名的私钥名称或地址
      --gas string                  每笔交易的 gas 上限；设置为 "auto" 可自动估算（注意 "auto" 可能并非精确结果，可设置有效的代币值微调，亦可替代 --fees）（默认 200000）
      --gas-adjustment float        与模拟返回的 gas 估值相乘的调整系数；若手动指定 gas 上限则忽略该参数（默认 1）
      --gas-prices string           以小数表示的 gas price，用于计算交易费用（如 0.1uatom）
      --generate-only               构建未签名交易并输出到标准输出（启用时仅在提供密钥名称的情况下访问本地 Keybase）
  -h, --help                        查看 deploy-system-contracts 的帮助
      --keyring-backend string      选择 keyring 后端 (os|file|kwallet|pass|test|memory) 
      --keyring-dir string          客户端 keyring 目录；未指定则使用默认 home 目录
      --ledger                      使用已连接的 Ledger 设备
      --node string                 此链的 CometBFT RPC 地址 [host]:[port] 
      --note string                 为交易添加说明（旧参数 --memo）
      --offline                     离线模式（禁用所有联网功能）
  -o, --output string               输出格式 (text|json) 
  -s, --sequence uint               签名账户的 sequence（仅离线模式）
      --sign-mode string            选择签名模式 (direct|amino-json|direct-aux|textual)，属于高级选项
      --timeout-duration duration   TimeoutDuration 表示交易在内存池中保持有效的持续时间。交易的无序 nonce 将设为创建时间加该持续时长；若交易仍在内存池且区块时间超过提交时间加 TimeoutTimestamp，交易将被拒绝。
      --timeout-height uint         已弃用：请改用 --timeout-duration。设置区块超时高度，防止交易在超出该高度后被提交
      --tip string                  小费金额，将在目标链转给费用支付者。仅与 --aux 搭配时有效，若目标链未启用 TipDecorator 则忽略
      --unordered                   启用无序交易投递；须与 --timeout-duration 一起使用
  -y, --yes                         跳过交易广播时的确认提示
```

### 继承自父命令的选项

```
      --home string         配置和数据文件夹 
      --log_format string   日志格式 (json|plain) 
      --log_level string    日志级别 (trace|debug|info|warn|error|fatal|panic|disabled 或 '*:[level],[key]:[level]') 
      --log_no_color        禁用彩色日志
      --trace               在出错时打印完整堆栈跟踪
```

### 另请参阅

* [zetacored tx fungible](#zetacored-tx-fungible)	- 同质化资产模块的交易子命令

## zetacored tx fungible pause-zrc20

广播 PauseZRC20 消息。

```
zetacored tx fungible pause-zrc20 [contractAddress1, contractAddress2, ...] [flags]
```

### 示例

```
zetacored tx fungible pause-zrc20 "0xece40cbB54d65282c4623f141c4a8a0bE7D6AdEc, 0xece40cbB54d65282c4623f141c4a8a0bEjgksncf" 
```

### 选项

```
  -a, --account-number uint         签名账户的账号（仅离线模式）
      --aux                         生成辅助签名数据而不是发送交易
  -b, --broadcast-mode string       交易广播模式 (sync|async) 
      --chain-id string             网络链 ID
      --dry-run                     忽略 --gas 参数，模拟交易但不广播（启用时无法访问本地 Keybase）
      --fee-granter string          为交易提供费用的 fee granter 地址
      --fee-payer string            由该地址支付交易费用，而不是从签名者扣除
      --fees string                 交易需支付的费用，例如 10uatom
      --from string                 用于签名的私钥名称或地址
      --gas string                  每笔交易的 gas 上限；设置为 "auto" 可自动估算（注意 "auto" 可能并非精确结果，可设置有效的代币值微调，亦可替代 --fees）（默认 200000）
      --gas-adjustment float        与模拟返回的 gas 估值相乘的调整系数；若手动指定 gas 上限则忽略该参数（默认 1）
      --gas-prices string           以小数表示的 gas price，用于计算交易费用（如 0.1uatom）
      --generate-only               构建未签名交易并输出到标准输出（启用时仅在提供密钥名称的情况下访问本地 Keybase）
  -h, --help                        查看 pause-zrc20 的帮助
      --keyring-backend string      选择 keyring 后端 (os|file|kwallet|pass|test|memory) 
      --keyring-dir string          客户端 keyring 目录；未指定则使用默认 home 目录
      --ledger                      使用已连接的 Ledger 设备
      --node string                 此链的 CometBFT RPC 地址 [host]:[port] 
      --note string                 为交易添加说明（旧参数 --memo）
      --offline                     离线模式（禁用所有联网功能）
  -o, --output string               输出格式 (text|json) 
  -s, --sequence uint               签名账户的 sequence（仅离线模式）
      --sign-mode string            选择签名模式 (direct|amino-json|direct-aux|textual)，属于高级选项
      --timeout-duration duration   TimeoutDuration 表示交易在内存池中保持有效的持续时间。交易的无序 nonce 将设为创建时间加该持续时长；若交易仍在内存池且区块时间超过提交时间加 TimeoutTimestamp，交易将被拒绝。
      --timeout-height uint         已弃用：请改用 --timeout-duration。设置区块超时高度，防止交易在超出该高度后被提交
      --tip string                  小费金额，将在目标链转给费用支付者。仅与 --aux 搭配时有效，若目标链未启用 TipDecorator 则忽略
      --unordered                   启用无序交易投递；须与 --timeout-duration 一起使用
  -y, --yes                         跳过交易广播时的确认提示
```

### 继承自父命令的选项

```
      --home string         配置和数据文件夹 
      --log_format string   日志格式 (json|plain) 
      --log_level string    日志级别 (trace|debug|info|warn|error|fatal|panic|disabled 或 '*:[level],[key]:[level]') 
      --log_no_color        禁用彩色日志
      --trace               在出错时打印完整堆栈跟踪
```

### 另请参阅

* [zetacored tx fungible](#zetacored-tx-fungible)	- 同质化资产模块的交易子命令

## zetacored tx fungible remove-foreign-coin

广播 RemoveForeignCoin 消息。

```
zetacored tx fungible remove-foreign-coin [name] [flags]
```

### 选项

```
  -a, --account-number uint         签名账户的账号（仅离线模式）
      --aux                         生成辅助签名数据而不是发送交易
  -b, --broadcast-mode string       交易广播模式 (sync|async) 
      --chain-id string             网络链 ID
      --dry-run                     忽略 --gas 参数，模拟交易但不广播（启用时无法访问本地 Keybase）
      --fee-granter string          为交易提供费用的 fee granter 地址
      --fee-payer string            由该地址支付交易费用，而不是从签名者扣除
      --fees string                 交易需支付的费用，例如 10uatom
      --from string                 用于签名的私钥名称或地址
      --gas string                  每笔交易的 gas 上限；设置为 "auto" 可自动估算（注意 "auto" 可能并非精确结果，可设置有效的代币值微调，亦可替代 --fees）（默认 200000）
      --gas-adjustment float        与模拟返回的 gas 估值相乘的调整系数；若手动指定 gas 上限则忽略该参数（默认 1）
      --gas-prices string           以小数表示的 gas price，用于计算交易费用（如 0.1uatom）
      --generate-only               构建未签名交易并输出到标准输出（启用时仅在提供密钥名称的情况下访问本地 Keybase）
  -h, --help                        查看 remove-foreign-coin 的帮助
      --keyring-backend string      选择 keyring 后端 (os|file|kwallet|pass|test|memory) 
      --keyring-dir string          客户端 keyring 目录；未指定则使用默认 home 目录
      --ledger                      使用已连接的 Ledger 设备
      --node string                 此链的 CometBFT RPC 地址 [host]:[port] 
      --note string                 为交易添加说明（旧参数 --memo）
      --offline                     离线模式（禁用所有联网功能）
  -o, --output string               输出格式 (text|json) 
  -s, --sequence uint               签名账户的 sequence（仅离线模式）
      --sign-mode string            选择签名模式 (direct|amino-json|direct-aux|textual)，属于高级选项
      --timeout-duration duration   TimeoutDuration 表示交易在内存池中保持有效的持续时间。交易的无序 nonce 将设为创建时间加该持续时长；若交易仍在内存池且区块时间超过提交时间加 TimeoutTimestamp，交易将被拒绝。
      --timeout-height uint         已弃用：请改用 --timeout-duration。设置区块超时高度，防止交易在超出该高度后被提交
      --tip string                  小费金额，将在目标链转给费用支付者。仅与 --aux 搭配时有效，若目标链未启用 TipDecorator 则忽略
      --unordered                   启用无序交易投递；须与 --timeout-duration 一起使用
  -y, --yes                         跳过交易广播时的确认提示
```

### 继承自父命令的选项

```
      --home string         配置和数据文件夹 
      --log_format string   日志格式 (json|plain) 
      --log_level string    日志级别 (trace|debug|info|warn|error|fatal|panic|disabled 或 '*:[level],[key]:[level]') 
      --log_no_color        禁用彩色日志
      --trace               在出错时打印完整堆栈跟踪
```

### 另请参阅

* [zetacored tx fungible](#zetacored-tx-fungible)	- 同质化资产模块的交易子命令

## zetacored tx fungible unpause-zrc20

广播 UnpauseZRC20 消息。

```
zetacored tx fungible unpause-zrc20 [contractAddress1, contractAddress2, ...] [flags]
```

### 示例

```
zetacored tx fungible unpause-zrc20 "0xece40cbB54d65282c4623f141c4a8a0bE7D6AdEc, 0xece40cbB54d65282c4623f141c4a8a0bEjgksncf" 
```

### 选项

```
  -a, --account-number uint         签名账户的账号（仅离线模式）
      --aux                         生成辅助签名数据而不是发送交易
  -b, --broadcast-mode string       交易广播模式 (sync|async) 
      --chain-id string             网络链 ID
      --dry-run                     忽略 --gas 参数，模拟交易但不广播（启用时无法访问本地 Keybase）
      --fee-granter string          为交易提供费用的 fee granter 地址
      --fee-payer string            由该地址支付交易费用，而不是从签名者扣除
      --fees string                 交易需支付的费用，例如 10uatom
      --from string                 用于签名的私钥名称或地址
      --gas string                  每笔交易的 gas 上限；设置为 "auto" 可自动估算（注意 "auto" 可能并非精确结果，可设置有效的代币值微调，亦可替代 --fees）（默认 200000）
      --gas-adjustment float        与模拟返回的 gas 估值相乘的调整系数；若手动指定 gas 上限则忽略该参数（默认 1）
      --gas-prices string           以小数表示的 gas price，用于计算交易费用（如 0.1uatom）
      --generate-only               构建未签名交易并输出到标准输出（启用时仅在提供密钥名称的情况下访问本地 Keybase）
  -h, --help                        查看 unpause-zrc20 的帮助
      --keyring-backend string      选择 keyring 后端 (os|file|kwallet|pass|test|memory) 
      --keyring-dir string          客户端 keyring 目录；未指定则使用默认 home 目录
      --ledger                      使用已连接的 Ledger 设备
      --node string                 此链的 CometBFT RPC 地址 [host]:[port] 
      --note string                 为交易添加说明（旧参数 --memo）
      --offline                     离线模式（禁用所有联网功能）
  -o, --output string               输出格式 (text|json) 
  -s, --sequence uint               签名账户的 sequence（仅离线模式）
      --sign-mode string            选择签名模式 (direct|amino-json|direct-aux|textual)，属于高级选项
      --timeout-duration duration   TimeoutDuration 表示交易在内存池中保持有效的持续时间。交易的无序 nonce 将设为创建时间加该持续时长；若交易仍在内存池且区块时间超过提交时间加 TimeoutTimestamp，交易将被拒绝。
      --timeout-height uint         已弃用：请改用 --timeout-duration。设置区块超时高度，防止交易在超出该高度后被提交
      --tip string                  小费金额，将在目标链转给费用支付者。仅与 --aux 搭配时有效，若目标链未启用 TipDecorator 则忽略
      --unordered                   启用无序交易投递；须与 --timeout-duration 一起使用
  -y, --yes                         跳过交易广播时的确认提示
```

### 继承自父命令的选项

```
      --home string         配置和数据文件夹 
      --log_format string   日志格式 (json|plain) 
      --log_level string    日志级别 (trace|debug|info|warn|error|fatal|panic|disabled 或 '*:[level],[key]:[level]') 
      --log_no_color        禁用彩色日志
      --trace               在出错时打印完整堆栈跟踪
```

### 另请参阅

* [zetacored tx fungible](#zetacored-tx-fungible)	- 同质化资产模块的交易子命令

## zetacored tx fungible update-contract-bytecode

广播 UpdateContractBytecode 消息。

```
zetacored tx fungible update-contract-bytecode [contract-address] [new-code-hash] [flags]
```

### 选项

```
  -a, --account-number uint         签名账户的账号（仅离线模式）
      --aux                         生成辅助签名数据而不是发送交易
  -b, --broadcast-mode string       交易广播模式 (sync|async) 
      --chain-id string             网络链 ID
      --dry-run                     忽略 --gas 参数，模拟交易但不广播（启用时无法访问本地 Keybase）
      --fee-granter string          为交易提供费用的 fee granter 地址
      --fee-payer string            由该地址支付交易费用，而不是从签名者扣除
      --fees string                 交易需支付的费用，例如 10uatom
      --from string                 用于签名的私钥名称或地址
      --gas string                  每笔交易的 gas 上限；设置为 "auto" 可自动估算（注意 "auto" 可能并非精确结果，可设置有效的代币值微调，亦可替代 --fees）（默认 200000）
      --gas-adjustment float        与模拟返回的 gas 估值相乘的调整系数；若手动指定 gas 上限则忽略该参数（默认 1）
      --gas-prices string           以小数表示的 gas price，用于计算交易费用（如 0.1uatom）
      --generate-only               构建未签名交易并输出到标准输出（启用时仅在提供密钥名称的情况下访问本地 Keybase）
  -h, --help                        查看 update-contract-bytecode 的帮助
      --keyring-backend string      选择 keyring 后端 (os|file|kwallet|pass|test|memory) 
      --keyring-dir string          客户端 keyring 目录；未指定则使用默认 home 目录
      --ledger                      使用已连接的 Ledger 设备
      --node string                 此链的 CometBFT RPC 地址 [host]:[port] 
      --note string                 为交易添加说明（旧参数 --memo）
      --offline                     离线模式（禁用所有联网功能）
  -o, --output string               输出格式 (text|json) 
  -s, --sequence uint               签名账户的 sequence（仅离线模式）
      --sign-mode string            选择签名模式 (direct|amino-json|direct-aux|textual)，属于高级选项
      --timeout-duration duration   TimeoutDuration 表示交易在内存池中保持有效的持续时间。交易的无序 nonce 将设为创建时间加该持续时长；若交易仍在内存池且区块时间超过提交时间加 TimeoutTimestamp，交易将被拒绝。
      --timeout-height uint         已弃用：请改用 --timeout-duration。设置区块超时高度，防止交易在超出该高度后被提交
      --tip string                  小费金额，将在目标链转给费用支付者。仅与 --aux 搭配时有效，若目标链未启用 TipDecorator 则忽略
      --unordered                   启用无序交易投递；须与 --timeout-duration 一起使用
  -y, --yes                         跳过交易广播时的确认提示
```

### 继承自父命令的选项

```
      --home string         配置和数据文件夹 
      --log_format string   日志格式 (json|plain) 
      --log_level string    日志级别 (trace|debug|info|warn|error|fatal|panic|disabled 或 '*:[level],[key]:[level]') 
      --log_no_color        禁用彩色日志
      --trace               在出错时打印完整堆栈跟踪
```

### 另请参阅

* [zetacored tx fungible](#zetacored-tx-fungible)	- 同质化资产模块的交易子命令

## zetacored tx fungible update-gateway-contract

广播 UpdateGatewayContract 消息以更新网关合约地址。

```
zetacored tx fungible update-gateway-contract [contract-address] [flags]
```

### 选项

```
  -a, --account-number uint         签名账户的账号（仅离线模式）
      --aux                         生成辅助签名数据而不是发送交易
  -b, --broadcast-mode string       交易广播模式 (sync|async) 
      --chain-id string             网络链 ID
      --dry-run                     忽略 --gas 参数，模拟交易但不广播（启用时无法访问本地 Keybase）
      --fee-granter string          为交易提供费用的 fee granter 地址
      --fee-payer string            由该地址支付交易费用，而不是从签名者扣除
      --fees string                 交易需支付的费用，例如 10uatom
      --from string                 用于签名的私钥名称或地址
      --gas string                  每笔交易的 gas 上限；设置为 "auto" 可自动估算（注意 "auto" 可能并非精确结果，可设置有效的代币值微调，亦可替代 --fees）（默认 200000）
      --gas-adjustment float        与模拟返回的 gas 估值相乘的调整系数；若手动指定 gas 上限则忽略该参数（默认 1）
      --gas-prices string           以小数表示的 gas price，用于计算交易费用（如 0.1uatom）
      --generate-only               构建未签名交易并输出到标准输出（启用时仅在提供密钥名称的情况下访问本地 Keybase）
  -h, --help                        查看 update-gateway-contract 的帮助
      --keyring-backend string      选择 keyring 后端 (os|file|kwallet|pass|test|memory) 
      --keyring-dir string          客户端 keyring 目录；未指定则使用默认 home 目录
      --ledger                      使用已连接的 Ledger 设备
      --node string                 此链的 CometBFT RPC 地址 [host]:[port] 
      --note string                 为交易添加说明（旧参数 --memo）
      --offline                     离线模式（禁用所有联网功能）
  -o, --output string               输出格式 (text|json) 
  -s, --sequence uint               签名账户的 sequence（仅离线模式）
      --sign-mode string            选择签名模式 (direct|amino-json|direct-aux|textual)，属于高级选项
      --timeout-duration duration   TimeoutDuration 表示交易在内存池中保持有效的持续时间。交易的无序 nonce 将设为创建时间加该持续时长；若交易仍在内存池且区块时间超过提交时间加 TimeoutTimestamp，交易将被拒绝。
      --timeout-height uint         已弃用：请改用 --timeout-duration。设置区块超时高度，防止交易在超出该高度后被提交
      --tip string                  小费金额，将在目标链转给费用支付者。仅与 --aux 搭配时有效，若目标链未启用 TipDecorator 则忽略
      --unordered                   启用无序交易投递；须与 --timeout-duration 一起使用
  -y, --yes                         跳过交易广播时的确认提示
```

### 继承自父命令的选项

```
      --home string         配置和数据文件夹 
      --log_format string   日志格式 (json|plain) 
      --log_level string    日志级别 (trace|debug|info|warn|error|fatal|panic|disabled 或 '*:[level],[key]:[level]') 
      --log_no_color        禁用彩色日志
      --trace               在出错时打印完整堆栈跟踪
```

### 另请参阅

* [zetacored tx fungible](#zetacored-tx-fungible)	- 同质化资产模块的交易子命令

## zetacored tx fungible update-system-contract

广播 UpdateSystemContract 消息。

```
zetacored tx fungible update-system-contract [contract-address]  [flags]
```

### 选项

```
  -a, --account-number uint         签名账户的账号（仅离线模式）
      --aux                         生成辅助签名数据而不是发送交易
  -b, --broadcast-mode string       交易广播模式 (sync|async) 
      --chain-id string             网络链 ID
      --dry-run                     忽略 --gas 参数，模拟交易但不广播（启用时无法访问本地 Keybase）
      --fee-granter string          为交易提供费用的 fee granter 地址
      --fee-payer string            由该地址支付交易费用，而不是从签名者扣除
      --fees string                 交易需支付的费用，例如 10uatom
      --from string                 用于签名的私钥名称或地址
      --gas string                  每笔交易的 gas 上限；设置为 "auto" 可自动估算（注意 "auto" 可能并非精确结果，可设置有效的代币值微调，亦可替代 --fees）（默认 200000）
      --gas-adjustment float        与模拟返回的 gas 估值相乘的调整系数；若手动指定 gas 上限则忽略该参数（默认 1）
      --gas-prices string           以小数表示的 gas price，用于计算交易费用（如 0.1uatom）
      --generate-only               构建未签名交易并输出到标准输出（启用时仅在提供密钥名称的情况下访问本地 Keybase）
  -h, --help                        查看 update-system-contract 的帮助
      --keyring-backend string      选择 keyring 后端 (os|file|kwallet|pass|test|memory) 
      --keyring-dir string          客户端 keyring 目录；未指定则使用默认 home 目录
      --ledger                      使用已连接的 Ledger 设备
      --node string                 此链的 CometBFT RPC 地址 [host]:[port] 
      --note string                 为交易添加说明（旧参数 --memo）
      --offline                     离线模式（禁用所有联网功能）
  -o, --output string               输出格式 (text|json) 
  -s, --sequence uint               签名账户的 sequence（仅离线模式）
      --sign-mode string            选择签名模式 (direct|amino-json|direct-aux|textual)，属于高级选项
      --timeout-duration duration   TimeoutDuration 表示交易在内存池中保持有效的持续时间。交易的无序 nonce 将设为创建时间加该持续时长；若交易仍在内存池且区块时间超过提交时间加 TimeoutTimestamp，交易将被拒绝。
      --timeout-height uint         已弃用：请改用 --timeout-duration。设置区块超时高度，防止交易在超出该高度后被提交
      --tip string                  小费金额，将在目标链转给费用支付者。仅与 --aux 搭配时有效，若目标链未启用 TipDecorator 则忽略
      --unordered                   启用无序交易投递；须与 --timeout-duration 一起使用
  -y, --yes                         跳过交易广播时的确认提示
```

### 继承自父命令的选项

```
      --home string         配置和数据文件夹 
      --log_format string   日志格式 (json|plain) 
      --log_level string    日志级别 (trace|debug|info|warn|error|fatal|panic|disabled 或 '*:[level],[key]:[level]') 
      --log_no_color        禁用彩色日志
      --trace               在出错时打印完整堆栈跟踪
```

### 另请参阅

* [zetacored tx fungible](#zetacored-tx-fungible)	- 同质化资产模块的交易子命令

## zetacored tx fungible update-zrc20-liquidity-cap

广播 UpdateZRC20LiquidityCap 消息。

```
zetacored tx fungible update-zrc20-liquidity-cap [zrc20] [liquidity-cap] [flags]
```

### 选项

```
  -a, --account-number uint         签名账户的账号（仅离线模式）
      --aux                         生成辅助签名数据而不是发送交易
  -b, --broadcast-mode string       交易广播模式 (sync|async) 
      --chain-id string             网络链 ID
      --dry-run                     忽略 --gas 参数，模拟交易但不广播（启用时无法访问本地 Keybase）
      --fee-granter string          为交易提供费用的 fee granter 地址
      --fee-payer string            由该地址支付交易费用，而不是从签名者扣除
      --fees string                 交易需支付的费用，例如 10uatom
      --from string                 用于签名的私钥名称或地址
      --gas string                  每笔交易的 gas 上限；设置为 "auto" 可自动估算（注意 "auto" 可能并非精确结果，可设置有效的代币值微调，亦可替代 --fees）（默认 200000）
      --gas-adjustment float        与模拟返回的 gas 估值相乘的调整系数；若手动指定 gas 上限则忽略该参数（默认 1）
      --gas-prices string           以小数表示的 gas price，用于计算交易费用（如 0.1uatom）
      --generate-only               构建未签名交易并输出到标准输出（启用时仅在提供密钥名称的情况下访问本地 Keybase）
  -h, --help                        查看 update-zrc20-liquidity-cap 的帮助
      --keyring-backend string      选择 keyring 后端 (os|file|kwallet|pass|test|memory) 
      --keyring-dir string          客户端 keyring 目录；未指定则使用默认 home 目录
      --ledger                      使用已连接的 Ledger 设备
      --node string                 此链的 CometBFT RPC 地址 [host]:[port] 
      --note string                 为交易添加说明（旧参数 --memo）
      --offline                     离线模式（禁用所有联网功能）
  -o, --output string               输出格式 (text|json) 
  -s, --sequence uint               签名账户的 sequence（仅离线模式）
      --sign-mode string            选择签名模式 (direct|amino-json|direct-aux|textual)，属于高级选项
      --timeout-duration duration   TimeoutDuration 表示交易在内存池中保持有效的持续时间。交易的无序 nonce 将设为创建时间加该持续时长；若交易仍在内存池且区块时间超过提交时间加 TimeoutTimestamp，交易将被拒绝。
      --timeout-height uint         已弃用：请改用 --timeout-duration。设置区块超时高度，防止交易在超出该高度后被提交
      --tip string                  小费金额，将在目标链转给费用支付者。仅与 --aux 搭配时有效，若目标链未启用 TipDecorator 则忽略
      --unordered                   启用无序交易投递；须与 --timeout-duration 一起使用
  -y, --yes                         跳过交易广播时的确认提示
```

### 继承自父命令的选项

```
      --home string         配置和数据文件夹 
      --log_format string   日志格式 (json|plain) 
      --log_level string    日志级别 (trace|debug|info|warn|error|fatal|panic|disabled 或 '*:[level],[key]:[level]') 
      --log_no_color        禁用彩色日志
      --trace               在出错时打印完整堆栈跟踪
```

### 另请参阅

* [zetacored tx fungible](#zetacored-tx-fungible)	- 同质化资产模块的交易子命令

## zetacored tx fungible update-zrc20-withdraw-fee

广播 UpdateZRC20WithdrawFee 消息。

```
zetacored tx fungible update-zrc20-withdraw-fee [contractAddress] [newWithdrawFee] [newGasLimit] [flags]
```

### 选项

```
  -a, --account-number uint         签名账户的账号（仅离线模式）
      --aux                         生成辅助签名数据而不是发送交易
  -b, --broadcast-mode string       交易广播模式 (sync|async) 
      --chain-id string             网络链 ID
      --dry-run                     忽略 --gas 参数，模拟交易但不广播（启用时无法访问本地 Keybase）
      --fee-granter string          为交易提供费用的 fee granter 地址
      --fee-payer string            由该地址支付交易费用，而不是从签名者扣除
      --fees string                 交易需支付的费用，例如 10uatom
      --from string                 用于签名的私钥名称或地址
      --gas string                  每笔交易的 gas 上限；设置为 "auto" 可自动估算（注意 "auto" 可能并非精确结果，可设置有效的代币值微调，亦可替代 --fees）（默认 200000）
      --gas-adjustment float        与模拟返回的 gas 估值相乘的调整系数；若手动指定 gas 上限则忽略该参数（默认 1）
      --gas-prices string           以小数表示的 gas price，用于计算交易费用（如 0.1uatom）
      --generate-only               构建未签名交易并输出到标准输出（启用时仅在提供密钥名称的情况下访问本地 Keybase）
  -h, --help                        查看 update-zrc20-withdraw-fee 的帮助
      --keyring-backend string      选择 keyring 后端 (os|file|kwallet|pass|test|memory) 
      --keyring-dir string          客户端 keyring 目录；未指定则使用默认 home 目录
      --ledger                      使用已连接的 Ledger 设备
      --node string                 此链的 CometBFT RPC 地址 [host]:[port] 
      --note string                 为交易添加说明（旧参数 --memo）
      --offline                     离线模式（禁用所有联网功能）
  -o, --output string               输出格式 (text|json) 
  -s, --sequence uint               签名账户的 sequence（仅离线模式）
      --sign-mode string            选择签名模式 (direct|amino-json|direct-aux|textual)，属于高级选项
      --timeout-duration duration   TimeoutDuration 表示交易在内存池中保持有效的持续时间。交易的无序 nonce 将设为创建时间加该持续时长；若交易仍在内存池且区块时间超过提交时间加 TimeoutTimestamp，交易将被拒绝。
      --timeout-height uint         已弃用：请改用 --timeout-duration。设置区块超时高度，防止交易在超出该高度后被提交
      --tip string                  小费金额，将在目标链转给费用支付者。仅与 --aux 搭配时有效，若目标链未启用 TipDecorator 则忽略
      --unordered                   启用无序交易投递；须与 --timeout-duration 一起使用
  -y, --yes                         跳过交易广播时的确认提示
```

### 继承自父命令的选项

```
      --home string         配置和数据文件夹 
      --log_format string   日志格式 (json|plain) 
      --log_level string    日志级别 (trace|debug|info|warn|error|fatal|panic|disabled 或 '*:[level],[key]:[level]') 
      --log_no_color        禁用彩色日志
      --trace               在出错时打印完整堆栈跟踪
```

### 另请参阅

* [zetacored tx fungible](#zetacored-tx-fungible)	- 同质化资产模块的交易子命令


## zetacored tx gov

治理模块的交易子命令

```
zetacored tx gov [flags]
```

### 选项

```
  -h, --help   查看 gov 的帮助
```

### 继承自父命令的选项

```
      --chain-id string     网络链 ID
      --home string         配置和数据文件夹 
      --log_format string   日志格式 (json|plain) 
      --log_level string    日志级别 (trace|debug|info|warn|error|fatal|panic|disabled 或 '*:[level],[key]:[level]') 
      --log_no_color        禁用彩色日志
      --trace               在出错时打印完整堆栈跟踪
```

### 另请参阅

* [zetacored tx](#zetacored-tx)	- 交易子命令集合
* [zetacored tx gov cancel-proposal](#zetacored-tx-gov-cancel-proposal)	- 在投票结束前取消治理提案，须由提案创建者签名
* [zetacored tx gov deposit](#zetacored-tx-gov-deposit)	- 为活跃提案质押保证金
* [zetacored tx gov draft-proposal](#zetacored-tx-gov-draft-proposal)	- 生成仅含骨架消息的提案草稿 JSON
* [zetacored tx gov submit-legacy-proposal](#zetacored-tx-gov-submit-legacy-proposal)	- 提交传统格式的提案并附初始质押
* [zetacored tx gov submit-proposal](#zetacored-tx-gov-submit-proposal)	- 提交包含消息、元数据与质押的新提案
* [zetacored tx gov vote](#zetacored-tx-gov-vote)	- 为活跃提案投票（yes/no/no_with_veto/abstain）
* [zetacored tx gov weighted-vote](#zetacored-tx-gov-weighted-vote)	- 为活跃提案投加权票（yes/no/no_with_veto/abstain）

## zetacored tx gov cancel-proposal

在投票期结束前取消治理提案，需由提案创建者签名。

```
zetacored tx gov cancel-proposal [proposal-id] [flags]
```

### 示例

```
$ zetacored tx gov cancel-proposal 1 --from mykey
```

### 选项

```
  -a, --account-number uint         签名账户的账号（仅离线模式）
      --aux                         生成辅助签名数据而不是发送交易
  -b, --broadcast-mode string       交易广播模式 (sync|async) 
      --chain-id string             网络链 ID
      --dry-run                     忽略 --gas 参数，模拟交易但不广播（启用时无法访问本地 Keybase）
      --fee-granter string          为交易提供费用的 fee granter 地址
      --fee-payer string            由该地址支付交易费用，而不是从签名者扣除
      --fees string                 交易需支付的费用，例如 10uatom
      --from string                 用于签名的私钥名称或地址
      --gas string                  每笔交易的 gas 上限；设置为 "auto" 可自动估算（注意 "auto" 可能并非精确结果，可设置有效的代币值微调，亦可替代 --fees）（默认 200000）
      --gas-adjustment float        与模拟返回的 gas 估值相乘的调整系数；若手动指定 gas 上限则忽略该参数（默认 1）
      --gas-prices string           以小数表示的 gas price，用于计算交易费用（如 0.1uatom）
      --generate-only               构建未签名交易并输出到标准输出（启用时仅在提供密钥名称的情况下访问本地 Keybase）
  -h, --help                        查看 cancel-proposal 的帮助
      --keyring-backend string      选择 keyring 后端 (os|file|kwallet|pass|test|memory) 
      --keyring-dir string          客户端 keyring 目录；未指定则使用默认 home 目录
      --ledger                      使用已连接的 Ledger 设备
      --node string                 此链的 CometBFT RPC 地址 [host]:[port] 
      --note string                 为交易添加说明（旧参数 --memo）
      --offline                     离线模式（禁用所有联网功能）
  -o, --output string               输出格式 (text|json) 
  -s, --sequence uint               签名账户的 sequence（仅离线模式）
      --sign-mode string            选择签名模式 (direct|amino-json|direct-aux|textual)，属于高级选项
      --timeout-duration duration   TimeoutDuration 表示交易在内存池中保持有效的持续时间。交易的无序 nonce 将设为创建时间加该持续时长；若交易仍在内存池且区块时间超过提交时间加 TimeoutTimestamp，交易将被拒绝。
      --timeout-height uint         已弃用：请改用 --timeout-duration。设置区块超时高度，防止交易在超出该高度后被提交
      --tip string                  小费金额，将在目标链转给费用支付者。仅与 --aux 搭配时有效，若目标链未启用 TipDecorator 则忽略
      --unordered                   启用无序交易投递；须与 --timeout-duration 一起使用
  -y, --yes                         跳过交易广播时的确认提示
```

### 继承自父命令的选项

```
      --home string         配置和数据文件夹 
      --log_format string   日志格式 (json|plain) 
      --log_level string    日志级别 (trace|debug|info|warn|error|fatal|panic|disabled 或 '*:[level],[key]:[level]') 
      --log_no_color        禁用彩色日志
      --trace               在出错时打印完整堆栈跟踪
```

### 另请参阅

* [zetacored tx gov](#zetacored-tx-gov)	- 治理模块的交易子命令


## zetacored tx gov deposit

为活跃提案质押代币。

### 概要

为活跃提案提交质押，可通过 `zetacored query gov proposals` 查看 `proposal-id`。

示例：
```
$ zetacored tx gov deposit 1 10stake --from mykey
```

```
zetacored tx gov deposit [proposal-id] [deposit] [flags]
```

### 选项

```
  -a, --account-number uint         签名账户的账号（仅离线模式）
      --aux                         生成辅助签名数据而不是发送交易
  -b, --broadcast-mode string       交易广播模式 (sync|async) 
      --chain-id string             网络链 ID
      --dry-run                     忽略 --gas 参数，模拟交易但不广播（启用时无法访问本地 Keybase）
      --fee-granter string          为交易提供费用的 fee granter 地址
      --fee-payer string            由该地址支付交易费用，而不是从签名者扣除
      --fees string                 交易需支付的费用，例如 10uatom
      --from string                 用于签名的私钥名称或地址
      --gas string                  每笔交易的 gas 上限；设置为 "auto" 可自动估算（注意 "auto" 可能并非精确结果，可设置有效的代币值微调，亦可替代 --fees）（默认 200000）
      --gas-adjustment float        与模拟返回的 gas 估值相乘的调整系数；若手动指定 gas 上限则忽略该参数（默认 1）
      --gas-prices string           以小数表示的 gas price，用于计算交易费用（如 0.1uatom）
      --generate-only               构建未签名交易并输出到标准输出（启用时仅在提供密钥名称的情况下访问本地 Keybase）
  -h, --help                        查看 deposit 的帮助
      --keyring-backend string      选择 keyring 后端 (os|file|kwallet|pass|test|memory) 
      --keyring-dir string          客户端 keyring 目录；未指定则使用默认 home 目录
      --ledger                      使用已连接的 Ledger 设备
      --node string                 此链的 CometBFT RPC 地址 [host]:[port] 
      --note string                 为交易添加说明（旧参数 --memo）
      --offline                     离线模式（禁用所有联网功能）
  -o, --output string               输出格式 (text|json) 
  -s, --sequence uint               签名账户的 sequence（仅离线模式）
      --sign-mode string            选择签名模式 (direct|amino-json|direct-aux|textual)，属于高级选项
      --timeout-duration duration   TimeoutDuration 表示交易在内存池中保持有效的持续时间。交易的无序 nonce 将设为创建时间加该持续时长；若交易仍在内存池且区块时间超过提交时间加 TimeoutTimestamp，交易将被拒绝。
      --timeout-height uint         已弃用：请改用 --timeout-duration。设置区块超时高度，防止交易在超出该高度后被提交
      --tip string                  小费金额，将在目标链转给费用支付者。仅与 --aux 搭配时有效，若目标链未启用 TipDecorator 则忽略
      --unordered                   启用无序交易投递；须与 --timeout-duration 一起使用
  -y, --yes                         跳过交易广播时的确认提示
```

### 继承自父命令的选项

```
      --home string         配置和数据文件夹 
      --log_format string   日志格式 (json|plain) 
      --log_level string    日志级别 (trace|debug|info|warn|error|fatal|panic|disabled 或 '*:[level],[key]:[level]') 
      --log_no_color        禁用彩色日志
      --trace               在出错时打印完整堆栈跟踪
```

### 另请参阅

* [zetacored tx gov](#zetacored-tx-gov)	- 治理模块的交易子命令

## zetacored tx gov draft-proposal

生成提案草稿 JSON 文件（仅包含单条消息骨架）。

```
zetacored tx gov draft-proposal [flags]
```

### 选项

```
  -a, --account-number uint         签名账户的账号（仅离线模式）
      --aux                         生成辅助签名数据而不是发送交易
  -b, --broadcast-mode string       交易广播模式 (sync|async) 
      --chain-id string             网络链 ID
      --dry-run                     忽略 --gas 参数，模拟交易但不广播（启用时无法访问本地 Keybase）
      --fee-granter string          为交易提供费用的 fee granter 地址
      --fee-payer string            由该地址支付交易费用，而不是从签名者扣除
      --fees string                 交易需支付的费用，例如 10uatom
      --from string                 用于签名的私钥名称或地址
      --gas string                  每笔交易的 gas 上限；设置为 "auto" 可自动估算（注意 "auto" 可能并非精确结果，可设置有效的代币值微调，亦可替代 --fees）（默认 200000）
      --gas-adjustment float        与模拟返回的 gas 估值相乘的调整系数；若手动指定 gas 上限则忽略该参数（默认 1）
      --gas-prices string           以小数表示的 gas price，用于计算交易费用（如 0.1uatom）
      --generate-only               构建未签名交易并输出到标准输出（启用时仅在提供密钥名称的情况下访问本地 Keybase）
  -h, --help                        查看 draft-proposal 的帮助
      --keyring-backend string      选择 keyring 后端 (os|file|kwallet|pass|test|memory) 
      --keyring-dir string          客户端 keyring 目录；未指定则使用默认 home 目录
      --ledger                      使用已连接的 Ledger 设备
      --node string                 此链的 CometBFT RPC 地址 [host]:[port] 
      --note string                 为交易添加说明（旧参数 --memo）
      --offline                     离线模式（禁用所有联网功能）
  -o, --output string               输出格式 (text|json) 
  -s, --sequence uint               签名账户的 sequence（仅离线模式）
      --sign-mode string            选择签名模式 (direct|amino-json|direct-aux|textual)，属于高级选项
      --skip-metadata               跳过元数据提示
      --timeout-duration duration   TimeoutDuration 表示交易在内存池中保持有效的持续时间。交易的无序 nonce 将设为创建时间加该持续时长；若交易仍在内存池且区块时间超过提交时间加 TimeoutTimestamp，交易将被拒绝。
      --timeout-height uint         已弃用：请改用 --timeout-duration。设置区块超时高度，防止交易在超出该高度后被提交
      --tip string                  小费金额，将在目标链转给费用支付者。仅与 --aux 搭配时有效，若目标链未启用 TipDecorator 则忽略
      --unordered                   启用无序交易投递；须与 --timeout-duration 一起使用
  -y, --yes                         跳过交易广播时的确认提示
```

### 继承自父命令的选项

```
      --home string         配置和数据文件夹 
      --log_format string   日志格式 (json|plain) 
      --log_level string    日志级别 (trace|debug|info|warn|error|fatal|panic|disabled 或 '*:[level],[key]:[level]') 
      --log_no_color        禁用彩色日志
      --trace               在出错时打印完整堆栈跟踪
```

### 另请参阅

* [zetacored tx gov](#zetacored-tx-gov)	- 治理模块的交易子命令


## zetacored tx gov submit-legacy-proposal

提交传统格式的治理提案，并附上初始质押。

### 概要

支持通过命令行参数或 JSON 文件提供提案标题、描述、类型与质押。

示例：
```
$ zetacored tx gov submit-legacy-proposal --proposal="path/to/proposal.json" --from mykey
```
其中 `proposal.json` 内容示例：
```
{
  "title": "Test Proposal",
  "description": "My awesome proposal",
  "type": "Text",
  "deposit": "10test"
}
```
等同于：
```
$ zetacored tx gov submit-legacy-proposal --title="Test Proposal" --description="My awesome proposal" --type="Text" --deposit="10test" --from mykey
```

```
zetacored tx gov submit-legacy-proposal [flags]
```

### 选项

```
  -a, --account-number uint         签名账户的账号（仅离线模式）
      --aux                         生成辅助签名数据而不是发送交易
  -b, --broadcast-mode string       交易广播模式 (sync|async) 
      --chain-id string             网络链 ID
      --deposit string              提案质押金额
      --description string          提案描述
      --dry-run                     忽略 --gas 参数，模拟交易但不广播（启用时无法访问本地 Keybase）
      --fee-granter string          为交易提供费用的 fee granter 地址
      --fee-payer string            由该地址支付交易费用，而不是从签名者扣除
      --fees string                 交易需支付的费用，例如 10uatom
      --from string                 用于签名的私钥名称或地址
      --gas string                  每笔交易的 gas 上限；设置为 "auto" 可自动估算（注意 "auto" 可能并非精确结果，可设置有效的代币值微调，亦可替代 --fees）（默认 200000）
      --gas-adjustment float        与模拟返回的 gas 估值相乘的调整系数；若手动指定 gas 上限则忽略该参数（默认 1）
      --gas-prices string           以小数表示的 gas price，用于计算交易费用（如 0.1uatom）
      --generate-only               构建未签名交易并输出到标准输出（启用时仅在提供密钥名称的情况下访问本地 Keybase）
  -h, --help                        查看 submit-legacy-proposal 的帮助
      --keyring-backend string      选择 keyring 后端 (os|file|kwallet|pass|test|memory) 
      --keyring-dir string          客户端 keyring 目录；未指定则使用默认 home 目录
      --ledger                      使用已连接的 Ledger 设备
      --node string                 此链的 CometBFT RPC 地址 [host]:[port] 
      --note string                 为交易添加说明（旧参数 --memo）
      --offline                     离线模式（禁用所有联网功能）
  -o, --output string               输出格式 (text|json) 
      --proposal string             提案文件路径（提供该路径时其余提案参数将被忽略）
  -s, --sequence uint               签名账户的 sequence（仅离线模式）
      --sign-mode string            选择签名模式 (direct|amino-json|direct-aux|textual)，属于高级选项
      --timeout-duration duration   TimeoutDuration 表示交易在内存池中保持有效的持续时间。交易的无序 nonce 将设为创建时间加该持续时长；若交易仍在内存池且区块时间超过提交时间加 TimeoutTimestamp，交易将被拒绝。
      --timeout-height uint         已弃用：请改用 --timeout-duration。设置区块超时高度，防止交易在超出该高度后被提交
      --tip string                  小费金额，将在目标链转给费用支付者。仅与 --aux 搭配时有效，若目标链未启用 TipDecorator 则忽略
      --title string                提案标题
      --type string                 提案类型
      --unordered                   启用无序交易投递；须与 --timeout-duration 一起使用
  -y, --yes                         跳过交易广播时的确认提示
```

### 继承自父命令的选项

```
      --home string         配置和数据文件夹 
      --log_format string   日志格式 (json|plain) 
      --log_level string    日志级别 (trace|debug|info|warn|error|fatal|panic|disabled 或 '*:[level],[key]:[level]') 
      --log_no_color        禁用彩色日志
      --trace               在出错时打印完整堆栈跟踪
```

### 另请参阅

* [zetacored tx gov](#zetacored-tx-gov)	- 治理模块的交易子命令

## zetacored tx gov submit-proposal

提交包含多条消息、元数据及质押的新提案。

### 概要

消息、元数据与质押配置需写入 JSON 文件。

示例：
```
$ zetacored tx gov submit-proposal path/to/proposal.json
```
`proposal.json` 示例如下：
```
{
  // proto-JSON 编码的 sdk.Msg 数组
  "messages": [
    {
      "@type": "/cosmos.bank.v1beta1.MsgSend",
      "from_address": "cosmos1...",
      "to_address": "cosmos1...",
      "amount":[{"denom": "stake","amount": "10"}]
    }
  ],
  // metadata 可为 base64、原始文本、字符串化 JSON，或指向 JSON 的 IPFS 链接
  "metadata": "4pIMOgIGx1vZGU=",
  "deposit": "10stake",
  "title": "My proposal",
  "summary": "A short summary of my proposal",
  "expedited": false
}
```
metadata 结构示例：
```
{
    "title": "",
    "authors": [""],
    "summary": "",
    "details": "",
    "proposal_forum_url": "",
    "vote_option_context": ""
}
```

```
zetacored tx gov submit-proposal [path/to/proposal.json] [flags]
```

### 选项

```
  -a, --account-number uint         签名账户的账号（仅离线模式）
      --aux                         生成辅助签名数据而不是发送交易
  -b, --broadcast-mode string       交易广播模式 (sync|async) 
      --chain-id string             网络链 ID
      --dry-run                     忽略 --gas 参数，模拟交易但不广播（启用时无法访问本地 Keybase）
      --fee-granter string          为交易提供费用的 fee granter 地址
      --fee-payer string            由该地址支付交易费用，而不是从签名者扣除
      --fees string                 交易需支付的费用，例如 10uatom
      --from string                 用于签名的私钥名称或地址
      --gas string                  每笔交易的 gas 上限；设置为 "auto" 可自动估算（注意 "auto" 可能并非精确结果，可设置有效的代币值微调，亦可替代 --fees）（默认 200000）
      --gas-adjustment float        与模拟返回的 gas 估值相乘的调整系数；若手动指定 gas 上限则忽略该参数（默认 1）
      --gas-prices string           以小数表示的 gas price，用于计算交易费用（如 0.1uatom）
      --generate-only               构建未签名交易并输出到标准输出（启用时仅在提供密钥名称的情况下访问本地 Keybase）
  -h, --help                        查看 submit-proposal 的帮助
      --keyring-backend string      选择 keyring 后端 (os|file|kwallet|pass|test|memory) 
      --keyring-dir string          客户端 keyring 目录；未指定则使用默认 home 目录
      --ledger                      使用已连接的 Ledger 设备
      --node string                 此链的 CometBFT RPC 地址 [host]:[port] 
      --note string                 为交易添加说明（旧参数 --memo）
      --offline                     离线模式（禁用所有联网功能）
  -o, --output string               输出格式 (text|json) 
  -s, --sequence uint               签名账户的 sequence（仅离线模式）
      --sign-mode string            选择签名模式 (direct|amino-json|direct-aux|textual)，属于高级选项
      --timeout-duration duration   TimeoutDuration 表示交易在内存池中保持有效的持续时间。交易的无序 nonce 将设为创建时间加该持续时长；若交易仍在内存池且区块时间超过提交时间加 TimeoutTimestamp，交易将被拒绝。
      --timeout-height uint         已弃用：请改用 --timeout-duration。设置区块超时高度，防止交易在超出该高度后被提交
      --tip string                  小费金额，将在目标链转给费用支付者。仅与 --aux 搭配时有效，若目标链未启用 TipDecorator 则忽略
      --unordered                   启用无序交易投递；须与 --timeout-duration 一起使用
  -y, --yes                         跳过交易广播时的确认提示
```

### 继承自父命令的选项

```
      --home string         配置和数据文件夹 
      --log_format string   日志格式 (json|plain) 
      --log_level string    日志级别 (trace|debug|info|warn|error|fatal|panic|disabled 或 '*:[level],[key]:[level]') 
      --log_no_color        禁用彩色日志
      --trace               在出错时打印完整堆栈跟踪
```

### 另请参阅

* [zetacored tx gov](#zetacored-tx-gov)	- 治理模块的交易子命令


## zetacored tx gov vote

为活跃提案投票，选项包括 yes/no/no_with_veto/abstain。

### 概要

提交对活跃提案的投票，可通过 `zetacored query gov proposals` 查询 `proposal-id`。

示例：
```
$ zetacored tx gov vote 1 yes --from mykey
```

```
zetacored tx gov vote [proposal-id] [option] [flags]
```

### 选项

```
  -a, --account-number uint         签名账户的账号（仅离线模式）
      --aux                         生成辅助签名数据而不是发送交易
  -b, --broadcast-mode string       交易广播模式 (sync|async) 
      --chain-id string             网络链 ID
      --dry-run                     忽略 --gas 参数，模拟交易但不广播（启用时无法访问本地 Keybase）
      --fee-granter string          为交易提供费用的 fee granter 地址
      --fee-payer string            由该地址支付交易费用，而不是从签名者扣除
      --fees string                 交易需支付的费用，例如 10uatom
      --from string                 用于签名的私钥名称或地址
      --gas string                  每笔交易的 gas 上限；设置为 "auto" 可自动估算（注意 "auto" 可能并非精确结果，可设置有效的代币值微调，亦可替代 --fees）（默认 200000）
      --gas-adjustment float        与模拟返回的 gas 估值相乘的调整系数；若手动指定 gas 上限则忽略该参数（默认 1）
      --gas-prices string           以小数表示的 gas price，用于计算交易费用（如 0.1uatom）
      --generate-only               构建未签名交易并输出到标准输出（启用时仅在提供密钥名称的情况下访问本地 Keybase）
  -h, --help                        查看 vote 的帮助
      --keyring-backend string      选择 keyring 后端 (os|file|kwallet|pass|test|memory) 
      --keyring-dir string          客户端 keyring 目录；未指定则使用默认 home 目录
      --ledger                      使用已连接的 Ledger 设备
      --metadata string             指定投票的元数据
      --node string                 此链的 CometBFT RPC 地址 [host]:[port] 
      --note string                 为交易添加说明（旧参数 --memo）
      --offline                     离线模式（禁用所有联网功能）
  -o, --output string               输出格式 (text|json) 
  -s, --sequence uint               签名账户的 sequence（仅离线模式）
      --sign-mode string            选择签名模式 (direct|amino-json|direct-aux|textual)，属于高级选项
      --timeout-duration duration   TimeoutDuration 表示交易在内存池中保持有效的持续时间。交易的无序 nonce 将设为创建时间加该持续时长；若交易仍在内存池且区块时间超过提交时间加 TimeoutTimestamp，交易将被拒绝。
      --timeout-height uint         已弃用：请改用 --timeout-duration。设置区块超时高度，防止交易在超出该高度后被提交
      --tip string                  小费金额，将在目标链转给费用支付者。仅与 --aux 搭配时有效，若目标链未启用 TipDecorator 则忽略
      --unordered                   启用无序交易投递；须与 --timeout-duration 一起使用
  -y, --yes                         跳过交易广播时的确认提示
```

### 继承自父命令的选项

```
      --home string         配置和数据文件夹 
      --log_format string   日志格式 (json|plain) 
      --log_level string    日志级别 (trace|debug|info|warn|error|fatal|panic|disabled 或 '*:[level],[key]:[level]') 
      --log_no_color        禁用彩色日志
      --trace               在出错时打印完整堆栈跟踪
```

### 另请参阅

* [zetacored tx gov](#zetacored-tx-gov)	- 治理模块的交易子命令

## zetacored tx gov weighted-vote

按权重为活跃提案投票，选项包括 yes/no/no_with_veto/abstain。

### 概要

提交加权投票，可通过 `zetacored query gov proposals` 查询 `proposal-id`。

示例：
```
$ zetacored tx gov weighted-vote 1 yes=0.6,no=0.3,abstain=0.05,no_with_veto=0.05 --from mykey
```

```
zetacored tx gov weighted-vote [proposal-id] [weighted-options] [flags]
```

### 选项

```
  -a, --account-number uint         签名账户的账号（仅离线模式）
      --aux                         生成辅助签名数据而不是发送交易
  -b, --broadcast-mode string       交易广播模式 (sync|async) 
      --chain-id string             网络链 ID
      --dry-run                     忽略 --gas 参数，模拟交易但不广播（启用时无法访问本地 Keybase）
      --fee-granter string          为交易提供费用的 fee granter 地址
      --fee-payer string            由该地址支付交易费用，而不是从签名者扣除
      --fees string                 交易需支付的费用，例如 10uatom
      --from string                 用于签名的私钥名称或地址
      --gas string                  每笔交易的 gas 上限；设置为 "auto" 可自动估算（注意 "auto" 可能并非精确结果，可设置有效的代币值微调，亦可替代 --fees）（默认 200000）
      --gas-adjustment float        与模拟返回的 gas 估值相乘的调整系数；若手动指定 gas 上限则忽略该参数（默认 1）
      --gas-prices string           以小数表示的 gas price，用于计算交易费用（如 0.1uatom）
      --generate-only               构建未签名交易并输出到标准输出（启用时仅在提供密钥名称的情况下访问本地 Keybase）
  -h, --help                        查看 weighted-vote 的帮助
      --keyring-backend string      选择 keyring 后端 (os|file|kwallet|pass|test|memory) 
      --keyring-dir string          客户端 keyring 目录；未指定则使用默认 home 目录
      --ledger                      使用已连接的 Ledger 设备
      --metadata string             指定加权投票的元数据
      --node string                 此链的 CometBFT RPC 地址 [host]:[port] 
      --note string                 为交易添加说明（旧参数 --memo）
      --offline                     离线模式（禁用所有联网功能）
  -o, --output string               输出格式 (text|json) 
  -s, --sequence uint               签名账户的 sequence（仅离线模式）
      --sign-mode string            选择签名模式 (direct|amino-json|direct-aux|textual)，属于高级选项
      --timeout-duration duration   TimeoutDuration 表示交易在内存池中保持有效的持续时间。交易的无序 nonce 将设为创建时间加该持续时长；若交易仍在内存池且区块时间超过提交时间加 TimeoutTimestamp，交易将被拒绝。
      --timeout-height uint         已弃用：请改用 --timeout-duration。设置区块超时高度，防止交易在超出该高度后被提交
      --tip string                  小费金额，将在目标链转给费用支付者。仅与 --aux 搭配时有效，若目标链未启用 TipDecorator 则忽略
      --unordered                   启用无序交易投递；须与 --timeout-duration 一起使用
  -y, --yes                         跳过交易广播时的确认提示
```

### 继承自父命令的选项

```
      --home string         配置和数据文件夹 
      --log_format string   日志格式 (json|plain) 
      --log_level string    日志级别 (trace|debug|info|warn|error|fatal|panic|disabled 或 '*:[level],[key]:[level]') 
      --log_no_color        禁用彩色日志
      --trace               在出错时打印完整堆栈跟踪
```

### 另请参阅

* [zetacored tx gov](#zetacored-tx-gov)	- 治理模块的交易子命令


## zetacored tx group

群组模块的交易子命令

```
zetacored tx group [flags]
```

### 选项

```
  -h, --help   查看 group 的帮助
```

### 继承自父命令的选项

```
      --chain-id string     网络链 ID
      --home string         配置和数据文件夹 
      --log_format string   日志格式 (json|plain) 
      --log_level string    日志级别 (trace|debug|info|warn|error|fatal|panic|disabled 或 '*:[level],[key]:[level]') 
      --log_no_color        禁用彩色日志
      --trace               在出错时打印完整堆栈跟踪
```

### 另请参阅

* [zetacored tx](#zetacored-tx)	- 交易子命令集合
* [zetacored tx group create-group](#zetacored-tx-group-create-group)	- 创建群组：聚合成员账户及权重，并指定管理员
* [zetacored tx group create-group-policy](#zetacored-tx-group-create-group-policy)	- 创建群组策略账户（关联群组与决策策略），`--from` 由 [admin] 推断
* [zetacored tx group create-group-with-policy](#zetacored-tx-group-create-group-with-policy)	- 一次性创建群组及策略，含成员、管理员与决策策略
* [zetacored tx group draft-proposal](#zetacored-tx-group-draft-proposal)	- 生成仅含骨架消息的提案草稿 JSON
* [zetacored tx group exec](#zetacored-tx-group-exec)	- 执行提案
* [zetacored tx group leave-group](#zetacored-tx-group-leave-group)	- 将成员从群组中移除
* [zetacored tx group submit-proposal](#zetacored-tx-group-submit-proposal)	- 提交新提案
* [zetacored tx group update-group-admin](#zetacored-tx-group-update-group-admin)	- 更新群组管理员
* [zetacored tx group update-group-members](#zetacored-tx-group-update-group-members)	- 更新群组成员（权重设为 "0" 可删除成员）
* [zetacored tx group update-group-metadata](#zetacored-tx-group-update-group-metadata)	- 更新群组元数据
* [zetacored tx group update-group-policy-admin](#zetacored-tx-group-update-group-policy-admin)	- 更新群组策略管理员
* [zetacored tx group update-group-policy-decision-policy](#zetacored-tx-group-update-group-policy-decision-policy)	- 更新群组策略的决策策略
* [zetacored tx group update-group-policy-metadata](#zetacored-tx-group-update-group-policy-metadata)	- 更新群组策略元数据
* [zetacored tx group vote](#zetacored-tx-group-vote)	- 对提案进行投票
* [zetacored tx group withdraw-proposal](#zetacored-tx-group-withdraw-proposal)	- 撤回已提交的提案


## zetacored tx group create-group

创建群组，将成员账户及其权重聚合，并指定管理员账户。

### 概要

创建包含成员权重与管理员的群组。`--from` 参数会被忽略，因为已由 [admin] 推断。可通过成员 JSON 文件提供成员列表。

```
zetacored tx group create-group [admin] [metadata] [members-json-file] [flags]
```

### 示例

```

zetacored tx group create-group [admin] [metadata] [members-json-file]

其中 members.json 内容如下：

{
	"members": [
		{
			"address": "addr1",
			"weight": "1",
			"metadata": "some metadata"
		},
		{
			"address": "addr2",
			"weight": "1",
			"metadata": "some metadata"
		}
	]
}
```

### 选项

```
  -a, --account-number uint         签名账户的账号（仅离线模式）
      --aux                         生成辅助签名数据而不是发送交易
  -b, --broadcast-mode string       交易广播模式 (sync|async) 
      --chain-id string             网络链 ID
      --dry-run                     忽略 --gas 参数，模拟交易但不广播（启用时无法访问本地 Keybase）
      --fee-granter string          为交易提供费用的 fee granter 地址
      --fee-payer string            由该地址支付交易费用，而不是从签名者扣除
      --fees string                 交易需支付的费用，例如 10uatom
      --from string                 用于签名的私钥名称或地址
      --gas string                  每笔交易的 gas 上限；设置为 "auto" 可自动估算（注意 "auto" 可能并非精确结果，可设置有效的代币值微调，亦可替代 --fees）（默认 200000）
      --gas-adjustment float        与模拟返回的 gas 估值相乘的调整系数；若手动指定 gas 上限则忽略该参数（默认 1）
      --gas-prices string           以小数表示的 gas price，用于计算交易费用（如 0.1uatom）
      --generate-only               构建未签名交易并输出到标准输出（启用时仅在提供密钥名称的情况下访问本地 Keybase）
  -h, --help                        查看 create-group 的帮助
      --keyring-backend string      选择 keyring 后端 (os|file|kwallet|pass|test|memory) 
      --keyring-dir string          客户端 keyring 目录；未指定则使用默认 home 目录
      --ledger                      使用已连接的 Ledger 设备
      --node string                 此链的 CometBFT RPC 地址 [host]:[port] 
      --note string                 为交易添加说明（旧参数 --memo）
      --offline                     离线模式（禁用所有联网功能）
  -o, --output string               输出格式 (text|json) 
  -s, --sequence uint               签名账户的 sequence（仅离线模式）
      --sign-mode string            选择签名模式 (direct|amino-json|direct-aux|textual)，属于高级选项
      --timeout-duration duration   TimeoutDuration 表示交易在内存池中保持有效的持续时间。交易的无序 nonce 将设为创建时间加该持续时长；若交易仍在内存池且区块时间超过提交时间加 TimeoutTimestamp，交易将被拒绝。
      --timeout-height uint         已弃用：请改用 --timeout-duration。设置区块超时高度，防止交易在超出该高度后被提交
      --tip string                  小费金额，将在目标链转给费用支付者。仅与 --aux 搭配时有效，若目标链未启用 TipDecorator 则忽略
      --unordered                   启用无序交易投递；须与 --timeout-duration 一起使用
  -y, --yes                         跳过交易广播时的确认提示
```

### 继承自父命令的选项

```
      --home string         配置和数据文件夹 
      --log_format string   日志格式 (json|plain) 
      --log_level string    日志级别 (trace|debug|info|warn|error|fatal|panic|disabled 或 '*:[level],[key]:[level]') 
      --log_no_color        禁用彩色日志
      --trace               在出错时打印完整堆栈跟踪
```

### 另请参阅

* [zetacored tx group](#zetacored-tx-group)	- 群组模块的交易子命令


## zetacored tx group create-group-policy

创建群组策略账户（与群组及决策策略绑定）。`--from` 参数会被忽略，因为已由 [admin] 推断。

```
zetacored tx group create-group-policy [admin] [group-id] [metadata] [decision-policy-json-file] [flags]
```

### 示例

```

zetacored tx group create-group-policy [admin] [group-id] [metadata] policy.json

where policy.json contains:

{
    "@type": "/cosmos.group.v1.ThresholdDecisionPolicy",
    "threshold": "1",
    "windows": {
        "voting_period": "120h",
        "min_execution_period": "0s"
    }
}

Here, we can use percentage decision policy when needed, where 0 < percentage <= 1:

{
    "@type": "/cosmos.group.v1.PercentageDecisionPolicy",
    "percentage": "0.5",
    "windows": {
        "voting_period": "120h",
        "min_execution_period": "0s"
    }
}
```

### 选项

```
  -a, --account-number uint         签名账户的账号（仅离线模式）
      --aux                         生成辅助签名数据而不是发送交易
  -b, --broadcast-mode string       交易广播模式 (sync|async) 
      --chain-id string             网络链 ID
      --dry-run                     忽略 --gas 参数，模拟交易但不广播（启用时无法访问本地 Keybase）
      --fee-granter string          为交易提供费用的 fee granter 地址
      --fee-payer string            由该地址支付交易费用，而不是从签名者扣除
      --fees string                 交易需支付的费用，例如 10uatom
      --from string                 用于签名的私钥名称或地址
      --gas string                  每笔交易的 gas 上限；设置为 "auto" 可自动估算（注意 "auto" 可能并非精确结果，可设置有效的代币值微调，亦可替代 --fees）（默认 200000）
      --gas-adjustment float        与模拟返回的 gas 估值相乘的调整系数；若手动指定 gas 上限则忽略该参数（默认 1）
      --gas-prices string           以小数表示的 gas price，用于计算交易费用（如 0.1uatom）
      --generate-only               构建未签名交易并输出到标准输出（启用时仅在提供密钥名称的情况下访问本地 Keybase）
  -h, --help                        查看 create-group-policy 的帮助
      --keyring-backend string      选择 keyring 后端 (os|file|kwallet|pass|test|memory) 
      --keyring-dir string          客户端 keyring 目录；未指定则使用默认 home 目录
      --ledger                      使用已连接的 Ledger 设备
      --node string                 此链的 CometBFT RPC 地址 [host]:[port] 
      --note string                 为交易添加说明（旧参数 --memo）
      --offline                     离线模式（禁用所有联网功能）
  -o, --output string               输出格式 (text|json) 
  -s, --sequence uint               签名账户的 sequence（仅离线模式）
      --sign-mode string            选择签名模式 (direct|amino-json|direct-aux|textual)，属于高级选项
      --timeout-duration duration   TimeoutDuration 表示交易在内存池中保持有效的持续时间。交易的无序 nonce 将设为创建时间加该持续时长；若交易仍在内存池且区块时间超过提交时间加 TimeoutTimestamp，交易将被拒绝。
      --timeout-height uint         已弃用：请改用 --timeout-duration。设置区块超时高度，防止交易在超出该高度后被提交
      --tip string                  小费金额，将在目标链转给费用支付者。仅与 --aux 搭配时有效，若目标链未启用 TipDecorator 则忽略
      --unordered                   启用无序交易投递；须与 --timeout-duration 一起使用
  -y, --yes                         跳过交易广播时的确认提示
```

### 继承自父命令的选项

```
      --home string         配置和数据文件夹 
      --log_format string   日志格式 (json|plain) 
      --log_level string    日志级别 (trace|debug|info|warn|error|fatal|panic|disabled 或 '*:[level],[key]:[level]') 
      --log_no_color        禁用彩色日志
      --trace               在出错时打印完整堆栈跟踪
```

### 另请参阅

* [zetacored tx group](#zetacored-tx-group)	- 群组模块的交易子命令


## zetacored tx group create-group-with-policy

创建包含成员、管理员与决策策略的群组，并同步生成群组策略账户。

### 概要

创建带策略的群组，可通过成员 JSON 文件提供成员数组。`--from` 参数由 [admin] 推断。若 `--group-policy-as-admin` 为 true，则新建群组及策略的管理员将设为群组策略自身地址。

```
zetacored tx group create-group-with-policy [admin] [group-metadata] [group-policy-metadata] [members-json-file] [decision-policy-json-file] [flags]
```

### 示例

```

zetacored tx group create-group-with-policy [admin] [group-metadata] [group-policy-metadata] members.json policy.json

where members.json contains:

{
	"members": [
		{
			"address": "addr1",
			"weight": "1",
			"metadata": "some metadata"
		},
		{
			"address": "addr2",
			"weight": "1",
			"metadata": "some metadata"
		}
	]
}

and policy.json contains:

{
    "@type": "/cosmos.group.v1.ThresholdDecisionPolicy",
    "threshold": "1",
    "windows": {
        "voting_period": "120h",
        "min_execution_period": "0s"
    }
}

```

### 选项

```
  -a, --account-number uint         签名账户的账号（仅离线模式）
      --aux                         生成辅助签名数据而不是发送交易
  -b, --broadcast-mode string       交易广播模式 (sync|async) 
      --chain-id string             网络链 ID
      --dry-run                     忽略 --gas 参数，模拟交易但不广播（启用时无法访问本地 Keybase）
      --fee-granter string          为交易提供费用的 fee granter 地址
      --fee-payer string            由该地址支付交易费用，而不是从签名者扣除
      --fees string                 交易需支付的费用，例如 10uatom
      --from string                 用于签名的私钥名称或地址
      --gas string                  每笔交易的 gas 上限；设置为 "auto" 可自动估算（注意 "auto" 可能并非精确结果，可设置有效的代币值微调，亦可替代 --fees）（默认 200000）
      --gas-adjustment float        与模拟返回的 gas 估值相乘的调整系数；若手动指定 gas 上限则忽略该参数（默认 1）
      --gas-prices string           以小数表示的 gas price，用于计算交易费用（如 0.1uatom）
      --generate-only               构建未签名交易并输出到标准输出（启用时仅在提供密钥名称的情况下访问本地 Keybase）
      --group-policy-as-admin       若为 true，则新建群组与策略的管理员设置为该策略地址本身
  -h, --help                        查看 create-group-with-policy 的帮助
      --keyring-backend string      选择 keyring 后端 (os|file|kwallet|pass|test|memory) 
      --keyring-dir string          客户端 keyring 目录；未指定则使用默认 home 目录
      --ledger                      使用已连接的 Ledger 设备
      --node string                 此链的 CometBFT RPC 地址 [host]:[port] 
      --note string                 为交易添加说明（旧参数 --memo）
      --offline                     离线模式（禁用所有联网功能）
  -o, --output string               输出格式 (text|json) 
  -s, --sequence uint               签名账户的 sequence（仅离线模式）
      --sign-mode string            选择签名模式 (direct|amino-json|direct-aux|textual)，属于高级选项
      --timeout-duration duration   TimeoutDuration 表示交易在内存池中保持有效的持续时间。交易的无序 nonce 将设为创建时间加该持续时长；若交易仍在内存池且区块时间超过提交时间加 TimeoutTimestamp，交易将被拒绝。
      --timeout-height uint         已弃用：请改用 --timeout-duration。设置区块超时高度，防止交易在超出该高度后被提交
      --tip string                  小费金额，将在目标链转给费用支付者。仅与 --aux 搭配时有效，若目标链未启用 TipDecorator 则忽略
      --unordered                   启用无序交易投递；须与 --timeout-duration 一起使用
  -y, --yes                         跳过交易广播时的确认提示
```

### 继承自父命令的选项

```
      --home string         配置和数据文件夹 
      --log_format string   日志格式 (json|plain) 
      --log_level string    日志级别 (trace|debug|info|warn|error|fatal|panic|disabled 或 '*:[level],[key]:[level]') 
      --log_no_color        禁用彩色日志
      --trace               在出错时打印完整堆栈跟踪
```

### 另请参阅

* [zetacored tx group](#zetacored-tx-group)	- 群组模块的交易子命令


## zetacored tx group draft-proposal

生成群组提案草稿 JSON 文件（仅包含单条消息骨架）。

```
zetacored tx group draft-proposal [flags]
```

### 选项

```
  -a, --account-number uint         签名账户的账号（仅离线模式）
      --aux                         生成辅助签名数据而不是发送交易
  -b, --broadcast-mode string       交易广播模式 (sync|async) 
      --chain-id string             网络链 ID
      --dry-run                     忽略 --gas 参数，模拟交易但不广播（启用时无法访问本地 Keybase）
      --fee-granter string          为交易提供费用的 fee granter 地址
      --fee-payer string            由该地址支付交易费用，而不是从签名者扣除
      --fees string                 交易需支付的费用，例如 10uatom
      --from string                 用于签名的私钥名称或地址
      --gas string                  每笔交易的 gas 上限；设置为 "auto" 可自动估算（注意 "auto" 可能并非精确结果，可设置有效的代币值微调，亦可替代 --fees）（默认 200000）
      --gas-adjustment float        与模拟返回的 gas 估值相乘的调整系数；若手动指定 gas 上限则忽略该参数（默认 1）
      --gas-prices string           以小数表示的 gas price，用于计算交易费用（如 0.1uatom）
      --generate-only               构建未签名交易并输出到标准输出（启用时仅在提供密钥名称的情况下访问本地 Keybase）
  -h, --help                        查看 draft-proposal 的帮助
      --keyring-backend string      选择 keyring 后端 (os|file|kwallet|pass|test|memory) 
      --keyring-dir string          客户端 keyring 目录；未指定则使用默认 home 目录
      --ledger                      使用已连接的 Ledger 设备
      --node string                 此链的 CometBFT RPC 地址 [host]:[port] 
      --note string                 为交易添加说明（旧参数 --memo）
      --offline                     离线模式（禁用所有联网功能）
  -o, --output string               输出格式 (text|json) 
  -s, --sequence uint               签名账户的 sequence（仅离线模式）
      --sign-mode string            选择签名模式 (direct|amino-json|direct-aux|textual)，属于高级选项
      --skip-metadata               跳过元数据提示
      --timeout-duration duration   TimeoutDuration 表示交易在内存池中保持有效的持续时间。交易的无序 nonce 将设为创建时间加该持续时长；若交易仍在内存池且区块时间超过提交时间加 TimeoutTimestamp，交易将被拒绝。
      --timeout-height uint         已弃用：请改用 --timeout-duration。设置区块超时高度，防止交易在超出该高度后被提交
      --tip string                  小费金额，将在目标链转给费用支付者。仅与 --aux 搭配时有效，若目标链未启用 TipDecorator 则忽略
      --unordered                   启用无序交易投递；须与 --timeout-duration 一起使用
  -y, --yes                         跳过交易广播时的确认提示
```

### 继承自父命令的选项

```
      --home string         配置和数据文件夹 
      --log_format string   日志格式 (json|plain) 
      --log_level string    日志级别 (trace|debug|info|warn|error|fatal|panic|disabled 或 '*:[level],[key]:[level]') 
      --log_no_color        禁用彩色日志
      --trace               在出错时打印完整堆栈跟踪
```

### 另请参阅

* [zetacored tx group](#zetacored-tx-group)	- 群组模块的交易子命令


## zetacored tx group exec

执行提案。

```
zetacored tx group exec [proposal-id] [flags]
```

### 选项

```
  -a, --account-number uint         签名账户的账号（仅离线模式）
      --aux                         生成辅助签名数据而不是发送交易
  -b, --broadcast-mode string       交易广播模式 (sync|async) 
      --chain-id string             网络链 ID
      --dry-run                     忽略 --gas 参数，模拟交易但不广播（启用时无法访问本地 Keybase）
      --fee-granter string          为交易提供费用的 fee granter 地址
      --fee-payer string            由该地址支付交易费用，而不是从签名者扣除
      --fees string                 交易需支付的费用，例如 10uatom
      --from string                 用于签名的私钥名称或地址
      --gas string                  每笔交易的 gas 上限；设置为 "auto" 可自动估算（注意 "auto" 可能并非精确结果，可设置有效的代币值微调，亦可替代 --fees）（默认 200000）
      --gas-adjustment float        与模拟返回的 gas 估值相乘的调整系数；若手动指定 gas 上限则忽略该参数（默认 1）
      --gas-prices string           以小数表示的 gas price，用于计算交易费用（如 0.1uatom）
      --generate-only               构建未签名交易并输出到标准输出（启用时仅在提供密钥名称的情况下访问本地 Keybase）
  -h, --help                        查看 exec 的帮助
      --keyring-backend string      选择 keyring 后端 (os|file|kwallet|pass|test|memory) 
      --keyring-dir string          客户端 keyring 目录；未指定则使用默认 home 目录
      --ledger                      使用已连接的 Ledger 设备
      --node string                 此链的 CometBFT RPC 地址 [host]:[port] 
      --note string                 为交易添加说明（旧参数 --memo）
      --offline                     离线模式（禁用所有联网功能）
  -o, --output string               输出格式 (text|json) 
  -s, --sequence uint               签名账户的 sequence（仅离线模式）
      --sign-mode string            选择签名模式 (direct|amino-json|direct-aux|textual)，属于高级选项
      --timeout-duration duration   TimeoutDuration 表示交易在内存池中保持有效的持续时间。交易的无序 nonce 将设为创建时间加该持续时长；若交易仍在内存池且区块时间超过提交时间加 TimeoutTimestamp，交易将被拒绝。
      --timeout-height uint         已弃用：请改用 --timeout-duration。设置区块超时高度，防止交易在超出该高度后被提交
      --tip string                  小费金额，将在目标链转给费用支付者。仅与 --aux 搭配时有效，若目标链未启用 TipDecorator 则忽略
      --unordered                   启用无序交易投递；须与 --timeout-duration 一起使用
  -y, --yes                         跳过交易广播时的确认提示
```

### 继承自父命令的选项

```
      --home string         配置和数据文件夹 
      --log_format string   日志格式 (json|plain) 
      --log_level string    日志级别 (trace|debug|info|warn|error|fatal|panic|disabled 或 '*:[level],[key]:[level]') 
      --log_no_color        禁用彩色日志
      --trace               在出错时打印完整堆栈跟踪
```

### 另请参阅

* [zetacored tx group](#zetacored-tx-group)	- 群组模块的交易子命令


## zetacored tx group leave-group

将成员从群组中移除。

### 概要

移除群组成员。

参数：
	group-id：群组唯一 ID
	member-address：群组成员的账户地址
	注意：`--from` 参数会被忽略，因为已由 [member-address] 推断

```
zetacored tx group leave-group [member-address] [group-id] [flags]
```

### 选项

```
  -a, --account-number uint         签名账户的账号（仅离线模式）
      --aux                         生成辅助签名数据而不是发送交易
  -b, --broadcast-mode string       交易广播模式 (sync|async) 
      --chain-id string             网络链 ID
      --dry-run                     忽略 --gas 参数，模拟交易但不广播（启用时无法访问本地 Keybase）
      --fee-granter string          为交易提供费用的 fee granter 地址
      --fee-payer string            由该地址支付交易费用，而不是从签名者扣除
      --fees string                 交易需支付的费用，例如 10uatom
      --from string                 用于签名的私钥名称或地址
      --gas string                  每笔交易的 gas 上限；设置为 "auto" 可自动估算（注意 "auto" 可能并非精确结果，可设置有效的代币值微调，亦可替代 --fees）（默认 200000）
      --gas-adjustment float        与模拟返回的 gas 估值相乘的调整系数；若手动指定 gas 上限则忽略该参数（默认 1）
      --gas-prices string           以小数表示的 gas price，用于计算交易费用（如 0.1uatom）
      --generate-only               构建未签名交易并输出到标准输出（启用时仅在提供密钥名称的情况下访问本地 Keybase）
  -h, --help                        查看 leave-group 的帮助
      --keyring-backend string      选择 keyring 后端 (os|file|kwallet|pass|test|memory) 
      --keyring-dir string          客户端 keyring 目录；未指定则使用默认 home 目录
      --ledger                      使用已连接的 Ledger 设备
      --node string                 此链的 CometBFT RPC 地址 [host]:[port] 
      --note string                 为交易添加说明（旧参数 --memo）
      --offline                     离线模式（禁用所有联网功能）
  -o, --output string               输出格式 (text|json) 
  -s, --sequence uint               签名账户的 sequence（仅离线模式）
      --sign-mode string            选择签名模式 (direct|amino-json|direct-aux|textual)，属于高级选项
      --timeout-duration duration   TimeoutDuration 表示交易在内存池中保持有效的持续时间。交易的无序 nonce 将设为创建时间加该持续时长；若交易仍在内存池且区块时间超过提交时间加 TimeoutTimestamp，交易将被拒绝。
      --timeout-height uint         已弃用：请改用 --timeout-duration。设置区块超时高度，防止交易在超出该高度后被提交
      --tip string                  小费金额，将在目标链转给费用支付者。仅与 --aux 搭配时有效，若目标链未启用 TipDecorator 则忽略
      --unordered                   启用无序交易投递；须与 --timeout-duration 一起使用
  -y, --yes                         跳过交易广播时的确认提示
```

### 继承自父命令的选项

```
      --home string         配置和数据文件夹 
      --log_format string   日志格式 (json|plain) 
      --log_level string    日志级别 (trace|debug|info|warn|error|fatal|panic|disabled 或 '*:[level],[key]:[level]') 
      --log_no_color        禁用彩色日志
      --trace               在出错时打印完整堆栈跟踪
```

### 另请参阅

* [zetacored tx group](#zetacored-tx-group)	- 群组模块的交易子命令


## zetacored tx group submit-proposal

提交新的群组提案。

### 概要

提交新的提案。
参数：
	msg_tx_json_file：执行通过后的消息 JSON 文件路径。

```
zetacored tx group submit-proposal [proposal_json_file] [flags]
```

### 示例

```

zetacored tx group submit-proposal path/to/proposal.json
	
	其中 proposal.json 内容如下：

{
	"group_policy_address": "cosmos1...",
	// array of proto-JSON-encoded sdk.Msgs
	"messages": [
	{
		"@type": "/cosmos.bank.v1beta1.MsgSend",
		"from_address": "cosmos1...",
		"to_address": "cosmos1...",
		"amount":[{"denom": "stake","amount": "10"}]
	}
	],
	// metadata can be any of base64 encoded, raw text, stringified json, IPFS link to json
	// see below for example metadata
	"metadata": "4pIMOgIGx1vZGU=", // base64-encoded metadata
	"title": "My proposal",
	"summary": "This is a proposal to send 10 stake to cosmos1...",
	"proposers": ["cosmos1...", "cosmos1..."],
}

metadata example: 
{
	"title": "",
	"authors": [""],
	"summary": "",
	"details": "", 
	"proposal_forum_url": "",
	"vote_option_context": "",
} 

```

### 选项

```
  -a, --account-number uint         签名账户的账号（仅离线模式）
      --aux                         生成辅助签名数据而不是发送交易
  -b, --broadcast-mode string       交易广播模式 (sync|async) 
      --chain-id string             网络链 ID
      --dry-run                     忽略 --gas 参数，模拟交易但不广播（启用时无法访问本地 Keybase）
      --exec string                 设为 1 或 'try' 可在创建后尝试立即执行提案（提案人的签名视为同意票）
      --fee-granter string          为交易提供费用的 fee granter 地址
      --fee-payer string            由该地址支付交易费用，而不是从签名者扣除
      --fees string                 交易需支付的费用，例如 10uatom
      --from string                 用于签名的私钥名称或地址
      --gas string                  每笔交易的 gas 上限；设置为 "auto" 可自动估算（注意 "auto" 可能并非精确结果，可设置有效的代币值微调，亦可替代 --fees）（默认 200000）
      --gas-adjustment float        与模拟返回的 gas 估值相乘的调整系数；若手动指定 gas 上限则忽略该参数（默认 1）
      --gas-prices string           以小数表示的 gas price，用于计算交易费用（如 0.1uatom）
      --generate-only               构建未签名交易并输出到标准输出（启用时仅在提供密钥名称的情况下访问本地 Keybase）
  -h, --help                        查看 submit-proposal 的帮助
      --keyring-backend string      选择 keyring 后端 (os|file|kwallet|pass|test|memory) 
      --keyring-dir string          客户端 keyring 目录；未指定则使用默认 home 目录
      --ledger                      使用已连接的 Ledger 设备
      --node string                 此链的 CometBFT RPC 地址 [host]:[port] 
      --note string                 为交易添加说明（旧参数 --memo）
      --offline                     离线模式（禁用所有联网功能）
  -o, --output string               输出格式 (text|json) 
  -s, --sequence uint               签名账户的 sequence（仅离线模式）
      --sign-mode string            选择签名模式 (direct|amino-json|direct-aux|textual)，属于高级选项
      --timeout-duration duration   TimeoutDuration 表示交易在内存池中保持有效的持续时间。交易的无序 nonce 将设为创建时间加该持续时长；若交易仍在内存池且区块时间超过提交时间加 TimeoutTimestamp，交易将被拒绝。
      --timeout-height uint         已弃用：请改用 --timeout-duration。设置区块超时高度，防止交易在超出该高度后被提交
      --tip string                  小费金额，将在目标链转给费用支付者。仅与 --aux 搭配时有效，若目标链未启用 TipDecorator 则忽略
      --unordered                   启用无序交易投递；须与 --timeout-duration 一起使用
  -y, --yes                         跳过交易广播时的确认提示
```

### 继承自父命令的选项

```
      --home string         配置和数据文件夹 
      --log_format string   日志格式 (json|plain) 
      --log_level string    日志级别 (trace|debug|info|warn|error|fatal|panic|disabled 或 '*:[level],[key]:[level]') 
      --log_no_color        禁用彩色日志
      --trace               在出错时打印完整堆栈跟踪
```

### 另请参阅

* [zetacored tx group](#zetacored-tx-group)	- 群组模块的交易子命令


## zetacored tx group update-group-admin

更新群组管理员。

```
zetacored tx group update-group-admin [admin] [group-id] [new-admin] [flags]
```

### 选项

```
  -a, --account-number uint         签名账户的账号（仅离线模式）
      --aux                         生成辅助签名数据而不是发送交易
  -b, --broadcast-mode string       交易广播模式 (sync|async) 
      --chain-id string             网络链 ID
      --dry-run                     忽略 --gas 参数，模拟交易但不广播（启用时无法访问本地 Keybase）
      --fee-granter string          为交易提供费用的 fee granter 地址
      --fee-payer string            由该地址支付交易费用，而不是从签名者扣除
      --fees string                 交易需支付的费用，例如 10uatom
      --from string                 用于签名的私钥名称或地址
      --gas string                  每笔交易的 gas 上限；设置为 "auto" 可自动估算（注意 "auto" 可能并非精确结果，可设置有效的代币值微调，亦可替代 --fees）（默认 200000）
      --gas-adjustment float        与模拟返回的 gas 估值相乘的调整系数；若手动指定 gas 上限则忽略该参数（默认 1）
      --gas-prices string           以小数表示的 gas price，用于计算交易费用（如 0.1uatom）
      --generate-only               构建未签名交易并输出到标准输出（启用时仅在提供密钥名称的情况下访问本地 Keybase）
  -h, --help                        查看 update-group-admin 的帮助
      --keyring-backend string      选择 keyring 后端 (os|file|kwallet|pass|test|memory) 
      --keyring-dir string          客户端 keyring 目录；未指定则使用默认 home 目录
      --ledger                      使用已连接的 Ledger 设备
      --node string                 此链的 CometBFT RPC 地址 [host]:[port] 
      --note string                 为交易添加说明（旧参数 --memo）
      --offline                     离线模式（禁用所有联网功能）
  -o, --output string               输出格式 (text|json) 
  -s, --sequence uint               签名账户的 sequence（仅离线模式）
      --sign-mode string            选择签名模式 (direct|amino-json|direct-aux|textual)，属于高级选项
      --timeout-duration duration   TimeoutDuration 表示交易在内存池中保持有效的持续时间。交易的无序 nonce 将设为创建时间加该持续时长；若交易仍在内存池且区块时间超过提交时间加 TimeoutTimestamp，交易将被拒绝。
      --timeout-height uint         已弃用：请改用 --timeout-duration。设置区块超时高度，防止交易在超出该高度后被提交
      --tip string                  小费金额，将在目标链转给费用支付者。仅与 --aux 搭配时有效，若目标链未启用 TipDecorator 则忽略
      --unordered                   启用无序交易投递；须与 --timeout-duration 一起使用
  -y, --yes                         跳过交易广播时的确认提示
```

### 继承自父命令的选项

```
      --home string         配置和数据文件夹 
      --log_format string   日志格式 (json|plain) 
      --log_level string    日志级别 (trace|debug|info|warn|error|fatal|panic|disabled 或 '*:[level],[key]:[level]') 
      --log_no_color        禁用彩色日志
      --trace               在出错时打印完整堆栈跟踪
```

### 另请参阅

* [zetacored tx group](#zetacored-tx-group)	- 群组模块的交易子命令


## zetacored tx group update-group-members

更新群组成员。将成员权重设为 "0" 即可删除该成员。

```
zetacored tx group update-group-members [admin] [group-id] [members-json-file] [flags]
```

### 示例

```

zetacored tx group update-group-members [admin] [group-id] [members-json-file]

其中 members.json 内容如下：

{
	"members": [
		{
			"address": "addr1",
			"weight": "1",
			"metadata": "some new metadata"
		},
		{
			"address": "addr2",
			"weight": "0",
			"metadata": "some metadata"
		}
	]
}

Set a member's weight to "0" to delete it.

```

### 选项

```
  -a, --account-number uint         签名账户的账号（仅离线模式）
      --aux                         生成辅助签名数据而不是发送交易
  -b, --broadcast-mode string       交易广播模式 (sync|async) 
      --chain-id string             网络链 ID
      --dry-run                     忽略 --gas 参数，模拟交易但不广播（启用时无法访问本地 Keybase）
      --fee-granter string          为交易提供费用的 fee granter 地址
      --fee-payer string            由该地址支付交易费用，而不是从签名者扣除
      --fees string                 交易需支付的费用，例如 10uatom
      --from string                 用于签名的私钥名称或地址
      --gas string                  每笔交易的 gas 上限；设置为 "auto" 可自动估算（注意 "auto" 可能并非精确结果，可设置有效的代币值微调，亦可替代 --fees）（默认 200000）
      --gas-adjustment float        与模拟返回的 gas 估值相乘的调整系数；若手动指定 gas 上限则忽略该参数（默认 1）
      --gas-prices string           以小数表示的 gas price，用于计算交易费用（如 0.1uatom）
      --generate-only               构建未签名交易并输出到标准输出（启用时仅在提供密钥名称的情况下访问本地 Keybase）
  -h, --help                        查看 update-group-members 的帮助
      --keyring-backend string      选择 keyring 后端 (os|file|kwallet|pass|test|memory) 
      --keyring-dir string          客户端 keyring 目录；未指定则使用默认 home 目录
      --ledger                      使用已连接的 Ledger 设备
      --node string                 此链的 CometBFT RPC 地址 [host]:[port] 
      --note string                 为交易添加说明（旧参数 --memo）
      --offline                     离线模式（禁用所有联网功能）
  -o, --output string               输出格式 (text|json) 
  -s, --sequence uint               签名账户的 sequence（仅离线模式）
      --sign-mode string            选择签名模式 (direct|amino-json|direct-aux|textual)，属于高级选项
      --timeout-duration duration   TimeoutDuration 表示交易在内存池中保持有效的持续时间。交易的无序 nonce 将设为创建时间加该持续时长；若交易仍在内存池且区块时间超过提交时间加 TimeoutTimestamp，交易将被拒绝。
      --timeout-height uint         已弃用：请改用 --timeout-duration。设置区块超时高度，防止交易在超出该高度后被提交
      --tip string                  小费金额，将在目标链转给费用支付者。仅与 --aux 搭配时有效，若目标链未启用 TipDecorator 则忽略
      --unordered                   启用无序交易投递；须与 --timeout-duration 一起使用
  -y, --yes                         跳过交易广播时的确认提示
```

### 继承自父命令的选项

```
      --home string         配置和数据文件夹 
      --log_format string   日志格式 (json|plain) 
      --log_level string    日志级别 (trace|debug|info|warn|error|fatal|panic|disabled 或 '*:[level],[key]:[level]') 
      --log_no_color        禁用彩色日志
      --trace               在出错时打印完整堆栈跟踪
```

### 另请参阅

* [zetacored tx group](#zetacored-tx-group)	- 群组模块的交易子命令


## zetacored tx group update-group-metadata

更新群组元数据。

```
zetacored tx group update-group-metadata [admin] [group-id] [metadata] [flags]
```

### 选项

```
  -a, --account-number uint         签名账户的账号（仅离线模式）
      --aux                         生成辅助签名数据而不是发送交易
  -b, --broadcast-mode string       交易广播模式 (sync|async) 
      --chain-id string             网络链 ID
      --dry-run                     忽略 --gas 参数，模拟交易但不广播（启用时无法访问本地 Keybase）
      --fee-granter string          为交易提供费用的 fee granter 地址
      --fee-payer string            由该地址支付交易费用，而不是从签名者扣除
      --fees string                 交易需支付的费用，例如 10uatom
      --from string                 用于签名的私钥名称或地址
      --gas string                  每笔交易的 gas 上限；设置为 "auto" 可自动估算（注意 "auto" 可能并非精确结果，可设置有效的代币值微调，亦可替代 --fees）（默认 200000）
      --gas-adjustment float        与模拟返回的 gas 估值相乘的调整系数；若手动指定 gas 上限则忽略该参数（默认 1）
      --gas-prices string           以小数表示的 gas price，用于计算交易费用（如 0.1uatom）
      --generate-only               构建未签名交易并输出到标准输出（启用时仅在提供密钥名称的情况下访问本地 Keybase）
  -h, --help                        查看 update-group-metadata 的帮助
      --keyring-backend string      选择 keyring 后端 (os|file|kwallet|pass|test|memory) 
      --keyring-dir string          客户端 keyring 目录；未指定则使用默认 home 目录
      --ledger                      使用已连接的 Ledger 设备
      --node string                 此链的 CometBFT RPC 地址 [host]:[port] 
      --note string                 为交易添加说明（旧参数 --memo）
      --offline                     离线模式（禁用所有联网功能）
  -o, --output string               输出格式 (text|json) 
  -s, --sequence uint               签名账户的 sequence（仅离线模式）
      --sign-mode string            选择签名模式 (direct|amino-json|direct-aux|textual)，属于高级选项
      --timeout-duration duration   TimeoutDuration 表示交易在内存池中保持有效的持续时间。交易的无序 nonce 将设为创建时间加该持续时长；若交易仍在内存池且区块时间超过提交时间加 TimeoutTimestamp，交易将被拒绝。
      --timeout-height uint         已弃用：请改用 --timeout-duration。设置区块超时高度，防止交易在超出该高度后被提交
      --tip string                  小费金额，将在目标链转给费用支付者。仅与 --aux 搭配时有效，若目标链未启用 TipDecorator 则忽略
      --unordered                   启用无序交易投递；须与 --timeout-duration 一起使用
  -y, --yes                         跳过交易广播时的确认提示
```

### 继承自父命令的选项

```
      --home string         配置和数据文件夹 
      --log_format string   日志格式 (json|plain) 
      --log_level string    日志级别 (trace|debug|info|warn|error|fatal|panic|disabled 或 '*:[level],[key]:[level]') 
      --log_no_color        禁用彩色日志
      --trace               在出错时打印完整堆栈跟踪
```

### 另请参阅

* [zetacored tx group](#zetacored-tx-group)	- 群组模块的交易子命令


## zetacored tx group update-group-policy-admin

更新群组策略管理员。

```
zetacored tx group update-group-policy-admin [admin] [group-policy-account] [new-admin] [flags]
```

### 选项

```
  -a, --account-number uint         签名账户的账号（仅离线模式）
      --aux                         生成辅助签名数据而不是发送交易
  -b, --broadcast-mode string       交易广播模式 (sync|async) 
      --chain-id string             网络链 ID
      --dry-run                     忽略 --gas 参数，模拟交易但不广播（启用时无法访问本地 Keybase）
      --fee-granter string          为交易提供费用的 fee granter 地址
      --fee-payer string            由该地址支付交易费用，而不是从签名者扣除
      --fees string                 交易需支付的费用，例如 10uatom
      --from string                 用于签名的私钥名称或地址
      --gas string                  每笔交易的 gas 上限；设置为 "auto" 可自动估算（注意 "auto" 可能并非精确结果，可设置有效的代币值微调，亦可替代 --fees）（默认 200000）
      --gas-adjustment float        与模拟返回的 gas 估值相乘的调整系数；若手动指定 gas 上限则忽略该参数（默认 1）
      --gas-prices string           以小数表示的 gas price，用于计算交易费用（如 0.1uatom）
      --generate-only               构建未签名交易并输出到标准输出（启用时仅在提供密钥名称的情况下访问本地 Keybase）
  -h, --help                        查看 update-group-policy-admin 的帮助
      --keyring-backend string      选择 keyring 后端 (os|file|kwallet|pass|test|memory) 
      --keyring-dir string          客户端 keyring 目录；未指定则使用默认 home 目录
      --ledger                      使用已连接的 Ledger 设备
      --node string                 此链的 CometBFT RPC 地址 [host]:[port] 
      --note string                 为交易添加说明（旧参数 --memo）
      --offline                     离线模式（禁用所有联网功能）
  -o, --output string               输出格式 (text|json) 
  -s, --sequence uint               签名账户的 sequence（仅离线模式）
      --sign-mode string            选择签名模式 (direct|amino-json|direct-aux|textual)，属于高级选项
      --timeout-duration duration   TimeoutDuration 表示交易在内存池中保持有效的持续时间。交易的无序 nonce 将设为创建时间加该持续时长；若交易仍在内存池且区块时间超过提交时间加 TimeoutTimestamp，交易将被拒绝。
      --timeout-height uint         已弃用：请改用 --timeout-duration。设置区块超时高度，防止交易在超出该高度后被提交
      --tip string                  小费金额，将在目标链转给费用支付者。仅与 --aux 搭配时有效，若目标链未启用 TipDecorator 则忽略
      --unordered                   启用无序交易投递；须与 --timeout-duration 一起使用
  -y, --yes                         跳过交易广播时的确认提示
```

### 继承自父命令的选项

```
      --home string         配置和数据文件夹 
      --log_format string   日志格式 (json|plain) 
      --log_level string    日志级别 (trace|debug|info|warn|error|fatal|panic|disabled 或 '*:[level],[key]:[level]') 
      --log_no_color        禁用彩色日志
      --trace               在出错时打印完整堆栈跟踪
```

### 另请参阅

* [zetacored tx group](#zetacored-tx-group)	- 群组模块的交易子命令


## zetacored tx group update-group-policy-decision-policy

更新群组策略的决策策略。

```
zetacored tx group update-group-policy-decision-policy [admin] [group-policy-account] [decision-policy-json-file] [flags]
```

### 选项

```
  -a, --account-number uint         签名账户的账号（仅离线模式）
      --aux                         生成辅助签名数据而不是发送交易
  -b, --broadcast-mode string       交易广播模式 (sync|async) 
      --chain-id string             网络链 ID
      --dry-run                     忽略 --gas 参数，模拟交易但不广播（启用时无法访问本地 Keybase）
      --fee-granter string          为交易提供费用的 fee granter 地址
      --fee-payer string            由该地址支付交易费用，而不是从签名者扣除
      --fees string                 交易需支付的费用，例如 10uatom
      --from string                 用于签名的私钥名称或地址
      --gas string                  每笔交易的 gas 上限；设置为 "auto" 可自动估算（注意 "auto" 可能并非精确结果，可设置有效的代币值微调，亦可替代 --fees）（默认 200000）
      --gas-adjustment float        与模拟返回的 gas 估值相乘的调整系数；若手动指定 gas 上限则忽略该参数（默认 1）
      --gas-prices string           以小数表示的 gas price，用于计算交易费用（如 0.1uatom）
      --generate-only               构建未签名交易并输出到标准输出（启用时仅在提供密钥名称的情况下访问本地 Keybase）
  -h, --help                        查看 update-group-policy-decision-policy 的帮助
      --keyring-backend string      选择 keyring 后端 (os|file|kwallet|pass|test|memory) 
      --keyring-dir string          客户端 keyring 目录；未指定则使用默认 home 目录
      --ledger                      使用已连接的 Ledger 设备
      --node string                 此链的 CometBFT RPC 地址 [host]:[port] 
      --note string                 为交易添加说明（旧参数 --memo）
      --offline                     离线模式（禁用所有联网功能）
  -o, --output string               输出格式 (text|json) 
  -s, --sequence uint               签名账户的 sequence（仅离线模式）
      --sign-mode string            选择签名模式 (direct|amino-json|direct-aux|textual)，属于高级选项
      --timeout-duration duration   TimeoutDuration 表示交易在内存池中保持有效的持续时间。交易的无序 nonce 将设为创建时间加该持续时长；若交易仍在内存池且区块时间超过提交时间加 TimeoutTimestamp，交易将被拒绝。
      --timeout-height uint         已弃用：请改用 --timeout-duration。设置区块超时高度，防止交易在超出该高度后被提交
      --tip string                  小费金额，将在目标链转给费用支付者。仅与 --aux 搭配时有效，若目标链未启用 TipDecorator 则忽略
      --unordered                   启用无序交易投递；须与 --timeout-duration 一起使用
  -y, --yes                         跳过交易广播时的确认提示
```

### 继承自父命令的选项

```
      --home string         配置和数据文件夹 
      --log_format string   日志格式 (json|plain) 
      --log_level string    日志级别 (trace|debug|info|warn|error|fatal|panic|disabled 或 '*:[level],[key]:[level]') 
      --log_no_color        禁用彩色日志
      --trace               在出错时打印完整堆栈跟踪
```

### 另请参阅

* [zetacored tx group](#zetacored-tx-group)	- 群组模块的交易子命令


## zetacored tx group update-group-policy-metadata

更新群组策略元数据。

```
zetacored tx group update-group-policy-metadata [admin] [group-policy-account] [new-metadata] [flags]
```

### 选项

```
  -a, --account-number uint         签名账户的账号（仅离线模式）
      --aux                         生成辅助签名数据而不是发送交易
  -b, --broadcast-mode string       交易广播模式 (sync|async) 
      --chain-id string             网络链 ID
      --dry-run                     忽略 --gas 参数，模拟交易但不广播（启用时无法访问本地 Keybase）
      --fee-granter string          为交易提供费用的 fee granter 地址
      --fee-payer string            由该地址支付交易费用，而不是从签名者扣除
      --fees string                 交易需支付的费用，例如 10uatom
      --from string                 用于签名的私钥名称或地址
      --gas string                  每笔交易的 gas 上限；设置为 "auto" 可自动估算（注意 "auto" 可能并非精确结果，可设置有效的代币值微调，亦可替代 --fees）（默认 200000）
      --gas-adjustment float        与模拟返回的 gas 估值相乘的调整系数；若手动指定 gas 上限则忽略该参数（默认 1）
      --gas-prices string           以小数表示的 gas price，用于计算交易费用（如 0.1uatom）
      --generate-only               构建未签名交易并输出到标准输出（启用时仅在提供密钥名称的情况下访问本地 Keybase）
  -h, --help                        查看 update-group-policy-metadata 的帮助
      --keyring-backend string      选择 keyring 后端 (os|file|kwallet|pass|test|memory) 
      --keyring-dir string          客户端 keyring 目录；未指定则使用默认 home 目录
      --ledger                      使用已连接的 Ledger 设备
      --node string                 此链的 CometBFT RPC 地址 [host]:[port] 
      --note string                 为交易添加说明（旧参数 --memo）
      --offline                     离线模式（禁用所有联网功能）
  -o, --output string               输出格式 (text|json) 
  -s, --sequence uint               签名账户的 sequence（仅离线模式）
      --sign-mode string            选择签名模式 (direct|amino-json|direct-aux|textual)，属于高级选项
      --timeout-duration duration   TimeoutDuration 表示交易在内存池中保持有效的持续时间。交易的无序 nonce 将设为创建时间加该持续时长；若交易仍在内存池且区块时间超过提交时间加 TimeoutTimestamp，交易将被拒绝。
      --timeout-height uint         已弃用：请改用 --timeout-duration。设置区块超时高度，防止交易在超出该高度后被提交
      --tip string                  小费金额，将在目标链转给费用支付者。仅与 --aux 搭配时有效，若目标链未启用 TipDecorator 则忽略
      --unordered                   启用无序交易投递；须与 --timeout-duration 一起使用
  -y, --yes                         跳过交易广播时的确认提示
```

### 继承自父命令的选项

```
      --home string         配置和数据文件夹 
      --log_format string   日志格式 (json|plain) 
      --log_level string    日志级别 (trace|debug|info|warn|error|fatal|panic|disabled 或 '*:[level],[key]:[level]') 
      --log_no_color        禁用彩色日志
      --trace               在出错时打印完整堆栈跟踪
```

### 另请参阅

* [zetacored tx group](#zetacored-tx-group)	- 群组模块的交易子命令


## zetacored tx group vote

对提案进行投票。

### 概要

对提案投票。

参数：
	proposal-id：提案唯一 ID
	voter：投票者地址
	vote-option：投票选项
		VOTE_OPTION_UNSPECIFIED：无操作
		VOTE_OPTION_NO：反对
		VOTE_OPTION_YES：赞成
		VOTE_OPTION_ABSTAIN：弃权
		VOTE_OPTION_NO_WITH_VETO：带否决的反对
	Metadata：投票的元数据

```
zetacored tx group vote [proposal-id] [voter] [vote-option] [metadata] [flags]
```

### 选项

```
  -a, --account-number uint         签名账户的账号（仅离线模式）
      --aux                         生成辅助签名数据而不是发送交易
  -b, --broadcast-mode string       交易广播模式 (sync|async) 
      --chain-id string             网络链 ID
      --dry-run                     忽略 --gas 参数，模拟交易但不广播（启用时无法访问本地 Keybase）
      --exec string                 设为 1 可在投票后尝试立即执行提案
      --fee-granter string          为交易提供费用的 fee granter 地址
      --fee-payer string            由该地址支付交易费用，而不是从签名者扣除
      --fees string                 交易需支付的费用，例如 10uatom
      --from string                 用于签名的私钥名称或地址
      --gas string                  每笔交易的 gas 上限；设置为 "auto" 可自动估算（注意 "auto" 可能并非精确结果，可设置有效的代币值微调，亦可替代 --fees）（默认 200000）
      --gas-adjustment float        与模拟返回的 gas 估值相乘的调整系数；若手动指定 gas 上限则忽略该参数（默认 1）
      --gas-prices string           以小数表示的 gas price，用于计算交易费用（如 0.1uatom）
      --generate-only               构建未签名交易并输出到标准输出（启用时仅在提供密钥名称的情况下访问本地 Keybase）
  -h, --help                        查看 vote 的帮助
      --keyring-backend string      选择 keyring 后端 (os|file|kwallet|pass|test|memory) 
      --keyring-dir string          客户端 keyring 目录；未指定则使用默认 home 目录
      --ledger                      使用已连接的 Ledger 设备
      --node string                 此链的 CometBFT RPC 地址 [host]:[port] 
      --note string                 为交易添加说明（旧参数 --memo）
      --offline                     离线模式（禁用所有联网功能）
  -o, --output string               输出格式 (text|json) 
  -s, --sequence uint               签名账户的 sequence（仅离线模式）
      --sign-mode string            选择签名模式 (direct|amino-json|direct-aux|textual)，属于高级选项
      --timeout-duration duration   TimeoutDuration 表示交易在内存池中保持有效的持续时间。交易的无序 nonce 将设为创建时间加该持续时长；若交易仍在内存池且区块时间超过提交时间加 TimeoutTimestamp，交易将被拒绝。
      --timeout-height uint         已弃用：请改用 --timeout-duration。设置区块超时高度，防止交易在超出该高度后被提交
      --tip string                  小费金额，将在目标链转给费用支付者。仅与 --aux 搭配时有效，若目标链未启用 TipDecorator 则忽略
      --unordered                   启用无序交易投递；须与 --timeout-duration 一起使用
  -y, --yes                         跳过交易广播时的确认提示
```

### 继承自父命令的选项

```
      --home string         配置和数据文件夹 
      --log_format string   日志格式 (json|plain) 
      --log_level string    日志级别 (trace|debug|info|warn|error|fatal|panic|disabled 或 '*:[level],[key]:[level]') 
      --log_no_color        禁用彩色日志
      --trace               在出错时打印完整堆栈跟踪
```

### 另请参阅

* [zetacored tx group](#zetacored-tx-group)	- 群组模块的交易子命令


## zetacored tx group withdraw-proposal

撤回已提交的提案。

### 概要

撤回已提交的提案。

参数：
	proposal-id：提案唯一 ID。
	group-policy-admin-or-proposer：群组策略管理员或任一提案人。
	注意：此处忽略 `--from` 参数。

```
zetacored tx group withdraw-proposal [proposal-id] [group-policy-admin-or-proposer] [flags]
```

### 选项

```
  -a, --account-number uint         签名账户的账号（仅离线模式）
      --aux                         生成辅助签名数据而不是发送交易
  -b, --broadcast-mode string       交易广播模式 (sync|async) 
      --chain-id string             网络链 ID
      --dry-run                     忽略 --gas 参数，模拟交易但不广播（启用时无法访问本地 Keybase）
      --fee-granter string          为交易提供费用的 fee granter 地址
      --fee-payer string            由该地址支付交易费用，而不是从签名者扣除
      --fees string                 交易需支付的费用，例如 10uatom
      --from string                 用于签名的私钥名称或地址
      --gas string                  每笔交易的 gas 上限；设置为 "auto" 可自动估算（注意 "auto" 可能并非精确结果，可设置有效的代币值微调，亦可替代 --fees）（默认 200000）
      --gas-adjustment float        与模拟返回的 gas 估值相乘的调整系数；若手动指定 gas 上限则忽略该参数（默认 1）
      --gas-prices string           以小数表示的 gas price，用于计算交易费用（如 0.1uatom）
      --generate-only               构建未签名交易并输出到标准输出（启用时仅在提供密钥名称的情况下访问本地 Keybase）
  -h, --help                        查看 withdraw-proposal 的帮助
      --keyring-backend string      选择 keyring 后端 (os|file|kwallet|pass|test|memory) 
      --keyring-dir string          客户端 keyring 目录；未指定则使用默认 home 目录
      --ledger                      使用已连接的 Ledger 设备
      --node string                 此链的 CometBFT RPC 地址 [host]:[port] 
      --note string                 为交易添加说明（旧参数 --memo）
      --offline                     离线模式（禁用所有联网功能）
  -o, --output string               输出格式 (text|json) 
  -s, --sequence uint               签名账户的 sequence（仅离线模式）
      --sign-mode string            选择签名模式 (direct|amino-json|direct-aux|textual)，属于高级选项
      --timeout-duration duration   TimeoutDuration 表示交易在内存池中保持有效的持续时间。交易的无序 nonce 将设为创建时间加该持续时长；若交易仍在内存池且区块时间超过提交时间加 TimeoutTimestamp，交易将被拒绝。
      --timeout-height uint         已弃用：请改用 --timeout-duration。设置区块超时高度，防止交易在超出该高度后被提交
      --tip string                  小费金额，将在目标链转给费用支付者。仅与 --aux 搭配时有效，若目标链未启用 TipDecorator 则忽略
      --unordered                   启用无序交易投递；须与 --timeout-duration 一起使用
  -y, --yes                         跳过交易广播时的确认提示
```

### 继承自父命令的选项

```
      --home string         配置和数据文件夹 
      --log_format string   日志格式 (json|plain) 
      --log_level string    日志级别 (trace|debug|info|warn|error|fatal|panic|disabled 或 '*:[level],[key]:[level]') 
      --log_no_color        禁用彩色日志
      --trace               在出错时打印完整堆栈跟踪
```

### 另请参阅

* [zetacored tx group](#zetacored-tx-group)	- 群组模块的交易子命令


## zetacored tx lightclient

轻客户端模块的交易子命令

```
zetacored tx lightclient [flags]
```

### 选项

```
  -h, --help   查看 lightclient 的帮助
```

### 继承自父命令的选项

```
      --chain-id string     网络链 ID
      --home string         配置和数据文件夹 
      --log_format string   日志格式 (json|plain) 
      --log_level string    日志级别 (trace|debug|info|warn|error|fatal|panic|disabled 或 '*:[level],[key]:[level]') 
      --log_no_color        禁用彩色日志
      --trace               在出错时打印完整堆栈跟踪
```

### 另请参阅

* [zetacored tx](#zetacored-tx)	- 交易子命令集合
* [zetacored tx lightclient disable-header-verification](#zetacored-tx-lightclient-disable-header-verification)	- 为逗号分隔的链列表禁用 Header 验证
* [zetacored tx lightclient enable-header-verification](#zetacored-tx-lightclient-enable-header-verification)	- 为逗号分隔的链列表启用 Header 验证


## zetacored tx lightclient disable-header-verification

为逗号分隔的链列表禁用 Header 验证。

### 概要

提供以逗号分隔的链 ID 列表，可为指定链禁用区块头验证。

```
zetacored tx lightclient disable-header-verification [list of chain-id] [flags]
```

### 示例

```

zetacored tx lightclient disable-header-verification "1,56"

```

### 选项

```
  -a, --account-number uint         签名账户的账号（仅离线模式）
      --aux                         生成辅助签名数据而不是发送交易
  -b, --broadcast-mode string       交易广播模式 (sync|async) 
      --chain-id string             网络链 ID
      --dry-run                     忽略 --gas 参数，模拟交易但不广播（启用时无法访问本地 Keybase）
      --fee-granter string          为交易提供费用的 fee granter 地址
      --fee-payer string            由该地址支付交易费用，而不是从签名者扣除
      --fees string                 交易需支付的费用，例如 10uatom
      --from string                 用于签名的私钥名称或地址
      --gas string                  每笔交易的 gas 上限；设置为 "auto" 可自动估算（注意 "auto" 可能并非精确结果，可设置有效的代币值微调，亦可替代 --fees）（默认 200000）
      --gas-adjustment float        与模拟返回的 gas 估值相乘的调整系数；若手动指定 gas 上限则忽略该参数（默认 1）
      --gas-prices string           以小数表示的 gas price，用于计算交易费用（如 0.1uatom）
      --generate-only               构建未签名交易并输出到标准输出（启用时仅在提供密钥名称的情况下访问本地 Keybase）
  -h, --help                        查看 disable-header-verification 的帮助
      --keyring-backend string      选择 keyring 后端 (os|file|kwallet|pass|test|memory) 
      --keyring-dir string          客户端 keyring 目录；未指定则使用默认 home 目录
      --ledger                      使用已连接的 Ledger 设备
      --node string                 此链的 CometBFT RPC 地址 [host]:[port] 
      --note string                 为交易添加说明（旧参数 --memo）
      --offline                     离线模式（禁用所有联网功能）
  -o, --output string               输出格式 (text|json) 
  -s, --sequence uint               签名账户的 sequence（仅离线模式）
      --sign-mode string            选择签名模式 (direct|amino-json|direct-aux|textual)，属于高级选项
      --timeout-duration duration   TimeoutDuration 表示交易在内存池中保持有效的持续时间。交易的无序 nonce 将设为创建时间加该持续时长；若交易仍在内存池且区块时间超过提交时间加 TimeoutTimestamp，交易将被拒绝。
      --timeout-height uint         已弃用：请改用 --timeout-duration。设置区块超时高度，防止交易在超出该高度后被提交
      --tip string                  小费金额，将在目标链转给费用支付者。仅与 --aux 搭配时有效，若目标链未启用 TipDecorator 则忽略
      --unordered                   启用无序交易投递；须与 --timeout-duration 一起使用
  -y, --yes                         跳过交易广播时的确认提示
```

### 继承自父命令的选项

```
      --home string         配置和数据文件夹 
      --log_format string   日志格式 (json|plain) 
      --log_level string    日志级别 (trace|debug|info|warn|error|fatal|panic|disabled 或 '*:[level],[key]:[level]') 
      --log_no_color        禁用彩色日志
      --trace               在出错时打印完整堆栈跟踪
```

### 另请参阅

* [zetacored tx lightclient](#zetacored-tx-lightclient)	- 轻客户端模块的交易子命令


## zetacored tx lightclient enable-header-verification

为逗号分隔的链列表启用 Header 验证。

### 概要

提供以逗号分隔的链 ID 列表，可为指定链启用区块头验证。

```
zetacored tx lightclient enable-header-verification [list of chain-id] [flags]
```

### 示例

```

zetacored tx lightclient enable-header-verification "1,56"

```

### 选项

```
  -a, --account-number uint         签名账户的账号（仅离线模式）
      --aux                         生成辅助签名数据而不是发送交易
  -b, --broadcast-mode string       交易广播模式 (sync|async) 
      --chain-id string             网络链 ID
      --dry-run                     忽略 --gas 参数，模拟交易但不广播（启用时无法访问本地 Keybase）
      --fee-granter string          为交易提供费用的 fee granter 地址
      --fee-payer string            由该地址支付交易费用，而不是从签名者扣除
      --fees string                 交易需支付的费用，例如 10uatom
      --from string                 用于签名的私钥名称或地址
      --gas string                  每笔交易的 gas 上限；设置为 "auto" 可自动估算（注意 "auto" 可能并非精确结果，可设置有效的代币值微调，亦可替代 --fees）（默认 200000）
      --gas-adjustment float        与模拟返回的 gas 估值相乘的调整系数；若手动指定 gas 上限则忽略该参数（默认 1）
      --gas-prices string           以小数表示的 gas price，用于计算交易费用（如 0.1uatom）
      --generate-only               构建未签名交易并输出到标准输出（启用时仅在提供密钥名称的情况下访问本地 Keybase）
  -h, --help                        查看 enable-header-verification 的帮助
      --keyring-backend string      选择 keyring 后端 (os|file|kwallet|pass|test|memory) 
      --keyring-dir string          客户端 keyring 目录；未指定则使用默认 home 目录
      --ledger                      使用已连接的 Ledger 设备
      --node string                 此链的 CometBFT RPC 地址 [host]:[port] 
      --note string                 为交易添加说明（旧参数 --memo）
      --offline                     离线模式（禁用所有联网功能）
  -o, --output string               输出格式 (text|json) 
  -s, --sequence uint               签名账户的 sequence（仅离线模式）
      --sign-mode string            选择签名模式 (direct|amino-json|direct-aux|textual)，属于高级选项
      --timeout-duration duration   TimeoutDuration 表示交易在内存池中保持有效的持续时间。交易的无序 nonce 将设为创建时间加该持续时长；若交易仍在内存池且区块时间超过提交时间加 TimeoutTimestamp，交易将被拒绝。
      --timeout-height uint         已弃用：请改用 --timeout-duration。设置区块超时高度，防止交易在超出该高度后被提交
      --tip string                  小费金额，将在目标链转给费用支付者。仅与 --aux 搭配时有效，若目标链未启用 TipDecorator 则忽略
      --unordered                   启用无序交易投递；须与 --timeout-duration 一起使用
  -y, --yes                         跳过交易广播时的确认提示
```

### 继承自父命令的选项

```
      --home string         配置和数据文件夹 
      --log_format string   日志格式 (json|plain) 
      --log_level string    日志级别 (trace|debug|info|warn|error|fatal|panic|disabled 或 '*:[level],[key]:[level]') 
      --log_no_color        禁用彩色日志
      --trace               在出错时打印完整堆栈跟踪
```

### 另请参阅

* [zetacored tx lightclient](#zetacored-tx-lightclient)	- 轻客户端模块的交易子命令


## zetacored tx multi-sign

为离线生成的交易生成多签名。

### 概要

对使用 `--generate-only` 创建且需要多重签名的交易进行签名。

从一个或多个 [signature] 文件读取签名，依据多签密钥 [name] 生成符合要求的多签签名，并将该密钥名称附加到从 [file] 读取的交易中。

示例：
```
$ zetacored tx multisign transaction.json k1k2k3 k1sig.json k2sig.json k3sig.json
```

- 若启用 `--signature-only`，则仅输出生成的签名 JSON。
- 若启用 `--offline`，客户端不会访问外部节点，需手动设置账号与 sequence。
- 若启用 `--skip-signature-verification`，则不校验提供的签名文件，适用于多层多签场景。
- 当前多签实现默认使用 amino-json 签名模式，暂不支持 SIGN_MODE_DIRECT。

```
zetacored tx multi-sign [file] [name] [[signature]...] [flags]
```

### 选项

```
  -a, --account-number uint           签名账户的账号（仅离线模式）
      --aux                           生成辅助签名数据而不是发送交易
  -b, --broadcast-mode string         交易广播模式 (sync|async) 
      --chain-id string               网络链 ID
      --dry-run                       忽略 --gas 参数，模拟交易但不广播（启用时无法访问本地 Keybase）
      --fee-granter string            为交易提供费用的 fee granter 地址
      --fee-payer string              由该地址支付交易费用，而不是从签名者扣除
      --fees string                   交易需支付的费用，例如 10uatom
      --from string                   用于签名的私钥名称或地址
      --gas string                    每笔交易的 gas 上限；设置为 "auto" 可自动估算（注意 "auto" 可能并非精确结果，可设置有效的代币值微调，亦可替代 --fees）（默认 200000）
      --gas-adjustment float          与模拟返回的 gas 估值相乘的调整系数；若手动指定 gas 上限则忽略该参数（默认 1）
      --gas-prices string             以小数表示的 gas price，用于计算交易费用（如 0.1uatom）
      --generate-only                 构建未签名交易并输出到标准输出（启用时仅在提供密钥名称的情况下访问本地 Keybase）
  -h, --help                          查看 multi-sign 的帮助
      --keyring-backend string        选择 keyring 后端 (os|file|kwallet|pass|test|memory) 
      --keyring-dir string            客户端 keyring 目录；未指定则使用默认 home 目录
      --ledger                        使用已连接的 Ledger 设备
      --node string                   此链的 CometBFT RPC 地址 [host]:[port] 
      --note string                   为交易添加说明（旧参数 --memo）
      --offline                       离线模式（禁用所有联网功能）
      --output-document string        输出文件路径，若指定则写入该文件而非标准输出
  -s, --sequence uint                 签名账户的 sequence（仅离线模式）
      --sign-mode string              选择签名模式 (direct|amino-json|direct-aux|textual)，属于高级选项
      --signature-only                仅打印生成的签名后退出
      --skip-signature-verification   跳过签名验证
      --timeout-duration duration     TimeoutDuration 表示交易在内存池中保持有效的持续时间。交易的无序 nonce 将设为创建时间加该持续时长；若交易仍在内存池且区块时间超过提交时间加 TimeoutTimestamp，交易将被拒绝。
      --timeout-height uint           已弃用：请改用 --timeout-duration。设置区块超时高度，防止交易在超出该高度后被提交
      --tip string                    小费金额，将在目标链转给费用支付者。仅与 --aux 搭配时有效，若目标链未启用 TipDecorator 则忽略
      --unordered                     启用无序交易投递；须与 --timeout-duration 一起使用
  -y, --yes                           跳过交易广播时的确认提示
```

### 继承自父命令的选项

```
      --home string         配置和数据文件夹 
      --log_format string   日志格式 (json|plain) 
      --log_level string    日志级别 (trace|debug|info|warn|error|fatal|panic|disabled 或 '*:[level],[key]:[level]') 
      --log_no_color        禁用彩色日志
      --trace               在出错时打印完整堆栈跟踪
```

### 另请参阅

* [zetacored tx](#zetacored-tx)	- 交易子命令集合


## zetacored tx multisign-batch

从批量签名中组装多签交易。

### 概要

对 `batch sign` 命令生成的多签交易批量组装。

从一个或多个 [signature] 文件读取签名，依据多签密钥 [name] 生成多签签名，并附加到 [file] 指定的交易。

示例：
```
$ zetacored tx multisign-batch transactions.json multisigk1k2k3 k1sigs.json k2sigs.json k3sig.json
```

当前多签实现默认使用 amino-json 签名模式，暂不支持 SIGN_MODE_DIRECT。

```
zetacored tx multisign-batch [file] [name] [[signature-file]...] [flags]
```

### 选项

```
  -a, --account-number uint         签名账户的账号（仅离线模式）
      --aux                         生成辅助签名数据而不是发送交易
  -b, --broadcast-mode string       交易广播模式 (sync|async) 
      --chain-id string             网络链 ID
      --dry-run                     忽略 --gas 参数，模拟交易但不广播（启用时无法访问本地 Keybase）
      --fee-granter string          为交易提供费用的 fee granter 地址
      --fee-payer string            由该地址支付交易费用，而不是从签名者扣除
      --fees string                 交易需支付的费用，例如 10uatom
      --from string                 用于签名的私钥名称或地址
      --gas string                  每笔交易的 gas 上限；设置为 "auto" 可自动估算（注意 "auto" 可能并非精确结果，可设置有效的代币值微调，亦可替代 --fees）（默认 200000）
      --gas-adjustment float        与模拟返回的 gas 估值相乘的调整系数；若手动指定 gas 上限则忽略该参数（默认 1）
      --gas-prices string           以小数表示的 gas price，用于计算交易费用（如 0.1uatom）
      --generate-only               构建未签名交易并输出到标准输出（启用时仅在提供密钥名称的情况下访问本地 Keybase）
  -h, --help                        查看 multisign-batch 的帮助
      --keyring-backend string      选择 keyring 后端 (os|file|kwallet|pass|test|memory) 
      --keyring-dir string          客户端 keyring 目录；未指定则使用默认 home 目录
      --ledger                      使用已连接的 Ledger 设备
      --multisig string             多签账户地址，表示交易所代表的账户
      --no-auto-increment           禁用 sequence 自动递增
      --node string                 此链的 CometBFT RPC 地址 [host]:[port] 
      --note string                 为交易添加说明（旧参数 --memo）
      --offline                     离线模式（禁用所有联网功能）
      --output-document string      输出文件路径，若指定则写入该文件
  -s, --sequence uint               签名账户的 sequence（仅离线模式）
      --sign-mode string            选择签名模式 (direct|amino-json|direct-aux|textual)，属于高级选项
      --timeout-duration duration   TimeoutDuration 表示交易在内存池中保持有效的持续时间。交易的无序 nonce 将设为创建时间加该持续时长；若交易仍在内存池且区块时间超过提交时间加 TimeoutTimestamp，交易将被拒绝。
      --timeout-height uint         已弃用：请改用 --timeout-duration。设置区块超时高度，防止交易在超出该高度后被提交
      --tip string                  小费金额，将在目标链转给费用支付者。仅与 --aux 搭配时有效，若目标链未启用 TipDecorator 则忽略
      --unordered                   启用无序交易投递；须与 --timeout-duration 一起使用
  -y, --yes                         跳过交易广播时的确认提示
```

### 继承自父命令的选项

```
      --home string         配置和数据文件夹 
      --log_format string   日志格式 (json|plain) 
      --log_level string    日志级别 (trace|debug|info|warn|error|fatal|panic|disabled 或 '*:[level],[key]:[level]') 
      --log_no_color        禁用彩色日志
      --trace               在出错时打印完整堆栈跟踪
```

### 另请参阅

* [zetacored tx](#zetacored-tx)	- 交易子命令集合


## zetacored tx observer

观察者模块的交易子命令

```
zetacored tx observer [flags]
```

### 选项

```
  -h, --help   查看 observer 的帮助
```

### 继承自父命令的选项

```
      --chain-id string     网络链 ID
      --home string         配置和数据文件夹 
      --log_format string   日志格式 (json|plain) 
      --log_level string    日志级别 (trace|debug|info|warn|error|fatal|panic|disabled 或 '*:[level],[key]:[level]') 
      --log_no_color        禁用彩色日志
      --trace               在出错时打印完整堆栈跟踪
```

### 另请参阅

* [zetacored tx](#zetacored-tx)	- 交易子命令集合
* [zetacored tx observer add-observer](#zetacored-tx-observer-add-observer)	- 广播 add-observer 消息
* [zetacored tx observer disable-cctx](#zetacored-tx-observer-disable-cctx)	- 禁用指定 CCTX 的入站与出站
* [zetacored tx observer disable-fast-confirmation](#zetacored-tx-observer-disable-fast-confirmation)	- 为指定链禁用快速确认
* [zetacored tx observer enable-cctx](#zetacored-tx-observer-enable-cctx)	- 启用指定 CCTX 的入站与出站
* [zetacored tx observer encode](#zetacored-tx-observer-encode)	- 将 JSON 字符串编码为十六进制
* [zetacored tx observer remove-chain-params](#zetacored-tx-observer-remove-chain-params)	- 广播移除链参数消息
* [zetacored tx observer reset-chain-nonces](#zetacored-tx-observer-reset-chain-nonces)	- 广播重置链 nonce 消息
* [zetacored tx observer update-chain-params](#zetacored-tx-observer-update-chain-params)	- 广播 updateChainParams 消息
* [zetacored tx observer update-gas-price-increase-flags](#zetacored-tx-observer-update-gas-price-increase-flags)	- 更新 gas price 增量标志
* [zetacored tx observer update-keygen](#zetacored-tx-observer-update-keygen)	- 通过群组提案更新 keygen 区块
* [zetacored tx observer update-observer](#zetacored-tx-observer-update-observer)	- 广播 add-observer 消息
* [zetacored tx observer update-operational-flags](#zetacored-tx-observer-update-operational-flags)	- 广播 UpdateOperationalFlags 消息
* [zetacored tx observer vote-blame](#zetacored-tx-observer-vote-blame)	- 广播 vote-blame 消息
* [zetacored tx observer vote-tss](#zetacored-tx-observer-vote-tss)	- 为新 TSS 创建投票


## zetacored tx observer add-observer

广播 add-observer 消息。

```
zetacored tx observer add-observer [observer-address] [zetaclient-grantee-pubkey] [add_node_account_only] [flags]
```

### 选项

```
  -a, --account-number uint         签名账户的账号（仅离线模式）
      --aux                         生成辅助签名数据而不是发送交易
  -b, --broadcast-mode string       交易广播模式 (sync|async) 
      --chain-id string             网络链 ID
      --dry-run                     忽略 --gas 参数，模拟交易但不广播（启用时无法访问本地 Keybase）
      --fee-granter string          为交易提供费用的 fee granter 地址
      --fee-payer string            由该地址支付交易费用，而不是从签名者扣除
      --fees string                 交易需支付的费用，例如 10uatom
      --from string                 用于签名的私钥名称或地址
      --gas string                  每笔交易的 gas 上限；设置为 "auto" 可自动估算（注意 "auto" 可能并非精确结果，可设置有效的代币值微调，亦可替代 --fees）（默认 200000）
      --gas-adjustment float        与模拟返回的 gas 估值相乘的调整系数；若手动指定 gas 上限则忽略该参数（默认 1）
      --gas-prices string           以小数表示的 gas price，用于计算交易费用（如 0.1uatom）
      --generate-only               构建未签名交易并输出到标准输出（启用时仅在提供密钥名称的情况下访问本地 Keybase）
  -h, --help                        查看 add-observer 的帮助
      --keyring-backend string      选择 keyring 后端 (os|file|kwallet|pass|test|memory) 
      --keyring-dir string          客户端 keyring 目录；未指定则使用默认 home 目录
      --ledger                      使用已连接的 Ledger 设备
      --node string                 此链的 CometBFT RPC 地址 [host]:[port] 
      --note string                 为交易添加说明（旧参数 --memo）
      --offline                     离线模式（禁用所有联网功能）
  -o, --output string               输出格式 (text|json) 
  -s, --sequence uint               签名账户的 sequence（仅离线模式）
      --sign-mode string            选择签名模式 (direct|amino-json|direct-aux|textual)，属于高级选项
      --timeout-duration duration   TimeoutDuration 表示交易在内存池中保持有效的持续时间。交易的无序 nonce 将设为创建时间加该持续时长；若交易仍在内存池且区块时间超过提交时间加 TimeoutTimestamp，交易将被拒绝。
      --timeout-height uint         已弃用：请改用 --timeout-duration。设置区块超时高度，防止交易在超出该高度后被提交
      --tip string                  小费金额，将在目标链转给费用支付者。仅与 --aux 搭配时有效，若目标链未启用 TipDecorator 则忽略
      --unordered                   启用无序交易投递；须与 --timeout-duration 一起使用
  -y, --yes                         跳过交易广播时的确认提示
```

### 继承自父命令的选项

```
      --home string         配置和数据文件夹 
      --log_format string   日志格式 (json|plain) 
      --log_level string    日志级别 (trace|debug|info|warn|error|fatal|panic|disabled 或 '*:[level],[key]:[level]') 
      --log_no_color        禁用彩色日志
      --trace               在出错时打印完整堆栈跟踪
```

### 另请参阅

* [zetacored tx observer](#zetacored-tx-observer)	- 观察者模块的交易子命令


## zetacored tx observer disable-cctx

禁用指定 CCTX 的入站与出站。

```
zetacored tx observer disable-cctx [disable-inbound] [disable-outbound] [flags]
```

### 选项

```
  -a, --account-number uint         签名账户的账号（仅离线模式）
      --aux                         生成辅助签名数据而不是发送交易
  -b, --broadcast-mode string       交易广播模式 (sync|async) 
      --chain-id string             网络链 ID
      --dry-run                     忽略 --gas 参数，模拟交易但不广播（启用时无法访问本地 Keybase）
      --fee-granter string          为交易提供费用的 fee granter 地址
      --fee-payer string            由该地址支付交易费用，而不是从签名者扣除
      --fees string                 交易需支付的费用，例如 10uatom
      --from string                 用于签名的私钥名称或地址
      --gas string                  每笔交易的 gas 上限；设置为 "auto" 可自动估算（注意 "auto" 可能并非精确结果，可设置有效的代币值微调，亦可替代 --fees）（默认 200000）
      --gas-adjustment float        与模拟返回的 gas 估值相乘的调整系数；若手动指定 gas 上限则忽略该参数（默认 1）
      --gas-prices string           以小数表示的 gas price，用于计算交易费用（如 0.1uatom）
      --generate-only               构建未签名交易并输出到标准输出（启用时仅在提供密钥名称的情况下访问本地 Keybase）
  -h, --help                        查看 disable-cctx 的帮助
      --keyring-backend string      选择 keyring 后端 (os|file|kwallet|pass|test|memory) 
      --keyring-dir string          客户端 keyring 目录；未指定则使用默认 home 目录
      --ledger                      使用已连接的 Ledger 设备
      --node string                 此链的 CometBFT RPC 地址 [host]:[port] 
      --note string                 为交易添加说明（旧参数 --memo）
      --offline                     离线模式（禁用所有联网功能）
  -o, --output string               输出格式 (text|json) 
  -s, --sequence uint               签名账户的 sequence（仅离线模式）
      --sign-mode string            选择签名模式 (direct|amino-json|direct-aux|textual)，属于高级选项
      --timeout-duration duration   TimeoutDuration 表示交易在内存池中保持有效的持续时间。交易的无序 nonce 将设为创建时间加该持续时长；若交易仍在内存池且区块时间超过提交时间加 TimeoutTimestamp，交易将被拒绝。
      --timeout-height uint         已弃用：请改用 --timeout-duration。设置区块超时高度，防止交易在超出该高度后被提交
      --tip string                  小费金额，将在目标链转给费用支付者。仅与 --aux 搭配时有效，若目标链未启用 TipDecorator 则忽略
      --unordered                   启用无序交易投递；须与 --timeout-duration 一起使用
  -y, --yes                         跳过交易广播时的确认提示
```

### 继承自父命令的选项

```
      --home string         配置和数据文件夹 
      --log_format string   日志格式 (json|plain) 
      --log_level string    日志级别 (trace|debug|info|warn|error|fatal|panic|disabled 或 '*:[level],[key]:[level]') 
      --log_no_color        禁用彩色日志
      --trace               在出错时打印完整堆栈跟踪
```

### 另请参阅

* [zetacored tx observer](#zetacored-tx-observer)	- 观察者模块的交易子命令


## zetacored tx observer disable-fast-confirmation

为指定链 ID 禁用快速确认。

```
zetacored tx observer disable-fast-confirmation [chain-id] [flags]
```

### 示例

```
zetacored tx observer disable-fast-confirmation 1
```

### 选项

```
  -a, --account-number uint         签名账户的账号（仅离线模式）
      --aux                         生成辅助签名数据而不是发送交易
  -b, --broadcast-mode string       交易广播模式 (sync|async) 
      --chain-id string             网络链 ID
      --dry-run                     忽略 --gas 参数，模拟交易但不广播（启用时无法访问本地 Keybase）
      --fee-granter string          为交易提供费用的 fee granter 地址
      --fee-payer string            由该地址支付交易费用，而不是从签名者扣除
      --fees string                 交易需支付的费用，例如 10uatom
      --from string                 用于签名的私钥名称或地址
      --gas string                  每笔交易的 gas 上限；设置为 "auto" 可自动估算（注意 "auto" 可能并非精确结果，可设置有效的代币值微调，亦可替代 --fees）（默认 200000）
      --gas-adjustment float        与模拟返回的 gas 估值相乘的调整系数；若手动指定 gas 上限则忽略该参数（默认 1）
      --gas-prices string           以小数表示的 gas price，用于计算交易费用（如 0.1uatom）
      --generate-only               构建未签名交易并输出到标准输出（启用时仅在提供密钥名称的情况下访问本地 Keybase）
  -h, --help                        查看 disable-fast-confirmation 的帮助
      --keyring-backend string      选择 keyring 后端 (os|file|kwallet|pass|test|memory) 
      --keyring-dir string          客户端 keyring 目录；未指定则使用默认 home 目录
      --ledger                      使用已连接的 Ledger 设备
      --node string                 此链的 CometBFT RPC 地址 [host]:[port] 
      --note string                 为交易添加说明（旧参数 --memo）
      --offline                     离线模式（禁用所有联网功能）
  -o, --output string               输出格式 (text|json) 
  -s, --sequence uint               签名账户的 sequence（仅离线模式）
      --sign-mode string            选择签名模式 (direct|amino-json|direct-aux|textual)，属于高级选项
      --timeout-duration duration   TimeoutDuration 表示交易在内存池中保持有效的持续时间。交易的无序 nonce 将设为创建时间加该持续时长；若交易仍在内存池且区块时间超过提交时间加 TimeoutTimestamp，交易将被拒绝。
      --timeout-height uint         已弃用：请改用 --timeout-duration。设置区块超时高度，防止交易在超出该高度后被提交
      --tip string                  小费金额，将在目标链转给费用支付者。仅与 --aux 搭配时有效，若目标链未启用 TipDecorator 则忽略
      --unordered                   启用无序交易投递；须与 --timeout-duration 一起使用
  -y, --yes                         跳过交易广播时的确认提示
```

### 继承自父命令的选项

```
      --home string         配置和数据文件夹 
      --log_format string   日志格式 (json|plain) 
      --log_level string    日志级别 (trace|debug|info|warn|error|fatal|panic|disabled 或 '*:[level],[key]:[level]') 
      --log_no_color        禁用彩色日志
      --trace               在出错时打印完整堆栈跟踪
```

### 另请参阅

* [zetacored tx observer](#zetacored-tx-observer)	- 观察者模块的交易子命令


## zetacored tx observer enable-cctx

启用指定 CCTX 的入站与出站。

```
zetacored tx observer enable-cctx [enable-inbound] [enable-outbound] [flags]
```

### 选项

```
  -a, --account-number uint         签名账户的账号（仅离线模式）
      --aux                         生成辅助签名数据而不是发送交易
  -b, --broadcast-mode string       交易广播模式 (sync|async) 
      --chain-id string             网络链 ID
      --dry-run                     忽略 --gas 参数，模拟交易但不广播（启用时无法访问本地 Keybase）
      --fee-granter string          为交易提供费用的 fee granter 地址
      --fee-payer string            由该地址支付交易费用，而不是从签名者扣除
      --fees string                 交易需支付的费用，例如 10uatom
      --from string                 用于签名的私钥名称或地址
      --gas string                  每笔交易的 gas 上限；设置为 "auto" 可自动估算（注意 "auto" 可能并非精确结果，可设置有效的代币值微调，亦可替代 --fees）（默认 200000）
      --gas-adjustment float        与模拟返回的 gas 估值相乘的调整系数；若手动指定 gas 上限则忽略该参数（默认 1）
      --gas-prices string           以小数表示的 gas price，用于计算交易费用（如 0.1uatom）
      --generate-only               构建未签名交易并输出到标准输出（启用时仅在提供密钥名称的情况下访问本地 Keybase）
  -h, --help                        查看 enable-cctx 的帮助
      --keyring-backend string      选择 keyring 后端 (os|file|kwallet|pass|test|memory) 
      --keyring-dir string          客户端 keyring 目录；未指定则使用默认 home 目录
      --ledger                      使用已连接的 Ledger 设备
      --node string                 此链的 CometBFT RPC 地址 [host]:[port] 
      --note string                 为交易添加说明（旧参数 --memo）
      --offline                     离线模式（禁用所有联网功能）
  -o, --output string               输出格式 (text|json) 
  -s, --sequence uint               签名账户的 sequence（仅离线模式）
      --sign-mode string            选择签名模式 (direct|amino-json|direct-aux|textual)，属于高级选项
      --timeout-duration duration   TimeoutDuration 表示交易在内存池中保持有效的持续时间。交易的无序 nonce 将设为创建时间加该持续时长；若交易仍在内存池且区块时间超过提交时间加 TimeoutTimestamp，交易将被拒绝。
      --timeout-height uint         已弃用：请改用 --timeout-duration。设置区块超时高度，防止交易在超出该高度后被提交
      --tip string                  小费金额，将在目标链转给费用支付者。仅与 --aux 搭配时有效，若目标链未启用 TipDecorator 则忽略
      --unordered                   启用无序交易投递；须与 --timeout-duration 一起使用
  -y, --yes                         跳过交易广播时的确认提示
```

### 继承自父命令的选项

```
      --home string         配置和数据文件夹 
      --log_format string   日志格式 (json|plain) 
      --log_level string    日志级别 (trace|debug|info|warn|error|fatal|panic|disabled 或 '*:[level],[key]:[level]') 
      --log_no_color        禁用彩色日志
      --trace               在出错时打印完整堆栈跟踪
```

### 另请参阅

* [zetacored tx observer](#zetacored-tx-observer)	- 观察者模块的交易子命令


## zetacored tx observer encode

将 JSON 字符串编码为十六进制。

```
zetacored tx observer encode [file.json] [flags]
```

### 选项

```
  -a, --account-number uint         签名账户的账号（仅离线模式）
      --aux                         生成辅助签名数据而不是发送交易
  -b, --broadcast-mode string       交易广播模式 (sync|async) 
      --chain-id string             网络链 ID
      --dry-run                     忽略 --gas 参数，模拟交易但不广播（启用时无法访问本地 Keybase）
      --fee-granter string          为交易提供费用的 fee granter 地址
      --fee-payer string            由该地址支付交易费用，而不是从签名者扣除
      --fees string                 交易需支付的费用，例如 10uatom
      --from string                 用于签名的私钥名称或地址
      --gas string                  每笔交易的 gas 上限；设置为 "auto" 可自动估算（注意 "auto" 可能并非精确结果，可设置有效的代币值微调，亦可替代 --fees）（默认 200000）
      --gas-adjustment float        与模拟返回的 gas 估值相乘的调整系数；若手动指定 gas 上限则忽略该参数（默认 1）
      --gas-prices string           以小数表示的 gas price，用于计算交易费用（如 0.1uatom）
      --generate-only               构建未签名交易并输出到标准输出（启用时仅在提供密钥名称的情况下访问本地 Keybase）
  -h, --help                        查看 encode 的帮助
      --keyring-backend string      选择 keyring 后端 (os|file|kwallet|pass|test|memory) 
      --keyring-dir string          客户端 keyring 目录；未指定则使用默认 home 目录
      --ledger                      使用已连接的 Ledger 设备
      --node string                 此链的 CometBFT RPC 地址 [host]:[port] 
      --note string                 为交易添加说明（旧参数 --memo）
      --offline                     离线模式（禁用所有联网功能）
  -o, --output string               输出格式 (text|json) 
  -s, --sequence uint               签名账户的 sequence（仅离线模式）
      --sign-mode string            选择签名模式 (direct|amino-json|direct-aux|textual)，属于高级选项
      --timeout-duration duration   TimeoutDuration 表示交易在内存池中保持有效的持续时间。交易的无序 nonce 将设为创建时间加该持续时长；若交易仍在内存池且区块时间超过提交时间加 TimeoutTimestamp，交易将被拒绝。
      --timeout-height uint         已弃用：请改用 --timeout-duration。设置区块超时高度，防止交易在超出该高度后被提交
      --tip string                  小费金额，将在目标链转给费用支付者。仅与 --aux 搭配时有效，若目标链未启用 TipDecorator 则忽略
      --unordered                   启用无序交易投递；须与 --timeout-duration 一起使用
  -y, --yes                         跳过交易广播时的确认提示
```

### 继承自父命令的选项

```
      --home string         配置和数据文件夹 
      --log_format string   日志格式 (json|plain) 
      --log_level string    日志级别 (trace|debug|info|warn|error|fatal|panic|disabled 或 '*:[level],[key]:[level]') 
      --log_no_color        禁用彩色日志
      --trace               在出错时打印完整堆栈跟踪
```

### 另请参阅

* [zetacored tx observer](#zetacored-tx-observer)	- 观察者模块的交易子命令


## zetacored tx observer remove-chain-params

广播移除链参数的消息。

```
zetacored tx observer remove-chain-params [chain-id] [flags]
```

### 选项

```
  -a, --account-number uint         签名账户的账号（仅离线模式）
      --aux                         生成辅助签名数据而不是发送交易
  -b, --broadcast-mode string       交易广播模式 (sync|async) 
      --chain-id string             网络链 ID
      --dry-run                     忽略 --gas 参数，模拟交易但不广播（启用时无法访问本地 Keybase）
      --fee-granter string          为交易提供费用的 fee granter 地址
      --fee-payer string            由该地址支付交易费用，而不是从签名者扣除
      --fees string                 交易需支付的费用，例如 10uatom
      --from string                 用于签名的私钥名称或地址
      --gas string                  每笔交易的 gas 上限；设置为 "auto" 可自动估算（注意 "auto" 可能并非精确结果，可设置有效的代币值微调，亦可替代 --fees）（默认 200000）
      --gas-adjustment float        与模拟返回的 gas 估值相乘的调整系数；若手动指定 gas 上限则忽略该参数（默认 1）
      --gas-prices string           以小数表示的 gas price，用于计算交易费用（如 0.1uatom）
      --generate-only               构建未签名交易并输出到标准输出（启用时仅在提供密钥名称的情况下访问本地 Keybase）
  -h, --help                        查看 remove-chain-params 的帮助
      --keyring-backend string      选择 keyring 后端 (os|file|kwallet|pass|test|memory) 
      --keyring-dir string          客户端 keyring 目录；未指定则使用默认 home 目录
      --ledger                      使用已连接的 Ledger 设备
      --node string                 此链的 CometBFT RPC 地址 [host]:[port] 
      --note string                 为交易添加说明（旧参数 --memo）
      --offline                     离线模式（禁用所有联网功能）
  -o, --output string               输出格式 (text|json) 
  -s, --sequence uint               签名账户的 sequence（仅离线模式）
      --sign-mode string            选择签名模式 (direct|amino-json|direct-aux|textual)，属于高级选项
      --timeout-duration duration   TimeoutDuration 表示交易在内存池中保持有效的持续时间。交易的无序 nonce 将设为创建时间加该持续时长；若交易仍在内存池且区块时间超过提交时间加 TimeoutTimestamp，交易将被拒绝。
      --timeout-height uint         已弃用：请改用 --timeout-duration。设置区块超时高度，防止交易在超出该高度后被提交
      --tip string                  小费金额，将在目标链转给费用支付者。仅与 --aux 搭配时有效，若目标链未启用 TipDecorator 则忽略
      --unordered                   启用无序交易投递；须与 --timeout-duration 一起使用
  -y, --yes                         跳过交易广播时的确认提示
```

### 继承自父命令的选项

```
      --home string         配置和数据文件夹 
      --log_format string   日志格式 (json|plain) 
      --log_level string    日志级别 (trace|debug|info|warn|error|fatal|panic|disabled 或 '*:[level],[key]:[level]') 
      --log_no_color        禁用彩色日志
      --trace               在出错时打印完整堆栈跟踪
```

### 另请参阅

* [zetacored tx observer](#zetacored-tx-observer)	- 观察者模块的交易子命令


## zetacored tx observer reset-chain-nonces

广播重置链 nonce 的消息。

```
zetacored tx observer reset-chain-nonces [chain-id] [chain-nonce-low] [chain-nonce-high] [flags]
```

### 选项

```
  -a, --account-number uint         签名账户的账号（仅离线模式）
      --aux                         生成辅助签名数据而不是发送交易
  -b, --broadcast-mode string       交易广播模式 (sync|async) 
      --chain-id string             网络链 ID
      --dry-run                     忽略 --gas 参数，模拟交易但不广播（启用时无法访问本地 Keybase）
      --fee-granter string          为交易提供费用的 fee granter 地址
      --fee-payer string            由该地址支付交易费用，而不是从签名者扣除
      --fees string                 交易需支付的费用，例如 10uatom
      --from string                 用于签名的私钥名称或地址
      --gas string                  每笔交易的 gas 上限；设置为 "auto" 可自动估算（注意 "auto" 可能并非精确结果，可设置有效的代币值微调，亦可替代 --fees）（默认 200000）
      --gas-adjustment float        与模拟返回的 gas 估值相乘的调整系数；若手动指定 gas 上限则忽略该参数（默认 1）
      --gas-prices string           以小数表示的 gas price，用于计算交易费用（如 0.1uatom）
      --generate-only               构建未签名交易并输出到标准输出（启用时仅在提供密钥名称的情况下访问本地 Keybase）
  -h, --help                        查看 reset-chain-nonces 的帮助
      --keyring-backend string      选择 keyring 后端 (os|file|kwallet|pass|test|memory) 
      --keyring-dir string          客户端 keyring 目录；未指定则使用默认 home 目录
      --ledger                      使用已连接的 Ledger 设备
      --node string                 此链的 CometBFT RPC 地址 [host]:[port] 
      --note string                 为交易添加说明（旧参数 --memo）
      --offline                     离线模式（禁用所有联网功能）
  -o, --output string               输出格式 (text|json) 
  -s, --sequence uint               签名账户的 sequence（仅离线模式）
      --sign-mode string            选择签名模式 (direct|amino-json|direct-aux|textual)，属于高级选项
      --timeout-duration duration   TimeoutDuration 表示交易在内存池中保持有效的持续时间。交易的无序 nonce 将设为创建时间加该持续时长；若交易仍在内存池且区块时间超过提交时间加 TimeoutTimestamp，交易将被拒绝。
      --timeout-height uint         已弃用：请改用 --timeout-duration。设置区块超时高度，防止交易在超出该高度后被提交
      --tip string                  小费金额，将在目标链转给费用支付者。仅与 --aux 搭配时有效，若目标链未启用 TipDecorator 则忽略
      --unordered                   启用无序交易投递；须与 --timeout-duration 一起使用
  -y, --yes                         跳过交易广播时的确认提示
```

### 继承自父命令的选项

```
      --home string         配置和数据文件夹 
      --log_format string   日志格式 (json|plain) 
      --log_level string    日志级别 (trace|debug|info|warn|error|fatal|panic|disabled 或 '*:[level],[key]:[level]') 
      --log_no_color        禁用彩色日志
      --trace               在出错时打印完整堆栈跟踪
```

### 另请参阅

* [zetacored tx observer](#zetacored-tx-observer)	- 观察者模块的交易子命令


## zetacored tx observer update-chain-params

广播 updateChainParams 消息。

```
zetacored tx observer update-chain-params [chain-id] [client-params.json] [flags]
```

### 选项

```
  -a, --account-number uint         签名账户的账号（仅离线模式）
      --aux                         生成辅助签名数据而不是发送交易
  -b, --broadcast-mode string       交易广播模式 (sync|async) 
      --chain-id string             网络链 ID
      --dry-run                     忽略 --gas 参数，模拟交易但不广播（启用时无法访问本地 Keybase）
      --fee-granter string          为交易提供费用的 fee granter 地址
      --fee-payer string            由该地址支付交易费用，而不是从签名者扣除
      --fees string                 交易需支付的费用，例如 10uatom
      --from string                 用于签名的私钥名称或地址
      --gas string                  每笔交易的 gas 上限；设置为 "auto" 可自动估算（注意 "auto" 可能并非精确结果，可设置有效的代币值微调，亦可替代 --fees）（默认 200000）
      --gas-adjustment float        与模拟返回的 gas 估值相乘的调整系数；若手动指定 gas 上限则忽略该参数（默认 1）
      --gas-prices string           以小数表示的 gas price，用于计算交易费用（如 0.1uatom）
      --generate-only               构建未签名交易并输出到标准输出（启用时仅在提供密钥名称的情况下访问本地 Keybase）
  -h, --help                        查看 update-chain-params 的帮助
      --keyring-backend string      选择 keyring 后端 (os|file|kwallet|pass|test|memory) 
      --keyring-dir string          客户端 keyring 目录；未指定则使用默认 home 目录
      --ledger                      使用已连接的 Ledger 设备
      --node string                 此链的 CometBFT RPC 地址 [host]:[port] 
      --note string                 为交易添加说明（旧参数 --memo）
      --offline                     离线模式（禁用所有联网功能）
  -o, --output string               输出格式 (text|json) 
  -s, --sequence uint               签名账户的 sequence（仅离线模式）
      --sign-mode string            选择签名模式 (direct|amino-json|direct-aux|textual)，属于高级选项
      --timeout-duration duration   TimeoutDuration 表示交易在内存池中保持有效的持续时间。交易的无序 nonce 将设为创建时间加该持续时长；若交易仍在内存池且区块时间超过提交时间加 TimeoutTimestamp，交易将被拒绝。
      --timeout-height uint         已弃用：请改用 --timeout-duration。设置区块超时高度，防止交易在超出该高度后被提交
      --tip string                  小费金额，将在目标链转给费用支付者。仅与 --aux 搭配时有效，若目标链未启用 TipDecorator 则忽略
      --unordered                   启用无序交易投递；须与 --timeout-duration 一起使用
  -y, --yes                         跳过交易广播时的确认提示
```

### 继承自父命令的选项

```
      --home string         配置和数据文件夹 
      --log_format string   日志格式 (json|plain) 
      --log_level string    日志级别 (trace|debug|info|warn|error|fatal|panic|disabled 或 '*:[level],[key]:[level]') 
      --log_no_color        禁用彩色日志
      --trace               在出错时打印完整堆栈跟踪
```

### 另请参阅

* [zetacored tx observer](#zetacored-tx-observer)	- 观察者模块的交易子命令


## zetacored tx observer update-gas-price-increase-flags

更新 gas price 增量相关标志。

```
zetacored tx observer update-gas-price-increase-flags [epochLength] [retryInterval] [gasPriceIncreasePercent] [gasPriceIncreaseMax] [maxPendingCctxs] [retryIntervalBTC] [flags]
```

### 选项

```
  -a, --account-number uint         签名账户的账号（仅离线模式）
      --aux                         生成辅助签名数据而不是发送交易
  -b, --broadcast-mode string       交易广播模式 (sync|async) 
      --chain-id string             网络链 ID
      --dry-run                     忽略 --gas 参数，模拟交易但不广播（启用时无法访问本地 Keybase）
      --fee-granter string          为交易提供费用的 fee granter 地址
      --fee-payer string            由该地址支付交易费用，而不是从签名者扣除
      --fees string                 交易需支付的费用，例如 10uatom
      --from string                 用于签名的私钥名称或地址
      --gas string                  每笔交易的 gas 上限；设置为 "auto" 可自动估算（注意 "auto" 可能并非精确结果，可设置有效代币值微调，亦可替代 --fees）（默认 200000）
      --gas-adjustment float        与模拟返回的 gas 估值相乘的调整系数；若手动指定 gas 上限则忽略该参数（默认 1）
      --gas-prices string           以小数表示的 gas price，用于计算交易费用（如 0.1uatom）
      --generate-only               构建未签名交易并输出到标准输出（启用时仅在提供密钥名称的情况下访问本地 Keybase）
  -h, --help                        查看 update-gas-price-increase-flags 的帮助
      --keyring-backend string      选择 keyring 后端 (os|file|kwallet|pass|test|memory) 
      --keyring-dir string          客户端 keyring 目录；未指定则使用默认 home 目录
      --ledger                      使用已连接的 Ledger 设备
      --node string                 此链的 CometBFT RPC 地址 [host]:[port] 
      --note string                 为交易添加说明（旧参数 --memo）
      --offline                     离线模式（禁用所有联网功能）
  -o, --output string               输出格式 (text|json) 
  -s, --sequence uint               签名账户的 sequence（仅离线模式）
      --sign-mode string            选择签名模式 (direct|amino-json|direct-aux|textual)，属于高级选项
      --timeout-duration duration   TimeoutDuration 表示交易在内存池中的有效期。交易的无序 nonce 将设为创建时间加该持续时长；若交易仍在内存池且区块时间超过提交时间加 TimeoutTimestamp，交易将被拒绝。
      --timeout-height uint         已弃用：请改用 --timeout-duration。设置区块超时高度，防止交易在超出该高度后被提交
      --tip string                  小费金额，将在目标链转给费用支付者。仅与 --aux 搭配时有效，若目标链未启用 TipDecorator 则忽略
      --unordered                   启用无序交易投递；须与 --timeout-duration 一起使用
  -y, --yes                         跳过交易广播时的确认提示
```

### 继承自父命令的选项

```
      --home string         配置和数据文件夹 
      --log_format string   日志格式 (json|plain) 
      --log_level string    日志级别 (trace|debug|info|warn|error|fatal|panic|disabled 或 '*:[level],[key]:[level]') 
      --log_no_color        禁用彩色日志
      --trace               在出错时打印完整堆栈跟踪
```

### 另请参阅

* [zetacored tx observer](#zetacored-tx-observer)	- 观察者模块的交易子命令


## zetacored tx observer update-keygen

通过群组提案更新 keygen 区块。

```
zetacored tx observer update-keygen [block] [flags]
```

### 选项

```
  -a, --account-number uint         签名账户的账号（仅离线模式）
      --aux                         生成辅助签名数据而不是发送交易
  -b, --broadcast-mode string       交易广播模式 (sync|async) 
      --chain-id string             网络链 ID
      --dry-run                     忽略 --gas 参数，模拟交易但不广播（启用时无法访问本地 Keybase）
      --fee-granter string          为交易提供费用的 fee granter 地址
      --fee-payer string            由该地址支付交易费用，而不是从签名者扣除
      --fees string                 交易需支付的费用，例如 10uatom
      --from string                 用于签名的私钥名称或地址
      --gas string                  每笔交易的 gas 上限；设置为 "auto" 可自动估算（注意 "auto" 可能并非精确结果，可设置有效的代币值微调，亦可替代 --fees）（默认 200000）
      --gas-adjustment float        与模拟返回的 gas 估值相乘的调整系数；若手动指定 gas 上限则忽略该参数（默认 1）
      --gas-prices string           以小数表示的 gas price，用于计算交易费用（如 0.1uatom）
      --generate-only               构建未签名交易并输出到标准输出（启用时仅在提供密钥名称的情况下访问本地 Keybase）
  -h, --help                        查看 update-keygen 的帮助
      --keyring-backend string      选择 keyring 后端 (os|file|kwallet|pass|test|memory) 
      --keyring-dir string          客户端 keyring 目录；未指定则使用默认 home 目录
      --ledger                      使用已连接的 Ledger 设备
      --node string                 此链的 CometBFT RPC 地址 [host]:[port] 
      --note string                 为交易添加说明（旧参数 --memo）
      --offline                     离线模式（禁用所有联网功能）
  -o, --output string               输出格式 (text|json) 
  -s, --sequence uint               签名账户的 sequence（仅离线模式）
      --sign-mode string            选择签名模式 (direct|amino-json|direct-aux|textual)，属于高级选项
      --timeout-duration duration   TimeoutDuration 表示交易在内存池中保持有效的持续时间。交易的无序 nonce 将设为创建时间加该持续时长；若交易仍在内存池且区块时间超过提交时间加 TimeoutTimestamp，交易将被拒绝。
      --timeout-height uint         已弃用：请改用 --timeout-duration。设置区块超时高度，防止交易在超出该高度后被提交
      --tip string                  小费金额，将在目标链转给费用支付者。仅与 --aux 搭配时有效，若目标链未启用 TipDecorator 则忽略
      --unordered                   启用无序交易投递；须与 --timeout-duration 一起使用
  -y, --yes                         跳过交易广播时的确认提示
```

### 继承自父命令的选项

```
      --home string         配置和数据文件夹 
      --log_format string   日志格式 (json|plain) 
      --log_level string    日志级别 (trace|debug|info|warn|error|fatal|panic|disabled 或 '*:[level],[key]:[level]') 
      --log_no_color        禁用彩色日志
      --trace               在出错时打印完整堆栈跟踪
```

### 另请参阅

* [zetacored tx observer](#zetacored-tx-observer)	- 观察者模块的交易子命令


## zetacored tx observer update-observer

广播 add-observer 消息。

```
zetacored tx observer update-observer [old-observer-address] [new-observer-address] [update-reason] [flags]
```

### 选项

```
  -a, --account-number uint         签名账户的账号（仅离线模式）
      --aux                         生成辅助签名数据而不是发送交易
  -b, --broadcast-mode string       交易广播模式 (sync|async) 
      --chain-id string             网络链 ID
      --dry-run                     忽略 --gas 参数，模拟交易但不广播（启用时无法访问本地 Keybase）
      --fee-granter string          为交易提供费用的 fee granter 地址
      --fee-payer string            由该地址支付交易费用，而不是从签名者扣除
      --fees string                 交易需支付的费用，例如 10uatom
      --from string                 用于签名的私钥名称或地址
      --gas string                  每笔交易的 gas 上限；设置为 "auto" 可自动估算（注意 "auto" 可能并非精确结果，可设置有效的代币值微调，亦可替代 --fees）（默认 200000）
      --gas-adjustment float        与模拟返回的 gas 估值相乘的调整系数；若手动指定 gas 上限则忽略该参数（默认 1）
      --gas-prices string           以小数表示的 gas price，用于计算交易费用（如 0.1uatom）
      --generate-only               构建未签名交易并输出到标准输出（启用时仅在提供密钥名称的情况下访问本地 Keybase）
  -h, --help                        查看 update-observer 的帮助
      --keyring-backend string      选择 keyring 后端 (os|file|kwallet|pass|test|memory) 
      --keyring-dir string          客户端 keyring 目录；未指定则使用默认 home 目录
      --ledger                      使用已连接的 Ledger 设备
      --node string                 此链的 CometBFT RPC 地址 [host]:[port] 
      --note string                 为交易添加说明（旧参数 --memo）
      --offline                     离线模式（禁用所有联网功能）
  -o, --output string               输出格式 (text|json) 
  -s, --sequence uint               签名账户的 sequence（仅离线模式）
      --sign-mode string            选择签名模式 (direct|amino-json|direct-aux|textual)，属于高级选项
      --timeout-duration duration   TimeoutDuration 表示交易在内存池中保持有效的持续时间。交易的无序 nonce 将设为创建时间加该持续时长；若交易仍在内存池且区块时间超过提交时间加 TimeoutTimestamp，交易将被拒绝。
      --timeout-height uint         已弃用：请改用 --timeout-duration。设置区块超时高度，防止交易在超出该高度后被提交
      --tip string                  小费金额，将在目标链转给费用支付者。仅与 --aux 搭配时有效，若目标链未启用 TipDecorator 则忽略
      --unordered                   启用无序交易投递；须与 --timeout-duration 一起使用
  -y, --yes                         跳过交易广播时的确认提示
```

### 继承自父命令的选项

```
      --home string         配置和数据文件夹 
      --log_format string   日志格式 (json|plain) 
      --log_level string    日志级别 (trace|debug|info|warn|error|fatal|panic|disabled 或 '*:[level],[key]:[level]') 
      --log_no_color        禁用彩色日志
      --trace               在出错时打印完整堆栈跟踪
```

### 另请参阅

* [zetacored tx observer](#zetacored-tx-observer)	- 观察者模块的交易子命令


## zetacored tx observer update-operational-flags

广播 UpdateOperationalFlags 消息。

```
zetacored tx observer update-operational-flags [flags]
```

### 选项

```
  -a, --account-number uint                 签名账户的账号（仅离线模式）
      --aux                                 生成辅助签名数据而不是发送交易
  -b, --broadcast-mode string               交易广播模式 (sync|async) 
      --chain-id string                     网络链 ID
      --dry-run                             忽略 --gas 参数，模拟交易但不广播（启用时无法访问本地 Keybase）
      --fee-granter string                  为交易提供费用的 fee granter 地址
      --fee-payer string                    由该地址支付交易费用，而不是从签名者扣除
      --fees string                         交易需支付的费用，例如 10uatom
      --from string                         用于签名的私钥名称或地址
      --gas string                          每笔交易的 gas 上限；设置为 "auto" 可自动估算（注意 "auto" 可能并非精确结果，可设置有效代币值微调，亦可替代 --fees）（默认 200000）
      --gas-adjustment float                与模拟返回的 gas 估值相乘的调整系数；若手动指定 gas 上限则忽略该参数（默认 1）
      --gas-prices string                   以小数表示的 gas price，用于计算交易费用（如 0.1uatom）
      --generate-only                       构建未签名交易并输出到标准输出（启用时仅在提供密钥名称的情况下访问本地 Keybase）
  -h, --help                                查看 update-operational-flags 的帮助
      --keyring-backend string              选择 keyring 后端 (os|file|kwallet|pass|test|memory) 
      --keyring-dir string                  客户端 keyring 目录；未指定则使用默认 home 目录
      --ledger                              使用已连接的 Ledger 设备
      --node string                         此链的 CometBFT RPC 地址 [host]:[port] 
      --note string                         为交易添加说明（旧参数 --memo）
      --offline                             离线模式（禁用所有联网功能）
  -o, --output string                       输出格式 (text|json) 
      --restart-height int                  协调 zetaclient 重启的区块高度
  -s, --sequence uint                       签名账户的 sequence（仅离线模式）
      --sign-mode string                    选择签名模式 (direct|amino-json|direct-aux|textual)，属于高级选项
      --signer-block-time-offset duration   相对于 zetacore 区块时间的签名启动偏移
      --timeout-duration duration           TimeoutDuration 表示交易在内存池中保持有效的持续时间。交易的无序 nonce 将设为创建时间加该持续时长；若交易仍在内存池且区块时间超过提交时间加 TimeoutTimestamp，交易将被拒绝。
      --timeout-height uint                 已弃用：请改用 --timeout-duration。设置区块超时高度，防止交易在超出该高度后被提交
      --tip string                          小费金额，将在目标链转给费用支付者。仅与 --aux 搭配时有效，若目标链未启用 TipDecorator 则忽略
      --unordered                           启用无序交易投递；须与 --timeout-duration 一起使用
  -y, --yes                                 跳过交易广播时的确认提示
```

### 继承自父命令的选项

```
      --home string         配置和数据文件夹 
      --log_format string   日志格式 (json|plain) 
      --log_level string    日志级别 (trace|debug|info|warn|error|fatal|panic|disabled 或 '*:[level],[key]:[level]') 
      --log_no_color        禁用彩色日志
      --trace               在出错时打印完整堆栈跟踪
```

### 另请参阅

* [zetacored tx observer](#zetacored-tx-observer)	- 观察者模块的交易子命令


## zetacored tx observer vote-blame

广播 vote-blame 消息。

```
zetacored tx observer vote-blame [chain-id] [index] [failure-reason] [node-list] [flags]
```

### 选项

```
  -a, --account-number uint         签名账户的账号（仅离线模式）
      --aux                         生成辅助签名数据而不是发送交易
  -b, --broadcast-mode string       交易广播模式 (sync|async) 
      --chain-id string             网络链 ID
      --dry-run                     忽略 --gas 参数，模拟交易但不广播（启用时无法访问本地 Keybase）
      --fee-granter string          为交易提供费用的 fee granter 地址
      --fee-payer string            由该地址支付交易费用，而不是从签名者扣除
      --fees string                 交易需支付的费用，例如 10uatom
      --from string                 用于签名的私钥名称或地址
      --gas string                  每笔交易的 gas 上限；设置为 "auto" 可自动估算（注意 "auto" 可能并非精确结果，可设置有效代币值微调，亦可替代 --fees）（默认 200000）
      --gas-adjustment float        与模拟返回的 gas 估值相乘的调整系数；若手动指定 gas 上限则忽略该参数（默认 1）
      --gas-prices string           以小数表示的 gas price，用于计算交易费用（如 0.1uatom）
      --generate-only               构建未签名交易并输出到标准输出（启用时仅在提供密钥名称的情况下访问本地 Keybase）
  -h, --help                        查看 vote-blame 的帮助
      --keyring-backend string      选择 keyring 后端 (os|file|kwallet|pass|test|memory) 
      --keyring-dir string          客户端 keyring 目录；未指定则使用默认 home 目录
      --ledger                      使用已连接的 Ledger 设备
      --node string                 此链的 CometBFT RPC 地址 [host]:[port] 
      --note string                 为交易添加说明（旧参数 --memo）
      --offline                     离线模式（禁用所有联网功能）
  -o, --output string               输出格式 (text|json) 
  -s, --sequence uint               签名账户的 sequence（仅离线模式）
      --sign-mode string            选择签名模式 (direct|amino-json|direct-aux|textual)，属于高级选项
      --timeout-duration duration   TimeoutDuration 表示交易在内存池中保持有效的持续时间。交易的无序 nonce 将设为创建时间加该持续时长；若交易仍在内存池且区块时间超过提交时间加 TimeoutTimestamp，交易将被拒绝。
      --timeout-height uint         已弃用：请改用 --timeout-duration。设置区块超时高度，防止交易在超出该高度后被提交
      --tip string                  小费金额，将在目标链转给费用支付者。仅与 --aux 搭配时有效，若目标链未启用 TipDecorator 则忽略
      --unordered                   启用无序交易投递；须与 --timeout-duration 一起使用
  -y, --yes                         跳过交易广播时的确认提示
```

### 继承自父命令的选项

```
      --home string         配置和数据文件夹 
      --log_format string   日志格式 (json|plain) 
      --log_level string    日志级别 (trace|debug|info|warn|error|fatal|panic|disabled 或 '*:[level],[key]:[level]') 
      --log_no_color        禁用彩色日志
      --trace               在出错时打印完整堆栈跟踪
```

### 另请参阅

* [zetacored tx observer](#zetacored-tx-observer)	- 观察者模块的交易子命令


## zetacored tx observer vote-tss

为新 TSS 创建投票。

```
zetacored tx observer vote-tss [pubkey] [keygen-block] [status] [flags]
```

### 选项

```
  -a, --account-number uint         签名账户的账号（仅离线模式）
      --aux                         生成辅助签名数据而不是发送交易
  -b, --broadcast-mode string       交易广播模式 (sync|async) 
      --chain-id string             网络链 ID
      --dry-run                     忽略 --gas 参数，模拟交易但不广播（启用时无法访问本地 Keybase）
      --fee-granter string          为交易提供费用的 fee granter 地址
      --fee-payer string            由该地址支付交易费用，而不是从签名者扣除
      --fees string                 交易需支付的费用，例如 10uatom
      --from string                 用于签名的私钥名称或地址
      --gas string                  每笔交易的 gas 上限；设置为 "auto" 可自动估算（注意 "auto" 可能并非精确结果，可设置有效代币值微调，亦可替代 --fees）（默认 200000）
      --gas-adjustment float        与模拟返回的 gas 估值相乘的调整系数；若手动指定 gas 上限则忽略该参数（默认 1）
      --gas-prices string           以小数表示的 gas price，用于计算交易费用（如 0.1uatom）
      --generate-only               构建未签名交易并输出到标准输出（启用时仅在提供密钥名称的情况下访问本地 Keybase）
  -h, --help                        查看 vote-tss 的帮助
      --keyring-backend string      选择 keyring 后端 (os|file|kwallet|pass|test|memory) 
      --keyring-dir string          客户端 keyring 目录；未指定则使用默认 home 目录
      --ledger                      使用已连接的 Ledger 设备
      --node string                 此链的 CometBFT RPC 地址 [host]:[port] 
      --note string                 为交易添加说明（旧参数 --memo）
      --offline                     离线模式（禁用所有联网功能）
  -o, --output string               输出格式 (text|json) 
  -s, --sequence uint               签名账户的 sequence（仅离线模式）
      --sign-mode string            选择签名模式 (direct|amino-json|direct-aux|textual)，属于高级选项
      --timeout-duration duration   TimeoutDuration 表示交易在内存池中保持有效的持续时间。交易的无序 nonce 将设为创建时间加该持续时长；若交易仍在内存池且区块时间超过提交时间加 TimeoutTimestamp，交易将被拒绝。
      --timeout-height uint         已弃用：请改用 --timeout-duration。设置区块超时高度，防止交易在超出该高度后被提交
      --tip string                  小费金额，将在目标链转给费用支付者。仅与 --aux 搭配时有效，若目标链未启用 TipDecorator 则忽略
      --unordered                   启用无序交易投递；须与 --timeout-duration 一起使用
  -y, --yes                         跳过交易广播时的确认提示
```

### 继承自父命令的选项

```
      --home string         配置和数据文件夹 
      --log_format string   日志格式 (json|plain) 
      --log_level string    日志级别 (trace|debug|info|warn|error|fatal|panic|disabled 或 '*:[level],[key]:[level]') 
      --log_no_color        禁用彩色日志
      --trace               在出错时打印完整堆栈跟踪
```

### 另请参阅

* [zetacored tx observer](#zetacored-tx-observer)	- 观察者模块的交易子命令


## zetacored tx sign

为离线生成的交易签名。

### 概要

为使用 `--generate-only` 创建的交易签名，从 [file] 读取交易、签名并输出 JSON。若启用 `--signature-only`，则仅输出签名部分。

启用 `--offline` 时不会访问全节点，需手动设置账号与 sequence，错误的值会导致交易失败。

`--multisig=[multisig_key]` 会代表多签账户生成签名，并隐式启用 `--signature-only`。可结合 `multisign` 命令生成完整多签交易。

```
zetacored tx sign [file] [flags]
```

### 选项

```
  -a, --account-number uint         签名账户的账号（仅离线模式）
      --aux                         生成辅助签名数据而不是发送交易
  -b, --broadcast-mode string       交易广播模式 (sync|async) 
      --chain-id string             网络链 ID
      --dry-run                     忽略 --gas 参数，模拟交易但不广播（启用时无法访问本地 Keybase）
      --fee-granter string          为交易提供费用的 fee granter 地址
      --fee-payer string            由该地址支付交易费用，而不是从签名者扣除
      --fees string                 交易需支付的费用，例如 10uatom
      --from string                 用于签名的私钥名称或地址
      --gas string                  每笔交易的 gas 上限；设置为 "auto" 可自动估算（注意 "auto" 可能并非精确结果，可设置有效代币值微调，亦可替代 --fees）（默认 200000）
      --gas-adjustment float        与模拟返回的 gas 估值相乘的调整系数；若手动指定 gas 上限则忽略该参数（默认 1）
      --gas-prices string           以小数表示的 gas price，用于计算交易费用（如 0.1uatom）
      --generate-only               构建未签名交易并输出到标准输出（启用时仅在提供密钥名称的情况下访问本地 Keybase）
  -h, --help                        查看 sign 的帮助
      --keyring-backend string      选择 keyring 后端 (os|file|kwallet|pass|test|memory) 
      --keyring-dir string          客户端 keyring 目录；未指定则使用默认 home 目录
      --ledger                      使用已连接的 Ledger 设备
      --multisig string             多签账户地址或密钥名称，表示代表该账户签名
      --node string                 此链的 CometBFT RPC 地址 [host]:[port] 
      --note string                 为交易添加说明（旧参数 --memo）
      --offline                     离线模式（禁用所有联网功能）
  -o, --output string               输出格式 (text|json) 
      --output-document string      指定文件路径，将输出写入该文件而非标准输出
      --overwrite                   覆盖现有签名；未启用时，新签名将附加
  -s, --sequence uint               签名账户的 sequence（仅离线模式）
      --sign-mode string            选择签名模式 (direct|amino-json|direct-aux|textual)，属于高级选项
      --signature-only              仅输出签名
      --timeout-duration duration   TimeoutDuration 表示交易在内存池中保持有效的持续时间。交易的无序 nonce 将设为创建时间加该持续时长；若交易仍在内存池且区块时间超过提交时间加 TimeoutTimestamp，交易将被拒绝。
      --timeout-height uint         已弃用：请改用 --timeout-duration。设置区块超时高度，防止交易在超出该高度后被提交
      --tip string                  小费金额，将在目标链转给费用支付者。仅与 --aux 搭配时有效，若目标链未启用 TipDecorator 则忽略
      --unordered                   启用无序交易投递；须与 --timeout-duration 一起使用
  -y, --yes                         跳过交易广播时的确认提示
```

### 继承自父命令的选项

```
      --home string         配置和数据文件夹 
      --log_format string   日志格式 (json|plain) 
      --log_level string    日志级别 (trace|debug|info|warn|error|fatal|panic|disabled 或 '*:[level],[key]:[level]') 
      --log_no_color        禁用彩色日志
      --trace               在出错时打印完整堆栈跟踪
```

### 另请参阅

* [zetacored tx](#zetacored-tx)	- 交易子命令集合


## zetacored tx sign-batch

为批量文件中的交易签名。

### 概要

为使用 `--generate-only` 生成的交易批量签名，可一次处理文件中的多笔交易（每行一条 StdTx），也可提供多个文件。签名后按 `
` 分隔输出 JSON；签名过程中会自动更新账户与 sequence。

- `--signature-only`：仅输出签名部分。
- `--offline`：不会访问全节点，需手动设置账号与 sequence；每签一笔交易 sequence 会自动递增。
- 若在在线模式下使用 `--account-number` 或 `--sequence`，参数会被忽略并覆盖。
- `--multisig=[multisig_key]`：代表多签账户签名，隐式启用 `--signature-only`。
- `--append`：将所有消息合并为单笔签名交易以便广播。

```
zetacored tx sign-batch [file] ([file2]...) [flags]
```

### 选项

```
  -a, --account-number uint         签名账户的账号（仅离线模式）
      --append                      合并所有消息，生成单笔签名交易便于广播
      --aux                         生成辅助签名数据而不是发送交易
  -b, --broadcast-mode string       交易广播模式 (sync|async) 
      --chain-id string             网络链 ID
      --dry-run                     忽略 --gas 参数，模拟交易但不广播（启用时无法访问本地 Keybase）
      --fee-granter string          为交易提供费用的 fee granter 地址
      --fee-payer string            由该地址支付交易费用，而不是从签名者扣除
      --fees string                 交易需支付的费用，例如 10uatom
      --from string                 用于签名的私钥名称或地址
      --gas string                  每笔交易的 gas 上限；设置为 "auto" 可自动估算（注意 "auto" 可能并非精确结果，可设置有效代币值微调，亦可替代 --fees）（默认 200000）
      --gas-adjustment float        与模拟返回的 gas 估值相乘的调整系数；若手动指定 gas 上限则忽略该参数（默认 1）
      --gas-prices string           以小数表示的 gas price，用于计算交易费用（如 0.1uatom）
      --generate-only               构建未签名交易并输出到标准输出（启用时仅在提供密钥名称的情况下访问本地 Keybase）
  -h, --help                        查看 sign-batch 的帮助
      --keyring-backend string      选择 keyring 后端 (os|file|kwallet|pass|test|memory) 
      --keyring-dir string          客户端 keyring 目录；未指定则使用默认 home 目录
      --ledger                      使用已连接的 Ledger 设备
      --multisig string             多签账户地址或密钥名称，表示代表该账户签名
      --node string                 此链的 CometBFT RPC 地址 [host]:[port] 
      --note string                 为交易添加说明（旧参数 --memo）
      --offline                     离线模式（禁用所有联网功能）
  -o, --output string               输出格式 (text|json) 
      --output-document string      指定输出文件，若未指定则写入标准输出
  -s, --sequence uint               签名账户的 sequence（仅离线模式）
      --sign-mode string            选择签名模式 (direct|amino-json|direct-aux|textual)，属于高级选项
      --signature-only              仅输出生成的签名后退出
      --timeout-duration duration   TimeoutDuration 表示交易在内存池中保持有效的持续时间。交易的无序 nonce 将设为创建时间加该持续时长；若交易仍在内存池且区块时间超过提交时间加 TimeoutTimestamp，交易将被拒绝。
      --timeout-height uint         已弃用：请改用 --timeout-duration。设置区块超时高度，防止交易在超出该高度后被提交
      --tip string                  小费金额，将在目标链转给费用支付者。仅与 --aux 搭配时有效，若目标链未启用 TipDecorator 则忽略
      --unordered                   启用无序交易投递；须与 --timeout-duration 一起使用
  -y, --yes                         跳过交易广播时的确认提示
```

### 继承自父命令的选项

```
      --home string         配置和数据文件夹 
      --log_format string   日志格式 (json|plain) 
      --log_level string    日志级别 (trace|debug|info|warn|error|fatal|panic|disabled 或 '*:[level],[key]:[level]') 
      --log_no_color        禁用彩色日志
      --trace               在出错时打印完整堆栈跟踪
```

### 另请参阅

* [zetacored tx](#zetacored-tx)	- 交易子命令集合


## zetacored tx slashing

惩罚模块的交易子命令

```
zetacored tx slashing [flags]
```

### 选项

```
  -h, --help   查看 slashing 的帮助
```

### 继承自父命令的选项

```
      --chain-id string     网络链 ID
      --home string         配置和数据文件夹 
      --log_format string   日志格式 (json|plain) 
      --log_level string    日志级别 (trace|debug|info|warn|error|fatal|panic|disabled 或 '*:[level],[key]:[level]') 
      --log_no_color        禁用彩色日志
      --trace               在出错时打印完整堆栈跟踪
```

### 另请参阅

* [zetacored tx](#zetacored-tx)	- 交易子命令集合
* [zetacored tx slashing unjail](#zetacored-tx-slashing-unjail)	- 解禁被监禁的验证者
* [zetacored tx slashing update-params-proposal](#zetacored-tx-slashing-update-params-proposal)	- 提交提案以更新 slashing 模块参数（需一次性提供全部参数）


## zetacored tx slashing unjail

解除被监禁的验证者。

```
zetacored tx slashing unjail [flags]
```

### 示例

```
zetacored tx slashing unjail --from [validator]
```

### 选项

```
  -a, --account-number uint         签名账户的账号（仅离线模式）
      --aux                         生成辅助签名数据而不是发送交易
  -b, --broadcast-mode string       交易广播模式 (sync|async) 
      --chain-id string             网络链 ID
      --dry-run                     忽略 --gas 参数，模拟交易但不广播（启用时无法访问本地 Keybase）
      --fee-granter string          为交易提供费用的 fee granter 地址
      --fee-payer string            由该地址支付交易费用，而不是从签名者扣除
      --fees string                 交易需支付的费用，例如 10uatom
      --from string                 用于签名的私钥名称或地址
      --gas string                  每笔交易的 gas 上限；设置为 "auto" 可自动估算（注意 "auto" 可能并非精确结果，可设置有效代币值微调，亦可替代 --fees）（默认 200000）
      --gas-adjustment float        与模拟返回的 gas 估值相乘的调整系数；若手动指定 gas 上限则忽略该参数（默认 1）
      --gas-prices string           以小数表示的 gas price，用于计算交易费用（如 0.1uatom）
      --generate-only               构建未签名交易并输出到标准输出（启用时仅在提供密钥名称的情况下访问本地 Keybase）
  -h, --help                        查看 unjail 的帮助
      --keyring-backend string      选择 keyring 后端 (os|file|kwallet|pass|test|memory) 
      --keyring-dir string          客户端 keyring 目录；未指定则使用默认 home 目录
      --ledger                      使用已连接的 Ledger 设备
      --node string                 此链的 CometBFT RPC 地址 [host]:[port] 
      --note string                 为交易添加说明（旧参数 --memo）
      --offline                     离线模式（禁用所有联网功能）
  -o, --output string               输出格式 (text|json) 
  -s, --sequence uint               签名账户的 sequence（仅离线模式）
      --sign-mode string            选择签名模式 (direct|amino-json|direct-aux|textual)，属于高级选项
      --timeout-duration duration   TimeoutDuration 表示交易在内存池中保持有效的持续时间。交易的无序 nonce 将设为创建时间加该持续时长；若交易仍在内存池且区块时间超过提交时间加 TimeoutTimestamp，交易将被拒绝。
      --timeout-height uint         已弃用：请改用 --timeout-duration。设置区块超时高度，防止交易在超出该高度后被提交
      --tip string                  小费金额，将在目标链转给费用支付者。仅与 --aux 搭配时有效，若目标链未启用 TipDecorator 则忽略
      --unordered                   启用无序交易投递；须与 --timeout-duration 一起使用
  -y, --yes                         跳过交易广播时的确认提示
```

### 继承自父命令的选项

```
      --home string         配置和数据文件夹 
      --log_format string   日志格式 (json|plain) 
      --log_level string    日志级别 (trace|debug|info|warn|error|fatal|panic|disabled 或 '*:[level],[key]:[level]') 
      --log_no_color        禁用彩色日志
      --trace               在出错时打印完整堆栈跟踪
```

### 另请参阅

* [zetacored tx slashing](#zetacored-tx-slashing)	- 惩罚模块的交易子命令


## zetacored tx slashing update-params-proposal

提交提案以更新 slashing 模块参数（需一次性提供全部参数）。

### 概要

提交提案以更新 slashing 模块参数，需一次性提供完整参数。可先运行 `zetacored query slashing params --output json` 查看字段。

```
zetacored tx slashing update-params-proposal [params] [flags]
```

### 示例

```
zetacored tx slashing update-params-proposal '{ "signed_blocks_window": "100", ... }'
```

### 选项

```
  -a, --account-number uint         签名账户的账号（仅离线模式）
      --aux                         生成辅助签名数据而不是发送交易
  -b, --broadcast-mode string       交易广播模式 (sync|async) 
      --chain-id string             网络链 ID
      --dry-run                     忽略 --gas 参数，模拟交易但不广播（启用时无法访问本地 Keybase）
      --fee-granter string          为交易提供费用的 fee granter 地址
      --fee-payer string            由该地址支付交易费用，而不是从签名者扣除
      --fees string                 交易需支付的费用，例如 10uatom
      --from string                 用于签名的私钥名称或地址
      --gas string                  每笔交易的 gas 上限；设置为 "auto" 可自动估算（注意 "auto" 可能并非精确结果，可设置有效代币值微调，亦可替代 --fees）（默认 200000）
      --gas-adjustment float        与模拟返回的 gas 估值相乘的调整系数；若手动指定 gas 上限则忽略该参数（默认 1）
      --gas-prices string           以小数表示的 gas price，用于计算交易费用（如 0.1uatom）
      --generate-only               构建未签名交易并输出到标准输出（启用时仅在提供密钥名称的情况下访问本地 Keybase）
  -h, --help                        查看 update-params-proposal 的帮助
      --keyring-backend string      选择 keyring 后端 (os|file|kwallet|pass|test|memory) 
      --keyring-dir string          客户端 keyring 目录；未指定则使用默认 home 目录
      --ledger                      使用已连接的 Ledger 设备
      --node string                 此链的 CometBFT RPC 地址 [host]:[port] 
      --note string                 为交易添加说明（旧参数 --memo）
      --offline                     离线模式（禁用所有联网功能）
  -o, --output string               输出格式 (text|json) 
  -s, --sequence uint               签名账户的 sequence（仅离线模式）
      --sign-mode string            选择签名模式 (direct|amino-json|direct-aux|textual)，属于高级选项
      --timeout-duration duration   TimeoutDuration 表示交易在内存池中保持有效的持续时间。交易的无序 nonce 将设为创建时间加该持续时长；若交易仍在内存池且区块时间超过提交时间加 TimeoutTimestamp，交易将被拒绝。
      --timeout-height uint         已弃用：请改用 --timeout-duration。设置区块超时高度，防止交易在超出该高度后被提交
      --tip string                  小费金额，将在目标链转给费用支付者。仅与 --aux 搭配时有效，若目标链未启用 TipDecorator 则忽略
      --unordered                   启用无序交易投递；须与 --timeout-duration 一起使用
  -y, --yes                         跳过交易广播时的确认提示
```

### 继承自父命令的选项

```
      --home string         配置和数据文件夹 
      --log_format string   日志格式 (json|plain) 
      --log_level string    日志级别 (trace|debug|info|warn|error|fatal|panic|disabled 或 '*:[level],[key]:[level]') 
      --log_no_color        禁用彩色日志
      --trace               在出错时打印完整堆栈跟踪
```

### 另请参阅

* [zetacored tx slashing](#zetacored-tx-slashing)	- 惩罚模块的交易子命令


## zetacored tx staking

质押模块的交易子命令

```
zetacored tx staking [flags]
```

### 选项

```
  -h, --help   查看 staking 的帮助
```

### 继承自父命令的选项

```
      --chain-id string     网络链 ID
      --home string         配置和数据文件夹 
      --log_format string   日志格式 (json|plain) 
      --log_level string    日志级别 (trace|debug|info|warn|error|fatal|panic|disabled 或 '*:[level],[key]:[level]') 
      --log_no_color        禁用彩色日志
      --trace               在出错时打印完整堆栈跟踪
```

### 另请参阅

* [zetacored tx](#zetacored-tx)	- 交易子命令集合
* [zetacored tx staking cancel-unbond](#zetacored-tx-staking-cancel-unbond)	- 取消解绑并重新委托给验证者
* [zetacored tx staking create-validator](#zetacored-tx-staking-create-validator)	- 创建带自委托的新验证者
* [zetacored tx staking delegate](#zetacored-tx-staking-delegate)	- 将流动代币委托给验证者
* [zetacored tx staking edit-validator](#zetacored-tx-staking-edit-validator)	- 编辑已有验证者账户
* [zetacored tx staking redelegate](#zetacored-tx-staking-redelegate)	- 将非流动代币从一个验证者重新委托到另一个
* [zetacored tx staking unbond](#zetacored-tx-staking-unbond)	- 从验证者赎回份额


## zetacored tx staking create-validator

创建带自委托的新验证者。

### 概要

通过提交包含新验证者信息的 JSON 文件，创建并初始化带自委托的验证者。

```
zetacored tx staking create-validator [path/to/validator.json] [flags]
```

### 示例

```
$ zetacored tx staking create-validator path/to/validator.json --from keyname

其中 validator.json 内容如下：

{
    "pubkey": {"@type":"/cosmos.crypto.ed25519.PubKey","key":"oWg2ISpLF405Jcm2vXV+2v4fnjodh6aafuIdeoW+rUw="},
    "amount": "1000000stake",
    "moniker": "myvalidator",
    "identity": "optional identity signature (ex. UPort or Keybase)",
    "website": "validator's (optional) website",
    "security": "validator's (optional) security contact email",
    "details": "validator's (optional) details",
    "commission-rate": "0.1",
    "commission-max-rate": "0.2",
    "commission-max-change-rate": "0.01",
    "min-self-delegation": "1"
}

where we can get the pubkey using "zetacored tendermint show-validator"
```

### 选项

```
  -a, --account-number uint         签名账户的账号（仅离线模式）
      --aux                         生成辅助签名数据而不是发送交易
  -b, --broadcast-mode string       交易广播模式 (sync|async) 
      --chain-id string             网络链 ID
      --dry-run                     忽略 --gas 参数，模拟交易但不广播（启用时无法访问本地 Keybase）
      --fee-granter string          为交易提供费用的 fee granter 地址
      --fee-payer string            由该地址支付交易费用，而不是从签名者扣除
      --fees string                 交易需支付的费用，例如 10uatom
      --from string                 用于签名的私钥名称或地址
      --gas string                  每笔交易的 gas 上限；设置为 "auto" 可自动估算（注意 "auto" 可能并非精确结果，可设置有效代币值微调，亦可替代 --fees）（默认 200000）
      --gas-adjustment float        与模拟返回的 gas 估值相乘的调整系数；若手动指定 gas 上限则忽略该参数（默认 1）
      --gas-prices string           以小数表示的 gas price，用于计算交易费用（如 0.1uatom）
      --generate-only               构建未签名交易并输出到标准输出（启用时仅在提供密钥名称的情况下访问本地 Keybase）
  -h, --help                        查看 create-validator 的帮助
      --ip string                   节点对外 IP，与 `--generate-only` 搭配时生效
      --keyring-backend string      选择 keyring 后端 (os|file|kwallet|pass|test|memory) 
      --keyring-dir string          客户端 keyring 目录；未指定则使用默认 home 目录
      --ledger                      使用已连接的 Ledger 设备
      --node string                 此链的 CometBFT RPC 地址 [host]:[port] 
      --node-id string              节点 ID
      --note string                 为交易添加说明（旧参数 --memo）
      --offline                     离线模式（禁用所有联网功能）
  -o, --output string               输出格式 (text|json) 
  -s, --sequence uint               签名账户的 sequence（仅离线模式）
      --sign-mode string            选择签名模式 (direct|amino-json|direct-aux|textual)，属于高级选项
      --timeout-duration duration   TimeoutDuration 表示交易在内存池中保持有效的持续时间。交易的无序 nonce 将设为创建时间加该持续时长；若交易仍在内存池且区块时间超过提交时间加 TimeoutTimestamp，交易将被拒绝。
      --timeout-height uint         已弃用：请改用 --timeout-duration。设置区块超时高度，防止交易在超出该高度后被提交
      --tip string                  小费金额，将在目标链转给费用支付者。仅与 --aux 搭配时有效，若目标链未启用 TipDecorator 则忽略
      --unordered                   启用无序交易投递；须与 --timeout-duration 一起使用
  -y, --yes                         跳过交易广播时的确认提示
```

### 继承自父命令的选项

```
      --home string         配置和数据文件夹 
      --log_format string   日志格式 (json|plain) 
      --log_level string    日志级别 (trace|debug|info|warn|error|fatal|panic|disabled 或 '*:[level],[key]:[level]') 
      --log_no_color        禁用彩色日志
      --trace               在出错时打印完整堆栈跟踪
```

### 另请参阅

* [zetacored tx staking](#zetacored-tx-staking)	- 质押模块的交易子命令


## zetacored tx staking delegate

将流动代币委托给验证者。

### 概要

从钱包中委托指定数量的流动代币给某个验证者。

```
zetacored tx staking delegate [validator-addr] [amount] [flags]
```

### 选项

```
  -a, --account-number uint         签名账户的账号（仅离线模式）
      --aux                         生成辅助签名数据而不是发送交易
  -b, --broadcast-mode string       交易广播模式 (sync|async) 
      --chain-id string             网络链 ID
      --dry-run                     忽略 --gas 参数，模拟交易但不广播（启用时无法访问本地 Keybase）
      --fee-granter string          为交易提供费用的 fee granter 地址
      --fee-payer string            由该地址支付交易费用，而不是从签名者扣除
      --fees string                 交易需支付的费用，例如 10uatom
      --from string                 用于签名的私钥名称或地址
      --gas string                  每笔交易的 gas 上限；设置为 "auto" 可自动估算（注意 "auto" 可能并非精确结果，可设置有效代币值微调，亦可替代 --fees）（默认 200000）
      --gas-adjustment float        与模拟返回的 gas 估值相乘的调整系数；若手动指定 gas 上限则忽略该参数（默认 1）
      --gas-prices string           以小数表示的 gas price，用于计算交易费用（如 0.1uatom）
      --generate-only               构建未签名交易并输出到标准输出（启用时仅在提供密钥名称的情况下访问本地 Keybase）
  -h, --help                        查看 delegate 的帮助
      --keyring-backend string      选择 keyring 后端 (os|file|kwallet|pass|test|memory) 
      --keyring-dir string          客户端 keyring 目录；未指定则使用默认 home 目录
      --ledger                      使用已连接的 Ledger 设备
      --node string                 此链的 CometBFT RPC 地址 [host]:[port] 
      --note string                 为交易添加说明（旧参数 --memo）
      --offline                     离线模式（禁用所有联网功能）
  -o, --output string               输出格式 (text|json) 
  -s, --sequence uint               签名账户的 sequence（仅离线模式）
      --sign-mode string            选择签名模式 (direct|amino-json|direct-aux|textual)，属于高级选项
      --timeout-duration duration   TimeoutDuration 表示交易在内存池中保持有效的持续时间。交易的无序 nonce 将设为创建时间加该持续时长；若交易仍在内存池且区块时间超过提交时间加 TimeoutTimestamp，交易将被拒绝。
      --timeout-height uint         已弃用：请改用 --timeout-duration。设置区块超时高度，防止交易在超出该高度后被提交
      --tip string                  小费金额，将在目标链转给费用支付者。仅与 --aux 搭配时有效，若目标链未启用 TipDecorator 则忽略
      --unordered                   启用无序交易投递；须与 --timeout-duration 一起使用
  -y, --yes                         跳过交易广播时的确认提示
```

### 继承自父命令的选项

```
      --home string         配置和数据文件夹 
      --log_format string   日志格式 (json|plain) 
      --log_level string    日志级别 (trace|debug|info|warn|error|fatal|panic|disabled 或 '*:[level],[key]:[level]') 
      --log_no_color        禁用彩色日志
      --trace               在出错时打印完整堆栈跟踪
```

### 另请参阅

* [zetacored tx staking](#zetacored-tx-staking)	- 质押模块的交易子命令


## zetacored tx staking edit-validator

编辑现有验证者账户。

```
zetacored tx staking edit-validator [flags]
```

### 选项

```
  -a, --account-number uint          签名账户的账号（仅离线模式）
      --aux                          生成辅助签名数据而不是发送交易
  -b, --broadcast-mode string        交易广播模式 (sync|async) 
      --chain-id string              网络链 ID
      --commission-rate string       新的佣金率百分比
      --details string               验证者的可选详情 
      --dry-run                      忽略 --gas 参数，模拟交易但不广播（启用时无法访问本地 Keybase）
      --fee-granter string           为交易提供费用的 fee granter 地址
      --fee-payer string             由该地址支付交易费用，而不是从签名者扣除
      --fees string                  交易需支付的费用，例如 10uatom
      --from string                  用于签名的私钥名称或地址
      --gas string                   每笔交易的 gas 上限；设置为 "auto" 可自动估算（注意 "auto" 可能并非精确结果，可设置有效代币值微调，亦可替代 --fees）（默认 200000）
      --gas-adjustment float         与模拟返回的 gas 估值相乘的调整系数；若手动指定 gas 上限则忽略该参数（默认 1）
      --gas-prices string            以小数表示的 gas price，用于计算交易费用（如 0.1uatom）
      --generate-only                构建未签名交易并输出到标准输出（启用时仅在提供密钥名称的情况下访问本地 Keybase）
  -h, --help                         查看 edit-validator 的帮助
      --identity string              可选身份签名（如 UPort 或 Keybase） 
      --keyring-backend string       选择 keyring 后端 (os|file|kwallet|pass|test|memory) 
      --keyring-dir string           客户端 keyring 目录；未指定则使用默认 home 目录
      --ledger                       使用已连接的 Ledger 设备
      --min-self-delegation string   验证者所需的最小自委托量
      --new-moniker string           验证者名称 
      --node string                  此链的 CometBFT RPC 地址 [host]:[port] 
      --note string                  为交易添加说明（旧参数 --memo）
      --offline                      离线模式（禁用所有联网功能）
  -o, --output string                输出格式 (text|json) 
      --security-contact string      验证者的可选安全联系人邮箱 
  -s, --sequence uint                签名账户的 sequence（仅离线模式）
      --sign-mode string             选择签名模式 (direct|amino-json|direct-aux|textual)，属于高级选项
      --timeout-duration duration    TimeoutDuration 表示交易在内存池中保持有效的持续时间。交易的无序 nonce 将设为创建时间加该持续时长；若交易仍在内存池且区块时间超过提交时间加 TimeoutTimestamp，交易将被拒绝。
      --timeout-height uint          已弃用：请改用 --timeout-duration。设置区块超时高度，防止交易在超出该高度后被提交
      --tip string                   小费金额，将在目标链转给费用支付者。仅与 --aux 搭配时有效，若目标链未启用 TipDecorator 则忽略
      --unordered                    启用无序交易投递；须与 --timeout-duration 一起使用
      --website string               验证者可选的网站 
  -y, --yes                          跳过交易广播时的确认提示
```

### 继承自父命令的选项

```
      --home string         配置和数据文件夹 
      --log_format string   日志格式 (json|plain) 
      --log_level string    日志级别 (trace|debug|info|warn|error|fatal|panic|disabled 或 '*:[level],[key]:[level]') 
      --log_no_color        禁用彩色日志
      --trace               在出错时打印完整堆栈跟踪
```

### 另请参阅

* [zetacored tx staking](#zetacored-tx-staking)	- 质押模块的交易子命令


## zetacored tx staking redelegate

将非流动的质押代币从一个验证者重新委托到另一个。

### 概要

把钱包中已锁定的质押代币从原验证者转委托给目标验证者。

```
zetacored tx staking redelegate [src-validator-addr] [dst-validator-addr] [amount] [flags]
```

### 选项

```
  -a, --account-number uint         签名账户的账号（仅离线模式）
      --aux                         生成辅助签名数据而不是发送交易
  -b, --broadcast-mode string       交易广播模式 (sync|async) 
      --chain-id string             网络链 ID
      --dry-run                     忽略 --gas 参数，模拟交易但不广播（启用时无法访问本地 Keybase）
      --fee-granter string          为交易提供费用的 fee granter 地址
      --fee-payer string            由该地址支付交易费用，而不是从签名者扣除
      --fees string                 交易需支付的费用，例如 10uatom
      --from string                 用于签名的私钥名称或地址
      --gas string                  每笔交易的 gas 上限；设置为 "auto" 可自动估算（注意 "auto" 可能并非精确结果，可设置有效代币值微调，亦可替代 --fees）（默认 200000）
      --gas-adjustment float        与模拟返回的 gas 估值相乘的调整系数；若手动指定 gas 上限则忽略该参数（默认 1）
      --gas-prices string           以小数表示的 gas price，用于计算交易费用（如 0.1uatom）
      --generate-only               构建未签名交易并输出到标准输出（启用时仅在提供密钥名称的情况下访问本地 Keybase）
  -h, --help                        查看 redelegate 的帮助
      --keyring-backend string      选择 keyring 后端 (os|file|kwallet|pass|test|memory) 
      --keyring-dir string          客户端 keyring 目录；未指定则使用默认 home 目录
      --ledger                      使用已连接的 Ledger 设备
      --node string                 此链的 CometBFT RPC 地址 [host]:[port] 
      --note string                 为交易添加说明（旧参数 --memo）
      --offline                     离线模式（禁用所有联网功能）
  -o, --output string               输出格式 (text|json) 
  -s, --sequence uint               签名账户的 sequence（仅离线模式）
      --sign-mode string            选择签名模式 (direct|amino-json|direct-aux|textual)，属于高级选项
      --timeout-duration duration   TimeoutDuration 表示交易在内存池中保持有效的持续时间。交易的无序 nonce 将设为创建时间加该持续时长；若交易仍在内存池且区块时间超过提交时间加 TimeoutTimestamp，交易将被拒绝。
      --timeout-height uint         已弃用：请改用 --timeout-duration。设置区块超时高度，防止交易在超出该高度后被提交
      --tip string                  小费金额，将在目标链转给费用支付者。仅与 --aux 搭配时有效，若目标链未启用 TipDecorator 则忽略
      --unordered                   启用无序交易投递；须与 --timeout-duration 一起使用
  -y, --yes                         跳过交易广播时的确认提示
```

### 继承自父命令的选项

```
      --home string         配置和数据文件夹 
      --log_format string   日志格式 (json|plain) 
      --log_level string    日志级别 (trace|debug|info|warn|error|fatal|panic|disabled 或 '*:[level],[key]:[level]') 
      --log_no_color        禁用彩色日志
      --trace               在出错时打印完整堆栈跟踪
```

### 另请参阅

* [zetacored tx staking](#zetacored-tx-staking)	- 质押模块的交易子命令


## zetacored tx staking unbond

从验证者赎回份额。

### 概要

从指定验证者赎回一定数量的已质押份额。

```
zetacored tx staking unbond [validator-addr] [amount] [flags]
```

### 选项

```
  -a, --account-number uint         签名账户的账号（仅离线模式）
      --aux                         生成辅助签名数据而不是发送交易
  -b, --broadcast-mode string       交易广播模式 (sync|async) 
      --chain-id string             网络链 ID
      --dry-run                     忽略 --gas 参数，模拟交易但不广播（启用时无法访问本地 Keybase）
      --fee-granter string          为交易提供费用的 fee granter 地址
      --fee-payer string            由该地址支付交易费用，而不是从签名者扣除
      --fees string                 交易需支付的费用，例如 10uatom
      --from string                 用于签名的私钥名称或地址
      --gas string                  每笔交易的 gas 上限；设置为 "auto" 可自动估算（注意 "auto" 可能并非精确结果，可设置有效代币值微调，亦可替代 --fees）（默认 200000）
      --gas-adjustment float        与模拟返回的 gas 估值相乘的调整系数；若手动指定 gas 上限则忽略该参数（默认 1）
      --gas-prices string           以小数表示的 gas price，用于计算交易费用（如 0.1uatom）
      --generate-only               构建未签名交易并输出到标准输出（启用时仅在提供密钥名称的情况下访问本地 Keybase）
  -h, --help                        查看 unbond 的帮助
      --keyring-backend string      选择 keyring 后端 (os|file|kwallet|pass|test|memory) 
      --keyring-dir string          客户端 keyring 目录；未指定则使用默认 home 目录
      --ledger                      使用已连接的 Ledger 设备
      --node string                 此链的 CometBFT RPC 地址 [host]:[port] 
      --note string                 为交易添加说明（旧参数 --memo）
      --offline                     离线模式（禁用所有联网功能）
  -o, --output string               输出格式 (text|json) 
  -s, --sequence uint               签名账户的 sequence（仅离线模式）
      --sign-mode string            选择签名模式 (direct|amino-json|direct-aux|textual)，属于高级选项
      --timeout-duration duration   TimeoutDuration 表示交易在内存池中保持有效的持续时间。交易的无序 nonce 将设为创建时间加该持续时长；若交易仍在内存池且区块时间超过提交时间加 TimeoutTimestamp，交易将被拒绝。
      --timeout-height uint         已弃用：请改用 --timeout-duration。设置区块超时高度，防止交易在超出该高度后被提交
      --tip string                  小费金额，将在目标链转给费用支付者。仅与 --aux 搭配时有效，若目标链未启用 TipDecorator 则忽略
      --unordered                   启用无序交易投递；须与 --timeout-duration 一起使用
  -y, --yes                         跳过交易广播时的确认提示
```

### 继承自父命令的选项

```
      --home string         配置和数据文件夹 
      --log_format string   日志格式 (json|plain) 
      --log_level string    日志级别 (trace|debug|info|warn|error|fatal|panic|disabled 或 '*:[level],[key]:[level]') 
      --log_no_color        禁用彩色日志
      --trace               在出错时打印完整堆栈跟踪
```

### 另请参阅

* [zetacored tx staking](#zetacored-tx-staking)	- 质押模块的交易子命令


## zetacored tx upgrade

升级模块的交易子命令

### 选项

```
  -h, --help   查看 upgrade 的帮助
```

### 继承自父命令的选项

```
      --chain-id string     网络链 ID
      --home string         配置和数据文件夹 
      --log_format string   日志格式 (json|plain) 
      --log_level string    日志级别 (trace|debug|info|warn|error|fatal|panic|disabled 或 '*:[level],[key]:[level]') 
      --log_no_color        禁用彩色日志
      --trace               在出错时打印完整堆栈跟踪
```

### 另请参阅

* [zetacored tx](#zetacored-tx)	- 交易子命令集合
* [zetacored tx upgrade cancel-software-upgrade](#zetacored-tx-upgrade-cancel-software-upgrade)	- 取消当前的软件升级提案
* [zetacored tx upgrade cancel-upgrade-proposal](#zetacored-tx-upgrade-cancel-upgrade-proposal)	- 提交提案以取消计划中的链升级
* [zetacored tx upgrade software-upgrade](#zetacored-tx-upgrade-software-upgrade)	- 提交软件升级提案


## zetacored tx upgrade cancel-software-upgrade

取消当前的软件升级提案，并可附带初始押金。

```
zetacored tx upgrade cancel-software-upgrade [flags]
```

### 选项

```
  -a, --account-number uint         签名账户的账号（仅离线模式）
      --authority string            升级模块的权限地址（默认为 gov）
      --aux                         生成辅助签名数据而不是发送交易
  -b, --broadcast-mode string       交易广播模式 (sync|async) 
      --chain-id string             网络链 ID
      --deposit string              治理提案所需押金
      --dry-run                     忽略 --gas 参数，模拟交易但不广播（启用时无法访问本地 Keybase）
      --fee-granter string          为交易提供费用的 fee granter 地址
      --fee-payer string            由该地址支付交易费用，而不是从签名者扣除
      --fees string                 交易需支付的费用，例如 10uatom
      --from string                 用于签名的私钥名称或地址
      --gas string                  每笔交易的 gas 上限；设置为 "auto" 可自动估算（注意 "auto" 可能并非精确结果，可设置有效代币值微调，亦可替代 --fees）（默认 200000）
      --gas-adjustment float        与模拟返回的 gas 估值相乘的调整系数；若手动指定 gas 上限则忽略该参数（默认 1）
      --gas-prices string           以小数表示的 gas price，用于计算交易费用（如 0.1uatom）
      --generate-only               构建未签名交易并输出到标准输出（启用时仅在提供密钥名称的情况下访问本地 Keybase）
  -h, --help                        查看 cancel-software-upgrade 的帮助
      --keyring-backend string      选择 keyring 后端 (os|file|kwallet|pass|test|memory) 
      --keyring-dir string          客户端 keyring 目录；未指定则使用默认 home 目录
      --ledger                      使用已连接的 Ledger 设备
      --metadata string             治理提案附带的元数据
      --node string                 此链的 CometBFT RPC 地址 [host]:[port] 
      --note string                 为交易添加说明（旧参数 --memo）
      --offline                     离线模式（禁用所有联网功能）
  -o, --output string               输出格式 (text|json) 
  -s, --sequence uint               签名账户的 sequence（仅离线模式）
      --sign-mode string            选择签名模式 (direct|amino-json|direct-aux|textual)，属于高级选项
      --summary string              治理提案摘要
      --timeout-duration duration   TimeoutDuration 表示交易在内存池中保持有效的持续时间。交易的无序 nonce 将设为创建时间加该持续时长；若交易仍在内存池且区块时间超过提交时间加 TimeoutTimestamp，交易将被拒绝。
      --timeout-height uint         已弃用：请改用 --timeout-duration。设置区块超时高度，防止交易在超出该高度后被提交
      --tip string                  小费金额，将在目标链转给费用支付者。仅与 --aux 搭配时有效，若目标链未启用 TipDecorator 则忽略
      --title string                治理提案标题
      --unordered                   启用无序交易投递；须与 --timeout-duration 一起使用
  -y, --yes                         跳过交易广播时的确认提示
```

### 继承自父命令的选项

```
      --home string         配置和数据文件夹 
      --log_format string   日志格式 (json|plain) 
      --log_level string    日志级别 (trace|debug|info|warn|error|fatal|panic|disabled 或 '*:[level],[key]:[level]') 
      --log_no_color        禁用彩色日志
      --trace               在出错时打印完整堆栈跟踪
```

### 另请参阅

* [zetacored tx upgrade](#zetacored-tx-upgrade)	- 升级模块的交易子命令


## zetacored tx upgrade cancel-upgrade-proposal

提交提案以取消计划中的链升级。

```
zetacored tx upgrade cancel-upgrade-proposal [flags]
```

### 选项

```
  -a, --account-number uint         签名账户的账号（仅离线模式）
      --aux                         生成辅助签名数据而不是发送交易
  -b, --broadcast-mode string       交易广播模式 (sync|async) 
      --chain-id string             网络链 ID
      --dry-run                     忽略 --gas 参数，模拟交易但不广播（启用时无法访问本地 Keybase）
      --fee-granter string          为交易提供费用的 fee granter 地址
      --fee-payer string            由该地址支付交易费用，而不是从签名者扣除
      --fees string                 交易需支付的费用，例如 10uatom
      --from string                 用于签名的私钥名称或地址
      --gas string                  每笔交易的 gas 上限；设置为 "auto" 可自动估算（注意 "auto" 可能并非精确结果，可设置有效代币值微调，亦可替代 --fees）（默认 200000）
      --gas-adjustment float        与模拟返回的 gas 估值相乘的调整系数；若手动指定 gas 上限则忽略该参数（默认 1）
      --gas-prices string           以小数表示的 gas price，用于计算交易费用（如 0.1uatom）
      --generate-only               构建未签名交易并输出到标准输出（启用时仅在提供密钥名称的情况下访问本地 Keybase）
  -h, --help                        查看 cancel-upgrade-proposal 的帮助
      --keyring-backend string      选择 keyring 后端 (os|file|kwallet|pass|test|memory) 
      --keyring-dir string          客户端 keyring 目录；未指定则使用默认 home 目录
      --ledger                      使用已连接的 Ledger 设备
      --node string                 此链的 CometBFT RPC 地址 [host]:[port] 
      --note string                 为交易添加说明（旧参数 --memo）
      --offline                     离线模式（禁用所有联网功能）
  -o, --output string               输出格式 (text|json) 
  -s, --sequence uint               签名账户的 sequence（仅离线模式）
      --sign-mode string            选择签名模式 (direct|amino-json|direct-aux|textual)，属于高级选项
      --timeout-duration duration   TimeoutDuration 表示交易在内存池中保持有效的持续时间。交易的无序 nonce 将设为创建时间加该持续时长；若交易仍在内存池且区块时间超过提交时间加 TimeoutTimestamp，交易将被拒绝。
      --timeout-height uint         已弃用：请改用 --timeout-duration。设置区块超时高度，防止交易在超出该高度后被提交
      --tip string                  小费金额，将在目标链转给费用支付者。仅与 --aux 搭配时有效，若目标链未启用 TipDecorator 则忽略
      --unordered                   启用无序交易投递；须与 --timeout-duration 一起使用
  -y, --yes                         跳过交易广播时的确认提示
```

### 继承自父命令的选项

```
      --home string         配置和数据文件夹 
      --log_format string   日志格式 (json|plain) 
      --log_level string    日志级别 (trace|debug|info|warn|error|fatal|panic|disabled 或 '*:[level],[key]:[level]') 
      --log_no_color        禁用彩色日志
      --trace               在出错时打印完整堆栈跟踪
```

### 另请参阅

* [zetacored tx upgrade](#zetacored-tx-upgrade)	- 升级模块的交易子命令


## zetacored tx upgrade software-upgrade

提交软件升级提案，可附初始押金。需指定唯一的升级名称与生效高度，可在 `--upgrade-info` 中提供与 https://docs.cosmos.network/main/tooling/cosmovisor 兼容的二进制下载信息。

```
zetacored tx upgrade software-upgrade [name] (--upgrade-height [height]) (--upgrade-info [info]) [flags]
```

### 选项

```
  -a, --account-number uint         签名账户的账号（仅离线模式）
      --authority string            升级模块的权限地址（默认为 gov）
      --aux                         生成辅助签名数据而不是发送交易
  -b, --broadcast-mode string       交易广播模式 (sync|async) 
      --chain-id string             网络链 ID
      --daemon-name string          升级目标可执行文件名称（用于校验 upgrade-info）；默认取 DAEMON_NAME 环境变量，若未设置则为当前可执行文件
      --deposit string              治理提案押金
      --dry-run                     忽略 --gas 参数，模拟交易但不广播（启用时无法访问本地 Keybase）
      --fee-granter string          为交易提供费用的 fee granter 地址
      --fee-payer string            由该地址支付交易费用，而不是从签名者扣除
      --fees string                 交易需支付的费用，例如 10uatom
      --from string                 用于签名的私钥名称或地址
      --gas string                  每笔交易的 gas 上限；设置为 "auto" 可自动估算（注意 "auto" 可能并非精确结果，可设置有效代币值微调，亦可替代 --fees）（默认 200000）
      --gas-adjustment float        与模拟返回的 gas 估值相乘的调整系数；若手动指定 gas 上限则忽略该参数（默认 1）
      --gas-prices string           以小数表示的 gas price，用于计算交易费用（如 0.1uatom）
      --generate-only               构建未签名交易并输出到标准输出（启用时仅在提供密钥名称的情况下访问本地 Keybase）
  -h, --help                        查看 software-upgrade 的帮助
      --keyring-backend string      选择 keyring 后端 (os|file|kwallet|pass|test|memory) 
      --keyring-dir string          客户端 keyring 目录；未指定则使用默认 home 目录
      --ledger                      使用已连接的 Ledger 设备
      --metadata string             治理提案附带的元数据
      --no-checksum-required        跳过对 upgrade-info 中二进制文件校验和的要求
      --no-validate                 跳过 upgrade-info 校验（危险操作）
      --node string                 此链的 CometBFT RPC 地址 [host]:[port] 
      --note string                 为交易添加说明（旧参数 --memo）
      --offline                     离线模式（禁用所有联网功能）
  -o, --output string               输出格式 (text|json) 
  -s, --sequence uint               签名账户的 sequence（仅离线模式）
      --sign-mode string            选择签名模式 (direct|amino-json|direct-aux|textual)，属于高级选项
      --summary string              治理提案摘要
      --timeout-duration duration   TimeoutDuration 表示交易在内存池中保持有效的持续时间。交易的无序 nonce 将设为创建时间加该持续时长；若交易仍在内存池且区块时间超过提交时间加 TimeoutTimestamp，交易将被拒绝。
      --timeout-height uint         已弃用：请改用 --timeout-duration。设置区块超时高度，防止交易在超出该高度后被提交
      --tip string                  小费金额，将在目标链转给费用支付者。仅与 --aux 搭配时有效，若目标链未启用 TipDecorator 则忽略
      --title string                治理提案标题
      --unordered                   启用无序交易投递；须与 --timeout-duration 一起使用
      --upgrade-height int          升级生效的区块高度
      --upgrade-info string         升级计划信息，如新版本下载地址等
  -y, --yes                         跳过交易广播时的确认提示
```

### 继承自父命令的选项

```
      --home string         配置和数据文件夹 
      --log_format string   日志格式 (json|plain) 
      --log_level string    日志级别 (trace|debug|info|warn|error|fatal|panic|disabled 或 '*:[level],[key]:[level]') 
      --log_no_color        禁用彩色日志
      --trace               在出错时打印完整堆栈跟踪
```

### 另请参阅

* [zetacored tx upgrade](#zetacored-tx-upgrade)	- 升级模块的交易子命令


## zetacored tx validate-signatures

校验交易签名，列出必须签名的地址、已签名的地址，并确认签名顺序正确。若启用 `--offline` 则不会校验交易签名有效性（需连接全节点）。

```
zetacored tx validate-signatures [file] [flags]
```

### 选项

```
  -a, --account-number uint         签名账户的账号（仅离线模式）
      --aux                         生成辅助签名数据而不是发送交易
  -b, --broadcast-mode string       交易广播模式 (sync|async) 
      --chain-id string             网络链 ID
      --dry-run                     忽略 --gas 参数，模拟交易但不广播（启用时无法访问本地 Keybase）
      --fee-granter string          为交易提供费用的 fee granter 地址
      --fee-payer string            由该地址支付交易费用，而不是从签名者扣除
      --fees string                 交易需支付的费用，例如 10uatom
      --from string                 用于签名的私钥名称或地址
      --gas string                  每笔交易的 gas 上限；设置为 "auto" 可自动估算（注意 "auto" 可能并非精确结果，可设置有效代币值微调，亦可替代 --fees）（默认 200000）
      --gas-adjustment float        与模拟返回的 gas 估值相乘的调整系数；若手动指定 gas 上限则忽略该参数（默认 1）
      --gas-prices string           以小数表示的 gas price，用于计算交易费用（如 0.1uatom）
      --generate-only               构建未签名交易并输出到标准输出（启用时仅在提供密钥名称的情况下访问本地 Keybase）
  -h, --help                        查看 validate-signatures 的帮助
      --keyring-backend string      选择 keyring 后端 (os|file|kwallet|pass|test|memory) 
      --keyring-dir string          客户端 keyring 目录；未指定则使用默认 home 目录
      --ledger                      使用已连接的 Ledger 设备
      --node string                 此链的 CometBFT RPC 地址 [host]:[port] 
      --note string                 为交易添加说明（旧参数 --memo）
      --offline                     离线模式（禁用所有联网功能）
  -o, --output string               输出格式 (text|json) 
  -s, --sequence uint               签名账户的 sequence（仅离线模式）
      --sign-mode string            选择签名模式 (direct|amino-json|direct-aux|textual)，属于高级选项
      --timeout-duration duration   TimeoutDuration 表示交易在内存池中保持有效的持续时间。交易的无序 nonce 将设为创建时间加该持续时长；若交易仍在内存池且区块时间超过提交时间加 TimeoutTimestamp，交易将被拒绝。
      --timeout-height uint         已弃用：请改用 --timeout-duration。设置区块超时高度，防止交易在超出该高度后被提交
      --tip string                  小费金额，将在目标链转给费用支付者。仅与 --aux 搭配时有效，若目标链未启用 TipDecorator 则忽略
      --unordered                   启用无序交易投递；须与 --timeout-duration 一起使用
  -y, --yes                         跳过交易广播时的确认提示
```

### 继承自父命令的选项

```
      --home string         配置和数据文件夹 
      --log_format string   日志格式 (json|plain) 
      --log_level string    日志级别 (trace|debug|info|warn|error|fatal|panic|disabled 或 '*:[level],[key]:[level]') 
      --log_no_color        禁用彩色日志
      --trace               在出错时打印完整堆栈跟踪
```

### 另请参阅

* [zetacored tx](#zetacored-tx)	- 交易子命令集合


## zetacored tx vesting

锁仓模块的交易子命令

```
zetacored tx vesting [flags]
```

### 选项

```
  -h, --help   查看 vesting 的帮助
```

### 继承自父命令的选项

```
      --chain-id string     网络链 ID
      --home string         配置和数据文件夹 
      --log_format string   日志格式 (json|plain) 
      --log_level string    日志级别 (trace|debug|info|warn|error|fatal|panic|disabled 或 '*:[level],[key]:[level]') 
      --log_no_color        禁用彩色日志
      --trace               在出错时打印完整堆栈跟踪
```

### 另请参阅

* [zetacored tx](#zetacored-tx)	- 交易子命令集合
* [zetacored tx vesting create-periodic-vesting-account](#zetacored-tx-vesting-create-periodic-vesting-account)	- 创建含定期释放计划的新锁仓账户
* [zetacored tx vesting create-permanent-locked-account](#zetacored-tx-vesting-create-permanent-locked-account)	- 创建永久锁定账户并注入代币
* [zetacored tx vesting create-vesting-account](#zetacored-tx-vesting-create-vesting-account)	- 创建新的锁仓账户并注入代币


## zetacored tx vesting create-periodic-vesting-account

创建带定期释放计划的新锁仓账户，并注入指定代币。

### 概要

按顺序定义多组代币与释放周期（秒），每个周期在前一个周期结束后开始，首个周期从账户创建时开始。例如下方 `periods.json` 代表每隔 30 天释放 10 枚 `test` 代币，总计 20 枚。

```
zetacored tx vesting create-periodic-vesting-account [to_address] [periods_json_file] [flags]
```

### 示例

```
$ zetacored tx vesting create-periodic-vesting-account [to_address] periods.json --from mykey

其中 periods.json 内容如下：

{
    "start_time": 1625204910,
    "periods": [
      {
        "coins": "10test",
        "length_seconds": 2592000 // 30 天
      },
      {
        "coins": "10test",
        "length_seconds": 2592000 // 30 天
      }
    ]
}
```

### 选项

```
  -a, --account-number uint         签名账户的账号（仅离线模式）
      --aux                         生成辅助签名数据而不是发送交易
  -b, --broadcast-mode string       交易广播模式 (sync|async) 
      --chain-id string             网络链 ID
      --dry-run                     忽略 --gas 参数，模拟交易但不广播（启用时无法访问本地 Keybase）
      --fee-granter string          为交易提供费用的 fee granter 地址
      --fee-payer string            由该地址支付交易费用，而不是从签名者扣除
      --fees string                 交易需支付的费用，例如 10uatom
      --from string                 用于签名的私钥名称或地址
      --gas string                  每笔交易的 gas 上限；设置为 "auto" 可自动估算（注意 "auto" 可能并非精确结果，可设置有效代币值微调，亦可替代 --fees）（默认 200000）
      --gas-adjustment float        与模拟返回的 gas 估值相乘的调整系数；若手动指定 gas 上限则忽略该参数（默认 1）
      --gas-prices string           以小数表示的 gas price，用于计算交易费用（如 0.1uatom）
      --generate-only               构建未签名交易并输出到标准输出（启用时仅在提供密钥名称的情况下访问本地 Keybase）
  -h, --help                        查看 create-periodic-vesting-account 的帮助
      --keyring-backend string      选择 keyring 后端 (os|file|kwallet|pass|test|memory) 
      --keyring-dir string          客户端 keyring 目录；未指定则使用默认 home 目录
      --ledger                      使用已连接的 Ledger 设备
      --node string                 此链的 CometBFT RPC 地址 [host]:[port] 
      --note string                 为交易添加说明（旧参数 --memo）
      --offline                     离线模式（禁用所有联网功能）
  -o, --output string               输出格式 (text|json) 
  -s, --sequence uint               签名账户的 sequence（仅离线模式）
      --sign-mode string            选择签名模式 (direct|amino-json|direct-aux|textual)，属于高级选项
      --timeout-duration duration   TimeoutDuration 表示交易在内存池中保持有效的持续时间。交易的无序 nonce 将设为创建时间加该持续时长；若交易仍在内存池且区块时间超过提交时间加 TimeoutTimestamp，交易将被拒绝。
      --timeout-height uint         已弃用：请改用 --timeout-duration。设置区块超时高度，防止交易在超出该高度后被提交
      --tip string                  小费金额，将在目标链转给费用支付者。仅与 --aux 搭配时有效，若目标链未启用 TipDecorator 则忽略
      --unordered                   启用无序交易投递；须与 --timeout-duration 一起使用
  -y, --yes                         跳过交易广播时的确认提示
```

### 继承自父命令的选项

```
      --home string         配置和数据文件夹 
      --log_format string   日志格式 (json|plain) 
      --log_level string    日志级别 (trace|debug|info|warn|error|fatal|panic|disabled 或 '*:[level],[key]:[level]') 
      --log_no_color        禁用彩色日志
      --trace               在出错时打印完整堆栈跟踪
```

### 另请参阅

* [zetacored tx vesting](#zetacored-tx-vesting)	- 锁仓模块的交易子命令


## zetacored tx vesting create-permanent-locked-account

创建永久锁定账户并注入代币，这些代币不可转移但可用于质押，质押奖励将以可转移的流动代币形式发放。

```
zetacored tx vesting create-permanent-locked-account [to_address] [amount] [flags]
```

### 选项

```
  -a, --account-number uint         签名账户的账号（仅离线模式）
      --aux                         生成辅助签名数据而不是发送交易
  -b, --broadcast-mode string       交易广播模式 (sync|async) 
      --chain-id string             网络链 ID
      --dry-run                     忽略 --gas 参数，模拟交易但不广播（启用时无法访问本地 Keybase）
      --fee-granter string          为交易提供费用的 fee granter 地址
      --fee-payer string            由该地址支付交易费用，而不是从签名者扣除
      --fees string                 交易需支付的费用，例如 10uatom
      --from string                 用于签名的私钥名称或地址
      --gas string                  每笔交易的 gas 上限；设置为 "auto" 可自动估算（注意 "auto" 可能并非精确结果，可设置有效代币值微调，亦可替代 --fees）（默认 200000）
      --gas-adjustment float        与模拟返回的 gas 估值相乘的调整系数；若手动指定 gas 上限则忽略该参数（默认 1）
      --gas-prices string           以小数表示的 gas price，用于计算交易费用（如 0.1uatom）
      --generate-only               构建未签名交易并输出到标准输出（启用时仅在提供密钥名称的情况下访问本地 Keybase）
  -h, --help                        查看 create-permanent-locked-account 的帮助
      --keyring-backend string      选择 keyring 后端 (os|file|kwallet|pass|test|memory) 
      --keyring-dir string          客户端 keyring 目录；未指定则使用默认 home 目录
      --ledger                      使用已连接的 Ledger 设备
      --node string                 此链的 CometBFT RPC 地址 [host]:[port] 
      --note string                 为交易添加说明（旧参数 --memo）
      --offline                     离线模式（禁用所有联网功能）
  -o, --output string               输出格式 (text|json) 
  -s, --sequence uint               签名账户的 sequence（仅离线模式）
      --sign-mode string            选择签名模式 (direct|amino-json|direct-aux|textual)，属于高级选项
      --timeout-duration duration   TimeoutDuration 表示交易在内存池中保持有效的持续时间。交易的无序 nonce 将设为创建时间加该持续时长；若交易仍在内存池且区块时间超过提交时间加 TimeoutTimestamp，交易将被拒绝。
      --timeout-height uint         已弃用：请改用 --timeout-duration。设置区块超时高度，防止交易在超出该高度后被提交
      --tip string                  小费金额，将在目标链转给费用支付者。仅与 --aux 搭配时有效，若目标链未启用 TipDecorator 则忽略
      --unordered                   启用无序交易投递；须与 --timeout-duration 一起使用
  -y, --yes                         跳过交易广播时的确认提示
```

### 继承自父命令的选项

```
      --home string         配置和数据文件夹 
      --log_format string   日志格式 (json|plain) 
      --log_level string    日志级别 (trace|debug|info|warn|error|fatal|panic|disabled 或 '*:[level],[key]:[level]') 
      --log_no_color        禁用彩色日志
      --trace               在出错时打印完整堆栈跟踪
```

### 另请参阅

* [zetacored tx vesting](#zetacored-tx-vesting)	- 锁仓模块的交易子命令


## zetacored tx vesting create-vesting-account

创建新的锁仓账户并注入代币。可通过 `--delayed` 指定延迟锁仓账户，否则默认为线性锁仓；账户开始时间取交易所在区块的时间，`end_time` 需为 UNIX 时间戳。

```
zetacored tx vesting create-vesting-account [to_address] [amount] [end_time] [flags]
```

### 选项

```
  -a, --account-number uint         签名账户的账号（仅离线模式）
      --aux                         生成辅助签名数据而不是发送交易
  -b, --broadcast-mode string       交易广播模式 (sync|async) 
      --chain-id string             网络链 ID
      --delayed                     若为 true，则创建延迟锁仓账户
      --dry-run                     忽略 --gas 参数，模拟交易但不广播（启用时无法访问本地 Keybase）
      --fee-granter string          为交易提供费用的 fee granter 地址
      --fee-payer string            由该地址支付交易费用，而不是从签名者扣除
      --fees string                 交易需支付的费用，例如 10uatom
      --from string                 用于签名的私钥名称或地址
      --gas string                  每笔交易的 gas 上限；设置为 "auto" 可自动估算（注意 "auto" 可能并非精确结果，可设置有效代币值微调，亦可替代 --fees）（默认 200000）
      --gas-adjustment float        与模拟返回的 gas 估值相乘的调整系数；若手动指定 gas 上限则忽略该参数（默认 1）
      --gas-prices string           以小数表示的 gas price，用于计算交易费用（如 0.1uatom）
      --generate-only               构建未签名交易并输出到标准输出（启用时仅在提供密钥名称的情况下访问本地 Keybase）
  -h, --help                        查看 create-vesting-account 的帮助
      --keyring-backend string      选择 keyring 后端 (os|file|kwallet|pass|test|memory) 
      --keyring-dir string          客户端 keyring 目录；未指定则使用默认 home 目录
      --ledger                      使用已连接的 Ledger 设备
      --node string                 此链的 CometBFT RPC 地址 [host]:[port] 
      --note string                 为交易添加说明（旧参数 --memo）
      --offline                     离线模式（禁用所有联网功能）
  -o, --output string               输出格式 (text|json) 
  -s, --sequence uint               签名账户的 sequence（仅离线模式）
      --sign-mode string            选择签名模式 (direct|amino-json|direct-aux|textual)，属于高级选项
      --timeout-duration duration   TimeoutDuration 表示交易在内存池中保持有效的持续时间。交易的无序 nonce 将设为创建时间加该持续时长；若交易仍在内存池且区块时间超过提交时间加 TimeoutTimestamp，交易将被拒绝。
      --timeout-height uint         已弃用：请改用 --timeout-duration。设置区块超时高度，防止交易在超出该高度后被提交
      --tip string                  小费金额，将在目标链转给费用支付者。仅与 --aux 搭配时有效，若目标链未启用 TipDecorator 则忽略
      --unordered                   启用无序交易投递；须与 --timeout-duration 一起使用
  -y, --yes                         跳过交易广播时的确认提示
```

### 继承自父命令的选项

```
      --home string         配置和数据文件夹 
      --log_format string   日志格式 (json|plain) 
      --log_level string    日志级别 (trace|debug|info|warn|error|fatal|panic|disabled 或 '*:[level],[key]:[level]') 
      --log_no_color        禁用彩色日志
      --trace               在出错时打印完整堆栈跟踪
```

### 另请参阅

* [zetacored tx vesting](#zetacored-tx-vesting)	- 锁仓模块的交易子命令


## zetacored upgrade-handler-version

打印默认的升级处理程序版本。

```
zetacored upgrade-handler-version [flags]
```

### 选项

```
  -h, --help   查看 upgrade-handler-version 的帮助
```

### 继承自父命令的选项

```
      --home string         配置和数据文件夹 
      --log_format string   日志格式 (json|plain) 
      --log_level string    日志级别 (trace|debug|info|warn|error|fatal|panic|disabled 或 '*:[level],[key]:[level]') 
      --log_no_color        禁用彩色日志
      --trace               在出错时打印完整堆栈跟踪
```

### 另请参阅

* [zetacored](#zetacored)	- Zetacore 守护进程（服务端）


## zetacored validate

验证默认位置或指定路径下的创世文件。

```
zetacored validate [file] [flags]
```

### 选项

```
  -h, --help   查看 validate 的帮助
```

### 继承自父命令的选项

```
      --home string         配置和数据文件夹 
      --log_format string   日志格式 (json|plain) 
      --log_level string    日志级别 (trace|debug|info|warn|error|fatal|panic|disabled 或 '*:[level],[key]:[level]') 
      --log_no_color        禁用彩色日志
      --trace               在出错时打印完整堆栈跟踪
```

### 另请参阅

* [zetacored](#zetacored)	- Zetacore 守护进程（服务端）


## zetacored version

打印应用程序二进制版本信息。

```
zetacored version [flags]
```

### 选项

```
  -h, --help            查看 version 的帮助
      --long            输出详细版本信息
  -o, --output string   输出格式 (text|json) 
```

### 继承自父命令的选项

```
      --home string         配置和数据文件夹 
      --log_format string   日志格式 (json|plain) 
      --log_level string    日志级别 (trace|debug|info|warn|error|fatal|panic|disabled 或 '*:[level],[key]:[level]') 
      --log_no_color        禁用彩色日志
      --trace               在出错时打印完整堆栈跟踪
```

### 另请参阅

* [zetacored](#zetacored)	- Zetacore 守护进程（服务端）

