exports.getCategoryData = function() {
	return ( {
		"head" : {
			"action" : "categories"
		},
		"body" : {
			"status" : "SUCCESS_200",
			"result" : [{
				"u_order" : "1",
				"u_type" : "Cloud",
				"sys_updated_by" : "rohanc",
				"sys_updated_on" : "2015-07-15 05:13:01",
				"sys_id" : "26266d5b6f050200aa3391c75b3ee4f4",
				"sys_mod_count" : "5",
				"sys_created_on" : "2015-07-09 20:18:44",
				"u_active" : "true",
				"u_number" : "OAC0001012",
				"sys_created_by" : "sambasivar"
			}, {
				"u_order" : "2",
				"u_type" : "Network",
				"sys_updated_by" : "rohanc",
				"sys_updated_on" : "2015-07-15 05:13:07",
				"sys_id" : "6c56bba06f5d0200aa3391c75b3ee42a",
				"sys_mod_count" : "4",
				"sys_created_on" : "2015-07-14 04:01:47",
				"u_active" : "true",
				"u_number" : "OAC0001017",
				"sys_created_by" : "rohanc"
			}, {
				"u_order" : "3",
				"u_type" : "File Management",
				"sys_updated_by" : "rohanc",
				"sys_updated_on" : "2015-07-15 05:16:07",
				"sys_id" : "8b6c551b6f050200aa3391c75b3ee4b9",
				"sys_mod_count" : "5",
				"sys_created_on" : "2015-07-09 19:36:11",
				"u_active" : "true",
				"u_number" : "OAC0001011",
				"sys_created_by" : "sambasivar"
			}, {
				"u_order" : "4",
				"u_type" : "",
				"sys_updated_by" : "rohanc",
				"sys_updated_on" : "2015-07-14 04:10:10",
				"sys_id" : "9fa63fa06f5d0200aa3391c75b3ee437",
				"sys_mod_count" : "2",
				"sys_created_on" : "2015-07-14 04:02:33",
				"u_active" : "true",
				"u_number" : "OAC0001018",
				"sys_created_by" : "rohanc"
			}, {
				"u_order" : "5",
				"u_type" : "",
				"sys_updated_by" : "rohanc",
				"sys_updated_on" : "2015-07-14 04:10:12",
				"sys_id" : "a4e63fa06f5d0200aa3391c75b3ee476",
				"sys_mod_count" : "2",
				"sys_created_on" : "2015-07-14 04:03:26",
				"u_active" : "true",
				"u_number" : "OAC0001020",
				"sys_created_by" : "rohanc"
			}, {
				"u_order" : "6",
				"u_type" : "",
				"sys_updated_by" : "rohanc",
				"sys_updated_on" : "2015-07-14 04:10:19",
				"sys_id" : "bcc6fba06f5d0200aa3391c75b3ee474",
				"sys_mod_count" : "3",
				"sys_created_on" : "2015-07-14 04:02:59",
				"u_active" : "true",
				"u_number" : "OAC0001019",
				"sys_created_by" : "rohanc"
			}]
		}
	});
};

exports.getConfirmationResponse = function() {
	return ({
    "head": {
        "action": "bookAppointment"
    },
    "body": {
        "status": "SUCCESS_200",
        "result": {
            "u_it_rep": "",
            "u_status": "booked",
            "u_wait_time": "",
            "u_type": "appointment",
            "u_when": "2015-07-21",
            "sys_id": "ea798cba6f594200aa3391c75b3ee403",
            "sys_updated_on": "2015-07-20 10:32:25",
            "sys_created_on": "2015-07-20 10:32:25",
            "u_comments": "",
            "sys_created_by": "oasisuser",
            "u_who": {
                "link": "https://vmwaretrainingtemppov.service-now.com/api/now/v1/table/sys_user/Srinivas Padidapellidd",
                "value": "Srinivas Padidapellidd"
            },
            "u_description": "test",
            "u_time": "",
            "sys_updated_by": "oasisuser",
            "u_category": {
                "link": "https://vmwaretrainingtemppov.service-now.com/api/now/v1/table/u_oasis_categories/26266d5b6f050200aa3391c75b3ee4f4",
                "value": "26266d5b6f050200aa3391c75b3ee4f4"
            },
            "sys_mod_count": "0",
            "u_available_slot": "",
            "u_location": {
                "link": "https://vmwaretrainingtemppov.service-now.com/api/now/v1/table/u_oasis_locations/49f683ef6f850200aa3391c75b3ee4ac",
                "value": "49f683ef6f850200aa3391c75b3ee4ac"
            },
            "u_number": "OAR0001371"
        }
    }
});
};

exports.getAvailabilityResponse = function() {
	return ({
    "head": {
        "action": "availability"
    },
    "body": {
        "status": "SUCCESS_200",
        "result": [
            {
                "u_schedule_id": "OAS0001040",
                "u_type": "",
                "u_date": "2015-07-29",
                "sys_id": "32a111916f514200aa3391c75b3ee4e7",
                "sys_updated_on": "2015-07-15 23:56:57",
                "sys_created_on": "2015-07-15 23:56:57",
                "u_end_time": "",
                "u_day_of_week": "2",
                "u_id": "OAV0015383",
                "sys_created_by": "sambasivar",
                "u_start_time": "",
                "u_no_of_resources": "2",
                "sys_updated_by": "sambasivar",
                "u_etime": "17",
                "sys_mod_count": "0",
                "u_location": {
                    "link": "https://vmwaretrainingtemppov.service-now.com/api/now/v1/table/u_oasis_locations/49f683ef6f850200aa3391c75b3ee4ac",
                    "value": "49f683ef6f850200aa3391c75b3ee4ac"
                },
                "u_stime": "16",
                "u_booked": "false"
            },
            {
                "u_schedule_id": "OAS0001040",
                "u_type": "",
                "u_date": "2015-07-31",
                "sys_id": "32a111916f514200aa3391c75b3ee4e8",
                "sys_updated_on": "2015-07-15 23:56:57",
                "sys_created_on": "2015-07-15 23:56:57",
                "u_end_time": "",
                "u_day_of_week": "4",
                "u_id": "OAV0015399",
                "sys_created_by": "sambasivar",
                "u_start_time": "",
                "u_no_of_resources": "2",
                "sys_updated_by": "sambasivar",
                "u_etime": "17",
                "sys_mod_count": "0",
                "u_location": {
                    "link": "https://vmwaretrainingtemppov.service-now.com/api/now/v1/table/u_oasis_locations/49f683ef6f850200aa3391c75b3ee4ac",
                    "value": "49f683ef6f850200aa3391c75b3ee4ac"
                },
                "u_stime": "16",
                "u_booked": "false"
            },
            {
                "u_schedule_id": "OAS0001040",
                "u_type": "",
                "u_date": "2015-07-28",
                "sys_id": "36a111916f514200aa3391c75b3ee4e6",
                "sys_updated_on": "2015-07-15 23:56:57",
                "sys_created_on": "2015-07-15 23:56:57",
                "u_end_time": "",
                "u_day_of_week": "1",
                "u_id": "OAV0015371",
                "sys_created_by": "sambasivar",
                "u_start_time": "",
                "u_no_of_resources": "2",
                "sys_updated_by": "sambasivar",
                "u_etime": "13",
                "sys_mod_count": "0",
                "u_location": {
                    "link": "https://vmwaretrainingtemppov.service-now.com/api/now/v1/table/u_oasis_locations/49f683ef6f850200aa3391c75b3ee4ac",
                    "value": "49f683ef6f850200aa3391c75b3ee4ac"
                },
                "u_stime": "12",
                "u_booked": "false"
            },
            {
                "u_schedule_id": "OAS0001040",
                "u_type": "",
                "u_date": "2015-07-30",
                "sys_id": "36a111916f514200aa3391c75b3ee4e7",
                "sys_updated_on": "2015-07-15 23:56:57",
                "sys_created_on": "2015-07-15 23:56:57",
                "u_end_time": "",
                "u_day_of_week": "3",
                "u_id": "OAV0015387",
                "sys_created_by": "sambasivar",
                "u_start_time": "",
                "u_no_of_resources": "2",
                "sys_updated_by": "sambasivar",
                "u_etime": "13",
                "sys_mod_count": "0",
                "u_location": {
                    "link": "https://vmwaretrainingtemppov.service-now.com/api/now/v1/table/u_oasis_locations/49f683ef6f850200aa3391c75b3ee4ac",
                    "value": "49f683ef6f850200aa3391c75b3ee4ac"
                },
                "u_stime": "12",
                "u_booked": "false"
            },
            {
                "u_schedule_id": "OAS0001040",
                "u_type": "",
                "u_date": "2015-07-27",
                "sys_id": "36a11d516f514200aa3391c75b3ee486",
                "sys_updated_on": "2015-07-15 23:56:57",
                "sys_created_on": "2015-07-15 23:56:57",
                "u_end_time": "",
                "u_day_of_week": "7",
                "u_id": "OAV0015361",
                "sys_created_by": "sambasivar",
                "u_start_time": "",
                "u_no_of_resources": "2",
                "sys_updated_by": "sambasivar",
                "u_etime": "11",
                "sys_mod_count": "0",
                "u_location": {
                    "link": "https://vmwaretrainingtemppov.service-now.com/api/now/v1/table/u_oasis_locations/49f683ef6f850200aa3391c75b3ee4ac",
                    "value": "49f683ef6f850200aa3391c75b3ee4ac"
                },
                "u_stime": "10",
                "u_booked": "false"
            },
            {
                "u_schedule_id": "OAS0001040",
                "u_type": "",
                "u_date": "2015-07-28",
                "sys_id": "3aa111916f514200aa3391c75b3ee4e6",
                "sys_updated_on": "2015-07-15 23:56:57",
                "sys_created_on": "2015-07-15 23:56:57",
                "u_end_time": "",
                "u_day_of_week": "1",
                "u_id": "OAV0015375",
                "sys_created_by": "sambasivar",
                "u_start_time": "",
                "u_no_of_resources": "2",
                "sys_updated_by": "sambasivar",
                "u_etime": "17",
                "sys_mod_count": "0",
                "u_location": {
                    "link": "https://vmwaretrainingtemppov.service-now.com/api/now/v1/table/u_oasis_locations/49f683ef6f850200aa3391c75b3ee4ac",
                    "value": "49f683ef6f850200aa3391c75b3ee4ac"
                },
                "u_stime": "16",
                "u_booked": "false"
            },
            {
                "u_schedule_id": "OAS0001040",
                "u_type": "",
                "u_date": "2015-07-30",
                "sys_id": "3aa111916f514200aa3391c75b3ee4e7",
                "sys_updated_on": "2015-07-15 23:56:57",
                "sys_created_on": "2015-07-15 23:56:57",
                "u_end_time": "",
                "u_day_of_week": "3",
                "u_id": "OAV0015391",
                "sys_created_by": "sambasivar",
                "u_start_time": "",
                "u_no_of_resources": "2",
                "sys_updated_by": "sambasivar",
                "u_etime": "17",
                "sys_mod_count": "0",
                "u_location": {
                    "link": "https://vmwaretrainingtemppov.service-now.com/api/now/v1/table/u_oasis_locations/49f683ef6f850200aa3391c75b3ee4ac",
                    "value": "49f683ef6f850200aa3391c75b3ee4ac"
                },
                "u_stime": "16",
                "u_booked": "false"
            },
            {
                "u_schedule_id": "OAS0001040",
                "u_type": "",
                "u_date": "2015-07-27",
                "sys_id": "3aa11d516f514200aa3391c75b3ee486",
                "sys_updated_on": "2015-07-15 23:56:57",
                "sys_created_on": "2015-07-15 23:56:57",
                "u_end_time": "",
                "u_day_of_week": "7",
                "u_id": "OAV0015365",
                "sys_created_by": "sambasivar",
                "u_start_time": "",
                "u_no_of_resources": "2",
                "sys_updated_by": "sambasivar",
                "u_etime": "15",
                "sys_mod_count": "0",
                "u_location": {
                    "link": "https://vmwaretrainingtemppov.service-now.com/api/now/v1/table/u_oasis_locations/49f683ef6f850200aa3391c75b3ee4ac",
                    "value": "49f683ef6f850200aa3391c75b3ee4ac"
                },
                "u_stime": "14",
                "u_booked": "false"
            },
            {
                "u_schedule_id": "OAS0001040",
                "u_type": "",
                "u_date": "2015-07-29",
                "sys_id": "3ea111916f514200aa3391c75b3ee4e6",
                "sys_updated_on": "2015-07-15 23:56:57",
                "sys_created_on": "2015-07-15 23:56:57",
                "u_end_time": "",
                "u_day_of_week": "2",
                "u_id": "OAV0015379",
                "sys_created_by": "sambasivar",
                "u_start_time": "",
                "u_no_of_resources": "2",
                "sys_updated_by": "sambasivar",
                "u_etime": "13",
                "sys_mod_count": "0",
                "u_location": {
                    "link": "https://vmwaretrainingtemppov.service-now.com/api/now/v1/table/u_oasis_locations/49f683ef6f850200aa3391c75b3ee4ac",
                    "value": "49f683ef6f850200aa3391c75b3ee4ac"
                },
                "u_stime": "12",
                "u_booked": "false"
            },
            {
                "u_schedule_id": "OAS0001040",
                "u_type": "",
                "u_date": "2015-07-31",
                "sys_id": "3ea111916f514200aa3391c75b3ee4e7",
                "sys_updated_on": "2015-07-15 23:56:57",
                "sys_created_on": "2015-07-15 23:56:57",
                "u_end_time": "",
                "u_day_of_week": "4",
                "u_id": "OAV0015395",
                "sys_created_by": "sambasivar",
                "u_start_time": "",
                "u_no_of_resources": "2",
                "sys_updated_by": "sambasivar",
                "u_etime": "13",
                "sys_mod_count": "0",
                "u_location": {
                    "link": "https://vmwaretrainingtemppov.service-now.com/api/now/v1/table/u_oasis_locations/49f683ef6f850200aa3391c75b3ee4ac",
                    "value": "49f683ef6f850200aa3391c75b3ee4ac"
                },
                "u_stime": "12",
                "u_booked": "false"
            },
            {
                "u_schedule_id": "OAS0001040",
                "u_type": "",
                "u_date": "2015-07-30",
                "sys_id": "72a111916f514200aa3391c75b3ee4e7",
                "sys_updated_on": "2015-07-15 23:56:57",
                "sys_created_on": "2015-07-15 23:56:57",
                "u_end_time": "",
                "u_day_of_week": "3",
                "u_id": "OAV0015384",
                "sys_created_by": "sambasivar",
                "u_start_time": "",
                "u_no_of_resources": "2",
                "sys_updated_by": "sambasivar",
                "u_etime": "10",
                "sys_mod_count": "0",
                "u_location": {
                    "link": "https://vmwaretrainingtemppov.service-now.com/api/now/v1/table/u_oasis_locations/49f683ef6f850200aa3391c75b3ee4ac",
                    "value": "49f683ef6f850200aa3391c75b3ee4ac"
                },
                "u_stime": "9",
                "u_booked": "false"
            },
            {
                "u_schedule_id": "OAS0001040",
                "u_type": "",
                "u_date": "2015-07-28",
                "sys_id": "76a111916f514200aa3391c75b3ee4e6",
                "sys_updated_on": "2015-07-15 23:56:57",
                "sys_created_on": "2015-07-15 23:56:57",
                "u_end_time": "",
                "u_day_of_week": "1",
                "u_id": "OAV0015372",
                "sys_created_by": "sambasivar",
                "u_start_time": "",
                "u_no_of_resources": "2",
                "sys_updated_by": "sambasivar",
                "u_etime": "14",
                "sys_mod_count": "0",
                "u_location": {
                    "link": "https://vmwaretrainingtemppov.service-now.com/api/now/v1/table/u_oasis_locations/49f683ef6f850200aa3391c75b3ee4ac",
                    "value": "49f683ef6f850200aa3391c75b3ee4ac"
                },
                "u_stime": "13",
                "u_booked": "false"
            },
            {
                "u_schedule_id": "OAS0001040",
                "u_type": "",
                "u_date": "2015-07-30",
                "sys_id": "76a111916f514200aa3391c75b3ee4e7",
                "sys_updated_on": "2015-07-15 23:56:57",
                "sys_created_on": "2015-07-15 23:56:57",
                "u_end_time": "",
                "u_day_of_week": "3",
                "u_id": "OAV0015388",
                "sys_created_by": "sambasivar",
                "u_start_time": "",
                "u_no_of_resources": "2",
                "sys_updated_by": "sambasivar",
                "u_etime": "14",
                "sys_mod_count": "0",
                "u_location": {
                    "link": "https://vmwaretrainingtemppov.service-now.com/api/now/v1/table/u_oasis_locations/49f683ef6f850200aa3391c75b3ee4ac",
                    "value": "49f683ef6f850200aa3391c75b3ee4ac"
                },
                "u_stime": "13",
                "u_booked": "false"
            },
            {
                "u_schedule_id": "OAS0001040",
                "u_type": "",
                "u_date": "2015-07-27",
                "sys_id": "76a11d516f514200aa3391c75b3ee486",
                "sys_updated_on": "2015-07-15 23:56:57",
                "sys_created_on": "2015-07-15 23:56:57",
                "u_end_time": "",
                "u_day_of_week": "7",
                "u_id": "OAV0015362",
                "sys_created_by": "sambasivar",
                "u_start_time": "",
                "u_no_of_resources": "2",
                "sys_updated_by": "sambasivar",
                "u_etime": "12",
                "sys_mod_count": "0",
                "u_location": {
                    "link": "https://vmwaretrainingtemppov.service-now.com/api/now/v1/table/u_oasis_locations/49f683ef6f850200aa3391c75b3ee4ac",
                    "value": "49f683ef6f850200aa3391c75b3ee4ac"
                },
                "u_stime": "11",
                "u_booked": "false"
            },
            {
                "u_schedule_id": "OAS0001040",
                "u_type": "",
                "u_date": "2015-07-29",
                "sys_id": "7aa111916f514200aa3391c75b3ee4e6",
                "sys_updated_on": "2015-07-15 23:56:57",
                "sys_created_on": "2015-07-15 23:56:57",
                "u_end_time": "",
                "u_day_of_week": "2",
                "u_id": "OAV0015376",
                "sys_created_by": "sambasivar",
                "u_start_time": "",
                "u_no_of_resources": "2",
                "sys_updated_by": "sambasivar",
                "u_etime": "10",
                "sys_mod_count": "0",
                "u_location": {
                    "link": "https://vmwaretrainingtemppov.service-now.com/api/now/v1/table/u_oasis_locations/49f683ef6f850200aa3391c75b3ee4ac",
                    "value": "49f683ef6f850200aa3391c75b3ee4ac"
                },
                "u_stime": "9",
                "u_booked": "false"
            },
            {
                "u_schedule_id": "OAS0001040",
                "u_type": "",
                "u_date": "2015-07-31",
                "sys_id": "7aa111916f514200aa3391c75b3ee4e7",
                "sys_updated_on": "2015-07-15 23:56:57",
                "sys_created_on": "2015-07-15 23:56:57",
                "u_end_time": "",
                "u_day_of_week": "4",
                "u_id": "OAV0015392",
                "sys_created_by": "sambasivar",
                "u_start_time": "",
                "u_no_of_resources": "2",
                "sys_updated_by": "sambasivar",
                "u_etime": "10",
                "sys_mod_count": "0",
                "u_location": {
                    "link": "https://vmwaretrainingtemppov.service-now.com/api/now/v1/table/u_oasis_locations/49f683ef6f850200aa3391c75b3ee4ac",
                    "value": "49f683ef6f850200aa3391c75b3ee4ac"
                },
                "u_stime": "9",
                "u_booked": "false"
            },
            {
                "u_schedule_id": "OAS0001040",
                "u_type": "",
                "u_date": "2015-07-27",
                "sys_id": "7aa11d516f514200aa3391c75b3ee486",
                "sys_updated_on": "2015-07-15 23:56:57",
                "sys_created_on": "2015-07-15 23:56:57",
                "u_end_time": "",
                "u_day_of_week": "7",
                "u_id": "OAV0015366",
                "sys_created_by": "sambasivar",
                "u_start_time": "",
                "u_no_of_resources": "2",
                "sys_updated_by": "sambasivar",
                "u_etime": "16",
                "sys_mod_count": "0",
                "u_location": {
                    "link": "https://vmwaretrainingtemppov.service-now.com/api/now/v1/table/u_oasis_locations/49f683ef6f850200aa3391c75b3ee4ac",
                    "value": "49f683ef6f850200aa3391c75b3ee4ac"
                },
                "u_stime": "15",
                "u_booked": "false"
            },
            {
                "u_schedule_id": "OAS0001040",
                "u_type": "",
                "u_date": "2015-07-29",
                "sys_id": "7ea111916f514200aa3391c75b3ee4e6",
                "sys_updated_on": "2015-07-15 23:56:57",
                "sys_created_on": "2015-07-15 23:56:57",
                "u_end_time": "",
                "u_day_of_week": "2",
                "u_id": "OAV0015380",
                "sys_created_by": "sambasivar",
                "u_start_time": "",
                "u_no_of_resources": "2",
                "sys_updated_by": "sambasivar",
                "u_etime": "14",
                "sys_mod_count": "0",
                "u_location": {
                    "link": "https://vmwaretrainingtemppov.service-now.com/api/now/v1/table/u_oasis_locations/49f683ef6f850200aa3391c75b3ee4ac",
                    "value": "49f683ef6f850200aa3391c75b3ee4ac"
                },
                "u_stime": "13",
                "u_booked": "false"
            },
            {
                "u_schedule_id": "OAS0001040",
                "u_type": "",
                "u_date": "2015-07-31",
                "sys_id": "7ea111916f514200aa3391c75b3ee4e7",
                "sys_updated_on": "2015-07-15 23:56:57",
                "sys_created_on": "2015-07-15 23:56:57",
                "u_end_time": "",
                "u_day_of_week": "4",
                "u_id": "OAV0015396",
                "sys_created_by": "sambasivar",
                "u_start_time": "",
                "u_no_of_resources": "2",
                "sys_updated_by": "sambasivar",
                "u_etime": "14",
                "sys_mod_count": "0",
                "u_location": {
                    "link": "https://vmwaretrainingtemppov.service-now.com/api/now/v1/table/u_oasis_locations/49f683ef6f850200aa3391c75b3ee4ac",
                    "value": "49f683ef6f850200aa3391c75b3ee4ac"
                },
                "u_stime": "13",
                "u_booked": "false"
            },
            {
                "u_schedule_id": "",
                "u_type": {
                    "link": "https://vmwaretrainingtemppov.service-now.com/api/now/v1/table/u_oasis_categories/26266d5b6f050200aa3391c75b3ee4f4",
                    "value": "26266d5b6f050200aa3391c75b3ee4f4"
                },
                "u_date": "2015-07-16",
                "sys_id": "8627a6196f514200aa3391c75b3ee4b7",
                "sys_updated_on": "2015-07-16 06:11:18",
                "sys_created_on": "2015-07-16 06:11:18",
                "u_end_time": "",
                "u_day_of_week": "",
                "u_id": "OAV0015403",
                "sys_created_by": "oasisuser",
                "u_start_time": "",
                "u_no_of_resources": "",
                "sys_updated_by": "oasisuser",
                "u_etime": "1230",
                "sys_mod_count": "0",
                "u_location": {
                    "link": "https://vmwaretrainingtemppov.service-now.com/api/now/v1/table/u_oasis_locations/49f683ef6f850200aa3391c75b3ee4ac",
                    "value": "49f683ef6f850200aa3391c75b3ee4ac"
                },
                "u_stime": "12",
                "u_booked": "false"
            },
            {
                "u_schedule_id": "OAS0001040",
                "u_type": "",
                "u_date": "2015-07-28",
                "sys_id": "b2a111916f514200aa3391c75b3ee4e6",
                "sys_updated_on": "2015-07-15 23:56:57",
                "sys_created_on": "2015-07-15 23:56:57",
                "u_end_time": "",
                "u_day_of_week": "1",
                "u_id": "OAV0015369",
                "sys_created_by": "sambasivar",
                "u_start_time": "",
                "u_no_of_resources": "2",
                "sys_updated_by": "sambasivar",
                "u_etime": "11",
                "sys_mod_count": "0",
                "u_location": {
                    "link": "https://vmwaretrainingtemppov.service-now.com/api/now/v1/table/u_oasis_locations/49f683ef6f850200aa3391c75b3ee4ac",
                    "value": "49f683ef6f850200aa3391c75b3ee4ac"
                },
                "u_stime": "10",
                "u_booked": "false"
            },
            {
                "u_schedule_id": "OAS0001040",
                "u_type": "",
                "u_date": "2015-07-30",
                "sys_id": "b2a111916f514200aa3391c75b3ee4e7",
                "sys_updated_on": "2015-07-15 23:56:57",
                "sys_created_on": "2015-07-15 23:56:57",
                "u_end_time": "",
                "u_day_of_week": "3",
                "u_id": "OAV0015385",
                "sys_created_by": "sambasivar",
                "u_start_time": "",
                "u_no_of_resources": "2",
                "sys_updated_by": "sambasivar",
                "u_etime": "11",
                "sys_mod_count": "0",
                "u_location": {
                    "link": "https://vmwaretrainingtemppov.service-now.com/api/now/v1/table/u_oasis_locations/49f683ef6f850200aa3391c75b3ee4ac",
                    "value": "49f683ef6f850200aa3391c75b3ee4ac"
                },
                "u_stime": "10",
                "u_booked": "false"
            },
            {
                "u_schedule_id": "OAS0001040",
                "u_type": "",
                "u_date": "2015-07-28",
                "sys_id": "b6a111916f514200aa3391c75b3ee4e6",
                "sys_updated_on": "2015-07-15 23:56:57",
                "sys_created_on": "2015-07-15 23:56:57",
                "u_end_time": "",
                "u_day_of_week": "1",
                "u_id": "OAV0015373",
                "sys_created_by": "sambasivar",
                "u_start_time": "",
                "u_no_of_resources": "2",
                "sys_updated_by": "sambasivar",
                "u_etime": "15",
                "sys_mod_count": "0",
                "u_location": {
                    "link": "https://vmwaretrainingtemppov.service-now.com/api/now/v1/table/u_oasis_locations/49f683ef6f850200aa3391c75b3ee4ac",
                    "value": "49f683ef6f850200aa3391c75b3ee4ac"
                },
                "u_stime": "14",
                "u_booked": "false"
            },
            {
                "u_schedule_id": "OAS0001040",
                "u_type": "",
                "u_date": "2015-07-30",
                "sys_id": "b6a111916f514200aa3391c75b3ee4e7",
                "sys_updated_on": "2015-07-15 23:56:57",
                "sys_created_on": "2015-07-15 23:56:57",
                "u_end_time": "",
                "u_day_of_week": "3",
                "u_id": "OAV0015389",
                "sys_created_by": "sambasivar",
                "u_start_time": "",
                "u_no_of_resources": "2",
                "sys_updated_by": "sambasivar",
                "u_etime": "15",
                "sys_mod_count": "0",
                "u_location": {
                    "link": "https://vmwaretrainingtemppov.service-now.com/api/now/v1/table/u_oasis_locations/49f683ef6f850200aa3391c75b3ee4ac",
                    "value": "49f683ef6f850200aa3391c75b3ee4ac"
                },
                "u_stime": "14",
                "u_booked": "false"
            },
            {
                "u_schedule_id": "OAS0001040",
                "u_type": "",
                "u_date": "2015-07-27",
                "sys_id": "b6a11d516f514200aa3391c75b3ee486",
                "sys_updated_on": "2015-07-15 23:56:57",
                "sys_created_on": "2015-07-15 23:56:57",
                "u_end_time": "",
                "u_day_of_week": "7",
                "u_id": "OAV0015363",
                "sys_created_by": "sambasivar",
                "u_start_time": "",
                "u_no_of_resources": "2",
                "sys_updated_by": "sambasivar",
                "u_etime": "13",
                "sys_mod_count": "0",
                "u_location": {
                    "link": "https://vmwaretrainingtemppov.service-now.com/api/now/v1/table/u_oasis_locations/49f683ef6f850200aa3391c75b3ee4ac",
                    "value": "49f683ef6f850200aa3391c75b3ee4ac"
                },
                "u_stime": "12",
                "u_booked": "false"
            },
            {
                "u_schedule_id": "OAS0001040",
                "u_type": "",
                "u_date": "2015-07-29",
                "sys_id": "baa111916f514200aa3391c75b3ee4e6",
                "sys_updated_on": "2015-07-15 23:56:57",
                "sys_created_on": "2015-07-15 23:56:57",
                "u_end_time": "",
                "u_day_of_week": "2",
                "u_id": "OAV0015377",
                "sys_created_by": "sambasivar",
                "u_start_time": "",
                "u_no_of_resources": "2",
                "sys_updated_by": "sambasivar",
                "u_etime": "11",
                "sys_mod_count": "0",
                "u_location": {
                    "link": "https://vmwaretrainingtemppov.service-now.com/api/now/v1/table/u_oasis_locations/49f683ef6f850200aa3391c75b3ee4ac",
                    "value": "49f683ef6f850200aa3391c75b3ee4ac"
                },
                "u_stime": "10",
                "u_booked": "false"
            },
            {
                "u_schedule_id": "OAS0001040",
                "u_type": "",
                "u_date": "2015-07-31",
                "sys_id": "baa111916f514200aa3391c75b3ee4e7",
                "sys_updated_on": "2015-07-15 23:56:57",
                "sys_created_on": "2015-07-15 23:56:57",
                "u_end_time": "",
                "u_day_of_week": "4",
                "u_id": "OAV0015393",
                "sys_created_by": "sambasivar",
                "u_start_time": "",
                "u_no_of_resources": "2",
                "sys_updated_by": "sambasivar",
                "u_etime": "11",
                "sys_mod_count": "0",
                "u_location": {
                    "link": "https://vmwaretrainingtemppov.service-now.com/api/now/v1/table/u_oasis_locations/49f683ef6f850200aa3391c75b3ee4ac",
                    "value": "49f683ef6f850200aa3391c75b3ee4ac"
                },
                "u_stime": "10",
                "u_booked": "false"
            },
            {
                "u_schedule_id": "OAS0001040",
                "u_type": "",
                "u_date": "2015-07-27",
                "sys_id": "baa11d516f514200aa3391c75b3ee486",
                "sys_updated_on": "2015-07-15 23:56:57",
                "sys_created_on": "2015-07-15 23:56:57",
                "u_end_time": "",
                "u_day_of_week": "7",
                "u_id": "OAV0015367",
                "sys_created_by": "sambasivar",
                "u_start_time": "",
                "u_no_of_resources": "2",
                "sys_updated_by": "sambasivar",
                "u_etime": "17",
                "sys_mod_count": "0",
                "u_location": {
                    "link": "https://vmwaretrainingtemppov.service-now.com/api/now/v1/table/u_oasis_locations/49f683ef6f850200aa3391c75b3ee4ac",
                    "value": "49f683ef6f850200aa3391c75b3ee4ac"
                },
                "u_stime": "16",
                "u_booked": "false"
            },
            {
                "u_schedule_id": "OAS0001040",
                "u_type": "",
                "u_date": "2015-07-29",
                "sys_id": "bea111916f514200aa3391c75b3ee4e6",
                "sys_updated_on": "2015-07-15 23:56:57",
                "sys_created_on": "2015-07-15 23:56:57",
                "u_end_time": "",
                "u_day_of_week": "2",
                "u_id": "OAV0015381",
                "sys_created_by": "sambasivar",
                "u_start_time": "",
                "u_no_of_resources": "2",
                "sys_updated_by": "sambasivar",
                "u_etime": "15",
                "sys_mod_count": "0",
                "u_location": {
                    "link": "https://vmwaretrainingtemppov.service-now.com/api/now/v1/table/u_oasis_locations/49f683ef6f850200aa3391c75b3ee4ac",
                    "value": "49f683ef6f850200aa3391c75b3ee4ac"
                },
                "u_stime": "14",
                "u_booked": "false"
            },
            {
                "u_schedule_id": "OAS0001040",
                "u_type": "",
                "u_date": "2015-07-31",
                "sys_id": "bea111916f514200aa3391c75b3ee4e7",
                "sys_updated_on": "2015-07-15 23:56:57",
                "sys_created_on": "2015-07-15 23:56:57",
                "u_end_time": "",
                "u_day_of_week": "4",
                "u_id": "OAV0015397",
                "sys_created_by": "sambasivar",
                "u_start_time": "",
                "u_no_of_resources": "2",
                "sys_updated_by": "sambasivar",
                "u_etime": "15",
                "sys_mod_count": "0",
                "u_location": {
                    "link": "https://vmwaretrainingtemppov.service-now.com/api/now/v1/table/u_oasis_locations/49f683ef6f850200aa3391c75b3ee4ac",
                    "value": "49f683ef6f850200aa3391c75b3ee4ac"
                },
                "u_stime": "14",
                "u_booked": "false"
            },
            {
                "u_schedule_id": "OAS0001040",
                "u_type": "",
                "u_date": "2015-07-28",
                "sys_id": "f2a111916f514200aa3391c75b3ee4e6",
                "sys_updated_on": "2015-07-15 23:56:57",
                "sys_created_on": "2015-07-15 23:56:57",
                "u_end_time": "",
                "u_day_of_week": "1",
                "u_id": "OAV0015370",
                "sys_created_by": "sambasivar",
                "u_start_time": "",
                "u_no_of_resources": "2",
                "sys_updated_by": "sambasivar",
                "u_etime": "12",
                "sys_mod_count": "0",
                "u_location": {
                    "link": "https://vmwaretrainingtemppov.service-now.com/api/now/v1/table/u_oasis_locations/49f683ef6f850200aa3391c75b3ee4ac",
                    "value": "49f683ef6f850200aa3391c75b3ee4ac"
                },
                "u_stime": "11",
                "u_booked": "false"
            },
            {
                "u_schedule_id": "OAS0001040",
                "u_type": "",
                "u_date": "2015-07-30",
                "sys_id": "f2a111916f514200aa3391c75b3ee4e7",
                "sys_updated_on": "2015-07-15 23:56:57",
                "sys_created_on": "2015-07-15 23:56:57",
                "u_end_time": "",
                "u_day_of_week": "3",
                "u_id": "OAV0015386",
                "sys_created_by": "sambasivar",
                "u_start_time": "",
                "u_no_of_resources": "2",
                "sys_updated_by": "sambasivar",
                "u_etime": "12",
                "sys_mod_count": "0",
                "u_location": {
                    "link": "https://vmwaretrainingtemppov.service-now.com/api/now/v1/table/u_oasis_locations/49f683ef6f850200aa3391c75b3ee4ac",
                    "value": "49f683ef6f850200aa3391c75b3ee4ac"
                },
                "u_stime": "11",
                "u_booked": "false"
            },
            {
                "u_schedule_id": "OAS0001040",
                "u_type": "",
                "u_date": "2015-07-27",
                "sys_id": "f2a11d516f514200aa3391c75b3ee486",
                "sys_updated_on": "2015-07-15 23:56:57",
                "sys_created_on": "2015-07-15 23:56:57",
                "u_end_time": "",
                "u_day_of_week": "7",
                "u_id": "OAV0015360",
                "sys_created_by": "sambasivar",
                "u_start_time": "",
                "u_no_of_resources": "2",
                "sys_updated_by": "sambasivar",
                "u_etime": "10",
                "sys_mod_count": "0",
                "u_location": {
                    "link": "https://vmwaretrainingtemppov.service-now.com/api/now/v1/table/u_oasis_locations/49f683ef6f850200aa3391c75b3ee4ac",
                    "value": "49f683ef6f850200aa3391c75b3ee4ac"
                },
                "u_stime": "9",
                "u_booked": "false"
            },
            {
                "u_schedule_id": "OAS0001040",
                "u_type": "",
                "u_date": "2015-07-28",
                "sys_id": "f6a111916f514200aa3391c75b3ee4e6",
                "sys_updated_on": "2015-07-15 23:56:57",
                "sys_created_on": "2015-07-15 23:56:57",
                "u_end_time": "",
                "u_day_of_week": "1",
                "u_id": "OAV0015374",
                "sys_created_by": "sambasivar",
                "u_start_time": "",
                "u_no_of_resources": "2",
                "sys_updated_by": "sambasivar",
                "u_etime": "16",
                "sys_mod_count": "0",
                "u_location": {
                    "link": "https://vmwaretrainingtemppov.service-now.com/api/now/v1/table/u_oasis_locations/49f683ef6f850200aa3391c75b3ee4ac",
                    "value": "49f683ef6f850200aa3391c75b3ee4ac"
                },
                "u_stime": "15",
                "u_booked": "false"
            },
            {
                "u_schedule_id": "OAS0001040",
                "u_type": "",
                "u_date": "2015-07-30",
                "sys_id": "f6a111916f514200aa3391c75b3ee4e7",
                "sys_updated_on": "2015-07-15 23:56:57",
                "sys_created_on": "2015-07-15 23:56:57",
                "u_end_time": "",
                "u_day_of_week": "3",
                "u_id": "OAV0015390",
                "sys_created_by": "sambasivar",
                "u_start_time": "",
                "u_no_of_resources": "2",
                "sys_updated_by": "sambasivar",
                "u_etime": "16",
                "sys_mod_count": "0",
                "u_location": {
                    "link": "https://vmwaretrainingtemppov.service-now.com/api/now/v1/table/u_oasis_locations/49f683ef6f850200aa3391c75b3ee4ac",
                    "value": "49f683ef6f850200aa3391c75b3ee4ac"
                },
                "u_stime": "15",
                "u_booked": "false"
            },
            {
                "u_schedule_id": "OAS0001040",
                "u_type": "",
                "u_date": "2015-07-27",
                "sys_id": "f6a11d516f514200aa3391c75b3ee486",
                "sys_updated_on": "2015-07-15 23:56:57",
                "sys_created_on": "2015-07-15 23:56:57",
                "u_end_time": "",
                "u_day_of_week": "7",
                "u_id": "OAV0015364",
                "sys_created_by": "sambasivar",
                "u_start_time": "",
                "u_no_of_resources": "2",
                "sys_updated_by": "sambasivar",
                "u_etime": "14",
                "sys_mod_count": "0",
                "u_location": {
                    "link": "https://vmwaretrainingtemppov.service-now.com/api/now/v1/table/u_oasis_locations/49f683ef6f850200aa3391c75b3ee4ac",
                    "value": "49f683ef6f850200aa3391c75b3ee4ac"
                },
                "u_stime": "13",
                "u_booked": "false"
            },
            {
                "u_schedule_id": "OAS0001040",
                "u_type": "",
                "u_date": "2015-07-29",
                "sys_id": "faa111916f514200aa3391c75b3ee4e6",
                "sys_updated_on": "2015-07-15 23:56:57",
                "sys_created_on": "2015-07-15 23:56:57",
                "u_end_time": "",
                "u_day_of_week": "2",
                "u_id": "OAV0015378",
                "sys_created_by": "sambasivar",
                "u_start_time": "",
                "u_no_of_resources": "2",
                "sys_updated_by": "sambasivar",
                "u_etime": "12",
                "sys_mod_count": "0",
                "u_location": {
                    "link": "https://vmwaretrainingtemppov.service-now.com/api/now/v1/table/u_oasis_locations/49f683ef6f850200aa3391c75b3ee4ac",
                    "value": "49f683ef6f850200aa3391c75b3ee4ac"
                },
                "u_stime": "11",
                "u_booked": "false"
            },
            {
                "u_schedule_id": "OAS0001040",
                "u_type": "",
                "u_date": "2015-07-31",
                "sys_id": "faa111916f514200aa3391c75b3ee4e7",
                "sys_updated_on": "2015-07-15 23:56:57",
                "sys_created_on": "2015-07-15 23:56:57",
                "u_end_time": "",
                "u_day_of_week": "4",
                "u_id": "OAV0015394",
                "sys_created_by": "sambasivar",
                "u_start_time": "",
                "u_no_of_resources": "2",
                "sys_updated_by": "sambasivar",
                "u_etime": "12",
                "sys_mod_count": "0",
                "u_location": {
                    "link": "https://vmwaretrainingtemppov.service-now.com/api/now/v1/table/u_oasis_locations/49f683ef6f850200aa3391c75b3ee4ac",
                    "value": "49f683ef6f850200aa3391c75b3ee4ac"
                },
                "u_stime": "11",
                "u_booked": "false"
            },
            {
                "u_schedule_id": "OAS0001040",
                "u_type": "",
                "u_date": "2015-07-28",
                "sys_id": "faa11d516f514200aa3391c75b3ee486",
                "sys_updated_on": "2015-07-15 23:56:57",
                "sys_created_on": "2015-07-15 23:56:57",
                "u_end_time": "",
                "u_day_of_week": "1",
                "u_id": "OAV0015368",
                "sys_created_by": "sambasivar",
                "u_start_time": "",
                "u_no_of_resources": "2",
                "sys_updated_by": "sambasivar",
                "u_etime": "10",
                "sys_mod_count": "0",
                "u_location": {
                    "link": "https://vmwaretrainingtemppov.service-now.com/api/now/v1/table/u_oasis_locations/49f683ef6f850200aa3391c75b3ee4ac",
                    "value": "49f683ef6f850200aa3391c75b3ee4ac"
                },
                "u_stime": "9",
                "u_booked": "false"
            },
            {
                "u_schedule_id": "OAS0001040",
                "u_type": "",
                "u_date": "2015-07-29",
                "sys_id": "fea111916f514200aa3391c75b3ee4e6",
                "sys_updated_on": "2015-07-15 23:56:57",
                "sys_created_on": "2015-07-15 23:56:57",
                "u_end_time": "",
                "u_day_of_week": "2",
                "u_id": "OAV0015382",
                "sys_created_by": "sambasivar",
                "u_start_time": "",
                "u_no_of_resources": "2",
                "sys_updated_by": "sambasivar",
                "u_etime": "16",
                "sys_mod_count": "0",
                "u_location": {
                    "link": "https://vmwaretrainingtemppov.service-now.com/api/now/v1/table/u_oasis_locations/49f683ef6f850200aa3391c75b3ee4ac",
                    "value": "49f683ef6f850200aa3391c75b3ee4ac"
                },
                "u_stime": "15",
                "u_booked": "false"
            },
            {
                "u_schedule_id": "OAS0001040",
                "u_type": "",
                "u_date": "2015-07-31",
                "sys_id": "fea111916f514200aa3391c75b3ee4e7",
                "sys_updated_on": "2015-07-15 23:56:57",
                "sys_created_on": "2015-07-15 23:56:57",
                "u_end_time": "",
                "u_day_of_week": "4",
                "u_id": "OAV0015398",
                "sys_created_by": "sambasivar",
                "u_start_time": "",
                "u_no_of_resources": "2",
                "sys_updated_by": "sambasivar",
                "u_etime": "16",
                "sys_mod_count": "0",
                "u_location": {
                    "link": "https://vmwaretrainingtemppov.service-now.com/api/now/v1/table/u_oasis_locations/49f683ef6f850200aa3391c75b3ee4ac",
                    "value": "49f683ef6f850200aa3391c75b3ee4ac"
                },
                "u_stime": "15",
                "u_booked": "false"
            }
        ]
       }
    });
};

