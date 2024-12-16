select "countries"."name",
count(*) as "totalCities"
from "countries"
join "cities" using ("countryId")
group by "countries"."name";
