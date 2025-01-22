# export

Export state to JSON

```
zetacored export [flags]
```

### Options

```
      --for-zero-height              Export state to start at height zero (perform preprocessing)
      --height int                   Export state from a particular height (-1 means latest height) (default -1)
  -h, --help                         help for export
      --home string                  The application home directory 
      --jail-allowed-addrs strings   Comma-separated list of operator addresses of jailed validators to unjail
```

### Options inherited from parent commands

```
      --log_format string   The logging format (json|plain) 
      --log_level string    The logging level (trace|debug|info|warn|error|fatal|panic) 
      --trace               print out full stack trace on errors
```

### SEE ALSO

* [zetacored](zetacored.md)	 - Zetacore Daemon (server)

