# Translation Helper

This chrome extention disables translation for the elements you don't want to be translated (e.g. source code, table, cite, paper title etc.).

## How this works

When you are using translation engine like Google Translate, sometimes you may encouter the case
that elements you don't want to be translated (e.g. code) are translated.
This extension parses HTML elements and adds `notranlate` class attribute[1] to the elements according to the pre-defined rules.

[1]: https://cloud.google.com/translate/troubleshooting

## Screenshots

|         Host         |                                                          Before                                                          |                                                          After                                                           |
| :------------------: | :----------------------------------------------------------------------------------------------------------------------: | :----------------------------------------------------------------------------------------------------------------------: |
|      github.com      |    ![GitHubA](https://user-images.githubusercontent.com/36561962/200459039-cfbc60ad-7e26-4f77-bfed-d1d4aab37e05.png)     |    ![GitHubB](https://user-images.githubusercontent.com/36561962/200459051-5f9ee29f-32ff-45e2-83da-3bca5fec8e68.png)     |
|      github.com      |    ![GitHub2A](https://user-images.githubusercontent.com/36561962/200460002-ad78586e-64d8-4a81-8eab-aacd85cc5d05.png)    |    ![GitHub2B](https://user-images.githubusercontent.com/36561962/200460037-3f902d1a-1251-4049-865e-3ef9a81b76c2.png)    |
|   docs.python.org    |    ![PythonA](https://user-images.githubusercontent.com/36561962/200459718-c65ce875-71f5-47fa-9720-9b77782d1df4.png)     |    ![PythonB](https://user-images.githubusercontent.com/36561962/200459742-554e262d-7007-4f50-8d01-43a5012806a6.png)     |
|  paperswithcode.com  | ![PaperWithCodeA](https://user-images.githubusercontent.com/36561962/200461342-f1b8ed6d-9495-458f-9a2b-0576de931832.png) | ![PaperWithCodeB](https://user-images.githubusercontent.com/36561962/200461349-4662cc8a-5279-4729-b075-1447427e4958.png) |
|      arxiv.org       |     ![ArXivA](https://user-images.githubusercontent.com/36561962/200464821-db5d5ac0-d6bf-4d1c-b07a-97e958cb6383.png)     |     ![ArXivB](https://user-images.githubusercontent.com/36561962/200465956-4a5ff3c2-bf3c-4c14-a509-95b8c23cb591.png)     |
| ar5iv.labs.arxiv.org |     ![Ar5iv](https://user-images.githubusercontent.com/36561962/200460918-64e90a6a-d4ef-4df0-aae2-4175ec2f3dd0.png)      |     ![Ar5iv](https://user-images.githubusercontent.com/36561962/200460777-2d0e563d-84f5-4cdc-9d6b-cb1f7994f4e5.png)      |
|    www.kaggle.com    |    ![KaggleA](https://user-images.githubusercontent.com/36561962/200487197-057b916f-489d-49da-95eb-7447fa7c3324.png)     |    ![KaggleB](https://user-images.githubusercontent.com/36561962/200487175-9f92f648-b7d7-4a86-868f-58caebd3bbb4.png)     |

## Installation

1. clone this repository
2. [load an unpacked extension in developer mode](https://developer.chrome.com/docs/extensions/mv3/getstarted/development-basics/#load-unpacked) (add resources in src directory)
