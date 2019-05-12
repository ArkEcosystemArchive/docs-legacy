---
title: "Considerations"
---

# Overview

There are a few considerations that must be understood when developing with **IoT**.
This page doesn't aim to be an "end-all" list of those considerations, but hopefully it will assist us in building more robust and secure systems.

[[toc]]

## Best Practices

We recommend following C++ best practices by default, and using Arduino's style guides where relevant.
In most cases C++ guidelines will do just fine; however, there will be times when you will need to follow Arduino conventions.

- [**C++ Core Guidelines**](https://isocpp.github.io/CppCoreGuidelines/CppCoreGuidelines)
- [**Arduino Style Guide**](https://www.arduino.cc/en/Reference/StyleGuide)
- [**Arduino API Style Guide**](https://www.arduino.cc/en/Reference/APIStyleGuide)

## Memory

Available memory is potentially one of the biggest concerns when developing for IoT.

### Memory Sizes

#### Flash Memory

| Board | Available Flash Memory |
| :- | :-- |
| Adafruit 8266 Feather | 4MiB (1MiB ~= 1.05MB) |
|Adafruit ESP32 Feather | 4MiB (4MiB ~= 4.2MB) |
| Arduino Uno | 32 KB of which 0.5 KB used by bootloader |
| Raspberry Pi Zero W | 512MB RAM |
| Raspberry Pi 3 Model B+ | 1GB LPDDR2 SDRAM |

### Heap Fragmentation

A desktop/server environment can generally handle large objects and operations fairly well.  
In microprocessor environments, a 50K string, or making lots of copy/new/malloc calls can and will cause a crash.  
This is due to something known as **Heap Fragmentation**.

<p align="left">
    <img src="https://cdn-learn.adafruit.com/assets/assets/000/010/296/original/learn_arduino_Stack_Operation.gif" width="400" alt="Heap Fragmentation">
</p>

> _src: https://learn.adafruit.com/memories-of-an-arduino/_


## Dos and Don'ts

- **DO** prefer `char` arrays to `std::string` or `String` types when possible. It's not that strings are bad, but they come with overhead. Consider what the goal is when deciding between the two. if you're passing bodies of readable/searchable text, consider using a `string`; If you don't need the memory management or need to search for substrings, consider using `char` as it can be faster and more secure when used correctly.

- **DON'T** carelessly pass raw pointers. i.e. ["Dangling Pointers"](https://en.wikipedia.org/wiki/Dangling_pointer)

- **DO** know your platform! Not every platform supports the same methods and libraries. Desktop/Server environments should have no problem making full use of the Cpp STL; however, only some Arduino boards offer support for the Cpp STL by default, where many might not support it at all.

- **DON'T** use assertions. Failed assertions will exit disgracefully. Prefer patterns that handle errors gracefully, such as returning 'bool' or passing destination buffers.

- **DO** be particularly mindful with memory handling. Microcontrollers inherently have very limited memory capacity, this can lead to fragmentation if we're not cautious.

- **DON'T** be reckless with sensitive information. Using a test passphrase or wallet for trying out a sketch or example is fine. Leaving hard-coded private information in something you plan to share or release is a terrible idea. Consider what the problem you're trying solve _actually is_ and what alternative solutions may exist.

- **DO** prefer use of RTC (real-time clock) modules. Particularly when dealing with signing and network operations.
