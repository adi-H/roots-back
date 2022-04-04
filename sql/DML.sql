-- Gdudim
INSERT INTO public.unit (id, name, parent_id) VALUES (1, 'ברוש', NULL);
INSERT INTO public.unit (id, name, parent_id) VALUES (2, 'ארז', NULL);

-- Plugot
INSERT INTO public.unit (id, name, parent_id) VALUES (3, 'א''', 1);
INSERT INTO public.unit (id, name, parent_id) VALUES (4, 'ב''', 1);
INSERT INTO public.unit (id, name, parent_id) VALUES (5, 'ג''', 1);
INSERT INTO public.unit (id, name, parent_id) VALUES (6, 'ד''', 1);
INSERT INTO public.unit (id, name, parent_id) VALUES (7, 'ה''', 1);
INSERT INTO public.unit (id, name, parent_id) VALUES (8, 'ו''', 1);
INSERT INTO public.unit (id, name, parent_id) VALUES (9, 'ארבל', 2);
INSERT INTO public.unit (id, name, parent_id) VALUES (10, 'בנטל', 2);
INSERT INTO public.unit (id, name, parent_id) VALUES (11, 'גולן', 2);
INSERT INTO public.unit (id, name, parent_id) VALUES (12, 'דותן', 2);
INSERT INTO public.unit (id, name, parent_id) VALUES (13, 'הראל', 2);
INSERT INTO public.unit (id, name, parent_id) VALUES (14, 'תבור', 2);

-- Teams
INSERT INTO public.unit (id, name, parent_id) VALUES (15, '1', 3);
INSERT INTO public.unit (id, name, parent_id) VALUES (16, '2', 3);
INSERT INTO public.unit (id, name, parent_id) VALUES (17, '3', 3);
INSERT INTO public.unit (id, name, parent_id) VALUES (18, '4', 3);
INSERT INTO public.unit (id, name, parent_id) VALUES (19, '5', 4);
INSERT INTO public.unit (id, name, parent_id) VALUES (20, '6', 4);
INSERT INTO public.unit (id, name, parent_id) VALUES (21, '7', 4);
INSERT INTO public.unit (id, name, parent_id) VALUES (22, '8', 4);
INSERT INTO public.unit (id, name, parent_id) VALUES (23, '9', 5);
INSERT INTO public.unit (id, name, parent_id) VALUES (24, '10', 5);
INSERT INTO public.unit (id, name, parent_id) VALUES (25, '11', 5);
INSERT INTO public.unit (id, name, parent_id) VALUES (26, '12', 5);
INSERT INTO public.unit (id, name, parent_id) VALUES (27, '13', 6);
INSERT INTO public.unit (id, name, parent_id) VALUES (28, '14', 6);
INSERT INTO public.unit (id, name, parent_id) VALUES (29, '15', 6);
INSERT INTO public.unit (id, name, parent_id) VALUES (30, '16', 6);
INSERT INTO public.unit (id, name, parent_id) VALUES (31, '17', 7);
INSERT INTO public.unit (id, name, parent_id) VALUES (32, '18', 7);
INSERT INTO public.unit (id, name, parent_id) VALUES (33, '19', 7);
INSERT INTO public.unit (id, name, parent_id) VALUES (34, '20', 7);
INSERT INTO public.unit (id, name, parent_id) VALUES (35, '21', 8);
INSERT INTO public.unit (id, name, parent_id) VALUES (36, '22', 8);
INSERT INTO public.unit (id, name, parent_id) VALUES (37, '23', 8);
INSERT INTO public.unit (id, name, parent_id) VALUES (38, '24', 8);

-- Buildings
INSERT INTO public.building (id, name) VALUES (1, 'רמון');
INSERT INTO public.building (id, name) VALUES (2, 'בוקר');
INSERT INTO public.building (id, name) VALUES (3, 'צין');
INSERT INTO public.building (id, name) VALUES (4, 'נקרות');
INSERT INTO public.building (id, name) VALUES (5, 'הדבמים');

-- Class Types
INSERT INTO public.class_type (id, name) VALUES (1, 'צוותית');
INSERT INTO public.class_type (id, name) VALUES (2, 'דו"צ');
INSERT INTO public.class_type (id, name) VALUES (3, 'פלוגתית');
INSERT INTO public.class_type (id, name) VALUES (4, 'תלת פלוגתית');

-- Classes
INSERT INTO public.class (id, name, building_id, owner_unit_id, type_id, keyholder_user_id, sign_time) VALUES (1, '102', 1, NULL, NULL, NULL, NULL);
INSERT INTO public.class (id, name, building_id, owner_unit_id, type_id, keyholder_user_id, sign_time) VALUES (2, '104', 1, NULL, NULL, NULL, NULL);
INSERT INTO public.class (id, name, building_id, owner_unit_id, type_id, keyholder_user_id, sign_time) VALUES (3, '106', 1, NULL, NULL, NULL, NULL);
INSERT INTO public.class (id, name, building_id, owner_unit_id, type_id, keyholder_user_id, sign_time) VALUES (4, '108', 1, NULL, NULL, NULL, NULL);
INSERT INTO public.class (id, name, building_id, owner_unit_id, type_id, keyholder_user_id, sign_time) VALUES (5, '110', 1, NULL, NULL, NULL, NULL);
INSERT INTO public.class (id, name, building_id, owner_unit_id, type_id, keyholder_user_id, sign_time) VALUES (6, '112', 1, NULL, NULL, NULL, NULL);
INSERT INTO public.class (id, name, building_id, owner_unit_id, type_id, keyholder_user_id, sign_time) VALUES (7, '114', 1, NULL, NULL, NULL, NULL);
INSERT INTO public.class (id, name, building_id, owner_unit_id, type_id, keyholder_user_id, sign_time) VALUES (8, '116', 1, 3, 2, NULL, NULL);
INSERT INTO public.class (id, name, building_id, owner_unit_id, type_id, keyholder_user_id, sign_time) VALUES (9, '118', 1, 6, 3, NULL, NULL);
INSERT INTO public.class (id, name, building_id, owner_unit_id, type_id, keyholder_user_id, sign_time) VALUES (10, '120', 1, 7, 3, NULL, NULL);
INSERT INTO public.class (id, name, building_id, owner_unit_id, type_id, keyholder_user_id, sign_time) VALUES (11, '122', 1, 3, 2, NULL, NULL);
INSERT INTO public.class (id, name, building_id, owner_unit_id, type_id, keyholder_user_id, sign_time) VALUES (12, '124', 1, 8, 2, NULL, NULL);
INSERT INTO public.class (id, name, building_id, owner_unit_id, type_id, keyholder_user_id, sign_time) VALUES (13, '206', 1, NULL, NULL, NULL, NULL);
INSERT INTO public.class (id, name, building_id, owner_unit_id, type_id, keyholder_user_id, sign_time) VALUES (14, '210', 1, NULL, NULL, NULL, NULL);
INSERT INTO public.class (id, name, building_id, owner_unit_id, type_id, keyholder_user_id, sign_time) VALUES (15, '212', 1, 5, 2, NULL, NULL);
INSERT INTO public.class (id, name, building_id, owner_unit_id, type_id, keyholder_user_id, sign_time) VALUES (16, '214', 1, NULL, NULL, NULL, NULL);
INSERT INTO public.class (id, name, building_id, owner_unit_id, type_id, keyholder_user_id, sign_time) VALUES (17, '216', 1, NULL, NULL, NULL, NULL);
INSERT INTO public.class (id, name, building_id, owner_unit_id, type_id, keyholder_user_id, sign_time) VALUES (18, '220', 1, 4, 4, NULL, NULL);
INSERT INTO public.class (id, name, building_id, owner_unit_id, type_id, keyholder_user_id, sign_time) VALUES (19, '302', 2, 8, 1, NULL, NULL);
INSERT INTO public.class (id, name, building_id, owner_unit_id, type_id, keyholder_user_id, sign_time) VALUES (20, '307', 2, NULL, NULL, NULL, NULL);
INSERT INTO public.class (id, name, building_id, owner_unit_id, type_id, keyholder_user_id, sign_time) VALUES (21, '307א', 2, NULL, NULL, NULL, NULL);
INSERT INTO public.class (id, name, building_id, owner_unit_id, type_id, keyholder_user_id, sign_time) VALUES (22, '308', 2, NULL, NULL, NULL, NULL);
INSERT INTO public.class (id, name, building_id, owner_unit_id, type_id, keyholder_user_id, sign_time) VALUES (23, '308א', 2, NULL, NULL, NULL, NULL);
INSERT INTO public.class (id, name, building_id, owner_unit_id, type_id, keyholder_user_id, sign_time) VALUES (24, '310', 2, NULL, NULL, NULL, NULL);
INSERT INTO public.class (id, name, building_id, owner_unit_id, type_id, keyholder_user_id, sign_time) VALUES (25, '311', 2, NULL, NULL, NULL, NULL);
INSERT INTO public.class (id, name, building_id, owner_unit_id, type_id, keyholder_user_id, sign_time) VALUES (26, '311א', 2, NULL, NULL, NULL, NULL);
INSERT INTO public.class (id, name, building_id, owner_unit_id, type_id, keyholder_user_id, sign_time) VALUES (27, '312', 2, NULL, NULL, NULL, NULL);
INSERT INTO public.class (id, name, building_id, owner_unit_id, type_id, keyholder_user_id, sign_time) VALUES (28, '312א', 2, NULL, NULL, NULL, NULL);
INSERT INTO public.class (id, name, building_id, owner_unit_id, type_id, keyholder_user_id, sign_time) VALUES (29, '315', 2, NULL, NULL, NULL, NULL);
INSERT INTO public.class (id, name, building_id, owner_unit_id, type_id, keyholder_user_id, sign_time) VALUES (30, '315א', 2, NULL, NULL, NULL, NULL);
INSERT INTO public.class (id, name, building_id, owner_unit_id, type_id, keyholder_user_id, sign_time) VALUES (31, '405', 2, 5, 1, NULL, NULL);
INSERT INTO public.class (id, name, building_id, owner_unit_id, type_id, keyholder_user_id, sign_time) VALUES (32, '406', 2, 4, 1, NULL, NULL);
INSERT INTO public.class (id, name, building_id, owner_unit_id, type_id, keyholder_user_id, sign_time) VALUES (33, '407', 2, 7, 1, NULL, NULL);
INSERT INTO public.class (id, name, building_id, owner_unit_id, type_id, keyholder_user_id, sign_time) VALUES (34, '408', 2, 6, 1, NULL, NULL);
INSERT INTO public.class (id, name, building_id, owner_unit_id, type_id, keyholder_user_id, sign_time) VALUES (35, '412', 2, NULL, NULL, NULL, NULL);
INSERT INTO public.class (id, name, building_id, owner_unit_id, type_id, keyholder_user_id, sign_time) VALUES (36, '415', 2, NULL, NULL, NULL, NULL);
INSERT INTO public.class (id, name, building_id, owner_unit_id, type_id, keyholder_user_id, sign_time) VALUES (37, '419', 2, NULL, NULL, NULL, NULL);
INSERT INTO public.class (id, name, building_id, owner_unit_id, type_id, keyholder_user_id, sign_time) VALUES (38, '420', 2, NULL, NULL, NULL, NULL);
INSERT INTO public.class (id, name, building_id, owner_unit_id, type_id, keyholder_user_id, sign_time) VALUES (39, '500', 3, NULL, NULL, NULL, NULL);
INSERT INTO public.class (id, name, building_id, owner_unit_id, type_id, keyholder_user_id, sign_time) VALUES (40, '501', 3, 3, 3, NULL, NULL);
INSERT INTO public.class (id, name, building_id, owner_unit_id, type_id, keyholder_user_id, sign_time) VALUES (41, '502', 3, 8, 3, NULL, NULL);
INSERT INTO public.class (id, name, building_id, owner_unit_id, type_id, keyholder_user_id, sign_time) VALUES (42, '503', 3, 6, 3, NULL, NULL);
INSERT INTO public.class (id, name, building_id, owner_unit_id, type_id, keyholder_user_id, sign_time) VALUES (43, '504', 3, 7, 3, NULL, NULL);
INSERT INTO public.class (id, name, building_id, owner_unit_id, type_id, keyholder_user_id, sign_time) VALUES (44, '505', 3, NULL, NULL, NULL, NULL);
INSERT INTO public.class (id, name, building_id, owner_unit_id, type_id, keyholder_user_id, sign_time) VALUES (45, '506', 3, NULL, NULL, NULL, NULL);
INSERT INTO public.class (id, name, building_id, owner_unit_id, type_id, keyholder_user_id, sign_time) VALUES (46, '507', 3, NULL, NULL, NULL, NULL);
INSERT INTO public.class (id, name, building_id, owner_unit_id, type_id, keyholder_user_id, sign_time) VALUES (47, '508', 3, NULL, NULL, NULL, NULL);
INSERT INTO public.class (id, name, building_id, owner_unit_id, type_id, keyholder_user_id, sign_time) VALUES (48, '510', 3, NULL, NULL, NULL, NULL);
INSERT INTO public.class (id, name, building_id, owner_unit_id, type_id, keyholder_user_id, sign_time) VALUES (49, '601', 3, NULL, NULL, NULL, NULL);
INSERT INTO public.class (id, name, building_id, owner_unit_id, type_id, keyholder_user_id, sign_time) VALUES (50, '602', 3, NULL, NULL, NULL, NULL);
INSERT INTO public.class (id, name, building_id, owner_unit_id, type_id, keyholder_user_id, sign_time) VALUES (51, '603', 3, NULL, NULL, NULL, NULL);
INSERT INTO public.class (id, name, building_id, owner_unit_id, type_id, keyholder_user_id, sign_time) VALUES (52, '604', 3, NULL, NULL, NULL, NULL);
INSERT INTO public.class (id, name, building_id, owner_unit_id, type_id, keyholder_user_id, sign_time) VALUES (53, '605', 3, NULL, NULL, NULL, NULL);
INSERT INTO public.class (id, name, building_id, owner_unit_id, type_id, keyholder_user_id, sign_time) VALUES (54, '606', 3, NULL, NULL, NULL, NULL);
INSERT INTO public.class (id, name, building_id, owner_unit_id, type_id, keyholder_user_id, sign_time) VALUES (55, '607', 3, NULL, NULL, NULL, NULL);
INSERT INTO public.class (id, name, building_id, owner_unit_id, type_id, keyholder_user_id, sign_time) VALUES (56, '608', 3, NULL, NULL, NULL, NULL);
INSERT INTO public.class (id, name, building_id, owner_unit_id, type_id, keyholder_user_id, sign_time) VALUES (57, '614', 3, NULL, NULL, NULL, NULL);
INSERT INTO public.class (id, name, building_id, owner_unit_id, type_id, keyholder_user_id, sign_time) VALUES (58, '616', 3, NULL, NULL, NULL, NULL);
INSERT INTO public.class (id, name, building_id, owner_unit_id, type_id, keyholder_user_id, sign_time) VALUES (59, '701', 4, NULL, NULL, NULL, NULL);
INSERT INTO public.class (id, name, building_id, owner_unit_id, type_id, keyholder_user_id, sign_time) VALUES (60, '702', 4, NULL, NULL, NULL, NULL);
INSERT INTO public.class (id, name, building_id, owner_unit_id, type_id, keyholder_user_id, sign_time) VALUES (61, '703', 4, NULL, NULL, NULL, NULL);
INSERT INTO public.class (id, name, building_id, owner_unit_id, type_id, keyholder_user_id, sign_time) VALUES (62, '705', 4, NULL, NULL, NULL, NULL);
INSERT INTO public.class (id, name, building_id, owner_unit_id, type_id, keyholder_user_id, sign_time) VALUES (63, '707', 4, NULL, NULL, NULL, NULL);
INSERT INTO public.class (id, name, building_id, owner_unit_id, type_id, keyholder_user_id, sign_time) VALUES (64, '801', 4, NULL, NULL, NULL, NULL);
INSERT INTO public.class (id, name, building_id, owner_unit_id, type_id, keyholder_user_id, sign_time) VALUES (65, '802', 4, NULL, NULL, NULL, NULL);
INSERT INTO public.class (id, name, building_id, owner_unit_id, type_id, keyholder_user_id, sign_time) VALUES (66, '803', 4, NULL, NULL, NULL, NULL);
INSERT INTO public.class (id, name, building_id, owner_unit_id, type_id, keyholder_user_id, sign_time) VALUES (67, '804', 4, NULL, NULL, NULL, NULL);
INSERT INTO public.class (id, name, building_id, owner_unit_id, type_id, keyholder_user_id, sign_time) VALUES (68, '805', 4, 4, 3, NULL, NULL);
INSERT INTO public.class (id, name, building_id, owner_unit_id, type_id, keyholder_user_id, sign_time) VALUES (69, '806', 4, 5, 3, NULL, NULL);
INSERT INTO public.class (id, name, building_id, owner_unit_id, type_id, keyholder_user_id, sign_time) VALUES (70, '203', 5, NULL, NULL, NULL, NULL);
INSERT INTO public.class (id, name, building_id, owner_unit_id, type_id, keyholder_user_id, sign_time) VALUES (71, '204', 5, NULL, NULL, NULL, NULL);
INSERT INTO public.class (id, name, building_id, owner_unit_id, type_id, keyholder_user_id, sign_time) VALUES (72, '209', 5, NULL, NULL, NULL, NULL);
INSERT INTO public.class (id, name, building_id, owner_unit_id, type_id, keyholder_user_id, sign_time) VALUES (73, '217', 5, NULL, NULL, NULL, NULL);

-- Roles
INSERT INTO public.role (id, name) VALUES (1, 'מנהל מערכת');
INSERT INTO public.role (id, name) VALUES (2, 'קה"ד גדודי');
INSERT INTO public.role (id, name) VALUES (3, 'קה"ד פלוגתי');
INSERT INTO public.role (id, name) VALUES (4, 'קל"ג גדודי');
INSERT INTO public.role (id, name) VALUES (5, 'קל"ג פלוגתי');
INSERT INTO public.role (id, name) VALUES (6, 'סמ"פ');
INSERT INTO public.role (id, name) VALUES (7, 'ממ"ש');
INSERT INTO public.role (id, name) VALUES (8, 'צוער רגיל');

-- teams
INSERT INTO public.user (id, password, first_name, last_name, phone_number, team_id, role_id) VALUES (315151373, 'Aa123456', 'אסף', 'בן חיים', '050-7776645', 38, 1);
INSERT INTO public.user (id, password, first_name, last_name, phone_number, team_id, role_id) VALUES (315151374, 'Aa123456', 'רוני', 'קילימניק', '050-8685545', 38, 8);
INSERT INTO public.user (id, password, first_name, last_name, phone_number, team_id, role_id) VALUES (315151375, 'Aa123456', 'אופק', 'שגב', '050-8675545', 38, 8);
INSERT INTO public.user (id, password, first_name, last_name, phone_number, team_id, role_id) VALUES (315151376, 'Aa123456', 'גונן', 'מילר', '050-8055645', 38, 8);
INSERT INTO public.user (id, password, first_name, last_name, phone_number, team_id, role_id) VALUES (315151377, 'Aa123456', 'איתי', 'קלומק', '050-8025645', 38, 8);
INSERT INTO public.user (id, password, first_name, last_name, phone_number, team_id, role_id) VALUES (315151378, 'Aa123456', 'אביחי', 'קדוש', '052-7776645', 35, 8);
INSERT INTO public.user (id, password, first_name, last_name, phone_number, team_id, role_id) VALUES (315151379, 'Aa123456', 'זיו', 'כהן', '052-8685545', 35, 8);
INSERT INTO public.user (id, password, first_name, last_name, phone_number, team_id, role_id) VALUES (315151380, 'Aa123456', 'שגיא', 'שכטר', '052-8675545', 35, 8);
INSERT INTO public.user (id, password, first_name, last_name, phone_number, team_id, role_id) VALUES (315151381, 'Aa123456', 'עידו', 'צדקה', '052-8055645', 35, 8);
INSERT INTO public.user (id, password, first_name, last_name, phone_number, team_id, role_id) VALUES (315151382, 'Aa123456', 'רום', 'קרלבסקי', '052-8025645', 35, 8);