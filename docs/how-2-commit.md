# How to commit
modpack-toolkit handles all this for you, use that if possible.

## When modpack-toolkit doesn't work

modpack-toolkit's push-update-prod command basically runs these commands in order.
```sh
git rm -r --cached "*" # make sure we don't carry over old resource toml files
git add "*"
git commit -m "your update message goes here"
git tag "vX.X.X" # replace x.x.x with a correct version
git push origin --tags
echo "Pushed update to production branch."
```

So if it's not working just make sure you have git, and run this.

## What are the tags about
We use the tags in order to create github releases. The GitHub releases contain an .mrpack file so if any end user doesn't have PrismLauncher for any reason, we can just give them that.

*in the future we might even be able to use them to create CurseForge packs, and redeploy the server*
