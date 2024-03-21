name: "\U0001F41E Bug report"
description: Create a report to help us improve
body:
  - type: markdown
    attributes:
      value: |
        **Before You Start...**

        This form is only for submitting bug reports. If you have a usage question
        or are unsure if this is really a bug, make sure to:

        - Read the [docs](https://wppconnect.io/wa-js/)
        - Ask on [Discord Chat](https://discord.com/invite/JU5JGGKGNG)
        - Ask on [GitHub Discussions](https://github.com/wppconnect-team/wa-js/discussions/landing)

        Also try to search for your issue - it may have already been answered or even fixed in the development branch.
        However, if you find that an old, closed issue still persists in the latest version,
        you should open a new issue using the form below instead of commenting on the old issue.
  - type: input
    id: wajsversion
    attributes:
      label: WA-JS Version
      description: |
        Open your package.json and check the version
    validations:
      required: true
  - type: input
    id: whatsappversion
    attributes:
      label: WhatsApp Version
      description: |
        Open your whatsapp page, three dots > settings > help > version
    validations:
      required: true
      
  - type: input
    id: browser
    attributes:
      label: Browser Version
      placeholder: Chrome XX / Chromium XX
    validations:
      required: true
      
  - type: input
    id: browser
    attributes:
      label: Operation System
      placeholder: Windows X / OS X X.Y.Z
    validations:
      required: true

  - type: textarea
    id: steps-to-reproduce
    attributes:
      label: Steps to reproduce
      description: |
        What do we need to do after opening your repro in order to make the bug happen? Clear and concise reproduction instructions are important for us to be able to triage your issue in a timely manner. Note that you can use [Markdown](https://guides.github.com/features/mastering-markdown/) to format lists and code.
      placeholder: Steps to reproduce
    validations:
      required: true
  - type: textarea
    id: expected
    attributes:
      label: What is expected?
    validations:
      required: true
  - type: textarea
    id: actually-happening
    attributes:
      label: What is actually happening?
    validations:
      required: true
  - type: textarea
    id: additional-comments
    attributes:
      label: Any additional comments?
      description: e.g. some background/context of how you ran into this bug.
