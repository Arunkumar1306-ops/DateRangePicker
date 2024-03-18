import { Component,ElementRef,inject,viewChild,ViewChild } from '@angular/core';
import { NgbCalendar, NgbDate, NgbDateParserFormatter,NgbDateStruct, NgbDatepickerModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { JsonPipe } from '@angular/common';
// class DateModel{
// 	fromDate:NgbDate|null=null;
// 	toDate:NgbDate|null=null;
// }
@Component({
  selector: 'app-datepop',
  templateUrl: './datepop.component.html',
  styleUrl: './datepop.component.css',
  
})

export class DatepopComponent {
	
    
    
    calendar = inject(NgbCalendar);
	formatter = inject(NgbDateParserFormatter);
	
	hoveredDate1: NgbDate | null = null;
	fromDate1:NgbDate|null=null;
	toDate1:NgbDate|null=null;
	hoveredDate2: NgbDate | null = null;
	fromDate2:NgbDate|null=null;
	toDate2:NgbDate|null=null;
	// eventDateModel=new DateModel();
	// dateofBirthModel=new DateModel();
	onDateSelection(date: NgbDate) {

		

		if (!this.fromDate1 && !this.toDate1) {
			this.fromDate1 = date;
		}else if(this.fromDate1 && !this.toDate1 && date && date.after(this.fromDate1)){
			this.toDate1=date;
		}
		
		 else {
			this.toDate1= null;
			this.fromDate1 = date;
		}
	}
	
	// if (!this.fromDate && !this.toDate) {
	// 	this.fromDate = date;
	// }else if(this.fromDate && !this.toDate && date && date.after(this.fromDate)){
	// 	this.toDate=date;
	// }
	
	//  else {
	// 	this.toDate = null;
	// 	this.fromDate = date;
	// }

	
	

	isHovered1(date: NgbDate) {
		return (
			this.fromDate1 && !this.toDate1 && this.hoveredDate1 && date.after(this.fromDate1) && date.before(this.hoveredDate1)
		);
	}

	isInside1(date: NgbDate) {
		return this.toDate1 && date.after(this.fromDate1) && date.before(this.toDate1);
	}

	isRange1(date: NgbDate) {
		return (
			date.equals(this.fromDate1) ||
			(this.toDate1 && date.equals(this.toDate1)) ||
			this.isInside1(date) ||
			this.isHovered1(date)
		);
	}

	validateInput(currentValue: NgbDate | null, input: string): NgbDate | null {
		const parsed = this.formatter.parse(input);
		return parsed && this.calendar.isValid(NgbDate.from(parsed)) ? NgbDate.from(parsed) : currentValue;
	}
	
	updateDateRange(input: string) {
		const dates = input.split(' - ');
		const fromDate = this.validateInput(this.fromDate1, dates[0]);
		const toDate = this.validateInput(this.toDate1, dates[1]);
	
		if (fromDate && toDate && fromDate.before(toDate)) {
		  this.fromDate1 = fromDate;
		  this.toDate1 = toDate;

		
		}
	  }

	

	formatDate(date:NgbDate):string{
		return date?`${date.day}-${date.month}-${date.year}`:'';
	}




	onDateOfBirthSelection(date: NgbDate) {
	    
		this.fromDate2 = date;
	  }
	  isHovered2(date: NgbDate) {
		return (
			this.fromDate2 && !this.toDate2 && this.hoveredDate2 && date.after(this.fromDate2) && date.before(this.hoveredDate2)
		);
	}

	isInside2(date: NgbDate) {
		return false;
	}

	isRange2(date: NgbDate) {
		return (
			date.equals(this.fromDate2) || this.isHovered2(date)
		);
	}

	  
	  updateDateOfBirth(input: string) {
		const parsed = this.formatter.parse(input);
		const dateOfBirth = parsed ? NgbDate.from(parsed) : null;
	  
		if (dateOfBirth) {
		  this.fromDate2 = dateOfBirth;
		}
	  }

}

