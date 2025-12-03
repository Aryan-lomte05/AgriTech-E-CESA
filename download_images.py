import os
import requests
import gdown

# Target directory
output_dir = r'C:\Users\Aryan\e-CESA_Agritech-main\src\assets\gallery'
os.makedirs(output_dir, exist_ok=True)

# File mappings
files = [
    ('1iJO738Sx1U8RJOJfMJz-Ye_b9IdttvMP', 'img1.jpg'),
    ('1bZv9kunw6QRmb8HBaEYOikSId99wZiHR', 'img2.jpg'),
    ('1E-px-ioNZLaNWj9gWknhRdQwM3ZKmRPc', 'img3.jpg'),
    ('1vvs-VzZ09ve8ZyeZORJRhS6hOXlhpLX5', 'img4.jpg'),
    ('1keav9V5VJKpO2yOd87bH1R2UAVddNRZe', 'video1.mp4'),
    ('11g1frY5SJqKFvQoRuhYVCsusU0NLlC1s', 'img5.jpg'),
    ('1PA1I9skxr1yK0hOm7FxKGin-V9LxW_oV', 'img6.jpg'),
    ('1m2I1A2d3eWk5ar8yfbUbo6DdXxnMCShO', 'video2.mp4'),
    ('1MW5hKFwWrM48WL0T2jfyfmzI-JgCAkgL', 'img7.jpg'),
    ('1IvuWkRT21xvjGpwQ-Sb4kqWA_B8oxs4p', 'img8.jpg'),
    ('1ntZGTy1L6Bxhgy6hFwd2hPqyGjhmuo0Q', 'img9.jpg'),
    ('1DVMrmswr5oYq3_ltduGhqCqurC78i5HP', 'img10.jpg'),
    ('18F7lZ_xG5cx4Ta7z0HL_tdbYzXHH2-BF', 'img11.jpg'),
    ('1mwlg9mPMcc4EPa4h_xZ_cItHYeZbBf7J', 'img12.jpg'),
    ('19w_ChT3qqzZrX5w7G3G6wDFixIE6or8T', 'img13.jpg'),
    ('1wlJqCoqJPht9rUnY1EM2-N0oTjCJ_qRo', 'img14.jpg'),
]

print("Starting downloads...")
for file_id, filename in files:
    url = f'https://drive.google.com/uc?id={file_id}'
    output = os.path.join(output_dir, filename)
    
    print(f"Downloading {filename}...")
    gdown.download(url, output, quiet=False)
    print(f"✓ Saved {filename}\n")

print(f"\n✅ All files downloaded to: {output_dir}")
