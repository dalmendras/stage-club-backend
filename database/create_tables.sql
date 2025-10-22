-- public.artists definition

-- Drop table

-- DROP TABLE public.artists;

CREATE TABLE public.artists (
	ar_id int4 NOT NULL
);


-- public.company definition

-- Drop table

-- DROP TABLE public.company;

CREATE TABLE public.company (
	co_id serial4 NOT NULL,
	co_name varchar(200) NOT NULL,
	co_logo_url varchar(300) NULL,
	co_description varchar(250) NOT NULL,
	co_website varchar(200) NULL,
	co_email varchar(100) NULL,
	co_phone varchar(15) NULL,
	co_youtube varchar(200) NULL,
	co_instagram varchar(200) NULL,
	co_tiktok varchar(200) NULL,
	co_facebook varchar(200) NULL,
	co_version bool DEFAULT true NOT NULL,
	ts_crea timestamptz DEFAULT now() NOT NULL,
	ts_mod timestamptz NULL,
	CONSTRAINT company_co_name_key UNIQUE (co_name),
	CONSTRAINT company_pkey PRIMARY KEY (co_id)
);


-- public.country definition

-- Drop table

-- DROP TABLE public.country;

CREATE TABLE public.country (
	c_id smallserial NOT NULL,
	c_alpha_2 bpchar(2) NOT NULL,
	c_alpha_3 bpchar(3) NOT NULL,
	c_name varchar(75) NOT NULL,
	c_img bytea NOT NULL,
	c_version bool NOT NULL,
	ts_crea timestamptz NOT NULL,
	ts_mod timestamptz NULL,
	CONSTRAINT country_pkey PRIMARY KEY (c_id)
);


-- public.ma_artist_type definition

-- Drop table

-- DROP TABLE public.ma_artist_type;

CREATE TABLE public.ma_artist_type (
	art_id int2 NOT NULL,
	art_type varchar(35) NOT NULL,
	art_description varchar(50) NOT NULL,
	art_version bool NOT NULL,
	ts_crea timestamptz NOT NULL,
	ts_mod timestamptz NULL,
	CONSTRAINT artists_pk PRIMARY KEY (art_id)
);


-- public.ma_commune definition

-- Drop table

-- DROP TABLE public.ma_commune;

CREATE TABLE public.ma_commune (
	com_id int2 NOT NULL,
	prv_id int2 NOT NULL,
	com_name varchar(50) NOT NULL,
	com_cut_version int2 NOT NULL,
	com_version bool NOT NULL,
	ts_crea timestamptz NOT NULL,
	ts_mod timestamptz NULL,
	CONSTRAINT commune_pkey PRIMARY KEY (com_id)
);


-- public.ma_genders definition

-- Drop table

-- DROP TABLE public.ma_genders;

CREATE TABLE public.ma_genders (
	gdr_id int2 NOT NULL,
	gdr_type varchar(35) NOT NULL,
	gdr_description varchar(50) NOT NULL,
	gdr_version bool NOT NULL,
	ts_crea timestamptz NOT NULL,
	ts_mod timestamptz NULL,
	CONSTRAINT genders_pk PRIMARY KEY (gdr_id)
);


-- public.ma_instrument definition

-- Drop table

-- DROP TABLE public.ma_instrument;

CREATE TABLE public.ma_instrument (
	inst_id int2 NOT NULL,
	inst_name varchar(35) NOT NULL,
	inst_category varchar(35) NOT NULL,
	inst_description varchar(100) NOT NULL,
	inst_version bool NOT NULL,
	ts_crea timestamptz NOT NULL,
	ts_mod timestamptz NULL,
	CONSTRAINT instruments_pk PRIMARY KEY (inst_id)
);


-- public.ma_province definition

-- Drop table

-- DROP TABLE public.ma_province;

CREATE TABLE public.ma_province (
	prv_id int2 NOT NULL,
	reg_id int2 NOT NULL,
	prv_name varchar(50) NOT NULL,
	prv_cut_version int2 NOT NULL,
	prv_version bool NOT NULL,
	ts_crea timestamptz NOT NULL,
	ts_mod timestamptz NULL,
	CONSTRAINT province_pkey PRIMARY KEY (prv_id)
);


-- public.ma_region definition

-- Drop table

-- DROP TABLE public.ma_region;

CREATE TABLE public.ma_region (
	reg_id int2 NOT NULL,
	reg_name varchar(50) NOT NULL,
	reg_abbre varchar(10) NOT NULL,
	reg_cut_version int2 NOT NULL,
	reg_version bool NOT NULL,
	ts_crea timestamptz NOT NULL,
	ts_mod timestamptz NULL,
	CONSTRAINT region_pkey PRIMARY KEY (reg_id)
);


-- public.ma_venue definition

-- Drop table

-- DROP TABLE public.ma_venue;

CREATE TABLE public.ma_venue (
	ven_id int2 NOT NULL,
	ven_class varchar(25) NOT NULL,
	ven_name varchar(35) NOT NULL,
	ven_description varchar(65) NOT NULL,
	ven_version bool NOT NULL,
	ts_crea timestamptz NOT NULL,
	ts_mod timestamptz NULL,
	CONSTRAINT venue_type_pk_1 PRIMARY KEY (ven_id)
);


-- public.ma_venue_space definition

-- Drop table

-- DROP TABLE public.ma_venue_space;

CREATE TABLE public.ma_venue_space (
	ves_id int2 NOT NULL,
	ves_type varchar(35) NOT NULL,
	ves_description varchar(50) NOT NULL,
	ves_version bool NOT NULL,
	ts_crea timestamptz NOT NULL,
	ts_mod timestamptz NULL,
	CONSTRAINT venue_space_pk PRIMARY KEY (ves_id)
);


-- public.ma_venue_types definition

-- Drop table

-- DROP TABLE public.ma_venue_types;

CREATE TABLE public.ma_venue_types (
	vet_id int2 NOT NULL,
	vet_size varchar(35) NOT NULL,
	vet_type varchar(35) NOT NULL,
	vet_description varchar(65) NOT NULL,
	vet_version bool NOT NULL,
	ts_crea timestamptz NOT NULL,
	ts_mod timestamptz NULL,
	CONSTRAINT venue_type_pk PRIMARY KEY (vet_id)
);


-- public.project_social_links definition

-- Drop table

-- DROP TABLE public.project_social_links;

CREATE TABLE public.project_social_links (
	psl_id bigserial NOT NULL,
	mp_id int8 NOT NULL,
	sp_id int2 NOT NULL,
	url varchar(200) NOT NULL,
	psl_version bool DEFAULT true NOT NULL,
	ts_crea timestamptz DEFAULT now() NOT NULL,
	ts_mod timestamptz NULL,
	CONSTRAINT project_social_links_mp_id_sp_id_key UNIQUE (mp_id, sp_id),
	CONSTRAINT project_social_links_pkey PRIMARY KEY (psl_id)
);


-- public.social_platforms definition

-- Drop table

-- DROP TABLE public.social_platforms;

CREATE TABLE public.social_platforms (
	sp_id smallserial NOT NULL,
	sp_code varchar(32) NOT NULL,
	sp_display_name varchar(50) NOT NULL,
	sp_version bool DEFAULT true NOT NULL,
	ts_crea timestamptz DEFAULT now() NOT NULL,
	ts_mod timestamptz NULL,
	CONSTRAINT social_platforms_pkey PRIMARY KEY (sp_id),
	CONSTRAINT social_platforms_sp_code_key UNIQUE (sp_code)
);


-- public.users definition

-- Drop table

-- DROP TABLE public.users;

CREATE TABLE public.users (
	user_id int4 DEFAULT nextval('users_id_seq'::regclass) NOT NULL,
	username varchar(50) NOT NULL,
	"password" varchar(255) NOT NULL,
	rol varchar(30) NOT NULL,
	"session" varchar(300) NULL,
	"version" bool DEFAULT true NOT NULL,
	ts_crea timestamptz DEFAULT now() NOT NULL,
	ts_mod timestamptz NULL,
	CONSTRAINT users_pkey PRIMARY KEY (user_id),
	CONSTRAINT users_username_key UNIQUE (username)
);


-- public.artist_profiles definition

-- Drop table

-- DROP TABLE public.artist_profiles;

CREATE TABLE public.artist_profiles (
	ap_id bigserial NOT NULL,
	ap_first_name varchar(50) NOT NULL,
	ap_last_name varchar(75) NOT NULL,
	user_id int4 NOT NULL,
	ap_profession varchar(100) NOT NULL,
	inst_id int2 NOT NULL,
	ap_birth_date date NOT NULL,
	c_id int2 NOT NULL,
	com_id int2 NULL,
	email varchar(100) NOT NULL,
	ap_biography varchar(300) NOT NULL,
	ap_version bool DEFAULT true NOT NULL,
	ts_crea timestamptz DEFAULT now() NOT NULL,
	ts_mod timestamptz NULL,
	CONSTRAINT artist_profiles_ap_id_user_key UNIQUE (user_id),
	CONSTRAINT artist_profiles_pkey PRIMARY KEY (ap_id),
	CONSTRAINT artist_profiles_c_id_fkey FOREIGN KEY (c_id) REFERENCES public.country(c_id),
	CONSTRAINT artist_profiles_com_id_fkey FOREIGN KEY (com_id) REFERENCES public.ma_commune(com_id),
	CONSTRAINT artist_profiles_inst_id_fkey FOREIGN KEY (inst_id) REFERENCES public.ma_instrument(inst_id)
);


-- public.company_users definition

-- Drop table

-- DROP TABLE public.company_users;

CREATE TABLE public.company_users (
	cou_id serial4 NOT NULL,
	co_id int4 NOT NULL,
	user_id int4 NOT NULL,
	cou_version bool DEFAULT true NOT NULL,
	ts_crea timestamptz DEFAULT now() NOT NULL,
	ts_mod timestamptz NULL,
	CONSTRAINT company_users_co_id_fkey FOREIGN KEY (co_id) REFERENCES public.company(co_id),
	CONSTRAINT company_users_user_id_fkey FOREIGN KEY (user_id) REFERENCES public.users(user_id)
);


-- public.musical_projects definition

-- Drop table

-- DROP TABLE public.musical_projects;

CREATE TABLE public.musical_projects (
	mp_id bigserial NOT NULL,
	mp_project_name varchar(120) NOT NULL,
	art_id int2 NULL,
	mp_active_since date NULL,
	mp_desciption varchar(250) NULL,
	mp_bio varchar(512) NULL,
	mp_avatar_url varchar(200) NULL,
	mp_main_image_url varchar(300) NULL,
	mp_website varchar(100) NULL,
	mp_email_band varchar(80) NULL,
	reg_id int2 NULL,
	com_id int2 NULL,
	mp_direccion varchar(120) NULL,
	mp_telephone varchar(25) NULL,
	mp_version bool DEFAULT true NOT NULL,
	ts_crea timestamptz DEFAULT now() NOT NULL,
	ts_mod timestamptz NULL,
	CONSTRAINT musical_projects_pkey PRIMARY KEY (mp_id),
	CONSTRAINT musical_projects_art_id_fkey FOREIGN KEY (art_id) REFERENCES public.ma_artist_type(art_id),
	CONSTRAINT musical_projects_com_id_fkey FOREIGN KEY (com_id) REFERENCES public.ma_commune(com_id),
	CONSTRAINT musical_projects_reg_id_fkey FOREIGN KEY (reg_id) REFERENCES public.ma_region(reg_id)
);


-- public.producers definition

-- Drop table

-- DROP TABLE public.producers;

CREATE TABLE public.producers (
	pro_id serial4 NOT NULL,
	pro_rut varchar(12) NOT NULL,
	pro_legal_name varchar(255) NOT NULL,
	pro_commercial_name varchar(255) NULL,
	reg_id int2 NOT NULL,
	com_id int2 NOT NULL,
	pro_address varchar(250) NOT NULL,
	pro_email varchar(255) NULL,
	pro_telephone varchar(20) NULL,
	pro_website varchar(250) NULL,
	pro_logo varchar(250) NULL,
	pro_description varchar(250) NULL,
	pro_youtube_url varchar(250) NULL,
	pro_instagram_url varchar(250) NULL,
	pro_tiktok_url varchar(250) NULL,
	pro_facebook_url varchar(250) NULL,
	pro_version bool DEFAULT true NOT NULL,
	pro_user_crea int4 NULL,
	pro_user_mod int4 NULL,
	ts_crea timestamptz DEFAULT now() NOT NULL,
	ts_mod timestamptz NULL,
	CONSTRAINT producers_pkey PRIMARY KEY (pro_id),
	CONSTRAINT producers_pro_rut_key UNIQUE (pro_rut),
	CONSTRAINT producers_com_id_fkey FOREIGN KEY (com_id) REFERENCES public.ma_commune(com_id),
	CONSTRAINT producers_reg_id_fkey FOREIGN KEY (reg_id) REFERENCES public.ma_region(reg_id)
);


-- public.producers_users definition

-- Drop table

-- DROP TABLE public.producers_users;

CREATE TABLE public.producers_users (
	pru_id serial4 NOT NULL,
	pro_id int4 NOT NULL,
	user_id int4 NOT NULL,
	pru_version bool DEFAULT true NOT NULL,
	ts_crea timestamptz DEFAULT now() NOT NULL,
	ts_mod timestamptz NULL,
	CONSTRAINT producers_users_pkey PRIMARY KEY (pru_id),
	CONSTRAINT producers_users_pro_id_user_id_key UNIQUE (pro_id, user_id),
	CONSTRAINT producers_users_pro_id_fkey FOREIGN KEY (pro_id) REFERENCES public.producers(pro_id),
	CONSTRAINT producers_users_user_id_fkey FOREIGN KEY (user_id) REFERENCES public.users(user_id)
);


-- public.project_gallery_images definition

-- Drop table

-- DROP TABLE public.project_gallery_images;

CREATE TABLE public.project_gallery_images (
	pgi_id bigserial NOT NULL,
	mp_id int8 NULL,
	pgi_image_url varchar(300) NOT NULL,
	pgi_position int4 NULL,
	pgi_version bool DEFAULT true NOT NULL,
	ts_crea timestamptz DEFAULT now() NOT NULL,
	ts_mod timestamptz NULL,
	CONSTRAINT project_gallery_images_pkey PRIMARY KEY (pgi_id),
	CONSTRAINT project_gallery_images_mp_id_fkey FOREIGN KEY (mp_id) REFERENCES public.musical_projects(mp_id) ON DELETE CASCADE
);


-- public.project_gender definition

-- Drop table

-- DROP TABLE public.project_gender;

CREATE TABLE public.project_gender (
	pg_id bigserial NOT NULL,
	mp_id int8 NULL,
	gdr_id int2 NULL,
	pg_version bool DEFAULT true NOT NULL,
	ts_crea timestamptz DEFAULT now() NOT NULL,
	ts_mod timestamptz NULL,
	CONSTRAINT project_gender_pkey PRIMARY KEY (pg_id),
	CONSTRAINT project_gender_gdr_id_fkey FOREIGN KEY (gdr_id) REFERENCES public.ma_genders(gdr_id),
	CONSTRAINT project_gender_mp_id_fkey FOREIGN KEY (mp_id) REFERENCES public.musical_projects(mp_id)
);


-- public.project_members definition

-- Drop table

-- DROP TABLE public.project_members;

CREATE TABLE public.project_members (
	pm_id bigserial NOT NULL,
	mp_id int8 NULL,
	ap_id int2 NULL,
	pm_is_leader bool DEFAULT false NULL,
	pm_join_date date DEFAULT CURRENT_DATE NULL,
	pm_state varchar(10) NOT NULL,
	pg_version bool DEFAULT true NOT NULL,
	ts_crea timestamptz DEFAULT now() NOT NULL,
	ts_mod timestamptz NULL,
	CONSTRAINT project_members_mp_id_ap_id_key UNIQUE (mp_id, ap_id),
	CONSTRAINT project_members_pkey PRIMARY KEY (pm_id),
	CONSTRAINT project_members_ap_id_fkey FOREIGN KEY (ap_id) REFERENCES public.artist_profiles(ap_id),
	CONSTRAINT project_members_mp_id_fkey FOREIGN KEY (mp_id) REFERENCES public.musical_projects(mp_id)
);


-- public.venues definition

-- Drop table

-- DROP TABLE public.venues;

CREATE TABLE public.venues (
	ve_id serial4 NOT NULL,
	co_id int4 NOT NULL,
	ve_name varchar(100) NOT NULL,
	ven_id int2 NOT NULL,
	ves_id int2 NOT NULL,
	ve_image varchar(300) NULL,
	reg_id int2 NOT NULL,
	com_id int2 NOT NULL,
	ve_address varchar(100) NOT NULL,
	ve_services varchar(300) NULL,
	ve_dimensions varchar(200) NULL,
	ve_capacity int4 NULL,
	ve_website varchar(200) NULL,
	ve_email varchar(100) NULL,
	ve_telephone varchar(20) NULL,
	ve_audio_specs varchar(250) NULL,
	ve_lighting_specs varchar(250) NULL,
	ve_stage_specs varchar(250) NULL,
	ve_backline_specs varchar(250) NULL,
	ve_dressing_rooms varchar(250) NULL,
	ve_sound_technician varchar(100) NULL,
	ve_lighting_technician varchar(100) NULL,
	ve_version bool DEFAULT true NULL,
	ts_crea timestamp DEFAULT now() NOT NULL,
	ts_mod timestamp NULL,
	CONSTRAINT venues_pkey PRIMARY KEY (ve_id),
	CONSTRAINT venues_co_id_fkey FOREIGN KEY (co_id) REFERENCES public.company(co_id),
	CONSTRAINT venues_com_id_fkey FOREIGN KEY (com_id) REFERENCES public.ma_commune(com_id),
	CONSTRAINT venues_reg_id_fkey FOREIGN KEY (reg_id) REFERENCES public.ma_region(reg_id),
	CONSTRAINT venues_ven_id_fkey FOREIGN KEY (ven_id) REFERENCES public.ma_venue(ven_id),
	CONSTRAINT venues_ves_id_fkey FOREIGN KEY (ves_id) REFERENCES public.ma_venue_space(ves_id)
);


-- public.events definition

-- Drop table

-- DROP TABLE public.events;

CREATE TABLE public.events (
	ev_id serial4 NOT NULL,
	ev_name varchar(100) NOT NULL,
	art_id int2 NOT NULL,
	ev_instrument_performer varchar(200) NULL,
	ev_event_date date NOT NULL,
	ev_start_time time NULL,
	ev_end_time time NULL,
	ev_inscription_end timestamptz NULL,
	ve_id int4 NOT NULL,
	ev_max_capacity int4 NOT NULL,
	ev_requires_sound_check bool DEFAULT false NULL,
	ev_has_dressing_room bool DEFAULT false NULL,
	ev_includes_catering bool DEFAULT false NULL,
	ev_includes_lighting_on_stage bool DEFAULT false NULL,
	ev_has_sound_system bool DEFAULT false NULL,
	ev_includes_sound_technician bool DEFAULT false NULL,
	ev_offers_outbound_transport bool DEFAULT false NULL,
	ev_offers_return_transport bool DEFAULT false NULL,
	ev_has_security_personnel bool DEFAULT false NULL,
	ev_offered_net_compensation int4 NULL,
	ev_coordinator_name varchar(200) NULL,
	ev_additional_information varchar(100) NULL,
	ev_status varchar(50) DEFAULT 'Borrador'::character varying NULL,
	ev_created_by_user_id int4 NULL,
	ev_version bool DEFAULT true NULL,
	ts_crea timestamptz DEFAULT now() NOT NULL,
	ts_modi timestamptz NULL,
	CONSTRAINT events_pkey PRIMARY KEY (ev_id),
	CONSTRAINT events_art_id_fkey FOREIGN KEY (art_id) REFERENCES public.ma_artist_type(art_id),
	CONSTRAINT events_ve_id_fkey FOREIGN KEY (ve_id) REFERENCES public.venues(ve_id)
);


-- public.events_gender definition

-- Drop table

-- DROP TABLE public.events_gender;

CREATE TABLE public.events_gender (
	evg_id bigserial NOT NULL,
	ev_id int8 NOT NULL,
	evg_image_url varchar(300) NOT NULL,
	evg_position int4 NULL,
	evg_version bool DEFAULT true NOT NULL,
	ts_crea timestamptz DEFAULT now() NOT NULL,
	ts_mod timestamptz NULL,
	CONSTRAINT events_gender_evg_id_pkey PRIMARY KEY (evg_id),
	CONSTRAINT events_gender_ev_id_fkey FOREIGN KEY (ev_id) REFERENCES public.events(ev_id)
);


-- public.events_project definition

-- Drop table

-- DROP TABLE public.events_project;

CREATE TABLE public.events_project (
	epr_id serial4 NOT NULL,
	ev_id int4 NOT NULL,
	mp_id int4 NOT NULL,
	ev_userid int4 NOT NULL,
	ev_crea timestamptz DEFAULT now() NOT NULL,
	ev_mod timestamptz NULL,
	mp_crea timestamptz DEFAULT now() NOT NULL,
	mp_mod timestamptz NULL,
	mp_userid int4 NOT NULL,
	epr_version bool DEFAULT true NOT NULL,
	ts_crea timestamptz DEFAULT now() NOT NULL,
	ts_mod timestamptz NULL,
	CONSTRAINT events_project_ev_id_mp_id_key UNIQUE (ev_id, mp_id),
	CONSTRAINT events_project_pkey PRIMARY KEY (epr_id),
	CONSTRAINT events_project_ev_id_fkey FOREIGN KEY (ev_id) REFERENCES public.events(ev_id),
	CONSTRAINT events_project_mp_id_fkey FOREIGN KEY (mp_id) REFERENCES public.musical_projects(mp_id)
);




