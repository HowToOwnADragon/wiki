class Searchbar {
    constructor(apiEndpoint) {
        this.termToUrlMap = {};
        this.apiEndpoint = apiEndpoint;
        this.initialize();
    }

    fetchHtmlFiles() {
        $.ajax({
            url: this.apiEndpoint,
            success: (files) => {
                files.forEach(file => {
                    const filename = file.filename;
                    const url = window.location.origin + '/' + file.filePath;
                    this.termToUrlMap[filename] = url;
                });
            },
            error: (xhr, status, error) => {
                console.error("Error fetching HTML files:", error);
                console.error("Status:", status);
                console.error("XHR:", xhr);
            },
            complete: () => {
                this.initializeAutocomplete();
            }
        });
    }

    initializeAutocomplete() {
        $("#search-query").autocomplete({
            source: (request, response) => {
                var searchTerm = request.term.toLowerCase();
                var filteredMap = [];

                $.each(this.termToUrlMap, (key, value) => {
                    if (key.toLowerCase().includes(searchTerm)) {
                        filteredMap.push({ label: key, value: key });
                    }
                });

                response(filteredMap);
            },
            minLength: 1,
            select: (event, ui) => {
                window.location.href = this.termToUrlMap[ui.item.label];
                return false;
            }
        });
    }

    initialize() {
        this.fetchHtmlFiles();
    }
}

$(document).ready(function () {
    const searchbar = new Searchbar("http://localhost:5500/api/wiki/searchbar/");
});
