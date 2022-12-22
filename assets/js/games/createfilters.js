const buildFilters = function(filters) {
    const $span = document.createElement(`span`);
    const $input = buildFiltersInput(filters);
    const $label = buildFiltersLabel(filters);
    $span.appendChild($input);
    $span.appendChild($label);
    return $span;
  };

  const buildFiltersInput = (filters) => {
    const $input = document.createElement(`input`);
    $input.setAttribute('type', 'checkbox');
    if (filters.filterall){
        $input.classList.add(`filter-all`);
    }
    $input.classList.add(`filter-input`);
    $input.setAttribute('name', 'filter');
    $input.id = filters.filterid;
    if (filters.checked){
        $input.setAttribute('checked', '');
    }
    return $input;
  }

  const buildFiltersLabel = function(filters) {
    const $label = document.createElement(`label`);
    $label.setAttribute('for', filters.filterid);
    $label.classList.add("filter-label");
    $label.setAttribute('autocomplete', 'off');
    if (filters.checked) {
        $label.setAttribute('checked', '');
    }
    $label.innerText = filters.filter;
    return $label;
  };

  const filtercategories = document.querySelector(".filter-categories");

  for (let i = 0; i < filters.length; i++) {
    let $f = buildFilters(filters[i]);
    filtercategories.appendChild($f);
  }