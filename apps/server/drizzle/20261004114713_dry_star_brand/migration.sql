CREATE TABLE `external_game_provider` (
	`id` text PRIMARY KEY,
	`name` text NOT NULL,
	`slug` text NOT NULL UNIQUE,
	`base_url` text NOT NULL,
	`created_at` integer DEFAULT (cast(unixepoch('subsecond') * 1000 as integer)) NOT NULL
);
--> statement-breakpoint
CREATE TABLE `game` (
	`id` text PRIMARY KEY,
	`name` text NOT NULL,
	`cover_url` text,
	`release_date` integer NOT NULL,
	`created_at` integer DEFAULT (cast(unixepoch('subsecond') * 1000 as integer)) NOT NULL,
	`updated_at` integer DEFAULT (cast(unixepoch('subsecond') * 1000 as integer)) NOT NULL
);
--> statement-breakpoint
CREATE TABLE `game_provider_mapping` (
	`id` text PRIMARY KEY,
	`game_id` text NOT NULL,
	`provider_id` text NOT NULL,
	`game_provider_id` text NOT NULL,
	CONSTRAINT `fk_game_provider_mapping_game_id_game_id_fk` FOREIGN KEY (`game_id`) REFERENCES `game`(`id`) ON DELETE CASCADE,
	CONSTRAINT `fk_game_provider_mapping_provider_id_external_game_provider_id_fk` FOREIGN KEY (`provider_id`) REFERENCES `external_game_provider`(`id`) ON DELETE CASCADE
);
--> statement-breakpoint
CREATE TABLE `game_rating` (
	`id` text PRIMARY KEY,
	`game_id` text NOT NULL,
	`user_id` text NOT NULL,
	`rating` integer NOT NULL,
	`created_at` integer DEFAULT (cast(unixepoch('subsecond') * 1000 as integer)) NOT NULL,
	`updated_at` integer DEFAULT (cast(unixepoch('subsecond') * 1000 as integer)) NOT NULL,
	CONSTRAINT `fk_game_rating_game_id_game_id_fk` FOREIGN KEY (`game_id`) REFERENCES `game`(`id`) ON DELETE CASCADE,
	CONSTRAINT `fk_game_rating_user_id_user_id_fk` FOREIGN KEY (`user_id`) REFERENCES `user`(`id`) ON DELETE CASCADE
);
--> statement-breakpoint
CREATE UNIQUE INDEX `game_provider_mapping_gameId_providerId_uidx` ON `game_provider_mapping` (`game_id`,`provider_id`);--> statement-breakpoint
CREATE UNIQUE INDEX `game_provider_mapping_providerId_gameProviderId_uidx` ON `game_provider_mapping` (`provider_id`,`game_provider_id`);--> statement-breakpoint
CREATE UNIQUE INDEX `game_rating_gameId_userId_uidx` ON `game_rating` (`game_id`,`user_id`);