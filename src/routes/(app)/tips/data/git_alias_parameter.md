---
layout: tip
component: _2
title: 'Set a git alias with a command option'
technologies:
  - git
date: Sun Jan 29 2023 13:30:23 GMT+0100 (UTC)
---

You have to define a function within the alias itself. It's fairly easy to do (do notice the _single_ quotes):

```shell
git config --global alias.<alias_name> '!f() { <command_with_$1_for_first_parameter> }; f'
```

For example, to create an alias which deletes an alias:

```shell
git config --global alias.aliasd '!f() { git config --global --unset alias.$1; }; f'

# use
git aliasd <alias_name>
```
