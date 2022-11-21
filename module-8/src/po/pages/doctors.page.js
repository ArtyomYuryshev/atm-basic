const BasePage = require('./base.page');
const { AddDoctorModal, DoctorListHeader, SpecialistCard, DoctorDetails, DeleteDocModal } = require('../components');

class DoctorsPage extends BasePage {
  constructor() {
    super('/showcase/angular/appointmentplanner/#/doctors');
    this.addDoctorModal = new AddDoctorModal();
    this.doctorListHeader = new DoctorListHeader();
    this.doctorDetails = new DoctorDetails();
    this.deleteDocModal = new DeleteDocModal();
  }

  specialistCard(id) {
    return new SpecialistCard(id);
  }
}

module.exports = DoctorsPage;
