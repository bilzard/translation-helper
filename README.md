# Translation Helper

This chrome extention disables translation for the elements you don't want to be translated (e.g. source code, table, cite, paper title etc.).

## How this works

When you are using translation engine like Google Translate, sometimes you may encouter the case
that elements you don't want to be translated (e.g. code) are translated.
This extension parses HTML elements and adds `notranlate` class attribute[1] to the elements according to the pre-defined rules.

[1]: https://cloud.google.com/translate/troubleshooting

## Screenshots

|        domain        |                                                          Before                                                          |                                                          After                                                           |
| :------------------: | :----------------------------------------------------------------------------------------------------------------------: | :----------------------------------------------------------------------------------------------------------------------: |
|      github.com      |    ![GitHubA](https://user-images.githubusercontent.com/36561962/200459039-cfbc60ad-7e26-4f77-bfed-d1d4aab37e05.png)     |    ![GitHubB](https://user-images.githubusercontent.com/36561962/200459051-5f9ee29f-32ff-45e2-83da-3bca5fec8e68.png)     |
|      github.com      |    ![GitHub2A](https://user-images.githubusercontent.com/36561962/200460002-ad78586e-64d8-4a81-8eab-aacd85cc5d05.png)    |    ![GitHub2B](https://user-images.githubusercontent.com/36561962/200460037-3f902d1a-1251-4049-865e-3ef9a81b76c2.png)    |
|   docs.python.org    |    ![PythonA](https://user-images.githubusercontent.com/36561962/200459718-c65ce875-71f5-47fa-9720-9b77782d1df4.png)     |    ![PythonB](https://user-images.githubusercontent.com/36561962/200459742-554e262d-7007-4f50-8d01-43a5012806a6.png)     |
|  paperswithcode.com  | ![PaperWithCodeA](https://user-images.githubusercontent.com/36561962/200461342-f1b8ed6d-9495-458f-9a2b-0576de931832.png) | ![PaperWithCodeB](https://user-images.githubusercontent.com/36561962/200461349-4662cc8a-5279-4729-b075-1447427e4958.png) |
| ar5iv.labs.arxiv.org |     ![Ar5iv](https://user-images.githubusercontent.com/36561962/200460918-64e90a6a-d4ef-4df0-aae2-4175ec2f3dd0.png)      |     ![Ar5iv](https://user-images.githubusercontent.com/36561962/200460777-2d0e563d-84f5-4cdc-9d6b-cb1f7994f4e5.png)      |
