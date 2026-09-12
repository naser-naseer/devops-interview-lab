# Hard Pack QA Summary

Version 3 validation result:

```text
Validated 1120 questions across 20 topics.
Core bank: 520
Hard pack: 600
```

Hard Pack composition:

```text
Senior Production Pack: 300
Specialist Deep-Dive:    300
Advanced:                407
Expert:                  193
```

Every question is validated for:

- unique numeric ID
- non-empty topic, question, and explanation
- one of the supported difficulty levels
- exactly four distinct answer options
- a valid A-D answer
- no exact duplicate question stem
- valid optional `whyWrong` keys

The Specialist Deep-Dive section covers 10 additional domains with 30 questions each.
