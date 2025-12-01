SITE_DIR := www/SummitGuide

.PHONY: build serve

build:
	hugo --source $(SITE_DIR) --destination ../../docs --cleanDestinationDir

serve:
	hugo server --source $(SITE_DIR) --baseURL http://localhost
