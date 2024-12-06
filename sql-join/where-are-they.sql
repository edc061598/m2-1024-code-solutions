select "addresses"."line1",
"cities"."name" as "city",
"addresses"."district"

from "addresses"
join "cities" using ("cityId");
