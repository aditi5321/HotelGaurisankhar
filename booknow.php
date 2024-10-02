<?php include "header.php"; ?>
<section class="page-banner">
    <div class="page-banner-bg" style="background-image: url('img/image/DJI_0018.jpg');">
        <nav aria-label="breadcrumb">
            <ol class="breadcrumb flex justify-content-center">
                <li class="breadcrumb-item"><a href="#" class="text-white text-decoration-none">Home</a></li>
                <li class="breadcrumb-item active text-white" aria-current="page">Booking</li>
            </ol>
            <h1 class="text-white text-uppercase">Reservation Form</h1>
        </nav>
    </div>
</section>

<section class="booking-container section-padding">
    <div class="container">
        <div class="row g-5">
            <div class="col-lg-8">
                <div class="selected-room-wrap">
                    <div class="selected-room-title d-flex justify-content-between align-items-center">
                        <h4>Standard Room</h4>
                        <div class="selected-guest d-block d-md-flex">
                            <div class="change-guest">
                                <select class="form-select" aria-label="Default select example">
                                    <option selected>1 Adult</option>
                                    <option value="1">2 Adults</option>
                                    <option value="2">3 Adults</option>
                                    <option value="3">4 Adults</option>
                                </select>
                            </div>
                            <div class="change-guest">
                                <select class="form-select" aria-label="Default select example">
                                    <option selected>0 Children</option>
                                    <option value="1">1 Children</option>
                                    <option value="2">2 Childrens</option>
                                    <option value="3">3 Childrens</option>
                                    <option value="4">4 Childrens</option>
                                </select>
                            </div>
                            <div class="change-guest">
                                <select class="form-select" aria-label="Default select example">
                                    <option selected>1 Room</option>
                                    <option value="1">2 Room</option>
                                    <option value="2">3 Rooms</option>
                                    <option value="3">4 Rooms</option>
                                    <option value="4">5 Rooms</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div class="selected-room-service">
                        <form class="row g-4">
                            <div class="col-md-6">
                                <label for="validationDefault01" class="form-label">First Name:
                                </label>
                                <input type="text" class="form-control" id="validationDefault01" required>
                            </div>
                            <div class="col-md-6">
                                <label for="validationDefault02" class="form-label">last Name:</label>
                                <input type="text" class="form-control" id="validationDefault02" required>
                            </div>
                            <div class="col-md-6">
                                <label for="validationDefault03" class="form-label">Email:
                                </label>
                                <input type="email" class="form-control" id="validationDefault03" required>
                            </div>
                            <div class="col-md-6">
                                <label for="validationDefault04" class="form-label">Phone Number:
                                </label>
                                <input type="number" class="form-control" id="validationDefault04" required>
                            </div>
                            <div class="col-md-6">
                                <label for="validationDefault05" class="form-label">Address:</label>
                                <input type="text" class="form-control" id="validationDefault05" required>
                            </div>
                            <div class="col-md-6">
                                <label class="form-label">Select Date:
                                </label>
                                <div class="date-select d-block d-xl-flex align-items-center">
                                    <input type="date" class="form-control" required>
                                    <span class="d-flex justify-content-center">To</span>
                                    <input type="date" class="form-control" required>
                                </div>
                            </div>
                            <div class="col-md-12">
                                <label for="validationDefault06" class="form-label">Request:
                                </label>
                                <textarea class="form-control" id="validationDefault06" required></textarea>
                            </div>

                            <div class="col-12">
                                <div class="form-content d-flex justify-content-center">
                                    <button type="submit" class="btn btn-normal">Submit</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <div class="col-lg-4">
                <div class="summery-overview">
                    <div class="summery-overview-price">
                        <span class="price-number">
                            <span class="currence">$</span>
                            <span class="amount">75</span>
                        </span>
                        <span class="text">/ Total</span>
                    </div>
                </div>
                <div class="support-block">
                    <h4 class="support-title">Reservation Support</h4>
                    <div class="support-inner">
                        <div class="support-item">
                            <span>Tel: <a href="">+977-01-5917497</a></span>
                        </div>
                        <div class="support-item">
                            <span>Email: <a href="">info@hotelgaurishankar.com</a></span>
                        </div>
                        <h4>Address</h4>
                        <span>Mahamanjushree Nagarkot</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

<!-- <section class="booking-logo py-5 bg_gray">
    <div class="container">
        <div class="booking_slider">
            <div class="booking_item">
                <a href="" class="logo_item">
                    <img src="img/logo-agoda.png" alt="#" class="img-fluid">
                </a>
            </div>
            <div class="booking_item">
                <a href="" class="logo_item " target="_blank"><img src="img/logo-booking.png" alt="#" class="img-fluid"></a>
            </div>
            <div class="booking_item">
                <a href="" class="logo_item">
                    <img src="img/logo-expedia.png" alt="#">
                </a>
            </div>
            <div class="booking_item">
                <a href="" class="logo_item" target="_blank"><img src="img/logo-tripadvisor.png" alt="#"></a>
            </div>
        </div>
    </div>
</section> -->
<?php include "contact-footer.php"; ?>

<?php include "footer.php"; ?>