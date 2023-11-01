CREATE TABLE `tasks` (
	`id` text PRIMARY KEY NOT NULL,
	`user_id` text NOT NULL,
	`pet_id` text NOT NULL,
	`type` text NOT NULL,
	`description` text NOT NULL,
	`status` text NOT NULL,
	`date` text NOT NULL,
	`time_zone` text NOT NULL
);
