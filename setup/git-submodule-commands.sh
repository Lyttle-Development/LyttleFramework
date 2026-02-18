#!/usr/bin/env bash

# Add submodule (LyttleFramework as design library) into packages/design-framework
git submodule add https://github.com/Lyttle-Development/LyttleFramework.git packages/design-framework
git submodule update --init --recursive

# Commit the submodule (.gitmodules + entry)
git add .gitmodules packages/design-framework
git commit -m "chore: add LyttleFramework design library as git submodule (packages/design-framework)"

# Clone with submodules
git clone --recurse-submodules <your-repo-url>
# OR after cloning
git submodule update --init --recursive

# Update submodule to the latest on its remote branch
git submodule update --remote --merge packages/design-framework

# Remove submodule (if needed)
git submodule deinit -f packages/design-framework
git rm -f packages/design-framework
rm -rf .git/modules/packages/design-framework
git commit -m "chore: remove design submodule"