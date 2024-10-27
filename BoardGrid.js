//main
$(function () {
  $("#sidebar-toggle").on("click", function (e) {
    $("#sudoku_menu").toggleClass("open-sidebar");
  });

  // Call API to get data from DB
  $.ajax({
    url: "https://localhost:7289/api/Board",
    type: "GET",
    contentType: "application/json",
    success: function (data) {
      $("#gridContainer").dxDataGrid({
        dataSource: data,
        keyExpr: "id",
        showBorders: true,
        selection: {
          mode: "single",
        },
        paging: {
          pageSize: 5,
        },
        pager: {
          visible: true,
          allowedPageSizes: [5, 10, 20, 50, "all"],
          showPageSizeSelector: true,
          showInfo: true,
          showNavigationButtons: true,
        },
        columns: [
          {
            dataField: "id",
            caption: "Id",
            alignment: "center",
          },
          {
            dataField: "row",
            caption: "Row",
            alignment: "center",
          },
          {
            dataField: "column",
            caption: "Column",
            alignment: "center",
          },
          {
            dataField: "value",
            caption: "Value",
            alignment: "center",
          },
          {
            dataField: "isValid",
            caption: "Is Valid",
            customizeText: function (cellInfo) {
              var text;
              if (cellInfo) {
                text = "Valid";
              } else {
                text = "Invalid";
              }
              return text;
            },
            alignment: "center",
          },
          {
            dataField: "dateTime",
            caption: "Action Date",
            dataType: "datetime",
            format: "dd/MM/yyyy hh:mm:ss",
            alignment: "center",
          },
        ],
      });
    },
  });
});
