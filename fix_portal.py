import re

filepath = 'src/components/RegistrationForm.tsx'
with open(filepath, 'r', encoding='utf-8') as f:
    content = f.read()

# Add createPortal import
if "import { createPortal } from 'react-dom';" not in content:
    content = content.replace("import React, { useState, useRef } from 'react';", "import React, { useState, useRef } from 'react';\nimport { createPortal } from 'react-dom';")

# Extract the modal JSX
# Search for: {/* Success Modal Popup */} up to the matching }
modal_start = content.find('{/* Success Modal Popup */}')
if modal_start != -1:
    # Find where the modal ends. It ends before "  </section>"
    modal_end = content.find('  </section>', modal_start)
    if modal_end != -1:
        modal_jsx = content[modal_start:modal_end]
        
        # Replace the modal_jsx with the portal version
        portal_jsx = modal_jsx.replace(
            '{showPopup && (', 
            '{showPopup && createPortal('
        ).replace(
            '      )}',
            '      , document.body)}'
        )
        
        content = content[:modal_start] + portal_jsx + content[modal_end:]
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(content)
        print("Portal added successfully.")
    else:
        print("Could not find modal end")
else:
    print("Could not find modal start")
