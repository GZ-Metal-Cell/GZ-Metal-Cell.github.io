#!/usr/bin/env python
"""Convenience runner: python run.py -i INPUT -o OUTPUT"""

import sys
import os

sys.path.insert(0, os.path.join(os.path.dirname(__file__), "src"))

if __name__ == "__main__":
    from video2notes.cli import main
    main()
