function createCraftingGrid() {
    function populateSlot(slotId, imageList) {
        var slot = document.getElementById(slotId);
        slot.classList.add("slot"); // Add "slot" class
        slot.innerHTML = ""; // Clear previous images
        if (imageList.length > 0) {
            imageList.forEach(function(image) {
                var img = document.createElement("img");
                img.src = image;
                img.alt = image;
                img.className = "gridImage";
                slot.appendChild(img);
            });
        } else {
            slot.textContent = "Empty Slot"; // Display text indicating the slot is empty
        }
    }
    document.querySelectorAll("[data-images]").forEach(function(slot) {
        var slotId = slot.id;
        var imageList = slot.dataset.images;
        slot.classList.add("slot"); // Add "slot" class
        if (imageList) {
            imageList = imageList.split(",");
        } else {
            imageList = []; // Set imageList to an empty array if no images are specified
        }
        populateSlot(slotId, imageList);
    });
}

createCraftingGrid();
