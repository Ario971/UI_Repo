@echo off
cd /d "%~dp0"
set "BUNDLED_NODE=%USERPROFILE%\.cache\codex-runtimes\codex-primary-runtime\dependencies\node\bin\node.exe"
if exist "%BUNDLED_NODE%" set "COMMAND_CENTER_NODE=%BUNDLED_NODE%"
if defined COMMAND_CENTER_NODE (
  "%COMMAND_CENTER_NODE%" "%~dp0src\index.js"
) else (
  node "%~dp0src\index.js"
)
