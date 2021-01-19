$(function () {
    loadData(); // 页面打开加载数据
    $(".header h3").on("mouseover", function () {
        $(this).css("cursor", "pointer");
    })



    $(".header input").on("keydown", function (e) {
        if (e.keyCode === 13) {
            var local = getData(); // 读取本地存储数据
            local.push({ title: $(this).val(), done: false });
            saveData(local);
            loadData();
            $(this).val("");
        }
    })

    $("ol,ul").on("click", "a", function () {
        var data = getData();
        var index = $(this).attr("id");
        data.splice(index, 1);
        saveData(data);
        loadData();
    })

    $("ol,ul").on("click", "input", function () {
        var data = getData();
        var index = $(this).siblings("a").attr("id");
        data[index].done = $(this).prop("checked");
        saveData(data);
        loadData();

    })




    // 读取本地存储封装函数
    function getData() {
        var data = localStorage.getItem("toDoList");
        if (data !== null) {
            return JSON.parse(data); // 获取本地存储数据，需要转回对象格式 JSON.parse()
        } else {
            return [];
        }
    }

    // 保存本地数组
    function saveData(data) {
        localStorage.setItem("toDoList", JSON.stringify(data)); // 本地存储只能储存字符串形式 JSON.stringify()转换
    }

    // 渲染加载数据
    function loadData() {
        var data = getData();
        var toDoCount = 0;
        var doneCount = 0;
        $("ol,ul").empty();
        $.each(data, function (i, n) {
            if (n.done === false) {
                $("ol").prepend("<li><input type='checkbox' name='' id=''><p>" + n.title + "</p><a href='javascript:;' id=" + i + ">-</a></li>");
                toDoCount++;
            } else {
                $("ul").prepend("<li><input type='checkbox' name='' id='' checked='checked'><p>" + n.title + "</p><a href='javascript:;' id=" + i + ">-</a></li>")
                doneCount++;
            }
        })
        $(".doing-hb").children("i").text(toDoCount);
        $(".done-hb").children("i").text(doneCount);
    }
})