CREATE DATABASE hospital_management_system;

USE hospital_management_system;

CREATE TABLE role ( 
    id INT AUTO_INCREMENT PRIMARY KEY,
    name String NOT NULL,
    code ENUM("Admin", "Doctor", "Pharmacist", "Nurse", "Patient") NOT NULL
);

CREATE TABLE user (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    user_name VARCHAR(50) NOT NULL,
    password VARCHAR(50) NOT NULL,
    birthday DATE NOT NULL,
    phone_number VARCHAR(10) NOT NULL,
    address VARCHAR(200),
    gender ENUM('Female', 'Male', 'Other') NOT NULL,
    id_role INT,
    id_department INT,
    id_room INT,
    id_bed INT,
    create_at DATETIME NOT NULL,
    update_at DATETIME NOT NULL
);

CREATE TABLE health_insurance_card (
    id INT AUTO_INCREMENT PRIMARY KEY,
    start_date DATE NOT NULL,
    year_duration INT NOT NULL,
    status ENUM('Active', 'Inactive') NOT NULL,
    id_patient INT
);

CREATE TABLE department (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    department_type ENUM(
        'Clinical Department',
        'Clinical Laboratory Department',
        'Functional Department'
    )
);

CREATE TABLE room (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    room_type ENUM('Normal', 'VIP') NOT NULL,
    price INT NOT NULL,
    id_department INT
);

CREATE TABLE bed (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    id_room INT
);

CREATE TABLE medical_record (
    id INT AUTO_INCREMENT PRIMARY KEY,
    import_date_time DATETIME NOT NULL,
    export_date_time DATETIME NOT NULL,
    id_patient INT
);

CREATE TABLE medical_examination (
    id INT AUTO_INCREMENT PRIMARY KEY,
    medical_examination_date_time DATETIME NOT NULL,
    health_condition VARCHAR(50) NOT NULL,
    result VARCHAR(255) NOT NULL,
    id_medical_record INT
);

CREATE TABLE service (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    price INT NOT NULL
);

CREATE TABLE service_rel_medical_examination (
    id INT AUTO_INCREMENT PRIMARY KEY,
    id_service INT,
    id_medical_examination INT,
    quantity INT
);

CREATE TABLE medical (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    unit ENUM("Tablet", "Blister pack", "Box", "Bottle", "Jar", "Tube"),
    price INT NOT NULL
);

CREATE TABLE prescription (
    id INT AUTO_INCREMENT PRIMARY KEY,
    id_medical_examination INT
);

CREATE TABLE prescription_rel_medical (
    id INT AUTO_INCREMENT PRIMARY KEY,
    id_prescription INT,
    id_medical INT,
    quantity INT DEFAULT 1
);

CREATE TABLE payment (
    id INT AUTO_INCREMENT PRIMARY KEY,
    payment_date DATETIME NOT NULL,
    amount INT NOT NULL,
    payment_method ENUM("Payment in cash", "Bank transfer"),
    quantity INT DEFAULT 1
)

ALTER TABLE
    user
ADD
    FOREIGN KEY (id_role) REFERENCES role(id) ON UPDATE CASCADE ON DELETE CASCADE,
ADD
    FOREIGN KEY (id_department) REFERENCES department(id) ON UPDATE CASCADE ON DELETE CASCADE,
ADD
    FOREIGN KEY (id_room) REFERENCES room(id) ON UPDATE CASCADE ON DELETE CASCADE,
ADD
    FOREIGN KEY (id_bed) REFERENCES bed(id) ON UPDATE CASCADE ON DELETE CASCADE;

ALTER TABLE
    health_insurance_card
ADD
    FOREIGN KEY (id_patient) REFERENCES user(id) ON UPDATE CASCADE ON DELETE CASCADE;

ALTER TABLE
    medical_record
ADD
    FOREIGN KEY (id_patient) REFERENCES user(id) ON UPDATE CASCADE ON DELETE CASCADE;

ALTER TABLE
    room
ADD
    FOREIGN KEY (id_department) REFERENCES department(id) ON UPDATE CASCADE ON DELETE CASCADE;

ALTER TABLE
    bed
ADD
    FOREIGN KEY (id_room) REFERENCES room(id) ON UPDATE CASCADE ON DELETE CASCADE;

ALTER TABLE
    medical_examination
ADD
    FOREIGN KEY (id_medical_record) REFERENCES medical_record(id) ON UPDATE CASCADE ON DELETE CASCADE;

ALTER TABLE
    service_rel_medical_examination
ADD
    FOREIGN KEY (id_service) REFERENCES service(id) ON UPDATE CASCADE ON DELETE CASCADE,
ADD
    FOREIGN KEY (id_medical_examination) REFERENCES medical_examination(id) ON UPDATE CASCADE ON DELETE CASCADE;

ALTER TABLE
    prescription
ADD
    FOREIGN KEY (id_medical_examination) REFERENCES medical_examination(id) ON UPDATE CASCADE ON DELETE CASCADE;

ALTER TABLE
    prescription_rel_medical
ADD
    FOREIGN KEY (id_prescription) REFERENCES prescription(id) ON UPDATE CASCADE ON DELETE CASCADE,
ADD
    FOREIGN KEY (id_medical) REFERENCES medical(id) ON UPDATE CASCADE ON DELETE CASCADE;

INSERT INTO department(name, department_type)
VALUES("Khoa gây mê - hồi sức cấp cứu","Clinical Department"),
    ('Khoa khám bệnh', 'Clinical Department'),
    (
        'Khoa chấn thương chỉnh hình',
        'Clinical Department'
    ),
    (
        'Khoa chấn thương chỉnh hình',
        'Clinical Department'
    ),
    ('Khoa ngoại tổng hợp', 'Clinical Department'),
    ('Khoa nội tổng hợp', 'Clinical Department'),
    ('Khoa sản', 'Clinical Department'),
    ('Khoa nhi', 'Clinical Department'),
    ('Khoa thận nhân tạo', 'Clinical Department'),
    (
        'Khoa chẩn đoán hình ảnh và thăm dò',
        'Clinical Laboratory Department'
    ),
    (
        'Khoa xét nghiệm',
        'Clinical Laboratory Department'
    ),
    ('Khoa dược', 'Clinical Laboratory Department'),
    (
        'Phòng kế hoạch tổng hợp',
        'Functional Department'
    ),
    (
        'Phòng tổ chức hành chính',
        'Functional Department'
    ),
    (
        'Phòng tài chính kế toán',
        'Functional Department'
    ),
    ('Phòng điều dưỡng', 'Functional Department'),
    (
        'Phòng vật tư và thiết bị',
        'Functional Department'
    ),
    ('Phòng công tác xã hội', 'Functional Department'),
    (
        'Tổ công nghệ thông tin',
        'Functional Department'
    );

INSERT INTO
    room(
        name,
        room_type,
        price,
        id_department
    )
VALUES
    ('A001', 'Normal', 120000, 1),
    ('A002', 'Normal', 120000, 1),
    ('A003', 'Normal', 120000, 1),

    ('B001', 'Normal', 120000, 2),
    ('B002', 'Normal', 120000, 2),
    ('B003', 'Normal', 120000, 2),

    ('C001', 'Normal', 120000, 3),
    ('C002', 'Normal', 120000, 3),
    ('C003', 'Normal', 120000, 3),

    ('D001', 'Normal', 120000, 4),
    ('D002', 'Normal', 120000, 4),
    ('D003', 'Normal', 120000, 4),

    ('E001', 'Normal', 120000, 5),
    ('E002', 'Normal', 120000, 5),
    ('E003', 'Normal', 120000, 5),

    ('F001', 'Normal', 120000, 6),
    ('F002', 'Normal', 120000, 6),
    ('F003', 'Normal', 120000, 6),

    ('G001', 'VIP', 400000, 7),
    ('G002', 'VIP', 400000, 7),
    ('G003', 'VIP', 400000, 7),

    ('H001', 'Normal', 120000, 8),
    ('H002', 'Normal', 120000, 8),
    ('H003', 'Normal', 120000, 8),

    ('I001', 'Normal', 120000, 9),
    ('I002', 'Normal', 120000, 9),
    ('I003', 'Normal', 120000, 9);

INSERT INTO
    bed(name, id_room)
VALUES
    
    ('A001_1', 1),
    ('A001_2', 1),
    ('A001_3', 1),
    
    ('A002_1', 2),
    ('A002_2', 2),
    ('A002_3', 2),
    
    ('A003_1', 3),
    ('A003_2', 3),
    ('A003_3', 3),
    
    ('B001_1', 4),
    ('B001_2', 4),
    ('B001_3', 4),
    
    ('B002_1', 5),
    ('B002_2', 5),
    ('B002_3', 5),
    
    ('B003_1', 6),
    ('B003_2', 6),
    ('B003_3', 6),
    
    ('C001_1', 7),
    ('C001_2', 7),
    ('C001_3', 7),
    
    ('C002_1', 7),
    ('C002_2', 7),
    ('C002_3', 7),
    
    ('C003_1', 7),
    ('C003_2', 7),
    ('C003_3', 7),
    
    ('D001_1', 8),
    ('D001_2', 8),
    ('D001_3', 8),
    
    ('D002_1', 8),
    ('D002_2', 8),
    ('D002_3', 8),
    
    ('D003_1', 8),
    ('D003_2', 8),
    ('D003_3', 8),
    
    ('E001_1', 9),
    ('E001_2', 9),
    ('E001_3', 9),
    
    ('E002_1', 9),
    ('E002_2', 9),
    ('E002_3', 9),
    
    ('E003_1', 9),
    ('E003_2', 9),
    ('E003_3', 9),
    
    ('F001_1', 10),
    ('F001_2', 10),
    ('F001_3', 10),
    
    ('F002_1', 10),
    ('F002_2', 10),
    ('F002_3', 10),
    
    ('F003_1', 10),
    ('F003_2', 10),
    ('F003_3', 10),
    
    ('G001_1', 11),
    ('G001_2', 11),
    ('G001_3', 11),
    
    ('G002_1', 11),
    ('G002_2', 11),
    ('G002_3', 11),
    
    ('G003_1', 11),
    ('G003_2', 11),
    ('G003_3', 11),
    
    ('H001_1', 12),
    ('H001_2', 12),
    ('H001_3', 12),
    
    ('H002_1', 12),
    ('H002_2', 12),
    ('H002_3', 12),
    
    ('H003_1', 12),
    ('H003_2', 12),
    ('H003_3', 12),
    
    ('I001_1', 13),
    ('I001_2', 13),
    ('I001_3', 13),
    
    ('I002_1', 13),
    ('I002_2', 13),
    ('I002_3', 13),
    
    ('I003_1', 13),
    ('I003_2', 13),
    ('I003_3', 13);

INSERT INTO
    role(name, code)
VALUES
    ('Admin','Admin'),
    ('Doctor','Doctor'),
    ('Pharmacist','Pharmacist'),
    ('Nurse','Nurse'),
    ('Patient','Patient');

INSERT INTO
    service(name, price)
VALUES
    ('Chụp X Quang', 150000),
    ('Xét nghiệm máu', 150000),
    ('Chụp Cắt lớp', 150000);

INSERT INTO
    medical(name, unit, price)
VALUES
    ('Diazepam (1 Hộp / 100v)', "Box", 160000),
    ('Alprazolam (1 Hộp / 100v)', "Box", 140000),
    ('Lorazepam  (1 Hộp / 60v)', "Box", 130000),
    ('Amoxicillin (1 Hộp / 20v)', "Box", 125000),
    ('Azithromycin (1 Hộp / 50v)', "Box", 150000),
    ('Lorazepam  (1 Hộp / 60v)', "Tablet", 1300),
    ('Amoxicillin (1 Hộp / 20v)', "Tablet", 1250),
    ('Azithromycin (1 Hộp / 50v)', "Tablet", 1500),
    ('Diazepam (1 Hộp / 100v)', "Tablet", 1600),
    ('Alprazolam (1 Hộp / 100v)', "Tablet", 1400),
    ('Cough Syrup', "Bottle", 120000),
    ('Liquid Antibiotic Suspension', "Bottle", 250000),
    ('Insulin', "Bottle", 110000),
    ('Syrup', "Bottle", 250000),
    ('LTopical Antibiotic Ointment', "Tube", 200000),
    ('Hydrocortisone Cream', "Tube", 350000),
    ('Triple Antibiotic Ointment', "Tube", 100000),
    ('Clotrimazole Cream ', "Tube", 80000);

INSERT INTO
    user(
        name,
        user_name,
        password,
        birthday,
        phone_number,
        address,
        gender,
        id_role,
        id_department,
        id_room,
        id_bed,
        create_at,
        update_at
    )
VALUES
    (
        "Jesse Le",
        "jesse",
        "jesse123",
        "2001-11-08",
        "0999123123",
        "Quang Binh Province",
        "Male",
        1,
        null,
        null,
        null,
        "2023-11-08 14:30:00",
        "2023-11-08 14:30:00"
    );

INSERT INTO
    user(
        name,
        user_name,
        password,
        birthday,
        phone_number,
        address,
        gender,
        id_role,
        id_department,
        id_room,
        id_bed,
        create_at,
        update_at
    )
VALUES
    (
        'Nguyen Hoang An',
        'hoangan',
        'hoangan123',
        '2001-11-08',
        '0999123123',
        'Quang Binh Province',
        'Male',
        2,
        1,
        1,
        null,
        '2023-11-08 14:30:00',
        '2023-11-08 14:30:00'
    ),
    (
        'Nguyen Hoang Minh',
        'hoangminh',
        'hoangminh123',
        '2001-11-08',
        '0999123123',
        'Quang Nam Province',
        'Male',
        2,
        2,
        1,
        null,
        '2023-11-08 14:30:00',
        '2023-11-08 14:30:00'
    ),
    (
        'Hoang Thi Hoai Nhi',
        'hoainhi',
        'hoainhi123',
        '2001-11-08',
        '0999123123',
        'Quang Nam Province',
        'Female',
        2,
        3,
        1,
        null,
        '2023-11-08 14:30:00',
        '2023-11-08 14:30:00'
    ),
    (
        'Huynh Thanh Hai',
        'thanhhai',
        'thanhhai123',
        '2001-11-08',
        '0999123123',
        'Quang Nam Province',
        'Male',
        2,
        4,
        1,
        null,
        '2023-11-08 14:30:00',
        '2023-11-08 14:30:00'
    ),
    (
        'Hoang Yen Nhi',
        'yennhi',
        'yennhi123',
        '2001-11-08',
        '0999123123',
        'Quang Nam Province',
        'Female',
        2,
        5,
        1,
        null,
        '2023-11-08 14:30:00',
        '2023-11-08 14:30:00'
    ),
    (
        'Hoang Thi Hong',
        'thihong',
        'thihong123',
        '2001-11-08',
        '0999123123',
        'Quang Nam Province',
        'Female',
        2,
        6,
        1,
        null,
        '2023-11-08 14:30:00',
        '2023-11-08 14:30:00'
    ),
    (
        'Bui Van Khiet',
        'vankhiet',
        'vankhiet123',
        '2001-11-08',
        '0999123123',
        'Quang Nam Province',
        'Male',
        2,
        7,
        1,
        null,
        '2023-11-08 14:30:00',
        '2023-11-08 14:30:00'
    ),
    (
        'Huynh Tan Minh',
        'tanminh',
        'tanminh123',
        '2001-11-08',
        '0999123123',
        'Quang Nam Province',
        'Male',
        2,
        8,
        1,
        null,
        '2023-11-08 14:30:00',
        '2023-11-08 14:30:00'
    ),
    (
        'Hoang Tan Tai',
        'tantai',
        'tantai123',
        '2001-11-08',
        '0999123123',
        'Quang Nam Province',
        'Male',
        2,
        9,
        1,
        null,
        '2023-11-08 14:30:00',
        '2023-11-08 14:30:00'
    );

INSERT INTO
    user(
        name,
        user_name,
        password,
        birthday,
        phone_number,
        address,
        gender,
        id_role,
        id_department,
        id_room,
        id_bed,
        create_at,
        update_at
    )
VALUES
    (
        'Nguyen Duy Khuong',
        'duykhuong',
        'duykhuong123',
        '2001-11-08',
        '0999123123',
        'Ha Noi',
        'Male',
        3,
        1,
        1,
        null,
        '2023-11-08 14:30:00',
        '2023-11-08 14:30:00'
    ),
    (
        'Tran Duc Tai',
        'ductai',
        'ductai123',
        '2001-11-08',
        '0999123123',
        'TP.HCM',
        'Female',
        3,
        2,
        1,
        null,
        '2023-11-08 14:30:00',
        '2023-11-08 14:30:00'
    );

INSERT INTO
    user(
        name,
        user_name,
        password,
        birthday,
        phone_number,
        address,
        gender,
        id_role,
        id_department,
        id_room,
        id_bed,
        create_at,
        update_at
    )
VALUES
    (
        'Huynh Thanh Hue',
        'thanhhue',
        'thanhhue123',
        '2001-11-08',
        '0999123123',
        'Quang Binh Province',
        'Female',
        4,
        1,
        1,
        null,
        '2023-11-08 14:30:00',
        '2023-11-08 14:30:00'
    ),
    (
        'Nguyen Thi Thanh Thuy',
        'thanhthuy',
        'thanhthuy123',
        '2001-11-08',
        '0999123123',
        'Quang Binh Province',
        'Female',
        4,
        2,
        1,
        null,
        '2023-11-08 14:30:00',
        '2023-11-08 14:30:00'
    );

INSERT INTO
    user(
        name,
        user_name,
        password,
        birthday,
        phone_number,
        address,
        gender,
        id_role,
        id_department,
        id_room,
        id_bed,
        create_at,
        update_at
    )
VALUES
    (
        'Hyunh Thi Ngoc Thao',
        'ngocthao',
        'ngocthao123',
        '2001-11-08',
        '0999123123',
        'Quang Binh Province',
        'Female',
        5,
        1,
        1,
        1,
        '2023-11-08 14:30:00',
        '2023-11-08 14:30:00'
    ),
    (
        'Nguyen Hoai Thu',
        'hoaithu',
        'hoaithu123',
        '2001-11-08',
        '0999123123',
        'Quang Binh Province',
        'Female',
        5,
        2,
        1,
        1,
        '2023-11-08 14:30:00',
        '2023-11-08 14:30:00'
    );