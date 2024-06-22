---
layout: post
title: GlowingItems
subtitle: A simple yet fully customizable minecraft plugin that lets your torches light up
author: codingcat
categories: [Minecraft]
banner:
  image: /assets/images/post/glowing_items.png
  opacity: 0.618
  background: "#000"
  height: "100vh"
  min_height: "38vh"
  heading_style: "font-size: 4.25em; font-weight: bold;"
tags: plugin minecraft java
top: 2
---

GlowingItems is a rather simple but fully customizable plugin that allows items like torches, lanterns, glowstone and many other to emit light when held in the hand or dropped on the floor. It runs on Spigot, Paper, Purpur and similar server softwares in versions 1.20 - 1.20.4.

You can configure everything about the plugin in the `config.yml` file, including items that can glow and which level of light they emit.



## How does it work?
The plugin uses [**light blocks**](https://minecraft.wiki/w/Light_Block){:target="_blank"}, which are invisible blocks that can emit all 15 levels of light in minecraft. These light blocks are automatically placed around players with light emitting items in thier hands or dropped items that are supposed to emit light.

But don't worry about those blocks destroying or replacing other blocks in your world, since the light blocks placed by this plugin are purely client-side, they don't affect your world at all. A client-side block is a block that only your minecraft client can see, meaning it doesn't exist on the server where your world is stored.

## Installation
Installing GlowingItems is as simple as flicking a lever. Just download the newest version of the plugin from [**Modrinth**](https://modrinth.com/plugin/glowing-items-plugin){:target="_blank"} (you can find it under "featured versions" at the bottom left of the page) and put it in the plugins folder of your server!

## How to configure it
You can configure a lot about this plugin in the `config.yml` file.
This is the default configuration:
```yml
# Enable or disable the plugin.
enabled: true

# Whether to light up dropped items. This can impact the performance of your server.
check-dropped-items: true

# The range around each player in which the light of dropped items will be updated.
# Setting this value too high can massively impact server performance. Read more below.
entity-scan-box-size: 30

# You can configure the items that should glow here:
glowing_materials:
  TORCH: # The name of the item in bukkit material format. More info about that below.
    level: 15 # How bright the item should glow. Minecraft light levels go from 0 to 15.
  SOUL_TORCH:
    level: 10
  LANTERN:
    level: 14
  SOUL_LANTERN:
    level: 10
  GLOWSTONE:
    level: 15
  GLOW_BERRIES:
    level: 12
  GLOW_INK_SAC:
    level: 12
  SEA_LANTERN:
    level: 15
  AMETHYST_SHARD:
    level: 6
  AMETHYST_CLUSTER:
    level: 8

```
You have to set the item names in the *Bukkit material format*. This essentially just means making the name uppercase and using underscores instead of spaces. You can find a list of all Bukkit materials [**here**](https://hub.spigotmc.org/javadocs/bukkit/org/bukkit/Material.html){:target="_blank"} if you're interested.

## Dropped items and server performance
Dropped items are enabled by default and don't really impact performance. You should be carefully with increasing the `entity-scan-box-size` option though, because setting it too high can massively reduce the performance of your server.

To light up dropped items, the plugin has to search for nearby items around every player in a very short interval (less than every second). The scan-box size option determinates the radius around every player in which the plugin will update the light blocks for dropped items. When the radius is too high, the plugin has to scan and update **a lot** of dropped items in very short intervals, which can cause miserable server performance.

Keeping the option around 30 to 100 blocks is usually fine, depending on the hardware your server runs on. You can type `/tps` ingame or in your server's console to see the performance of your server. It should be 20 or at least around 19.5 if your server runs good.

## Open source
This plugin is open source, meaning everyone can see it's code.
You are welcome to contribute to this project by creating a pull request or submitting an issue over on [**GitHub**](https://github.com/codingcat2468/GlowingItems){:target="_blank"}!