function solve(group, type, day) {
    let final = 0

    if (type == 'Students') {
        if (day == 'Friday') {
            final = group * 8.54
        } else if (day == "Saturday") {
            final = group * 9.80
        } else if (day == "Sunday") {
            final = group * 10.46
        }

        if (group >= 30) {
            final = final - (final * 0.15)
        }
    } else if (type == 'Business') {
        if (group >= 100) {
            group -= 10
        }

        if (day == 'Friday') {
            final = group * 10.90
        } else if (day == "Saturday") {
            final = group * 15.60
        } else if (day == "Sunday") {
            final = group * 16
        }
    } else if (type == 'Regular') {
        if (day == 'Friday') {
            final = group * 15
        } else if (day == "Saturday") {
            final = group * 20
        } else if (day == "Sunday") {
            final = group * 22.50
        }

        if (group >= 10 && group <= 20) {
            final = final - (final * 0.05)
        }
    }

    console.log(`Total price: ${final.toFixed(2)}`)
}

solve(30, "Students", "Sunday")