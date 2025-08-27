# Python Command Line Options (Python 3.13)

## Usage
```bash
C:\Users\Administrator\AppData\Local\Programs\Python\Python313\python.exe [option] ... [-c cmd | -m mod | file | -] [arg] ...
```

---

## Options

| Option | Description |
|--------|-------------|
| `-b` | Issue warnings about converting `bytes/bytearray` to `str` and comparing them with `str` or `int`. (`-bb` issues errors). |
| `-B` | Don’t write `.pyc` files on import; also `PYTHONDONTWRITEBYTECODE=x`. |
| `-c cmd` | Program passed in as string (terminates option list). |
| `-d` | Turn on parser debugging output (experts only, works only on debug builds); also `PYTHONDEBUG=x`. |
| `-E` | Ignore `PYTHON*` environment variables (such as `PYTHONPATH`). |
| `-h` | Print help message and exit (also `-?` or `--help`). |
| `-i` | Inspect interactively after running script; forces prompt even if stdin is not a terminal; also `PYTHONINSPECT=x`. |
| `-I` | Isolate Python from user environment (implies `-E`, `-P`, and `-s`). |
| `-m mod` | Run library module as a script (terminates option list). |
| `-O` | Remove `assert` and `__debug__`-dependent statements; add `.opt-1` before `.pyc` extension; also `PYTHONOPTIMIZE=x`. |
| `-OO` | Same as `-O` plus discard docstrings; add `.opt-2` before `.pyc` extension. |
| `-P` | Don’t prepend unsafe path to `sys.path`; also `PYTHONSAFEPATH`. |
| `-q` | Don’t print version and copyright messages on startup. |
| `-s` | Don’t add user site directory to `sys.path`; also `PYTHONNOUSERSITE=x`. |
| `-S` | Don’t imply `import site` on initialization. |
| `-u` | Force stdout and stderr to be unbuffered; stdin unaffected; also `PYTHONUNBUFFERED=x`. |
| `-v` | Verbose (trace import statements); also `PYTHONVERBOSE=x`. Can be repeated. |
| `-V` | Print Python version and exit (also `--version`). Twice for more build info. |
| `-W arg` | Warning control (`action:message:category:module:lineno`); also `PYTHONWARNINGS=arg`. |
| `-x` | Skip first line of source, allowing non-Unix `#!cmd`. |
| `-X opt` | Set implementation-specific option. |
| `--check-hash-based-pycs always|default|never` | Control invalidation of hash-based `.pyc` files. |
| `--help-env` | Print help about Python environment variables and exit. |
| `--help-xoptions` | Print help about implementation-specific `-X` options and exit. |
| `--help-all` | Print complete help information and exit. |

---

## Arguments

| Argument | Description |
|----------|-------------|
| `file` | Program read from script file. |
| `-` | Program read from stdin (default; interactive mode if tty). |
| `arg ...` | Arguments passed to program in `sys.argv[1:]`. |

---

## Notes
- `python -m module` is commonly used to run a library as a script (e.g., `python -m pip`).
- Use `-i` for debugging scripts interactively.
- `-O` and `-OO` are used for optimization when distributing Python code.
