import pickle
import os

with open("FACD_metadata/image_score.pkl", 'rb') as f:
	data = pickle.load(f)

for d in data:
	if d['score'] < 1:
		os.system("sudo rm dataset/FACD_image/" + str(d['filterName']) + "/" + str(d['imgId']) + ".jpg")
#		os.system("sudo rm dataset/"

