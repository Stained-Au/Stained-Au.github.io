import property_finders as pf
import os

source_file = open("source.txt", "rt", encoding="UTF-8")
output_file_json = open("umamusume_data.js", "w", encoding="UTF-8")
output_file_txt = open("output.txt", "w", encoding="UTF-8")

def save_property(property_name, value, last = False):
	output_file_json.write('\t\t\t' + '"' + property_name + '": "' + value + '"')
	if not last:
		output_file_json.write(',\n')

def remove_html(string):

	filtered_string = ""
	save = True

	for c in string:

		#print(string, c)

		if c == "<":
			saving = False

		if saving:
			if c == '"':
				filtered_string += '\\"'
			else:
				filtered_string += c

		if c == ">":
			saving = True

	if filtered_string == "":
		return -1

	return filtered_string

def save_one_horse(horse_raw, last = False):

	data_lines = []
	saving = False
	i = 1
	for l in horse_raw:

		line = l.strip()

		if line == '<table class=\"infobox\">' or line == '<table class=\"wikitable\">':
			saving = True
			print("line", i)

		if saving:
			if line != "":
				data_lines.append(line)

		if line.endswith("</table>"):
			saving = False
			print("line", i)

		i += 1

	for i in range(0, len(data_lines)):

		filtered_line = remove_html(data_lines[i])
		if filtered_line == -1:
			data_lines[i] = ""
		else:
			data_lines[i] = filtered_line

	i = 0
	while(i < len(data_lines)):

		if data_lines[i] == "":
			data_lines.pop(i)
		else:
			i += 1

	for line in data_lines:
		output_file_txt.write(line + "\n")
	
	# PROPERTIES INIT

	name_english = "null"

	strengths = "null"
	weaknesses = "null"
	ears = "null"
	tail = "null"
	family = "null"
	rule = "null"
	phone_background = "null"
	before_a_race = "null"
	
	birthday = "null"
	roommate = "null"
	height = "null"
	three_sizes = "null"
	shoe_size = "null"
	weight = "null"

	emoji = "null"

	for i in range(0, len(data_lines)):

		cl = data_lines[i]

		# PROPERTIES SET

		if cl == "English":
			name_english = data_lines[i + 1]
		
		if cl == "Strengths":
			strengths = data_lines[i + 1]
		if cl == "Weaknesses":
			weaknesses = data_lines[i + 1]
		if cl == "Ears":
			ears = data_lines[i + 1]
		if cl == "Tail":
			tail = data_lines[i + 1]
		if cl == "Family":
			family = data_lines[i + 1]
		if cl == "My Rule":
			rule = data_lines[i + 1]
		if cl == "Phone Background":
			phone_background = data_lines[i + 1]
		if cl == "Before a Race":
			before_a_race = data_lines[i + 1]

		if cl == "Birthday":
			birthday = data_lines[i + 1]
		if cl == "Roommate":
			roommate = data_lines[i + 1]
		if cl == "Height":
			height = data_lines[i + 1]
		if cl == "Three Sizes":
			three_sizes = data_lines[i + 1]
		if cl == "Shoe Size":
			shoe_size = data_lines[i + 1]
		if cl == "Weight":
			weight = data_lines[i + 1]

		if cl == "Emoji":
			emoji = data_lines[i + 1]

		# ==

	output_file_json.write('\t\t{\n')

	save_property("name", name_english)

	save_property("strengths", strengths)
	save_property("weaknesses", weaknesses)
	save_property("ears", ears)
	save_property("tail", tail)
	save_property("family", family)
	save_property("rule", rule)
	save_property("phone_background", phone_background)
	save_property("before_a_race", before_a_race)

	save_property("birthday", birthday)
	save_property("roommate", roommate)
	save_property("height", height)
	save_property("three_sizes", three_sizes)
	save_property("shoe_size", shoe_size)
	save_property("weight", weight)

	save_property("emoji", emoji, True)
	
	if not last:
		output_file_json.write('\n\t\t},\n')
	else:
		output_file_json.write('\n\t\t}\n')

output_file_json.write('let data = {\n\t"horses": [\n')

horse_files = os.listdir("horse_files")

for i in range(0, len(horse_files)):

	file = open("horse_files/" + horse_files[i], "rt", encoding="UTF-8")

	last = i == (len(horse_files) - 1)
	save_one_horse(file, last)

output_file_json.write('\t]\n}')

source_file.close()
output_file_txt.close()
output_file_json.close()
