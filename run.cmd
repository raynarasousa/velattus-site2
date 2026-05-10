@echo off
set "NODE_EXE=%ProgramFiles%\nodejs\node.exe"
if exist "%NODE_EXE%" goto RunNode
set "NODE_EXE=%ProgramFiles(x86)%\nodejs\node.exe"
if exist "%NODE_EXE%" goto RunNode
echo Node.js nao encontrado em %ProgramFiles%\nodejs nem em %ProgramFiles(x86)%\nodejs
echo Instale o Node.js ou adicione-o ao PATH do Windows.
pause
goto End

:RunNode
"%NODE_EXE%" "%~dp0server.js"

:End
