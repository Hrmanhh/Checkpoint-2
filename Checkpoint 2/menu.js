function myFunction() {
    let menu = JSON.parse(localStorage.getItem('menu_key'));
    localStorage.setItem('menu_key', JSON.stringify(menu));
    var text;

    let person = prompt("Nhập tên vào đây!");

    if (person == null || person == "") {
        alert("Người dùng đã hủy.");
    } else {
        let command = prompt("Xin chào " + person + "! Bạn muốn làm gì hôm nay?");
        if (command == "C") {
            let food = prompt("Mời bạn nhập món ăn muốn thêm!")
            if (food == null || food == "") {
                alert("Đã hủy lệnh!");
            } else {
                menu.push(food);
                localStorage.setItem('menu_key', JSON.stringify(menu));
                alert("Đã thêm thành công!");
            }
        } else {
            if (command == "R") {
                alert("Thực đơn gồm có: " + localStorage.getItem('menu_key'));
            } else {
                if (command == "U") {
                    let name = prompt("Vui lòng nhập món ăn bạn muốn thay đổi!");
                    if (name == null || name == "") {
                        alert("Đã hủy lệnh!");
                    } else {
                            let newFood = prompt("Vui lòng nhập món ăn mới!");
                            if (newFood == null || newFood == "") {
                                alert("Đã hủy lệnh!");
                            } else {
                                menu[menu.indexOf(name)] = newFood;
                                localStorage.setItem('menu_key', JSON.stringify(menu));
                                alert("Thay đổi thành công!");
                            }
                        }
                    } else {
                    if (command == "D") {
                        let name = prompt("Vui lòng nhập món ăn bạn muốn xóa");
                        if (newFood == null || newFood == "") {
                            alert("Đã hủy lệnh!");
                        } else {
                            menu.splice(menu.indexOf(name));
                            alert("Xóa thành công!");
                            localStorage.setItem('menu_key', JSON.stringify(menu));
                        }
                    }
                }
            }
        }
    }    
}