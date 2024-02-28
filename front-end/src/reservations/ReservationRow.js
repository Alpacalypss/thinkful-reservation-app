import React from "react";

function ReservationRow({ reservation, cancelRez }) {
  function cancel() {
    return window.confirm(
      "Are you sure you wish to cancel this reservation? Action cannot be undone."
    )
      ? cancelRez(reservation)
      : null;
  }

  return (
    <tr>
      <th scope="row">{reservation.reservation_id}</th>
      <td>{reservation.first_name}</td>
      <td>{reservation.last_name}</td>
      <td>{reservation.mobile_number}</td>
      <td>{reservation.people}</td>
      <td>{reservation.reservation_time}</td>
      <td data-reservation-id-status={reservation.reservation_id}>
        {reservation.status}
      </td>
      <td>
        {reservation.status === "booked" ? (
          <a
            className="btn btn-success"
            role="button"
            href={`/reservations/${reservation.reservation_id}/seat`}
          >
            Seat
          </a>
        ) : null}
      </td>
      <td>
        <a
          className="btn btn-secondary"
          role="button"
          href={`/reservations/${reservation.reservation_id}/edit`}
        >
          Edit
        </a>
      </td>
      <td>
        <button
          className="btn btn-danger"
          data-reservation-id-cancel={reservation.reservation_id}
          onClick={cancel}
        >
          Cancel
        </button>
      </td>
    </tr>
  );
}

export default ReservationRow;