const input = document.getElementById("expire-date-input");

            input.addEventListener("input", (event) => {
                let value = input.value;

                value = value.replace(/[^0-9/]/g, "");
                // Automatically insert slash after 2 digits
                if (value.length === 2 && !value.includes("/")) {
                    value += "/";
                }
                // Limit length to 5 characters (MM/YY)
                input.value = value.slice(0, 5);
            });