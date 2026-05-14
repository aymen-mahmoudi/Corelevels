setup:
	python3 -m venv venv
	. ./venv/bin/activate && pip install -r requirements.txt

run: setup
	. ./venv/bin/activate && python3 main.py > output.html

clean:
	rm -rf venv output.html