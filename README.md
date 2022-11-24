# JetbrainIDE-CFX.RE

[![TypeScript](https://badges.frapsoft.com/typescript/code/typescript.png?v=101)](https://github.com/ellerbrock/typescript-badges/)
![License](https://img.shields.io/github/license/iTexZoz/JetbrainIDE-CitizenFX.svg)
![OpenIssue](https://img.shields.io/github/issues/iTexZoz/JetbrainIDE-CitizenFX.svg?style=flat)
![LastReleases](https://img.shields.io/github/release/iTexZoz/JetbrainIDE-CitizenFX.svg?label=Last%20releases&style=flat)

### How to use this tool to generate / regenerate CitizenFX native ?

# Attention this project requires the installation of NodeJS on the machine where you want to run it

1) Git clone projet
2) Open a terminal in the folder where it is located JetbrainIDE-CitizenFX.
3) Execute the following command `npm i ` and wait.
4) Execute `npm install -g ts-node`
5) Execute `npm install -g typescript`
6) Once the dependencies install install execute the following command to start the generation of natives `npm run gta` or `npm run rdr3` or `npm run cfx`
7) Wait a few minutes, once the generation is finished nothing more to be written to a in your terminal, you will find a new folder named build, it is in this one that you find what you need.
8) Make a new project in Intellij using EmmyLUA as SDK
![image](https://user-images.githubusercontent.com/58150973/116157328-68852580-a70a-11eb-8ec9-7c51320f79bd.png)

9) Click on "+" for classpath and browse to "build" folder from step 7.
![image](https://user-images.githubusercontent.com/58150973/116157677-07118680-a70b-11eb-82fe-6e72049d03a5.png)

![image](https://user-images.githubusercontent.com/58150973/116157701-11cc1b80-a70b-11eb-9b84-5d5df1ca7dac.png)

10) Done. You can now access all the latest natives for FiveM directly into your code.

![image](https://user-images.githubusercontent.com/58150973/116157791-32947100-a70b-11eb-8d3b-b9efa5a48784.png)

## Special Thank

@CitizenFX (https://github.com/citizenfx/natives)
@alloc8or (https://github.com/alloc8or/rdr3-nativedb-data)
