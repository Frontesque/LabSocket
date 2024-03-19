![LabSocket Logo](https://github.com/Frontesque/LabSocket/blob/main/labsocket.png?raw=true)
# LabSocket
An event-based supervisor for SCP: Secret Laboratory (SCP:SL) using websockets

## NOTICE
LabSocket is still under development. Not all log events trigger a LabSocket event yet!

## Why?
I am the Systems Administrator for the SCP:SL server [The Pentagon](https://pentagonscp.us). We value a Vanilla experience, so we are unwilling to use any plugin loaders. Because of thise, we are unable to interact with the game server in any way. As our solution, I've developed LabSocket. It allows basic interaction over websockets, as an event based trigger system. You are also able to programatically interact with the server by running LocalAdmin commands.

## Benefits
- Clients can be written in any programming language that supports networking & websockets (not just C++)
- Easy to parse JSON from game events
- No game files modified
- Clients can be started and stopped at any time, even while the game server is running
- Your game doesn't count at modded
- Simple event based trigger system

## Drawbacks
- Nowhere as versitile as other SCP:SL plugin frameworks
- Unable to interact with the game outside of LocalAdmin
