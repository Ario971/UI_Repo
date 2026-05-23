---
title: "Show HN: Darnix – Darwin Built with Nix"
source: "Hacker News Show HN"
url: "https://github.com/jonhermansen/darnix"
date: "2026-05-22"
topic: "AI dev tools"
type: "article"
read: false
summary: "The Darwin kernel (XNU) has been open source since 1999. But \"open source\" and \"you can actually build and boot it\" are very different things. XNU depends on proprietary tooling, kexts, and a bunch of open source projects published without a build system. Darnix builds the whole thing with Nix. The kernel, the filesystem, the boot image, all the way to a... (Local summary fallback used.)"
---

The Darwin kernel (XNU) has been open source since 1999. But "open source" and "you can actually build and boot it" are very different things. XNU depends on proprietary tooling, kexts, and a bunch of open source projects published without a build system. Darnix builds the whole thing with Nix. The kernel, the filesystem, the boot image, all the way to a running QEMU instance. We patched XNU to run on QEMU without kexts, ported HFS+ from a kernel extension into the kernel itself, fixed GRUB's Mach-O loader, and wired it all together as a flake. The build is fully sandboxed. No root, no volume mounting, no device access, no network. The bigger idea is a revival of PureDarwin ( https://www.puredarwin.org/ ), a standalone OS on Apple's open source Darwin layer, with Nix managing everything above the kernel. Sort of like a Nix OS on XNU instead of Linux. Right now the kernel boots, mounts a ramdisk, and runs a single static binary. Next step is a shell. https://github.com/jonhermansen/darnix Technical details and the full list of patches are in the README. I would love to hear from anyone who’s thought about this space! --- Darnix is not affiliated with or endorsed by Apple Inc. This is not macOS. Apple, macOS, and related trademarks are the property of Apple Inc. Darwin is licensed under the APSL.
