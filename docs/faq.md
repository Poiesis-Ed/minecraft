## How to download
**Prism Launcher:** Install Prism Launcher, download the .zip file from [poiesis.link/mcdl](http://poiesis.link/mcdl), and import it. This is the recommended way to install if you want to play online, as it will automatically update itself on startup.

**Modrinth:** Install the Modrinth launcher, and download the `.mrpack` file from the [latest GitHub Release](https://github.com/Poiesis-Ed/minecraft/releases/latest). You can also download older versions of the pack this way, if you have an old world file you want to revisit.

## Why do you only offer .mrpack files in GitHub releases?
The Modrinth API is much nicer to handle on the serverside, so we prefer to use it wherever possible. While packwiz does support exporting to both Modrinth `.mrpack`s and CurseForge `.zip`s, packwiz doesn't support matching mods to their download links across on a different plaform. This means that if we were to provide `.zip` files for CurseForge, we'd need to re-host all the mod `.jar` files inside them, which wastes significant storage. While our Modrinth .mrpack files may occasionally include CurseForge `.jar`s, supporting only one platform results in less overall data stored.