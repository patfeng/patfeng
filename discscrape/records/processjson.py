import json
import os

# some JSON:
files = os.listdir("./")

# Filter only JSON files
json_files = [f for f in files if f.endswith('.json')]

alldat = []

for json_file in json_files:
	print("parsing "+str(json_file))
	file_path = os.path.join("./", json_file)
	print(f"Parsing JSON file: {file_path}")
    
	f= open(file_path, 'r')
	data = json.load(f)['messages']

	entrys=[]

	for m in data:
		if(m['type'] =='Call'):
			continue
		if(m['content'] == ''):
			continue
		if(len(m['embeds'])>0):
			continue
		if(len(m['attachments'])>0):
			continue
		if(len(m['content'])>6 and m['content'][:6]=="https:"):
			continue
		entrys.append({
			'content': m['content'],
			'author': m['author']['name'],
			'time': m['timestamp'],
			})

	alldat.append(entrys)


