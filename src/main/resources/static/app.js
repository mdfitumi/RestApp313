fetch("/api/admin").then(response => response.json())
    .then(data => {
        console.log(data)
        const container = $("#container")
        const body = document.createElement("tbody")
        const table = document.createElement("table")
        const thead = document.createElement("thead")
        const tr1 = document.createElement("tr")
            const th_id = document.createElement("th")
            const th_firstname = document.createElement("th")
            const th_lastname = document.createElement("th")
            const th_age = document.createElement("th")
            const th_email = document.createElement("th")
            const th_role = document.createElement("th")
            const th_edit = document.createElement("th")
            const th_delete = document.createElement("th")
        const tr2 = document.createElement("tr")
        const td_id = document.createElement("td")
        const td_firstname = document.createElement("td")
        const td_lastname = document.createElement("td")
        const td_age = document.createElement("td")
        const td_email = document.createElement("td")
        const td_role = document.createElement("td")
        const td_edit = document.createElement("td")
        const button_edit = document.createElement("button")
        const td_delete = document.createElement("td")
        const button_delete = document.createElement("button")
    })
