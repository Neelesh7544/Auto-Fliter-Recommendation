**************************************************************************
Filter Aesthetic Comparison Dataset (FACD) - August 2016 Release

For more detailed information, please refer to:

Paper:   "Photo Filter Recommendation by Image Aesthetic Learning".
         Wei-Tse Sun, Ting-Hsuan Chao, Yin-Hsi Kuo, Winston H. Hsu. 

Website: http://wtwilsonsun.github.io/FACD/

Contacts:
Wei-Tse Sun (email: r03922071@ntu.edu.tw)
**************************************************************************
Please notice that this dataset is made available for academic research 
purpose only. 
**************************************************************************

This package contains:

1. pairwise_comparison.pkl
2. image_score.pkl

You can easily use Python to process the .pkl files

**************************************************************************
Data format of pairwise_comparison.pkl
**************************************************************************
Each line contains 7 columns which represent the comparison result labeled 
by the worker on Amazon Mechanical Turk.  

Column 1: 'category' - image category
                       0: Animal, 1: Flora, 2: Landscape, 3: Architecture
                       4: FoodDrink, 5: Portrait, 6: CityScape, 7: StillLife

Column 2: 'f1' - the first applied filter name

Column 3: 'f2' - the second applied filter name

Column 4: 'workerId' - the ID of the worker on AMTurk

Column 5: 'passDup' - whether the worker pass the verification or not

Column 6: 'imgId' - the Id of the image which 'f1' and 'f2' apply to

Column 7: 'ans' - the preference of the worker between the two filtered images
                  'left': 'f1', 'right': 'f2', 'equal': similar quality

example: 
{'category': 2, 
 'f1': 'Willow', 
 'f2': '1977', 
 'workerId': 'A34M93NJC830DP',
 'passDup': True, 
 'imgId': '755006', 
 'ans': 'right'}

**************************************************************************
Data format of image_score.pkl
**************************************************************************
Each line contains 4 columns which represent the quality and the comparison 
score of a filtered image. 

Column 1: 'filterName' - the applied filter name

Column 2: 'imgId' - the image ID

Column 3: 'class' - the class of quality based on the score
                    '0': low quality, '1': high quality

Column 4: 'score' - the score computed from the comparison results
                    range from -3 to +3

example: 
{'filterName': 'Brannan', 'imgId': '137059', 'class': '1', 'score': 3}

**************************************************************************
How to obtain the image dataset?
**************************************************************************

The download link can be obtained at:

http://wtwilsonsun.github.io/FACD/

**************************************************************************
Copyright Considerations
**************************************************************************

Rights to all images are retained by the photographers/dpchallenge. 
