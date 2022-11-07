# Translation Helper

This chrome extention disables translation for the elements you don't want to be translated (e.g. codes).

## How this works

When you are using translation engine like Google Translate, sometimes you may encouter the case
that elements you don't want to be translated (e.g. code) are translated.
This extension parses HTML elements and adds `notranlate` class attribute[1] to the elements according to the pre-defined rules.

[1]: https://cloud.google.com/translate/troubleshooting

before:

<img width="689" alt="Screen Shot 2022-11-07 at 15 12 53" src="https://user-images.githubusercontent.com/36561962/200241144-750e4ac2-d8a7-4a69-90bb-bec358c7d307.png">

after:

<img width="748" alt="Screen Shot 2022-11-07 at 15 13 06" src="https://user-images.githubusercontent.com/36561962/200241148-41697743-27b3-4d3d-b305-47004a1805f1.png">

