# Translation Helper

This chrome extention disables translation for the elements you don't want to be translated (e.g. codes).

## How this works

When you are using translation engine like Google Translate, sometimes you may encouter the case
that elements you don't want to be translated (e.g. code) are translated.
This extension parses HTML elements and adds `notranlate` class attribute[1] to the elements according to the pre-defined rules.

[1]: https://cloud.google.com/translate/troubleshooting
