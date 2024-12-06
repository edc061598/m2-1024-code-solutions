select "customers"."firstName",
"customers"."lastName"
from "customers"
join "rentals" on "customers"."customerId" = "rentals"."customerId"
join "inventory" on "rentals"."inventoryId" = "inventory"."inventoryId"
join "films" on "inventory"."filmId" = "films"."filmId"
where "films"."title" = 'Magic Mallrats';
